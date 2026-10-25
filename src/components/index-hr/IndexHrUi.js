import React from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Minus, X } from 'lucide-react'

export const PRIMARY_BUTTON =
  'inline-flex items-center justify-center gap-2 px-6 py-3 bg-[linear-gradient(90deg,#3B82F6_0%,#619DFF_50%,#3B82F6_100%)] rounded-lg border border-primary-button-border shadow-primary-button-shadow text-white font-[inter] font-semibold'
export const SECONDARY_BUTTON =
  'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border-color bg-secondary/40 hover:bg-secondary text-fg font-[inter] font-semibold transition-colors'

export function PageSection({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative w-full px-4 md:px-8 py-section-vertical-sm md:py-section-vertical ${className}`}>
      <div className='relative max-w-[1366px] mx-auto w-full'>{children}</div>
    </section>
  )
}

export function Eyebrow({ children }) {
  return (
    <span className='inline-block font-[jetBrainsMono] text-xs uppercase tracking-[0.2em] text-primary border border-primary/40 bg-primary/10 rounded-full px-3 py-1'>
      {children}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', as: Tag = 'h2' }) {
  const centred = align === 'center'
  return (
    <div className={`flex flex-col gap-4 ${centred ? 'items-center text-center mx-auto' : 'items-start'} max-w-3xl`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag className='font-[newake] text-fg text-4xl md:text-5xl leading-tight'>{title}</Tag>
      {subtitle && <p className='font-[inter] text-fg/70 text-lg leading-relaxed'>{subtitle}</p>}
    </div>
  )
}

export function PhoneShot({ shot, className = '', priority = false }) {
  return (
    <div className={`rounded-[2.2rem] border-[6px] border-[#2a2a30] bg-[#2a2a30] shadow-[0_30px_80px_-20px_rgba(59,130,246,0.45)] overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={shot.src} alt={shot.alt} width={600} height={1301} loading={priority ? 'eager' : 'lazy'} className='block w-full h-auto rounded-[1.7rem]' />
    </div>
  )
}

export function CheckList({ items, className = '' }) {
  return (
    <ul className={`flex flex-col gap-3 font-[inter] ${className}`}>
      {items.map((item) => (
        <li key={item} className='flex items-start gap-3 text-fg/85'>
          <Check className='mt-0.5 size-5 shrink-0 text-primary' aria-hidden='true' />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

const STATUS_STYLE = {
  yes: { Icon: Check, cls: 'text-emerald-400', label: 'Yes' },
  partial: { Icon: Minus, cls: 'text-amber-400', label: 'Partial' },
  no: { Icon: X, cls: 'text-fg/35', label: 'No' },
}

export function StatusCell({ cell }) {
  const style = STATUS_STYLE[cell.status]
  if (!style) return <span className='text-fg/80'>{cell.text}</span>
  const { Icon, cls, label } = style
  return (
    <span className='flex items-start gap-2'>
      <Icon className={`mt-0.5 size-4 shrink-0 ${cls}`} aria-label={label} />
      <span className={cell.status === 'no' ? 'text-fg/45' : 'text-fg/85'}>{cell.text}</span>
    </span>
  )
}

export function FaqList({ items }) {
  return (
    <div className='flex flex-col gap-3 w-full max-w-3xl mx-auto'>
      {items.map(({ q, a }) => (
        <details key={q} className='group rounded-xl border border-border-color bg-secondary/30 open:bg-secondary/50 transition-colors'>
          <summary className='flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-[inter] font-semibold text-fg'>
            {q}
            <span className='text-primary text-xl leading-none transition-transform group-open:rotate-45' aria-hidden='true'>+</span>
          </summary>
          <p className='px-5 pb-5 font-[inter] text-fg/70 leading-relaxed'>{a}</p>
        </details>
      ))}
    </div>
  )
}

export function faqJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  }
}

export function CtaBand({ title, text, primary, secondary }) {
  return (
    <PageSection>
      <div className='relative overflow-hidden rounded-3xl border border-primary/40 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.28),transparent_65%)] bg-secondary/40 px-6 py-14 md:px-16 md:py-20 text-center flex flex-col items-center gap-6'>
        <h2 className='font-[newake] text-fg text-4xl md:text-5xl max-w-3xl'>{title}</h2>
        <p className='font-[inter] text-fg/70 text-lg max-w-2xl'>{text}</p>
        <div className='flex flex-wrap justify-center gap-4'>
          <Link href={primary.href} className={PRIMARY_BUTTON}>
            {primary.label} <ArrowRight className='size-4 rtl:-scale-x-100' aria-hidden='true' />
          </Link>
          {secondary && (
            <Link href={secondary.href} className={SECONDARY_BUTTON}>
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </PageSection>
  )
}

export function Breadcrumbs({ items }) {
  return (
    <nav aria-label='Breadcrumb' className='font-[inter] text-sm text-fg/50'>
      <ol className='flex flex-wrap items-center gap-2'>
        {items.map(({ label, href }, i) => (
          <li key={label} className='flex items-center gap-2'>
            {i > 0 && <span aria-hidden='true'>/</span>}
            {href ? <Link href={href} className='hover:text-primary'>{label}</Link> : <span aria-current='page' className='text-fg/75'>{label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function breadcrumbJsonLd(siteUrl, items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ label, href }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: label,
      ...(href ? { item: `${siteUrl}${href}` } : {}),
    })),
  }
}

// Long-form article body: headings, paragraphs, lists and tables from plain JSX.
export function Prose({ children }) {
  return (
    <div className='font-[inter] text-fg/80 text-lg leading-relaxed flex flex-col gap-5
      [&_h2]:font-[newake] [&_h2]:text-fg [&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:mt-8 [&_h2]:scroll-mt-28
      [&_h3]:font-[newake] [&_h3]:text-fg [&_h3]:text-2xl [&_h3]:mt-4
      [&_strong]:text-fg [&_a]:text-primary [&_a:hover]:underline
      [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:list-disc [&_ul]:ps-6 [&_ol]:flex [&_ol]:flex-col [&_ol]:gap-2 [&_ol]:list-decimal [&_ol]:ps-6
      [&_table]:w-full [&_table]:text-base [&_table]:border-collapse [&_th]:bg-secondary [&_th]:text-fg [&_th]:text-start [&_th]:p-3 [&_th]:border [&_th]:border-border-color
      [&_td]:p-3 [&_td]:border [&_td]:border-border-color [&_td]:align-top'>
      {children}
    </div>
  )
}

export function Callout({ title, children }) {
  return (
    <aside className='rounded-2xl border border-primary/40 bg-primary/5 p-6 flex flex-col gap-2 font-[inter]'>
      {title && <p className='font-semibold text-fg'>{title}</p>}
      <div className='text-fg/75 leading-relaxed'>{children}</div>
    </aside>
  )
}

export function RelatedLinks({ title, links }) {
  return (
    <div className='flex flex-col gap-5'>
      <h2 className='font-[newake] text-fg text-3xl'>{title}</h2>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {links.map(({ href, label, text }) => (
          <Link key={href} href={href} className='group rounded-2xl border border-border-color bg-secondary/30 p-5 flex flex-col gap-2 hover:border-primary/60 transition-colors'>
            <span className='font-[inter] font-semibold text-fg group-hover:text-primary'>{label}</span>
            {text && <span className='font-[inter] text-sm text-fg/60'>{text}</span>}
          </Link>
        ))}
      </div>
    </div>
  )
}
