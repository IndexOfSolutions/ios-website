'use client'

import React, { useState } from 'react'
import { computeOvertime, fmtNumber, MONTH_HOURS } from '@/lib/ksaLabor'

const fieldCls = 'w-full rounded-lg border border-border-color bg-mainbg px-3 py-2.5 text-fg focus:border-primary focus:outline-none'

export default function OvertimeCalculator() {
  const [basic, setBasic] = useState('5000')
  const [allowances, setAllowances] = useState('1750')
  const [hours, setHours] = useState('20')
  const num = (v) => Math.max(0, Number(v) || 0)
  const r = computeOvertime({ basic: num(basic), allowances: num(allowances), hours: num(hours) })

  return (
    <div className='grid gap-6 lg:grid-cols-2 rounded-3xl border border-border-color bg-secondary/40 p-6 md:p-8'>
      <form className='flex flex-col gap-4' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='ot-basic' className='flex flex-col gap-1.5'>
          <span className='text-fg/85 text-sm font-medium'>الراتب الأساسي الشهري (ريال)</span>
          <input id='ot-basic' type='number' min='0' inputMode='decimal' value={basic} onChange={(e) => setBasic(e.target.value)} className={fieldCls} />
        </label>
        <label htmlFor='ot-allow' className='flex flex-col gap-1.5'>
          <span className='text-fg/85 text-sm font-medium'>البدلات الثابتة الشهرية (ريال)</span>
          <input id='ot-allow' type='number' min='0' inputMode='decimal' value={allowances} onChange={(e) => setAllowances(e.target.value)} className={fieldCls} />
          <span className='text-xs text-fg/45'>مثل السكن والنقل.</span>
        </label>
        <label htmlFor='ot-hours' className='flex flex-col gap-1.5'>
          <span className='text-fg/85 text-sm font-medium'>عدد ساعات العمل الإضافي</span>
          <input id='ot-hours' type='number' min='0' inputMode='decimal' value={hours} onChange={(e) => setHours(e.target.value)} className={fieldCls} />
        </label>
      </form>

      <div className='rounded-2xl border border-primary/40 bg-primary/5 p-6 flex flex-col gap-4' aria-live='polite'>
        <h3 className='text-xl font-bold text-fg'>النتيجة</h3>
        <dl className='flex flex-col gap-3 text-sm'>
          <div className='flex justify-between gap-4'><dt className='text-fg/65'>أجر الساعة (الأجر الفعلي ÷ {MONTH_HOURS})</dt><dd className='text-fg tabular-nums'>{fmtNumber(r.fullHourly)}</dd></div>
          <div className='flex justify-between gap-4'><dt className='text-fg/65'>50% من أجر الساعة الأساسي</dt><dd className='text-fg tabular-nums'>{fmtNumber(r.basicHourly * 0.5)}</dd></div>
          <div className='flex justify-between gap-4 border-t border-border-color pt-3'><dt className='text-fg/80'>أجر الساعة الإضافية</dt><dd className='text-fg font-semibold tabular-nums'>{fmtNumber(r.perHour)} ريال</dd></div>
        </dl>
        <div className='rounded-xl bg-mainbg/60 border border-border-color p-4 flex justify-between items-baseline gap-4'>
          <span className='text-fg/80'>إجمالي أجر العمل الإضافي</span>
          <span className='text-3xl font-bold text-primary tabular-nums'>{fmtNumber(r.total)} ريال</span>
        </div>
        <p className='text-xs text-fg/45 leading-relaxed'>يفترض الحساب شهراً من 30 يوماً و8 ساعات يومياً. قد ينص عقد العمل أو لائحة تنظيم العمل على أجر أعلى.</p>
      </div>
    </div>
  )
}
