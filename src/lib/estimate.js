// Pricing engine, ported from the original buildEstimateHTML()/estimateKey()
// in index.html. The math and rounding are unchanged. The HTML-string
// building has been removed — calculateEstimate() now returns plain data,
// and components/EstimateCard.js renders it as real JSX. This was a
// necessary follow-up fix: CSS Modules hash every class name found in a
// .module.css file, including ones meant to match literal class="..."
// strings injected via dangerouslySetInnerHTML — so the original approach
// silently lost all styling on the estimate card's internal rows.

export function estimateKey(s) {
  return JSON.stringify([
    s.ContactCollected,
    s.FullUsers,
    s.EssentialUsers,
    s.PremiumUsers,
    s.TeamMemberUsers,
    s.NeedsLSCentral,
    s.RetailLocationCount,
    s.POSCount,
    s.Complexity,
    s.CustomNeeds,
    s.HistoryMigration,
    s.TrainingDepts,
    s.NeedsPremium,
  ]);
}

// Pure pricing calculation — no HTML, no strings. Takes the JSON state
// Claude returns and produces every number the estimate card needs to
// render. This is the only place the pricing formulas live; the component
// that renders this (components/EstimateCard.js) does no math of its own.
export function calculateEstimate(s) {
  const ess = s.EssentialUsers || (!s.NeedsPremium ? s.FullUsers || 0 : 0);
  const prem = s.PremiumUsers || (s.NeedsPremium ? s.FullUsers || 0 : 0);
  const team = s.TeamMemberUsers || 0;
  const annualLic = (ess * 80 + prem * 110 + team * 8) * 12;

  // Implementation (÷2 already applied — shown as-is to customer)
  let implLow = 4000,
    implHigh = 6000;
  if (s.Complexity === "Standard") {
    implLow = 7500;
    implHigh = 12000;
  }
  if (s.Complexity === "Complex") {
    implLow = 17500;
    implHigh = 26000;
  }

  // LS Central setup fee
  let lsLow = 0,
    lsHigh = 0;
  if (s.NeedsLSCentral) {
    const stores = s.RetailLocationCount || 1;
    if (stores <= 2) {
      lsLow = 5000;
      lsHigh = 8000;
    } else if (stores <= 5) {
      lsLow = 10000;
      lsHigh = 13000;
    } else if (stores <= 10) {
      lsLow = 15000;
      lsHigh = 19000;
    } else if (stores <= 20) {
      lsLow = 22000;
      lsHigh = 28000;
    } else {
      lsLow = 32000;
      lsHigh = 45000;
    }
  }

  // POS device licenses: each POS = $85/mo × 12
  const posCount = s.NeedsLSCentral ? s.POSCount || 0 : 0;
  const posAnnual = posCount * 85 * 12;

  // LS Central user add-on: Essential users pay extra $30/mo × 12
  const lsUserAddon = s.NeedsLSCentral ? ess * 30 * 12 : 0;

  let custLow = 0,
    custHigh = 0;
  if (s.CustomNeeds === "Minor") {
    custLow = 3000;
    custHigh = 5000;
  }
  if (s.CustomNeeds === "Moderate") {
    custLow = 8000;
    custHigh = 13000;
  }
  if (s.CustomNeeds === "Major") {
    custLow = 20000;
    custHigh = 32000;
  }

  let migLow = 0,
    migHigh = 0;
  if (s.HistoryMigration === "Limited") {
    migLow = 2000;
    migHigh = 4000;
  }
  if (s.HistoryMigration === "Full") {
    migLow = 5000;
    migHigh = 9000;
  }

  const depts = s.TrainingDepts || 2;
  const trainLow = depts * 800,
    trainHigh = depts * 1200;

  // ── Totals ──
  const recurringTotal = annualLic + lsUserAddon + posAnnual;

  const custAdjLow = Math.round(custLow / 2),
    custAdjHigh = Math.round(custHigh / 2);
  const migAdjLow = Math.round(migLow / 2),
    migAdjHigh = Math.round(migHigh / 2);
  const trainAdjLow = Math.round(trainLow / 2),
    trainAdjHigh = Math.round(trainHigh / 2);
  const otherAdjLow = custAdjLow + migAdjLow + trainAdjLow;
  const otherAdjHigh = custAdjHigh + migAdjHigh + trainAdjHigh;

  const oneTimeLow = implLow + lsLow + otherAdjLow;
  const oneTimeHigh = implHigh + lsHigh + otherAdjHigh;

  const grandLow = recurringTotal + oneTimeLow;
  const grandHigh = recurringTotal + oneTimeHigh;

  return {
    ess,
    prem,
    team,
    annualLic,
    implLow,
    implHigh,
    lsLow,
    lsHigh,
    posCount,
    posAnnual,
    lsUserAddon,
    custLow,
    custHigh,
    migLow,
    migHigh,
    depts,
    trainLow,
    trainHigh,
    recurringTotal,
    custAdjLow,
    custAdjHigh,
    migAdjLow,
    migAdjHigh,
    trainAdjLow,
    trainAdjHigh,
    otherAdjLow,
    otherAdjHigh,
    oneTimeLow,
    oneTimeHigh,
    grandLow,
    grandHigh,
    // pass through the raw state fields the component needs for labels
    NeedsLSCentral: s.NeedsLSCentral,
    CustomNeeds: s.CustomNeeds,
    HistoryMigration: s.HistoryMigration,
  };
}

// Shared currency formatters — used by both this module (none, now) and
// the EstimateCard component, so they stay in one place.
export const fmt = (v) => "$" + Math.round(v).toLocaleString();
export const rng = (l, h) => fmt(l) + " – " + fmt(h);
