import { createOpinlyClient } from '@opinly/backend';

/**
 * Server-only Opinly clients.
 *
 * The API key is read from OPINLY_API_KEY by the SDK itself — never pass it in
 * here and never expose it to the browser. Nothing in a client component may
 * import this module.
 *
 * The clients are built lazily and memoized rather than at module scope,
 * because `createOpinlyClient` throws when OPINLY_API_KEY is unset. At module
 * scope that turns a missing key into a hard build failure for every route that
 * merely imports this file — including ones that never call Opinly. Deferring
 * construction to first use lets `isOpinlyConfigured()` guard the call sites
 * instead, so the site still builds and serves without the key.
 */

let dataClient;
let eventsClient;

/** True when the server has an Opinly key to work with. */
export const isOpinlyConfigured = () => Boolean(process.env.OPINLY_API_KEY);

/**
 * The content client.
 *
 * `cache: 'force-cache'` puts every response in Next's data cache, and the
 * 'opinly' tag is what lets the webhook at /api/opinly drop all of them with a
 * single `revalidateTag('opinly', { expire: 0 })`. Tags are used rather than
 * paths because `revalidatePath` is a silent no-op for dynamically-rendered
 * routes on a self-hosted deployment (this site runs `output: 'standalone'` on
 * Azure App Service), whereas tag invalidation works either way.
 */
export function getOpinly() {
  if (!dataClient) {
    dataClient = createOpinlyClient({
      fetch: (url, init) =>
        fetch(url, { ...init, cache: 'force-cache', next: { tags: ['opinly'] } }),
    });
  }
  return dataClient;
}

/**
 * The analytics client — same key, caching disabled. `track()` calls are writes
 * and must never be served from or written to the data cache.
 */
export function getOpinlyEvents() {
  if (!eventsClient) {
    eventsClient = createOpinlyClient({
      fetch: (url, init) => fetch(url, { ...init, cache: 'no-store' }),
    });
  }
  return eventsClient;
}
