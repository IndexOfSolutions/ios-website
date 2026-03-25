import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import React from 'react'

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
//     title: 'Blogs & Success Stories | Microsoft Dynamics NAV & Business Central',
//     description: 'Read our blogs and success stories on Microsoft Dynamics 365 Business Central, Dynamics NAV, ERP implementation, consultancy, and best practices. Index of Solutions—12+ years of ERP expertise.',
//     alternates: {
//         canonical: '/blogs',
//     },
//     openGraph: {
//         url: `${siteUrl}/blogs`,
//         title: 'Blogs & Success Stories | Dynamics NAV & Business Central | Index of Solutions',
//         description: 'Blogs and success stories on Dynamics 365 BC, Dynamics NAV, ERP implementation and consultancy.',
//     },
//     twitter: {
//         title: 'Blogs | Dynamics NAV & Business Central | Index of Solutions',
//         description: 'Blogs and success stories on Dynamics 365 BC, Dynamics NAV, and ERP.',
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
    
    const supabase = await createClient();
    const { data: blogs, error } = await supabase
        .from('Blogs')
        .select('*')
        .order('date', { ascending: false });

    if(error) {
        console.error('Error fetching blogs:', error);
    }

    const blogsList = blogs || [];

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
                    <div className="flex items-center gap-4">
                        <button className="px-4 py-2 bg-mainbg border-[1] border-primary text-fg rounded-lg">
                            All
                        </button>
                        <button className="px-4 py-2 bg-mainbg border-[1] border-primary text-fg rounded-lg">
                            Blogs
                        </button>
                        <button className="px-4 py-2 bg-mainbg border-[1] border-primary text-fg rounded-lg">
                            Success Stories
                        </button>
                    </div>
                    <div className="columns-1 md:columns-3 gap-4 w-full text-fg">
                        {
                            !blogsList.length ? (
                                <p className='text-fg'>No Blogs Found</p>
                            ) :
                                (
                                    blogsList.map((blog) =>
                                    (
                                        <Link
                                            key={blog.id}
                                            href={`/blogs/${blog.link}`}
                                            target='_blank'
                                            className="break-inside-avoid mb-4 w-full p-6 bg-secondary rounded-lg flex flex-col gap-4"
                                        >
                                            <div className="flex justify-between">
                                                <div className="flex flex-col gap-1">
                                                    <span className="font-[inter] font-black text-sm">
                                                        {blog.author}
                                                    </span>
                                                    <span className="text-xs">{blog.date}</span>
                                                </div>
                                                <div className="text-xs px-1.5 py-1 h-fit leading-none bg-primary rounded-2xl">
                                                    <span className='capitalize'>{blog.type}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <h2 className="text-xl font-[inter] font-black">
                                                    {blog.title}
                                                </h2>
                                                {blog.excerpt && (
                                                    <p className="line-clamp-3">{blog.excerpt}</p>
                                                )}
                                            </div>
                                        </Link>
                                    )
                                    )
                                )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
