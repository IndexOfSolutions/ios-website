'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PRICING_BANDS, ENTERPRISE_RATE } from '@/data/indexHr'
import { PRIMARY_BUTTON } from '@/components/index-hr/IndexHrUi'

const MAX_SLIDER = 1500
const fmt = (n) => n.toLocaleString('en-US', { maximumFractionDigits: 0 })

function quote(employees) {
  const band = PRICING_BANDS.find((b) => employees >= b.min && employees <= b.max)
  if (band) return { ...band, label: `${fmt(band.min)}–${fmt(band.max)} employees` }
  const monthly = employees * ENTERPRISE_RATE
  return { monthly, yearly: Math.round(monthly * 12 * 0.8), label: '1,000+ employees', perEmployee: true }
}

export default function PricingCalculator() {
  const [employees, setEmployees] = useState(40)
  const [billing, setBilling] = useState('yearly')
  const q = quote(employees)
  const yearlySaving = q.monthly * 12 - q.yearly

  return (
    <div className='w-full rounded-3xl border border-border-color bg-secondary/40 p-6 md:p-10 flex flex-col gap-8'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
        <div>
          <h3 className='font-[newake] text-3xl text-fg'>Estimate your price</h3>
          <p className='font-[inter] text-fg/60'>Move the slider to your number of active employees.</p>
        </div>
        <div role='group' aria-label='Billing period' className='inline-flex self-start rounded-full border border-border-color bg-mainbg p-1 font-[inter] text-sm'>
          {['monthly', 'yearly'].map((b) => (
            <button
              key={b}
              type='button'
              onClick={() => setBilling(b)}
              aria-pressed={billing === b}
              className={`rounded-full px-4 py-2 capitalize transition-colors ${billing === b ? 'bg-primary text-white' : 'text-fg/70 hover:text-fg'}`}
            >
              {b}
              {b === 'yearly' && (
                <span className={`ms-2 rounded-full px-2 py-0.5 text-xs ${billing === b ? 'bg-white/20 text-white' : 'bg-emerald-500/15 text-emerald-400'}`}>−20%</span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <div className='flex items-baseline justify-between font-[inter]'>
          <label htmlFor='hr-employees' className='text-fg/80'>Employees</label>
          <input
            type='number'
            min={1}
            max={100000}
            value={employees}
            onChange={(e) => setEmployees(Math.max(1, Math.min(100000, Number(e.target.value) || 1)))}
            className='w-28 rounded-lg border border-border-color bg-mainbg px-3 py-1.5 text-right text-fg tabular-nums'
            aria-label='Number of employees'
          />
        </div>
        <input
          id='hr-employees'
          type='range'
          min={1}
          max={MAX_SLIDER}
          value={Math.min(employees, MAX_SLIDER)}
          onChange={(e) => setEmployees(Number(e.target.value))}
          className='w-full accent-[#3b82f6]'
        />
        <div className='flex justify-between font-[jetBrainsMono] text-xs text-fg/40'>
          <span>1</span><span>500</span><span>1,000</span><span>1,500+</span>
        </div>
      </div>

      <div className='grid gap-4 md:grid-cols-[1fr_auto] md:items-end rounded-2xl border border-primary/40 bg-primary/5 p-6'>
        <div className='flex flex-col gap-1'>
          <span className='font-[jetBrainsMono] text-xs uppercase tracking-widest text-primary'>Professional · {q.label}</span>
          {billing === 'monthly' ? (
            <p className='font-[newake] text-5xl text-fg tabular-nums'>
              ${fmt(q.monthly)}<span className='font-[inter] text-lg text-fg/60'> / month</span>
            </p>
          ) : (
            <p className='font-[newake] text-5xl text-fg tabular-nums'>
              ${fmt(q.yearly)}<span className='font-[inter] text-lg text-fg/60'> / year</span>
            </p>
          )}
          <p className='font-[inter] text-sm text-fg/60'>
            {billing === 'yearly'
              ? `Equivalent to $${fmt(q.yearly / 12)} a month. You save $${fmt(yearlySaving)} a year.`
              : `Or $${fmt(q.yearly)} a year with yearly billing.`}
            {q.perEmployee && ` $${ENTERPRISE_RATE} per employee per month.`}
          </p>
        </div>
        <Link href='/contact' className={PRIMARY_BUTTON}>
          Get this quote <ArrowRight className='size-4' aria-hidden='true' />
        </Link>
      </div>
    </div>
  )
}
