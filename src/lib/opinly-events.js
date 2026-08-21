import 'server-only';

import { getOpinlyEvents, isOpinlyConfigured } from '@/clients/opinly';

/**
 * Server-side Opinly conversion events.
 *
 * Server-side is where conversions belong: an ad blocker can eat a browser
 * beacon and a closed tab can lose one, but a server event always fires. What
 * the server lacks is identity — hence `anonId` and `email`, which are what tie
 * the event back to the visit (and therefore the campaign) that produced it.
 * Send at least one of them; with neither, the event is still recorded but
 * shows up as "direct" with no attribution.
 *
 * Every helper swallows its errors. Analytics is never allowed to fail a lead —
 * if the customer's email was sent, the submission succeeded regardless of what
 * Opinly did with it.
 */

async function safeTrack(event, properties, opts) {
  if (!isOpinlyConfigured()) return { recorded: false };
  try {
    return await getOpinlyEvents().track(event, properties, opts);
  } catch (err) {
    console.warn(`[opinly] Failed to record "${event}":`, err?.message);
    return { recorded: false };
  }
}

/**
 * A lead — the site's actual conversion. Fired from the contact form and from
 * the price estimator once a visitor leaves their details.
 *
 * `externalEventId` is the dedup key: retries and double submissions collapse
 * into one event rather than inflating the count.
 */
export function trackLead({
  email,
  anonId,
  source,
  externalEventId,
  properties = {},
} = {}) {
  return safeTrack(
    'generate_lead',
    { source, ...properties },
    { email: email || undefined, anonId: anonId || undefined, externalEventId }
  );
}

/**
 * A contact request that arrived without an email address — rare, but keeps the
 * funnel honest. Not a standard conversion name, so it is stored but not
 * counted as a conversion.
 */
export function trackContactRequest({ anonId, properties = {} } = {}) {
  return safeTrack('contact_request', properties, {
    anonId: anonId || undefined,
  });
}

/**
 * Revenue, for whenever this site has some.
 *
 * Nothing calls this today: there is no checkout, no orders and no payments —
 * the site sells consulting engagements that close offline. It is here so that
 * recording a real, collected sale is a one-line call from wherever that
 * becomes known (a CRM webhook, an admin action), rather than a rebuild.
 *
 * Do NOT call it with a price-estimator total. Opinly counts `purchase` as
 * gross revenue earned, so feeding it quotes would report pipeline as money in
 * the bank. `value` must be what was actually charged, in major units, and
 * `orderId` must be the real order/invoice number — it is the dedup key, and it
 * has to match byte-for-byte any browser-side call for the same order.
 */
export async function trackPurchase({
  orderId,
  value,
  currency = 'USD',
  email,
  anonId,
} = {}) {
  if (!isOpinlyConfigured()) return { recorded: false };
  if (!orderId || typeof value !== 'number') {
    console.warn('[opinly] trackPurchase needs an orderId and a numeric value');
    return { recorded: false };
  }
  try {
    return await getOpinlyEvents().trackPurchase({
      orderId,
      value,
      currency,
      email: email || undefined,
      anonId: anonId || undefined,
    });
  } catch (err) {
    console.warn('[opinly] Failed to record purchase:', err?.message);
    return { recorded: false };
  }
}
