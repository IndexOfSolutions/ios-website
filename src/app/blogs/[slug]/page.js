import { createClient } from '@/utils/supabase/server';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Page({params}) {
    const { slug } = await params

    const supabase = await createClient();

    const { data: Blogs, error } = await supabase
      .from("Blogs")
      .select("*")
      .eq("link", slug) 
      .single();

      // const { data: BlogsImages } = await supabase.storage.from('BlogsImages').getPublicUrl(Blogs.imageURL).data.publicUrl
      // console.log(await supabase.storage.from('BlogsImages').getPublicUrl(Blogs.imageURL).data.publicUrl)

    return (
        <section className='relative w-full h-full px-4 md:px-8 py-section-vertical-sm md:py-section-vertical'>
          <div className="relative container max-w-[1366px] mx-auto w-full">
            <div className="flex flex-col justify-center gap-16 lg:flex-row">
              <Image src={Blogs.imageURL} alt='' width={100} height={100} className='w-full max-w-96'/>
              <div className='grid grid-cols-1 md:grid-cols-[1fr_auto] md:grid-rows-[min-content_min-content] gap-8'>
                <h1 className='font-[newake] text-fg text-5xl md:max-w-[684] max-h-fit'>{Blogs.title}</h1>
                <div className="w-full md:max-w-60 h-full md:row-span-2 flex flex-col gap-4 text-fg border-l-3 border-secondary pl-4">
                  <span className='w-fit leading-none font-[inter] bg-primary px-2 py-2 rounded-2xl text-sm'>{Blogs.type}</span>
                  <p>Written by <span className="font-bold text-primary">{Blogs.author}</span></p>
                  <div className="w-full flex justify-between items-center">
                    <span>{Blogs.date}</span>
                  </div>
                </div>
                <div className="w-full max-w-[684] mx-auto h-fit break-inside-avoid leading-relaxed text-fg" dangerouslySetInnerHTML={{ __html: Blogs.body }}></div>
              </div>
            </div>
          </div>
        </section>
    )
}