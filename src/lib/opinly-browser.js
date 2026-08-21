'use client';

/**
 * Browser-side helpers around the Opinly pixel (`window.opinly`).
 *
 * The pixel loads with `strategy="afterInteractive"`, so it may not exist yet
 * when a user submits a form early. Every helper here degrades to a no-op
 * rather than throwing — a missing analytics call must never break a lead.
 */

/**
 * The visitor's anonymous ID — the join key that ties a server-recorded event
 * back to the campaign that brought them in. Send it to the server with any
 * request you're already making.
 *
 * Returns undefined if the pixel hasn't loaded or storage is unavailable
 * (private browsing, locked-down browser), which the server side tolerates.
 */
export function getOpinlyAnonId() {
  if (typeof window === 'undefined') return undefined;
  try {
    return window.opinly?.anonId;
  } catch {
    return undefined;
  }
}

/**
 * Link this visitor to a real person by email.
 *
 * The pixel already auto-identifies from recognisable email fields, so this is
 * for the cases it can't see — an email collected in a chat widget, or one
 * submitted through a field that isn't marked up as an email input.
 *
 * Note the pixel's rule: the first identify wins. A later call with a different
 * address will not overwrite it, which protects first-touch attribution on
 * shared devices.
 */
export function identifyOpinlyVisitor({ email, userId } = {}) {
  if (typeof window === 'undefined' || !email) return;

  const run = () => {
    try {
      window.opinly?.identify(userId ? { email, userId } : { email });
    } catch {
      /* analytics must never break the page */
    }
  };

  // `opinly:ready` fires once and does not replay for late listeners, so check
  // for the pixel first and only subscribe if it isn't live yet.
  if (window.opinly) run();
  else window.addEventListener('opinly:ready', run, { once: true });
}

/**
 * Fire a client-side event. Use for behavioural signal the server never sees
 * (a CTA click, a chat opening). Conversions that must be exact should be
 * recorded server-side instead — see src/lib/opinly-events.js.
 */
export function trackOpinlyEvent(event, properties, opts) {
  if (typeof window === 'undefined') return;

  const run = () => {
    try {
      window.opinly?.track(event, properties, opts);
    } catch {
      /* analytics must never break the page */
    }
  };

  if (window.opinly) run();
  else window.addEventListener('opinly:ready', run, { once: true });
}
