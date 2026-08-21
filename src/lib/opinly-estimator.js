'use client';

import { getOpinlyAnonId, identifyOpinlyVisitor } from '@/lib/opinly-browser';

/**
 * POST the estimator state to /api/send-estimate-email with the Opinly
 * attribution fields attached.
 *
 * Shared by both entry points — the floating ChatbotModal and the full-page
 * /price-estimator — so the analytics wiring can't drift between them.
 *
 * The estimator collects the visitor's email inside the chat transcript rather
 * than in a form field, so the pixel's auto-identify never sees it. Identifying
 * explicitly here is what lets the lead the server records join up with this
 * visit and the campaign behind it.
 */
export function postEstimate(state) {
  if (state?.CustomerEmail) {
    identifyOpinlyVisitor({ email: state.CustomerEmail });
  }

  return fetch('/api/send-estimate-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // The anonymous ID is the join key: without it the lead is still recorded,
    // but it lands as "direct" with no attribution.
    body: JSON.stringify({ ...state, OpinlyAnonId: getOpinlyAnonId() }),
  });
}
