import BlogFilters from '@/components/BlogFilters';
import { createClient } from '@/utils/supabase/server'
import React from 'react'

const getSiteUrl = () => {
    const fromEnv =
        process.env.NEXT_PUBLIC_SITE_URL ||
        process.env.SITE_URL ||
        process.env.VERCEL_PROJECT_PRODUCTION_URL

    if (fromEnv) {
        return fromEnv.startsWith('http') ? fromEnv : `https://${fromEnv}`
    }

    return 'https://indexofsolutions.com'
}

const siteUrl = getSiteUrl()

export const metadata = {
    title: 'Blogs & Success Stories | Microsoft Dynamics 365 Business Central',
    icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',

  },
    description: 'Read our blogs and success stories on Microsoft Dynamics 365 Business Central, Dynamics NAV, ERP implementation, consultancy, and best practices. Index of Solutions—12+ years of ERP & Business Central expertise.',
    alternates: {
        canonical: `${siteUrl}/blogs`,
    },
    openGraph: {
        url: `${siteUrl}/blogs`,
        title: 'Blogs & Success Stories | Dynamics 365 Business Central | Index of Solutions',
        description: 'Blogs and success stories on Dynamics 365 BC, Dynamics NAV, ERP implementation and consultancy.',
    },
    twitter: {
        title: 'Blogs | Dynamics 365 Business Central | Index of Solutions',
        description: 'Blogs and success stories on Dynamics 365 BC, Dynamics NAV, and ERP.',
    },
}

export default async function Blogs() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Index of Solutions Blog – Microsoft Dynamics NAV & Business Central',
        description: 'Blogs and success stories on ERP implementation, Dynamics 365 BC, and Dynamics NAV.',
        url: `${siteUrl}/blogs`,
        publisher: {
            '@type': 'Organization',
            name: 'Index of Solutions',
            url: siteUrl,
        },
    }

    const supabase = await createClient();
    const { data: Blogs, error } = await supabase
        .from('Blogs')
        .select('*')
        .order('date', { ascending: false });

    if(error) console.log(error);

    return (
        <section className='relative w-full h-full px-4 md:px-8 py-section-vertical-sm md:py-section-vertical'>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className='flex flex-col gap-1 items-center justify-center'>
                <div className="flex gap-8 items-center text-fg font-[newake] text-4xl mx-auto md:text-6xl">
                    <div className='hidden md:block glow-line-left w-72'></div>
                    <h1>Blogs</h1>
                    <div className='hidden md:block glow-line-right w-72'></div>
                </div>
                <div className="w-full md:hidden glow-line"></div>
                <h2 className='font-[interItalic] text-fg'>Blogs & Success Stories</h2>
            </div>
            <div className="relative container max-w-[1366] mx-auto pt-[60] w-full">
                <div className="relative w-full flex flex-col gap-8">
                    <BlogFilters blogs={Object.entries(Blogs).map(([key, value]) => ({ ...value, id: key })).reverse()} />
                </div>
            </div>
        </section>
    )
}
