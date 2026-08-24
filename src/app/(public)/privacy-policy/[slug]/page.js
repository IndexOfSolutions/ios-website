import React from 'react'
import { notFound } from 'next/navigation'

import { PRIVACY_POLICIES, getPrivacyPolicy } from '@/constants/privacyPolicies'
import { PolicyDocument } from '@/components/PolicyDocument'
import { getSiteUrl } from '@/lib/site-url'

// Every policy is known at build time and there is no data source behind them,
// so the whole tree is prerendered and unknown slugs 404 instead of rendering.
export const dynamicParams = false

export function generateStaticParams() {
  return PRIVACY_POLICIES.map((policy) => ({ slug: policy.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const policy = getPrivacyPolicy(slug)

  if (!policy) return { title: 'Privacy Policy' }

  const siteUrl = getSiteUrl()
  const url = `${siteUrl}/privacy-policy/${policy.slug}`
  // The (public) layout appends "| Index of Solutions" via title.template, so
  // the page title stays bare and only the social cards spell the brand out.
  const title = `${policy.title} | Index of Solutions`

  return {
    title: policy.title,
    description: policy.metaDescription,
    keywords: policy.keywords,
    alternates: { canonical: url },
    openGraph: { url, title, description: policy.metaDescription },
    twitter: { card: 'summary', title, description: policy.metaDescription },
  }
}

export default async function Page({ params }) {
  const { slug } = await params
  const policy = getPrivacyPolicy(slug)

  if (!policy) notFound()

  return <PolicyDocument policy={policy} />
}
