'use server';

import { NextResponse } from 'next/server';
import https from 'https';

import { trackLead } from '@/lib/opinly-events';

const TO_EMAIL = process.env.CONTACT_TO;
const FROM_EMAIL = process.env.RESEND_FROM;

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

function sendViaResend(apiKey, body) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.resend.com',
      path: '/emails',
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + apiKey,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        if (res.statusCode >= 400) reject(new Error('Resend ' + res.statusCode + ': ' + data));
        else {
          try {
            resolve(JSON.parse(data));
          } catch {
            resolve(data);
          }
        }
      });
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

export async function POST(request) {
  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500, headers: { ...cors, 'Content-Type': 'application/json' } }
      );
    }

    const s = await request.json();

    const fmt = (v) => '$' + Math.round(v).toLocaleString();
    const rng = (l, h) => fmt(l) + ' – ' + fmt(h);
    const val = (v) => (v !== null && v !== undefined && v !== '') ? v : '—';
    const bool = (v) => (v === true ? 'Yes' : v === false ? 'No' : '—');

    const ess = s.EssentialUsers || (!s.NeedsPremium ? (s.FullUsers || 0) : 0);
    const prem = s.PremiumUsers || (s.NeedsPremium ? (s.FullUsers || 0) : 0);
    const team = s.TeamMemberUsers || 0;
    const annualLic = (ess * 80 + prem * 110 + team * 8) * 12;

    let implLow = 4000, implHigh = 6000;
    if (s.Complexity === 'Standard') { implLow = 7500; implHigh = 12000; }
    if (s.Complexity === 'Complex') { implLow = 17500; implHigh = 26000; }

    let lsLow = 0, lsHigh = 0;
    if (s.NeedsLSCentral) {
      const stores = s.RetailLocationCount || 1;
      if (stores <= 2) { lsLow = 5000; lsHigh = 8000; }
      else if (stores <= 5) { lsLow = 10000; lsHigh = 13000; }
      else if (stores <= 10) { lsLow = 15000; lsHigh = 19000; }
      else if (stores <= 20) { lsLow = 22000; lsHigh = 28000; }
      else { lsLow = 32000; lsHigh = 45000; }
    }

    const posCount = s.NeedsLSCentral ? (s.POSCount || 0) : 0;
    const posAnnual = posCount * 85 * 12;
    const lsAddon = s.NeedsLSCentral ? (ess * 30 * 12) : 0;

    let custLow = 0, custHigh = 0;
    if (s.CustomNeeds === 'Minor') { custLow = 3000; custHigh = 5000; }
    if (s.CustomNeeds === 'Moderate') { custLow = 8000; custHigh = 13000; }
    if (s.CustomNeeds === 'Major') { custLow = 20000; custHigh = 32000; }

    let migLow = 0, migHigh = 0;
    if (s.HistoryMigration === 'Limited') { migLow = 2000; migHigh = 4000; }
    if (s.HistoryMigration === 'Full') { migLow = 5000; migHigh = 9000; }

    const depts = s.TrainingDepts || 2;
    const trainLow = depts * 800, trainHigh = depts * 1200;
    const otherAdj = (v) => Math.round(v / 2);

    const annualTotal = annualLic + lsAddon + posAnnual;

    const grandLow =
      annualLic + lsAddon + posAnnual +
      implLow +
      lsLow +
      otherAdj(custLow + migLow + trainLow);
    const grandHigh =
      annualLic + lsAddon + posAnnual +
      implHigh +
      lsHigh +
      otherAdj(custHigh + migHigh + trainHigh);

      console.log(val)

    const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
