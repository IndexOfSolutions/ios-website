import React from 'react'
import Link from 'next/link'

export const vendorAnchor = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

// Summary table plus one card per vendor, for "best HR software" roundups.
// labels lets the same layout serve English and Arabic pages.
export default function VendorRoundup({ vendors, labels }) {
  return (
    <>
      <div className='w-full overflow-x-auto rounded-2xl border border-border-color'>
        <table className='w-full min-w-[760px] border-collapse font-[inter] text-sm'>
          <caption className='sr-only'>{labels.caption}</caption>
          <thead>
            <tr className='bg-secondary text-fg'>
              <th scope='col' className='text-start p-4'>{labels.platform}</th>
              <th scope='col' className='text-start p-4'>{labels.bestFor}</th>
              <th scope='col' className='text-start p-4'>{labels.price}</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((v, i) => (
              <tr key={v.name} className={`border-t border-border-color ${i % 2 ? 'bg-secondary/20' : 'bg-mainbg'}`}>
                <th scope='row' className='text-start p-4 text-fg font-semibold'>
                  <a href={`#${vendorAnchor(v.name)}`} className='hover:text-primary'>{v.name}</a>
                </th>
                <td className='p-4 text-fg/80'>{v.bestFor}</td>
                <td className='p-4 text-fg/70'>{v.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='flex flex-col gap-8'>
        {vendors.map((v, i) => (
          <article key={v.name} id={vendorAnchor(v.name)} className='scroll-mt-28 rounded-2xl border border-border-color bg-secondary/30 p-7 flex flex-col gap-4 font-[inter]'>
            <h2 className='font-[newake] text-3xl text-fg'>{i + 1}. {v.name}</h2>
            <p className='text-fg/80'><strong className='text-fg'>{labels.bestFor}:</strong> {v.bestFor}</p>
            <p className='text-fg/70'><strong className='text-fg'>{labels.price}:</strong> {v.price}</p>
            <div className='grid gap-6 md:grid-cols-2'>
              <div className='flex flex-col gap-2'>
                <h3 className='font-semibold text-emerald-400'>{labels.strengths}</h3>
                <ul className='flex flex-col gap-1.5 text-fg/75 list-disc ps-5'>{v.pros.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='font-semibold text-amber-400'>{labels.tradeOffs}</h3>
                <ul className='flex flex-col gap-1.5 text-fg/75 list-disc ps-5'>{v.cons.map((c) => <li key={c}>{c}</li>)}</ul>
              </div>
            </div>
            {v.href && <Link href={v.href} className='text-primary text-sm hover:underline self-start'>{v.linkLabel}</Link>}
          </article>
        ))}
      </div>
    </>
  )
}
