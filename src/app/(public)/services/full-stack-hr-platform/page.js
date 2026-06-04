import React from 'react'
import "../../../hrms.css";

export default function HRPlatform() {
  return (
    <>
<section className="hero">
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="hero-badge">
            ✦ &nbsp; Full-stack HR Platform
          </div>
          <h1>
            Every HR process.<br/>
            <span>One platform.</span>
          </h1>
          <p>
            IOS HRMS brings together attendance, payroll, recruitment, leave, performance, and more into a single connected system built for growing organisations.
          </p>
          <div className="hero-cta">
            <a href="https://www.indexofsolutions.com/contact" className="btn-primary">Get Started Free</a>
            <a href="#modules" className="btn-secondary">Explore Features ↓</a>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">12+</div>
            <div className="stat-label">Integrated Modules</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Multi</div>
            <div className="stat-label">Company Profiles</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Multi</div>
            <div className="stat-label">Currency Support</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">iOS + Web</div>
            <div className="stat-label">Mobile &amp; Desktop</div>
          </div>
        </div>
      </div>

      <section id="modules" style={{ background: '#fff' }}>
        <div className="container text-center">
          <span className="section-label">Platform Modules</span>
          <h2>Everything your HR team needs</h2>
          <p className="section-subtitle">From the first job posting to an employee&apos;s last day, through every payslip in between, IOS HRMS handles it all.</p>

          <div className="modules-grid">

            <div className="module-card">
              <div className="module-icon" style={{ background: '#EFF6FF' }}>📊</div>
              <h3>Attendance &amp; Payroll Calculation</h3>
              <p>Process attendance from Excel uploads or punching machine clock records. Calculate payroll with a detailed per-element breakdown that supports multiple currencies in a single run.</p>
              <div className="module-tags">
                <span className="tag">Clock Records</span>
                <span className="tag">Excel Import</span>
                <span className="tag">Multi-currency</span>
                <span className="tag">OT / Undertime</span>
              </div>
            </div>

            <div className="module-card">
              <div className="module-icon" style={{ background: '#F0FDF4' }}>💰</div>
              <h3>Payroll Elements Engine</h3>
              <p>Build any salary structure using flexible payroll elements: fixed amounts, daily rates, dependent-based allowances, and tiered tax brackets. Fully configurable with no technical knowledge required.</p>
              <div className="module-tags">
                <span className="tag">Basic Salary</span>
                <span className="tag">Allowances</span>
                <span className="tag">Tax Brackets</span>
                <span className="tag">Family Allowance</span>
              </div>
            </div>

            <div className="module-card">
              <div className="module-icon" style={{ background: '#FFF7ED' }}>👥</div>
              <h3>Employee Management</h3>
              <p>Complete employee profiles covering personal details, employment history, documents, assets, training, performance, payroll elements, dependents, and location assignments in one card.</p>
              <div className="module-tags">
                <span className="tag">Full Profile</span>
                <span className="tag">Audit Log</span>
                <span className="tag">Org Chart</span>
              </div>
            </div>

            <div className="module-card">
              <div className="module-icon" style={{ background: '#F5F3FF' }}>🌴</div>
              <h3>Leave Management</h3>
              <p>Configurable leave profiles with accrual rules, carry-over policies, balance ledger, and multi-approver workflows. Approvals feed directly into the payroll calculation.</p>
              <div className="module-tags">
                <span className="tag">Leave Profiles</span>
                <span className="tag">Accrual</span>
                <span className="tag">Ledger</span>
                <span className="tag">Approvals</span>
              </div>
            </div>

            <div className="module-card">
              <div className="module-icon" style={{ background: '#FFF1F2' }}>🎯</div>
              <h3>Recruitment (ATS)</h3>
              <p>End-to-end hiring pipeline covering job postings, kanban candidate tracking, interview scheduling, offer letters, and a branded careers portal with LinkedIn job posting integration.</p>
              <div className="module-tags">
                <span className="tag">Kanban Pipeline</span>
                <span className="tag">Career Portal</span>
                <span className="tag">LinkedIn</span>
                <span className="tag">Interviews</span>
              </div>
            </div>

            <div className="module-card">
              <div className="module-icon" style={{ background: '#F0FDF4' }}>📈</div>
              <h3>Performance Management</h3>
              <p>A 360-degree performance ecosystem covering goals and OKRs, reviews, competency frameworks, PIP tracking, peer feedback, check-ins, badges, and recognitions to keep teams engaged.</p>
              <div className="module-tags">
                <span className="tag">Goals / OKRs</span>
                <span className="tag">360 Reviews</span>
                <span className="tag">PIP</span>
                <span className="tag">Badges</span>
              </div>
            </div>

            <div className="module-card">
              <div className="module-icon" style={{ background: '#EFF6FF' }}>🕐</div>
              <h3>Shift Management</h3>
              <p>Define shifts and assign them to employees or departments. Handle overnight and rotating schedules, and let employees submit shift swap requests all managed from one screen.</p>
              <div className="module-tags">
                <span className="tag">Rotating Shifts</span>
                <span className="tag">Overnight</span>
                <span className="tag">Shift Swaps</span>
              </div>
            </div>

            <div className="module-card">
              <div className="module-icon" style={{ background: '#FDF4FF' }}>📦</div>
              <h3>Asset Management</h3>
              <p>Track every company asset including laptops, phones, and equipment with type categorisation, serial numbers, and full assignment history. Assign to employees directly from their profile card.</p>
              <div className="module-tags">
                <span className="tag">Asset Catalogue</span>
                <span className="tag">Assignments</span>
                <span className="tag">Return Tracking</span>
              </div>
            </div>

            <div className="module-card">
              <div className="module-icon" style={{ background: '#FFFBEB' }}>⏱️</div>
              <h3>Timesheets</h3>
              <p>Activity-based timesheets with cost-centre allocation. Employees log time against projects or activity types and managers review and approve with full export capability.</p>
              <div className="module-tags">
                <span className="tag">Cost Centres</span>
                <span className="tag">Approvals</span>
                <span className="tag">Export</span>
              </div>
            </div>

            <div className="module-card">
              <div className="module-icon" style={{ background: '#F0FDF4' }}>📍</div>
              <h3>Geofenced Clock-In</h3>
              <p>Define GPS locations and link them to cost centres. Employees can only clock in when physically within the approved radius, eliminating buddy punching and location fraud.</p>
              <div className="module-tags">
                <span className="tag">GPS Fencing</span>
                <span className="tag">Mobile App</span>
                <span className="tag">Cost Centre</span>
              </div>
            </div>

            <div className="module-card">
              <div className="module-icon" style={{ background: '#EFF6FF' }}>🤝</div>
              <h3>Onboarding &amp; Offboarding</h3>
              <p>Structured checklists for joining and leaving employees. Ensure nothing is missed from equipment handover to system access, with status tracking for HR and managers throughout the process.</p>
              <div className="module-tags">
                <span className="tag">Checklists</span>
                <span className="tag">Tasks</span>
                <span className="tag">Status Tracking</span>
              </div>
            </div>

            <div className="module-card">
              <div className="module-icon" style={{ background: '#FFF7ED' }}>🖥️</div>
              <h3>Punching Machine Sync</h3>
              <p>Real-time sync with physical time-attendance devices including ZKTeco and compatible hardware. Unmatched records are queued for manual resolution so no attendance data is ever lost.</p>
              <div className="module-tags">
                <span className="tag">ZKTeco</span>
                <span className="tag">Real-time</span>
                <span className="tag">Auto-recovery</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="payroll" style={{ background: 'var(--gray-50)' }}>
        <div className="spotlight">
          <div className="spotlight-text">
            <span className="section-label">Payroll Engine</span>
            <h2>Salary structures as complex as your organisation</h2>
            <p>Forget rigid payroll templates. Build any compensation structure element by element and let the engine calculate everything automatically at the end of each period.</p>
            <ul className="feature-list">
              <li>Fixed amounts, daily attendance rates, and dependent-based allowances</li>
              <li>Tiered tax brackets in both percentage and fixed-amount formats with dynamic base selection</li>
              <li>Overtime and undertime prorating on any element you choose</li>
              <li>Full per-currency breakdown when employees hold mixed-currency compensation</li>
              <li>Profile-level element bundles auto-applied when assigning an employee to a profile</li>
            </ul>
          </div>
          <div className="spotlight-visual">
            <div className="mock-header">
              <span>Payroll Breakdown — Ahmed Al-Rashid</span>
              <span style={{ fontSize: '11px', opacity: 0.7 }}>May 2026</span>
            </div>
            <div style={{ background: 'rgba(59,130,246,0.08)', borderRadius: '8px', padding: '8px 12px', fontSize: '11px', fontWeight: 700, color: 'var(--blue-600)', letterSpacing: '0.5px' }}>USD</div>
            <div className="mock-row">
              <span className="mock-row-label">+ Basic Salary</span>
              <span className="mock-row-value" style={{ color: 'var(--green-600)' }}>+5,500.00</span>
            </div>
            <div className="mock-row">
              <span className="mock-row-label">+ Housing Allowance</span>
              <span className="mock-row-value" style={{ color: 'var(--green-600)' }}>+800.00</span>
            </div>
            <div className="mock-row">
              <span className="mock-row-label">- Income Tax <span className="mock-badge amber">8%</span></span>
              <span className="mock-row-value" style={{ color: 'var(--rose-500)' }}>-504.00</span>
            </div>
            <div style={{ background: 'rgba(59,130,246,0.08)', borderRadius: '8px', padding: '8px 12px', fontSize: '11px', fontWeight: 700, color: 'var(--blue-600)', letterSpacing: '0.5px', marginTop: '4px' }}>EUR</div>
            <div className="mock-row">
              <span className="mock-row-label">+ Transportation</span>
              <span className="mock-row-value" style={{ color: 'var(--green-600)' }}>+350.00</span>
            </div>
            <div className="mock-row" style={{ background: 'var(--gray-50)' }}>
              <span className="mock-row-label" style={{ fontWeight: 700 }}>Total USD</span>
              <span className="mock-row-value" style={{ fontSize: '15px' }}>5,796.00 USD</span>
            </div>
            <div className="mock-row" style={{ background: 'var(--gray-50)' }}>
              <span className="mock-row-label" style={{ fontWeight: 700 }}>Total EUR</span>
              <span className="mock-row-value" style={{ fontSize: '15px' }}>350.00 EUR</span>
            </div>
          </div>
        </div>
      </section>

      <div className="payroll-section text-center">
        <span className="section-label">5 Calculation Methods</span>
        <h2>Every compensation scenario covered</h2>
        <p className="section-subtitle">From the simplest fixed salary to complex tiered tax structures, IOS HRMS handles it all natively.</p>
        <div className="payroll-grid">
          <div className="payroll-card">
            <div className="payroll-card-icon">📌</div>
            <h3>Fixed Amount</h3>
            <p>Set a fixed monthly amount per employee. Optionally prorated by attended days and adjusted for overtime or undertime hours.</p>
          </div>
          <div className="payroll-card">
            <div className="payroll-card-icon">📅</div>
            <h3>Daily Rate</h3>
            <p>Multiply a fixed daily rate by the number of days the employee attended during the payroll period.</p>
          </div>
          <div className="payroll-card">
            <div className="payroll-card-icon">👨‍👩‍👧</div>
            <h3>Dependent-Based</h3>
            <p>Automatically calculated from the employee&apos;s registered family members. Define rules such as a monthly amount per studying child or a fixed amount for a non-working spouse.</p>
          </div>
          <div className="payroll-card">
            <div className="payroll-card-icon">📊</div>
            <h3>Percentage Tiered</h3>
            <p>Apply a percentage to the sum of selected elements based on salary brackets, ideal for progressive income tax calculations.</p>
          </div>
          <div className="payroll-card">
            <div className="payroll-card-icon">🔢</div>
            <h3>Fixed Amount Tiered</h3>
            <p>Return a fixed currency amount based on salary range brackets, perfect for flat-rate deductions or tier-based bonuses.</p>
          </div>
          <div className="payroll-card">
            <div className="payroll-card-icon">💱</div>
            <h3>Multi-Currency</h3>
            <p>Employees can hold elements in different currencies. The payroll report separates totals by currency so amounts are never mixed across currencies.</p>
          </div>
        </div>
      </div>

      <section style={{ background: 'var(--gray-50)' }}>
        <div className="spotlight">
          <div className="spotlight-text">
            <span className="section-label">Time &amp; Attendance</span>
            <h2>Two sources feeding the same calculation</h2>
            <p>Upload your attendance Excel file or pull records directly from connected punching machines. The engine processes both sources identically, applying leave, shift rules, and payroll elements automatically.</p>
            <ul className="feature-list">
              <li>Real-time sync with ZKTeco and compatible biometric devices</li>
              <li>Pending records queue for unmatched machine user IDs</li>
              <li>Per-employee shift settings from their Leave and Payroll Profile</li>
              <li>Anomaly detection for duplicate punches, orphan clock-ins, and shift overruns</li>
              <li>Inline edit of individual days without re-running the full batch</li>
              <li>Calculation history saved locally so you can revisit any previous payroll run</li>
            </ul>
          </div>
          <div className="spotlight-visual">
            <div className="mock-header">
              <span>Payroll Calc — May 2026</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span className="mock-badge" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '10px' }}>📂 Excel</span>
                <span className="mock-badge" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '10px' }}>🖥️ Clock</span>
              </div>
            </div>
            <div className="mock-row">
              <div>
                <div className="mock-row-label">Sarah Mitchell</div>
                <div style={{ fontSize: '11px', color: 'var(--gray-400)' }}>22 days · 176h · 4.5h OT</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '14px', fontWeight: 700 }}>6,240.00 USD</div>
                <div style={{ fontSize: '10px', color: 'var(--gray-400)' }}>Details ↗</div>
              </div>
            </div>
            <div className="mock-row">
              <div>
                <div className="mock-row-label">James Okonkwo</div>
                <div style={{ fontSize: '11px', color: 'var(--gray-400)' }}>20 days · 158h · 2h undertime</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '14px', fontWeight: 700 }}>4,810.00 USD</div>
                <div style={{ fontSize: '10px', color: 'var(--blue-500)' }}>350.00 EUR</div>
              </div>
            </div>
            <div className="mock-row" style={{ borderLeft: '3px solid var(--amber-500)' }}>
              <div>
                <div className="mock-row-label">Lena Fischer</div>
                <div style={{ fontSize: '11px', color: 'var(--amber-500)' }}>⚠ 2 anomalies</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '14px', fontWeight: 700 }}>3,920.00 USD</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
              <div style={{ flex: 1, background: 'var(--green-600)', color: '#fff', borderRadius: '8px', padding: '10px', textAlign: 'center', fontSize: '12px', fontWeight: 700 }}>Export Excel</div>
              <div style={{ flex: 1, background: 'var(--navy)', color: '#fff', borderRadius: '8px', padding: '10px', textAlign: 'center', fontSize: '12px', fontWeight: 700 }}>Save to History</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff' }}>
        <div className="spotlight reverse">
          <div className="spotlight-visual" style={{ background: 'linear-gradient(135deg,#FFF7ED,#FFFBEB)' }}>
            <div className="mock-header" style={{ background: '#B45309' }}>
              <span>Recruitment Pipeline</span>
              <span style={{ fontSize: '11px', opacity: 0.7 }}>3 open positions</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--gray-500)', marginBottom: '6px', textTransform: 'uppercase' }}>Applied</div>
                <div className="mock-row" style={{ flexDirection: 'column', gap: '4px', padding: '10px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600 }}>Amir Hassan</div>
                  <div style={{ fontSize: '10px', color: 'var(--gray-400)' }}>Senior Dev</div>
                </div>
                <div className="mock-row" style={{ flexDirection: 'column', gap: '4px', padding: '10px', marginTop: '8px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600 }}>Priya Nair</div>
                  <div style={{ fontSize: '10px', color: 'var(--gray-400)' }}>UX Designer</div>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--gray-500)', marginBottom: '6px', textTransform: 'uppercase' }}>Interview</div>
                <div className="mock-row" style={{ flexDirection: 'column', gap: '4px', padding: '10px', borderLeft: '3px solid var(--blue-600)' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600 }}>Chen Wei</div>
                  <div style={{ fontSize: '10px', color: 'var(--blue-600)' }}>📅 Jun 12</div>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--gray-500)', marginBottom: '6px', textTransform: 'uppercase' }}>Offer</div>
                <div className="mock-row" style={{ flexDirection: 'column', gap: '4px', padding: '10px', borderLeft: '3px solid var(--green-600)' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600 }}>Maria Rossi</div>
                  <span className="mock-badge green" style={{ fontSize: '10px', alignSelf: 'flex-start' }}>Accepted</span>
                </div>
              </div>
            </div>
          </div>
          <div className="spotlight-text">
            <span className="section-label">Recruitment</span>
            <h2>Hire better, faster, together</h2>
            <p>A full applicant tracking system built into the same platform your HR team already uses, with no need to switch between tools.</p>
            <ul className="feature-list">
              <li>Branded careers portal with customisable job postings</li>
              <li>Kanban pipeline from application to offer letter</li>
              <li>Interview scheduling with calendar integration</li>
              <li>LinkedIn job posting with one click</li>
              <li>Candidate database and recruitment reporting</li>
              <li>Seamless handover to onboarding on acceptance</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="workflow" className="workflow-section text-center">
        <span className="section-label">How It Works</span>
        <h2>Up and running in four steps</h2>
        <p className="section-subtitle">No lengthy implementation. No consultant required. Start with your company profile and grow from there.</p>

        <div className="steps-grid">
          <div className="step">
            <div className="step-num">1</div>
            <h3>Set Up Your Company</h3>
            <p>Add your company, departments, and employees. Import from Excel or enter manually and be up and running in minutes.</p>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <h3>Configure Payroll Profiles</h3>
            <p>Define Leave and Payroll Profiles with shift settings, overtime rates, and default payroll elements. Assign them to employees.</p>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <h3>Process Attendance</h3>
            <p>Upload your attendance Excel or pull from punching machines. Review any anomalies and make inline adjustments before calculating.</p>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <h3>Export Payroll</h3>
            <p>Review per-employee salary breakdowns by currency, then export a clean payroll Excel ready for your finance team.</p>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '72px 24px' }}>
        <div className="text-center" style={{ marginBottom: '48px' }}>
          <span className="section-label">Integrations &amp; Connectivity</span>
          <h2>Connects to tools you already use</h2>
          <p className="section-subtitle">From biometric hardware to professional networks, IOS HRMS fits into your existing ecosystem.</p>
        </div>
        <div className="integrations-row">
          <div className="integration-pill"><span style={{ fontSize: '18px' }}>🖥️</span> ZKTeco Devices</div>
          <div className="integration-pill"><span style={{ fontSize: '18px' }}>📊</span> Microsoft Excel</div>
          <div className="integration-pill"><span style={{ fontSize: '18px' }}>🔗</span> LinkedIn Jobs</div>
          <div className="integration-pill"><span style={{ fontSize: '18px' }}>📱</span> iOS Mobile App</div>
          <div className="integration-pill"><span style={{ fontSize: '18px' }}>📍</span> GPS Geofencing</div>
          <div className="integration-pill"><span style={{ fontSize: '18px' }}>✉️</span> Email Notifications</div>
          <div className="integration-pill"><span style={{ fontSize: '18px' }}>☁️</span> Azure Cloud</div>
          <div className="integration-pill"><span style={{ fontSize: '18px' }}>🔐</span> REST API Access</div>
        </div>
      </section>

      <section style={{ background: 'var(--gray-50)', padding: '72px 24px' }}>
        <div className="highlight-box">
          <div style={{ fontSize: '40px', marginBottom: '16px' }}>💬</div>
          <blockquote>
            &quot;We replaced four separate tools (an attendance tracker, a payroll spreadsheet, an ATS, and a leave system) with IOS HRMS. The payroll elements engine alone saves our HR team hours every month.&quot;
          </blockquote>
          <cite>HR Director, Regional Manufacturing Group</cite>
        </div>
      </section>

      <section style={{ background: '#fff' }}>
        <div className="spotlight">
          <div className="spotlight-text">
            <span className="section-label">Mobile App</span>
            <h2>HR in your team&apos;s pocket</h2>
            <p>The IOS HRMS mobile app gives employees and managers everything they need on the go, no desktop browser required.</p>
            <ul className="feature-list">
              <li>Geofenced clock-in with GPS location verification</li>
              <li>Leave requests and approvals on mobile</li>
              <li>Push notifications for pending approvals and announcements</li>
              <li>Dark mode support with persistent theme preference</li>
              <li>Secure company-specific login with per-employee access control</li>
            </ul>
          </div>
          <div className="spotlight-visual" style={{ background: 'linear-gradient(135deg,var(--navy),#2d3f8e)', border: 'none', alignItems: 'center', justifyContent: 'center', gap: '20px', flexDirection: 'row' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '24px', padding: '24px', width: '160px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>📍</div>
              <div style={{ color: '#fff', fontSize: '13px', fontWeight: 700, marginBottom: '4px' }}>Clock In</div>
              <div style={{ color: '#93C5FD', fontSize: '11px' }}>GPS verified</div>
              <div style={{ marginTop: '14px', background: 'var(--green-600)', color: '#fff', borderRadius: '10px', padding: '8px', fontSize: '12px', fontWeight: 700 }}>✓ Within Zone</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '24px', padding: '24px', width: '160px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
              <div style={{ fontSize: '32px', marginBottom: '10px' }}>🌴</div>
              <div style={{ color: '#fff', fontSize: '13px', fontWeight: 700, marginBottom: '4px' }}>Leave Request</div>
              <div style={{ color: '#93C5FD', fontSize: '11px' }}>12 days remaining</div>
              <div style={{ marginTop: '14px', background: 'var(--blue-600)', color: '#fff', borderRadius: '10px', padding: '8px', fontSize: '12px', fontWeight: 700 }}>Request Leave</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <span className="section-label" style={{ background: 'rgba(255,255,255,0.12)', color: '#93C5FD', marginBottom: '20px', display: 'inline-block' }}>Get Started Today</span>
        <h2>Ready to simplify your HR operations?</h2>
        <p>Join organisations already using IOS HRMS to run payroll, manage people, and hire smarter, all from one platform.</p>
        <div className="hero-cta">
          <a href="https://www.indexofsolutions.com/contact" className="btn-primary">Request a Demo</a>
          <a href="https://www.indexofsolutions.com/contact" className="btn-secondary">Contact Us</a>
        </div>
      </section>

    </>
  )
}
