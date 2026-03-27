import { Blogs } from '@/constants/Blogs';
import React from 'react'

export default function pages() {

    console.log(Blogs);

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
            <div className="relative container max-w-[1366] mx-auto pt-[60] w-full">
                <div className="w-full flex flex-col gap-8">
                    {/* <Suspense fallback={<div className="text-fg">Loading blogs...</div>}>
                        <BlogFilters blogs={Object.entries(Blogs).map(([key, value]) => ({ ...value, id: key })).reverse()} />
                    </Suspense> */}
                    <p className='text-fg'>Blogs coming soon!</p>
                </div>
            </div>
        </section>
    )
}
