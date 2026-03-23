import Image from 'next/image'
import React from 'react'

export default function IndustriesLayout({children, title, imageURL, imageAlt}) {
  return (
    <section className='relative w-full h-full px-4 md:px-8 py-section-vertical-sm md:py-section-vertical'>
            <div className="relative container flex flex-col gap-16 max-w-[1366px] mx-auto w-full">
                <div className='flex flex-col gap-1 items-center text-center justify-center'>
                    <div className="flex gap-8 items-center text-fg font-[newake] text-4xl mx-auto md:text-6xl">
                        <div className='hidden xl:block glow-line-left w-72'></div>
                        <h1>{title}</h1>
                        <div className='hidden xl:block glow-line-right w-72'></div>
                    </div>
                    <div className="w-full xl:hidden glow-line"></div>
                </div>
                <div className="flex flex-col gap-16 w-full max-w-[800] mx-auto text-white">
                    <Image src={`/assets/images/pages/${imageURL}.webp`} alt={imageAlt} width={100} height={100} className='w-full' />
                    {children}
                </div>
            </div>
        </section>
  )
}