<style>
  body { font-family: 'Segoe UI', sans-serif; background:#f8fafc; margin:0; padding:24px; color:#0f172a; }
  .card { background:white; border-radius:12px; padding:28px; max-width:620px; margin:0 auto; border:1px solid #e2e8f0; }
  h1 { font-size:18px; color:#0a1628; margin:0 0 4px; }
  .sub { color:#64748b; font-size:13px; margin-bottom:24px; }
  h2 { font-size:13px; font-weight:700; color:#0a1628; text-transform:uppercase; letter-spacing:.5px; margin:20px 0 10px; border-bottom:1px solid #f1f5f9; padding-bottom:6px; }
  table { width:100%; border-collapse:collapse; font-size:13px; }
  td { padding:5px 0; vertical-align:top; }
  td:first-child { color:#64748b; width:48%; }
  td:last-child { font-weight:500; }
  .total-row td { font-size:15px; font-weight:700; color:#0a1628; padding-top:10px; border-top:2px solid #0a1628; }
  .badge { display:inline-block; background:#eff6ff; color:#1d4ed8; border-radius:6px; padding:2px 8px; font-size:12px; font-weight:600; }
</style></head><body>
<div class="card">
  <h1>📋 New BC Estimation Lead</h1>
  <p class="sub">Submitted via IOS Project Estimator · ${new Date().toUTCString()}</p>

  <h2>Contact</h2>
  <table>
    <tr><td>Name</td><td>${val(s.CustomerName)}</td></tr>
    <tr><td>Company</td><td>${val(s.CompanyName)}</td></tr>
    <tr><td>Phone</td><td>${val(s.CustomerPhone)}</td></tr>
    <tr><td>Email</td><td>${val(s.CustomerEmail)}</td></tr>
  </table>

  <h2>Business Profile</h2>
  <table>
    <tr><td>Industry</td><td>${val(s.Industry)}</td></tr>
    <tr><td>Employees</td><td>${val(s.EmployeeCount)}</td></tr>
    <tr><td>Current System</td><td>${val(s.CurrentSystem)}</td></tr>
    <tr><td>Scope</td><td>${val(s.ImplementationScope)}</td></tr>
    <tr><td>Company Type</td><td>${val(s.CompanyType)}</td></tr>
    <tr><td>Locations</td><td>${val(s.LocationCount)}</td></tr>
    <tr><td>Full Users</td><td>${val(s.FullUsers)}</td></tr>
    <tr><td>Team Member Users</td><td>${val(s.TeamMemberUsers)}</td></tr>
    <tr><td>Complexity</td><td><span class="badge">${val(s.Complexity)}</span></td></tr>
    <tr><td>Custom Needs</td><td>${val(s.CustomNeeds)}</td></tr>
    <tr><td>Data Migration</td><td>${val(s.HistoryMigration)}</td></tr>
    <tr><td>LS Central</td><td>${bool(s.NeedsLSCentral)}</td></tr>
    ${s.NeedsLSCentral ? `<tr><td>Retail Locations</td><td>${val(s.RetailLocationCount)}</td></tr><tr><td>POS Terminals</td><td>${val(s.POSCount)}</td></tr>` : ''}
    <tr><td>Modules</td><td>${(s.ModulesRequired || []).join(', ') || '—'}</td></tr>
  </table>

  <h2>Estimate — Year 1</h2>
  <table>
    <tr><td>Estimated Year 1 Total</td><td>${rng(grandLow, grandHigh)}</td></tr>
    <tr><td>Recurring Subtotal</td><td>${rng(annualTotal, annualTotal)}</td></tr>
  </table>

</div></body></html>`;

    const payload = JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: `BC Estimate — ${val(s.CustomerName)} / ${val(s.CompanyName)}`,
      html,
    });

    await sendViaResend(apiKey, payload);

    // The estimator's conversion. Only fire once the visitor has actually left
    // contact details — the estimate itself is browsing, not a lead.
    //
    // The estimate range is attached as plain properties, NOT as `value` on a
    // purchase: Opinly counts purchase value as gross revenue earned, and a
    // quote is pipeline, not money. Recording it as revenue would overstate
    // every report on the dashboard.
    if (s.CustomerEmail) {
      await trackLead({
        email: s.CustomerEmail,
        anonId: s.OpinlyAnonId,
        source: 'price_estimator',
        // Same lead re-submitting a tweaked estimate collapses into one event.
        externalEventId: `estimate:${s.CustomerEmail}`,
        properties: {
          company_name: s.CompanyName ?? null,
          industry: s.Industry ?? null,
          employee_count: s.EmployeeCount ?? null,
          complexity: s.Complexity ?? null,
          needs_ls_central: Boolean(s.NeedsLSCentral),
          estimate_low: grandLow,
          estimate_high: grandHigh,
          estimate_currency: 'USD',
        },
      });
    }

    return NextResponse.json({ ok: true }, { status: 200, headers: { ...cors, 'Content-Type': 'application/json' } });
  } catch (err) {
    console.error("[send-estimate-email]", err);
    return NextResponse.json(
      { error: "Failed to send email", detail: err?.message },
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }
}

