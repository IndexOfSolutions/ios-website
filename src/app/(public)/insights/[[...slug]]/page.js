import { notFound } from 'next/navigation';
import { generateOpinlyMetadata, opinlyConfig } from '@opinly/next';
import { routeParams } from '@opinly/shared';

import { getOpinly, isOpinlyConfigured } from '@/clients/opinly';
import PostView from '@/components/opinly/PostView';
import InsightsIndex from '@/components/opinly/InsightsIndex';
import CategoryView from '@/components/opinly/CategoryView';
import TagView from '@/components/opinly/TagView';
import AuthorView from '@/components/opinly/AuthorView';
import AuthorsView from '@/components/opinly/AuthorsView';

// The webhook at /api/opinly is the primary invalidation path. This is the
// safety net for the case where a webhook delivery is missed.
export const revalidate = 3600;

const categoryPrefix = opinlyConfig.categoryPrefix ?? 'category';
const authorPrefix = opinlyConfig.authorPrefix ?? 'authors';
const tagPrefix = opinlyConfig.tagPrefix ?? 'tag';

/**
 * Resolve a URL into the one typed endpoint that serves it. Posts are flat —
 * a single segment — while categories and authors sit behind their prefixes.
 *
 * The page and generateMetadata both call this; Next dedupes the underlying
 * cached fetches, so resolving twice per request costs nothing.
 */
const loadRoute = async (slug) => {
  const opinly = getOpinly();

  if (slug.length === 0) {
    const [posts, categories] = await Promise.all([
      opinly.posts({ limit: 12 }),
      opinly.categories(),
    ]);
    return { type: 'home', data: { posts: posts.data, categories } };
  }

  if (slug[0] === categoryPrefix && slug[1]) {
    const [categories, list] = await Promise.all([
      opinly.categories(),
      opinly.posts({ category: slug[1] }),
    ]);
    const meta = categories.find((c) => c.slug === slug[1]);
    if (!meta) return { type: 'not-found' };
    return {
      type: 'category',
      data: { ...meta, name: meta.title, posts: list.data },
    };
  }

  // `routes()` emits tag routes too, so they must resolve here — otherwise the
  // sitemap and generateStaticParams would advertise URLs that render as 404s.
  if (slug[0] === tagPrefix && slug[1]) {
    const [tags, list] = await Promise.all([
      opinly.tags(),
      opinly.posts({ tag: slug[1] }),
    ]);
    const meta = tags.find((t) => t.slug === slug[1]);
    if (!meta) return { type: 'not-found' };
    return { type: 'tag', data: { ...meta, posts: list.data } };
  }

  if (slug[0] === authorPrefix) {
    const authorSlug = slug[1];
    if (!authorSlug) {
      return { type: 'authors', data: (await opinly.authors()).data };
    }
    const author = await opinly.author(authorSlug);
    return author.type === 'author'
      ? { type: 'author', data: author.data }
      : { type: 'not-found' };
  }

  // Anything deeper than one segment can't be a post.
  if (slug.length !== 1) return { type: 'not-found' };

  const post = await opinly.post(slug[0]);
  return post ? { type: 'post', data: post } : { type: 'not-found' };
};

/**
 * Prerender every known route at build time. Beyond the usual speed win this
 * matters operationally: `revalidatePath` only works for routes whose tag→path
 * mapping was seeded at build, so prerendering is what makes the webhook's path
 * invalidation effective on this self-hosted deployment.
 *
 * Guarded so a missing OPINLY_API_KEY degrades to on-demand rendering instead
 * of failing the Azure build.
 */
export async function generateStaticParams() {
  if (!isOpinlyConfigured()) return [];
  try {
    const routes = await getOpinly().routes();
    return routes.map((route) => ({ slug: routeParams(opinlyConfig, route) }));
  } catch (err) {
    console.warn('[opinly] Could not prerender insight routes:', err?.message);
    return [];
  }
}

// `generateOpinlyMetadata` takes the already-resolved route, so there is no
// second fetch here — it reads title/description/canonical/OG straight off the
// data the page is about to render.
export async function generateMetadata(props, parent) {
  const { slug } = await props.params;
  return generateOpinlyMetadata(await loadRoute(slug ?? []), parent);
}

export default async function InsightsPage(props) {
  const { slug } = await props.params;
  const route = await loadRoute(slug ?? []);

  switch (route.type) {
    case 'home':
      return <InsightsIndex data={route.data} />;
    case 'post':
      return <PostView post={route.data} />;
    case 'category':
      return <CategoryView category={route.data} />;
    case 'tag':
      return <TagView tag={route.data} />;
    case 'author':
      return <AuthorView author={route.data} />;
    case 'authors':
      return <AuthorsView authors={route.data} />;
    default:
      notFound();
  }
}
