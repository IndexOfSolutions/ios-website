import { ServicesHotizontalScrolling } from '@/components/animations/ServicesHotizontalScrolling'
import React from 'react'

export const WhatWeOffer = () => {
    return (
        <section id="what-we-offer" className='relative py-section-vertical-sm md:py-section-vertical'>
            <div className='flex flex-col gap-1 items-center justify-center'>
                <div className="flex gap-8 items-center text-fg font-[newake] text-4xl mx-auto md:text-6xl">
                    <div className='hidden md:block glow-line-left w-72'></div>
                    <h2>What We Offer</h2>
                    <div className='hidden md:block glow-line-right w-72'></div>
                </div>
                <div className="w-full md:hidden glow-line"></div>
                <h3 className='font-[interItalic] text-fg'>Dynamics 365 Business Central &amp; ERP Solutions</h3>
            </div>
            <div className="w-full overflow-hidden">
                <ServicesHotizontalScrolling /> 
            </div>
        </section>
    )
}
