import styles from './priceCalculator.module.css';
import { calculateEstimate, fmt, rng } from "@/lib/estimate";

// Renders the same numbers, same line items, same order as the original
// buildEstimateHTML() — but as real JSX bound to real CSS Module classes,
// instead of an HTML string injected via dangerouslySetInnerHTML.
//
// Why this matters beyond "the styles work now": React can diff and patch
// this on re-render (e.g. when the user changes a requirement and the
// estimate updates) instead of tearing down and rebuilding the whole DOM
// subtree every time, and there's no string-built markup to audit for
// injection risk.
export default function EstimateCard({ state, translations, lang }) {
  const e = calculateEstimate(state);
  const t = translations[lang];

  return (
    <div className={styles.estCard}>
      <h4>{t.estTitle}</h4>

      {/* ── Recurring section ── */}
      <div className={styles["est-section-label"]}>{t.recurring}</div>

      <Row label={t.licFees} value={`${fmt(e.recurringTotal)}/yr`} />

      {e.ess > 0 && (
        <Row
          sub
          label={`↳ ${e.ess} Essentials @ $80/mo`}
          value={`${fmt(e.ess * 80 * 12)}/yr`}
        />
      )}
      {e.NeedsLSCentral && e.ess > 0 && (
        <Row
          sub
          label={`↳ ${t.lsAddonLbl} (${e.ess} × $30/mo)`}
          value={`${fmt(e.lsUserAddon)}/yr`}
        />
      )}
      {e.prem > 0 && (
        <Row
          sub
          label={`↳ ${e.prem} Premium @ $110/mo`}
          value={`${fmt(e.prem * 110 * 12)}/yr`}
        />
      )}
      {e.team > 0 && (
        <Row
          sub
          label={`↳ ${e.team} Team Members @ $8/mo`}
          value={`${fmt(e.team * 8 * 12)}/yr`}
        />
      )}
      {e.posCount > 0 && (
        <Row
          sub
          label={`↳ ${e.posCount} ${t.posLbl}${
            e.posCount > 1 && lang === "en" ? "s" : ""
          } @ $85/mo`}
          value={`${fmt(e.posAnnual)}/yr`}
        />
      )}

      <Subtotal label={t.recSub} value={`${fmt(e.recurringTotal)}/yr`} />

      <hr className={styles["est-divider"]} />

      {/* ── One-time section ── */}
      <div className={styles["est-section-label"]}>{t.oneTime}</div>

      <Row label={t.implLbl} value={rng(e.implLow, e.implHigh)} />

      {e.NeedsLSCentral && (
        <Row label={t.lsCentral} value={rng(e.lsLow, e.lsHigh)} />
      )}

      {e.otherAdjLow > 0 && (
        <>
          <Row
            label={t.otherSvc}
            value={rng(e.otherAdjLow, e.otherAdjHigh)}
          />
          {e.custAdjLow > 0 && (
            <Row
              sub
              label={`↳ ${t.custLbl} (${e.CustomNeeds})`}
              value={rng(e.custAdjLow, e.custAdjHigh)}
            />
          )}
          {e.migAdjLow > 0 && (
            <Row
              sub
              label={`↳ ${t.migLbl} (${e.HistoryMigration})`}
              value={rng(e.migAdjLow, e.migAdjHigh)}
            />
          )}
          <Row
            sub
            label={`↳ ${t.trainLbl} (${e.depts} ${
              e.depts > 1 ? t.deptsP : t.depts
            })`}
            value={rng(e.trainAdjLow, e.trainAdjHigh)}
          />
        </>
      )}

      <Subtotal
        label={t.oneTimeSub}
        value={rng(e.oneTimeLow, e.oneTimeHigh)}
      />

      {/* ── Grand total ── */}
      <div className={styles["est-total"]}>
        <span>{t.grandTotal}</span>
        <span>{rng(e.grandLow, e.grandHigh)}</span>
      </div>

      <div className={styles.disclaimer}>{t.disclaimer}</div>

      <div
        className={styles["cta-card"]}
        // t.cta is a fixed translation string containing one <a> tag —
        // not user input, so this is safe. Everything dynamic above (user
        // counts, prices, labels) is rendered as plain JSX text, never
        // through dangerouslySetInnerHTML.
        dangerouslySetInnerHTML={{ __html: t.cta }}
      />
    </div>
  );
}

function Row({ label, value, sub }) {
  return (
    <div
      className={
        sub
          ? `${styles["est-row"]} ${styles["est-sub"]}`
          : styles["est-row"]
      }
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function Subtotal({ label, value }) {
  return (
    <div className={styles["est-subtotal"]}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
