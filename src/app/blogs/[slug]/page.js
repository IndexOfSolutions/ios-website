import { createClient } from '@/utils/supabase/server';
import Image from 'next/image'
import React from 'react'
import { notFound } from 'next/navigation'

const getSiteUrl = () => {
    const fromEnv =
        process.env.NEXT_PUBLIC_SITE_URL ||
        process.env.SITE_URL ||
        process.env.VERCEL_PROJECT_PRODUCTION_URL;
    if (fromEnv) return fromEnv.startsWith('http') ? fromEnv : `https://${fromEnv}`;
    return 'https://www.indexofsolutions.com';
};

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const supabase = await createClient();
    const { data: blog } = await supabase
        .from('Blogs')
        .select('title, excerpt, author, date')
        .eq('link', slug)
        .single();

    if (!blog) return { title: 'Blog | Index of Solutions' };

    const siteUrl = getSiteUrl();
    const description = blog.excerpt || `Read ${blog.title} by Index of Solutions. Microsoft Dynamics NAV & Business Central ERP experts.`;
    const title = blog.title;

    return {
        title,
        description,
        alternates: { canonical: `${siteUrl}/blogs/${slug}` },
        openGraph: {
            url: `${siteUrl}/blogs/${slug}`,
            title: `${title} | Index of Solutions`,
            description,
            type: 'article',
            publishedTime: blog.date,
            authors: blog.author ? [blog.author] : undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | Index of Solutions`,
            description,
        },
    };
}

export default async function Page({ params }) {
    const { slug } = await params;

    const supabase = await createClient();

    const { data: blog, error } = await supabase
      .from("Blogs")
      .select("*")
      .eq("link", slug)
      .single();

    if (error || !blog) notFound();

    const siteUrl = getSiteUrl();
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: blog.title,
        description: blog.excerpt || blog.title,
        author: { '@type': 'Person', name: blog.author },
        datePublished: blog.date,
        publisher: { '@type': 'Organization', name: 'Index of Solutions', url: siteUrl },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blogs/${slug}` },
    };

    return (
        <section className='relative w-full h-full px-4 md:px-8 py-section-vertical-sm md:py-section-vertical'>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
          <div className="relative container max-w-[1366px] mx-auto w-full">
            <div className="flex flex-col justify-center gap-16 lg:flex-row">
              <Image src={blog.imageURL} alt={blog.title || 'Blog image'} width={100} height={100} className='w-full max-w-96'/>
              <div className='grid grid-cols-1 md:grid-cols-[1fr_auto] md:grid-rows-[min-content_min-content] gap-8'>
                <h1 className='font-[newake] text-fg text-5xl md:max-w-[684] max-h-fit'>{blog.title}</h1>
                <div className="w-full md:max-w-60 h-full md:row-span-2 flex flex-col gap-4 text-fg border-l-3 border-secondary pl-4">
                  <span className='w-fit leading-none font-[inter] bg-primary px-2 py-2 rounded-2xl text-sm'>{blog.type}</span>
                  <p>Written by <span className="font-bold text-primary">{blog.author}</span></p>
                  <div className="w-full flex justify-between items-center">
                    <span>{blog.date}</span>
                  </div>
                </div>
                <div className="w-full max-w-[684] mx-auto h-fit break-inside-avoid leading-relaxed text-fg" dangerouslySetInnerHTML={{ __html: blog.body }}></div>
              </div>
            </div>
          </div>
        </section>
    )
}