import { Webhook } from 'svix';
import { revalidatePath, revalidateTag } from 'next/cache';
import { opinlyConfig } from '@opinly/next';

// Signature verification needs the raw body, so this handler must never be
// statically evaluated or cached.
export const dynamic = 'force-dynamic';

const BLOG_PREFIX = opinlyConfig.blogPrefix ?? '';
const CATEGORY_PREFIX = opinlyConfig.categoryPrefix ?? 'category';
const AUTHOR_PREFIX = opinlyConfig.authorPrefix ?? 'authors';
const TAG_PREFIX = opinlyConfig.tagPrefix ?? 'tag';

/**
 * Opinly content webhook (Svix). Subscribed to `content.routes-changed`.
 *
 * Endpoint URL to register in Settings → Developers:
 *   https://www.indexofsolutions.com/api/opinly
 */
export async function POST(request) {
  const signingSecret = process.env.OPINLY_WEBHOOK_SIGNING_SECRET;
  if (!signingSecret) {
    console.error('[opinly] OPINLY_WEBHOOK_SIGNING_SECRET is not set');
    return new Response('Webhook not configured', { status: 500 });
  }

  const svixId = request.headers.get('svix-id');
  const svixTimestamp = request.headers.get('svix-timestamp');
  const svixSignature = request.headers.get('svix-signature');

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response('Invalid request', { status: 400 });
  }

  const buf = Buffer.from(await request.arrayBuffer());
  const wh = new Webhook(signingSecret);

  let evt;
  try {
    evt = wh.verify(buf, {
      'svix-id': svixId,
      'svix-timestamp': svixTimestamp,
      'svix-signature': svixSignature,
    });
  } catch {
    return new Response('Error verifying webhook', { status: 400 });
  }

  // Always return a Response — a route handler that falls through returns
  // undefined and errors at runtime.
  if (evt.type !== 'content.routes-changed') {
    return new Response('ok', { status: 200 });
  }

  // Two caches, two tools — both are needed.
  //
  // 1. The data cache: every fetch the Opinly client makes is tagged 'opinly',
  //    so one call drops all of them. `{ expire: 0 }` is required on Next 16+
  //    and is not cosmetic — it purges immediately, whereas a named profile
  //    like 'max' would keep serving the stale posts for up to a year while
  //    refreshing behind them. A publish webhook wants the post visible now.
  //    Tag invalidation works for static and dynamic routes alike.
  revalidateTag('opinly', { expire: 0 });

  // 2. The rendered routes: the HTML/RSC payload for each page that changed.
  //    revalidatePath alone would not be enough — on a self-hosted deployment
  //    (this site runs output: 'standalone' on Azure) it is a silent no-op for
  //    dynamically-rendered routes, because the tag→path mapping is only seeded
  //    for prerendered routes at build time.
  for (const route of evt.data.changed) {
    switch (route.type) {
      case 'post':
        revalidatePath(`${BLOG_PREFIX}/${route.slug}`);
        break;
      case 'category':
        revalidatePath(`${BLOG_PREFIX}/${CATEGORY_PREFIX}/${route.slug}`);
        break;
      case 'author':
        revalidatePath(`${BLOG_PREFIX}/${AUTHOR_PREFIX}/${route.slug}`);
        break;
      case 'tag':
        revalidatePath(`${BLOG_PREFIX}/${TAG_PREFIX}/${route.slug}`);
        break;
      case 'home':
        // A `home` entry accompanies any structural change: refresh the index,
        // the authors list, the feed and the sitemap.
        revalidatePath(BLOG_PREFIX || '/');
        revalidatePath(`${BLOG_PREFIX}/${AUTHOR_PREFIX}`);
        revalidatePath(`${BLOG_PREFIX}/rss.xml`);
        revalidatePath('/sitemap.xml');
        break;
    }
  }

  return new Response('ok', { status: 200 });
}
