import BlogFilters from '@/components/BlogFilters';
import { createClient } from '@/utils/supabase/server'
import React from 'react'

export default async function Blogs() {

    const supabase = await createClient();
    const { data: Blogs, error } = await supabase
        .from('Blogs')
        .select('*')
        .order('date', { ascending: false });

    if(error) console.log(error);

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
                <div className="relative w-full flex flex-col gap-8">
                    <BlogFilters blogs={Object.entries(Blogs).map(([key, value]) => ({ ...value, id: key })).reverse()} />
                </div>
            </div>
        </section>
    )
}
