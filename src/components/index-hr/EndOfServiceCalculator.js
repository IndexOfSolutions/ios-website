'use client'

import React, { useState } from 'react'
import { computeEndOfService, fmtNumber } from '@/lib/ksaLabor'

const LEAVER_TYPES = [
  { value: 'termination', label: 'إنهاء من صاحب العمل أو انتهاء مدة العقد' },
  { value: 'resignation', label: 'استقالة' },
  { value: 'resignation_full', label: 'ترك العمل لسبب يستحق عنه المكافأة كاملة (المادة 87 أو 81)' },
]

const FACTOR_LABEL = { 0: 'لا يستحق (أقل من سنتين)', 1: 'المكافأة كاملة' }
const fieldCls = 'w-full rounded-lg border border-border-color bg-mainbg px-3 py-2.5 text-fg focus:border-primary focus:outline-none'

function Field({ id, label, hint, children }) {
  return (
    <label htmlFor={id} className='flex flex-col gap-1.5'>
      <span className='text-fg/85 text-sm font-medium'>{label}</span>
      {children}
      {hint && <span className='text-xs text-fg/45'>{hint}</span>}
    </label>
  )
}

export default function EndOfServiceCalculator() {
  const [form, setForm] = useState({
    hireDate: '2019-01-01',
    endDate: '2025-12-31',
    basic: '6000',
    housing: '1500',
    transport: '500',
    otherFixed: '0',
    leaverType: 'termination',
    unusedLeaveDays: '0',
  })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const num = (v) => Math.max(0, Number(v) || 0)

  const hire = new Date(`${form.hireDate}T00:00:00Z`)
  const end = new Date(`${form.endDate}T00:00:00Z`)
  const valid = !Number.isNaN(hire.getTime()) && !Number.isNaN(end.getTime()) && end > hire
  const wage = num(form.basic) + num(form.housing) + num(form.transport) + num(form.otherFixed)
  const r = valid
    ? computeEndOfService({ hireDate: hire, endDate: end, monthlyWage: wage, leaverType: form.leaverType, unusedLeaveDays: num(form.unusedLeaveDays) })
    : null

  const wholeYears = r ? Math.floor(r.years) : 0
  const months = r ? Math.floor((r.years - wholeYears) * 12) : 0
  const factorText = r ? (FACTOR_LABEL[r.factor] ?? (r.factor < 0.5 ? 'ثلث المكافأة (2–5 سنوات)' : 'ثلثا المكافأة (5–10 سنوات)')) : ''

  return (
    <div className='grid gap-6 lg:grid-cols-[1.1fr_0.9fr] rounded-3xl border border-border-color bg-secondary/40 p-6 md:p-8'>
      <form className='grid gap-4 sm:grid-cols-2' onSubmit={(e) => e.preventDefault()}>
        <Field id='eos-hire' label='تاريخ مباشرة العمل'>
          <input id='eos-hire' type='date' value={form.hireDate} onChange={set('hireDate')} className={fieldCls} />
        </Field>
        <Field id='eos-end' label='تاريخ انتهاء العلاقة العمالية'>
          <input id='eos-end' type='date' value={form.endDate} onChange={set('endDate')} className={fieldCls} />
        </Field>
        <Field id='eos-basic' label='الراتب الأساسي (ريال)'>
          <input id='eos-basic' type='number' min='0' inputMode='decimal' value={form.basic} onChange={set('basic')} className={fieldCls} />
        </Field>
        <Field id='eos-housing' label='بدل السكن (ريال)'>
          <input id='eos-housing' type='number' min='0' inputMode='decimal' value={form.housing} onChange={set('housing')} className={fieldCls} />
        </Field>
        <Field id='eos-transport' label='بدل النقل (ريال)'>
          <input id='eos-transport' type='number' min='0' inputMode='decimal' value={form.transport} onChange={set('transport')} className={fieldCls} />
        </Field>
        <Field id='eos-other' label='بدلات ثابتة أخرى (ريال)' hint='لا تُدخل العمل الإضافي أو العمولات المتغيرة.'>
          <input id='eos-other' type='number' min='0' inputMode='decimal' value={form.otherFixed} onChange={set('otherFixed')} className={fieldCls} />
        </Field>
        <div className='sm:col-span-2'>
          <Field id='eos-type' label='سبب انتهاء العلاقة العمالية'>
            <select id='eos-type' value={form.leaverType} onChange={set('leaverType')} className={fieldCls}>
              {LEAVER_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
          </Field>
        </div>
        <Field id='eos-leave' label='رصيد الإجازات السنوية غير المستخدمة (أيام)'>
          <input id='eos-leave' type='number' min='0' inputMode='decimal' value={form.unusedLeaveDays} onChange={set('unusedLeaveDays')} className={fieldCls} />
        </Field>
      </form>

      <div className='rounded-2xl border border-primary/40 bg-primary/5 p-6 flex flex-col gap-4' aria-live='polite'>
        <h3 className='text-xl font-bold text-fg'>النتيجة</h3>
        {!r ? (
          <p className='text-fg/60'>أدخل تاريخ انتهاء لاحقاً لتاريخ المباشرة.</p>
        ) : (
          <>
            <dl className='flex flex-col gap-3 text-sm'>
              <div className='flex justify-between gap-4'><dt className='text-fg/65'>مدة الخدمة</dt><dd className='text-fg'>{wholeYears} سنة و{months} شهر ({r.serviceDays} يوم)</dd></div>
              <div className='flex justify-between gap-4'><dt className='text-fg/65'>الأجر الشهري المعتمد</dt><dd className='text-fg tabular-nums'>{fmtNumber(wage)} ريال</dd></div>
              <div className='flex justify-between gap-4'><dt className='text-fg/65'>أول 5 سنوات (نصف شهر عن كل سنة)</dt><dd className='text-fg tabular-nums'>{fmtNumber(r.firstFive)}</dd></div>
              <div className='flex justify-between gap-4'><dt className='text-fg/65'>ما بعد 5 سنوات (شهر عن كل سنة)</dt><dd className='text-fg tabular-nums'>{fmtNumber(r.beyondFive)}</dd></div>
              <div className='flex justify-between gap-4'><dt className='text-fg/65'>نسبة الاستحقاق</dt><dd className='text-fg'>{factorText}</dd></div>
              <div className='flex justify-between gap-4 border-t border-border-color pt-3'><dt className='text-fg/80'>مكافأة نهاية الخدمة</dt><dd className='text-fg font-semibold tabular-nums'>{fmtNumber(r.award)} ريال</dd></div>
              <div className='flex justify-between gap-4'><dt className='text-fg/65'>بدل الإجازات غير المستخدمة</dt><dd className='text-fg tabular-nums'>{fmtNumber(r.leavePay)} ريال</dd></div>
            </dl>
            <div className='rounded-xl bg-mainbg/60 border border-border-color p-4 flex justify-between items-baseline gap-4'>
              <span className='text-fg/80'>الإجمالي التقديري</span>
              <span className='text-3xl font-bold text-primary tabular-nums'>{fmtNumber(r.total)} ريال</span>
            </div>
            <p className='text-xs text-fg/45 leading-relaxed'>نتيجة تقديرية لأغراض التخطيط وليست استشارة قانونية. يُرجع إلى عقد العمل ولائحة تنظيم العمل ووزارة الموارد البشرية في الحالات الخاصة.</p>
          </>
        )}
      </div>
    </div>
  )
}
