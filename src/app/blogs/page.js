import { createPublicClient } from '@/utils/supabase/public'
import BlogFilters from '@/components/BlogFilters'
import React from 'react'
import { Blogs } from '@/constants/Blogs';

// export const revalidate = 3600; // Revalidate every hour (ISR)

// const getSiteUrl = () => {
//     const fromEnv =
//         process.env.NEXT_PUBLIC_SITE_URL ||
//         process.env.SITE_URL ||
//         process.env.VERCEL_PROJECT_PRODUCTION_URL

//     if (fromEnv) {
//         return fromEnv.startsWith('http') ? fromEnv : `https://${fromEnv}`
//     }

//     return 'https://www.indexofsolutions.com'
// }
// const siteUrl = getSiteUrl()

// export const metadata = {
//     title: 'Blogs & Success Stories | Microsoft Dynamics 365 Business Central',
//     description: 'Read our blogs and success stories on Microsoft Dynamics 365 Business Central, Dynamics NAV, ERP implementation, consultancy, and best practices. Index of Solutions—12+ years of ERP expertise.',
//     alternates: {
//         canonical: '/blogs',
//     },
//     openGraph: {
//         url: `${siteUrl}/blogs`,
//         title: 'Blogs & Success Stories | Dynamics 365 Business Central | Index of Solutions',
//         description: 'Blogs and success stories on Dynamics 365 Business Central, Dynamics NAV, ERP implementation and consultancy.',
//     },
//     twitter: {
//         title: 'Blogs | Dynamics 365 Business Central | Index of Solutions',
//         description: 'Blogs and success stories on Dynamics 365 Business Central, Dynamics NAV, and ERP.',
//     },
// }

export default async function Page() {

    // const jsonLd = {
    //     '@context': 'https://schema.org',
    //     '@type': 'Blog',
    //     name: 'Index of Solutions Blog – Microsoft Dynamics NAV & Business Central',
    //     description: 'Blogs and success stories on ERP implementation, Dynamics 365 BC, and Dynamics NAV.',
    //     url: `${siteUrl}/blogs`,
    //     publisher: {
    //         '@type': 'Organization',
    //         name: 'Index of Solutions',
    //         url: siteUrl,
    //     },
    // }

    return (
        <section className='relative w-full h-full px-4 md:px-8 py-section-vertical-sm md:py-section-vertical'>
            <div className='flex flex-col gap-1 items-center justify-center'>
                <div className="flex gap-8 items-center text-fg font-[newake] text-4xl mx-auto md:text-6xl">
                    <div className='hidden md:block glow-line-left w-72'></div>
                    <h1>Blogs</h1>
                    <div className='hidden md:block glow-line-right w-72'></div>
                </div>
                <div className="w-full md:hidden glow-line"></div>
                <h2 className='font-[interItalic] text-fg'>Blogs & Success Stories</h2>
            </div>
            <div className="relative container max-w-[1366px] mx-auto pt-[60] w-full">
                <div className="w-full flex flex-col gap-8">
                    <BlogFilters blogs={Object.entries(Blogs).map(([key, value]) => ({ ...value, id: key })).reverse()} />
                </div>
            </div>
        </section>
    );
}
