import { HeroLightEffect } from '@/components/SVGs/HeroLightEffect';
import { ImageComparisonSlider } from '@/components/animations/ImageComparisonSlider';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Hero = () => {
    return (
        <section id='hero' className='w-full py-section-vertical-sm md:py-section-vertical'>
            <div className="w-full mx-auto flex flex-col items-center gap-8">
                <div className='w-fit px-4 md:px-8 flex items-center py-2 gap-[10] bg-secondary rounded-lg text-fg font-[inter] text-sm'>
                    <Image src={"/assets/images/SVGs/microsoft.svg"} width={18} height={18} alt='' />
                    <span>Microsoft Certified Partner</span>
                </div>
                <div className='text-6xl px-4 md:px-8 md:text-8xl text-center text-fg font-[newake] w-full max-w-[960]'>
                    <h1 className='leading-none'>Unleash The Power of Finance Analytics with Business Central</h1>
                </div>
                <div className='text-base px-4 md:px-8 text-fg font-[inter] text-center w-full max-w-[660] z-1'>
                    <p>Serving businesses accross Lebanon, the Middle East and beyond, we deliver high-performance ERP ecosystems engineered on <b className="font-[interItalic] font-black">Microsoft Dynamics 365 Business Central</b> and <b className="font-interItalic font-black">Power BI</b>. We fortify your infrastructure for aggressive local and global expansion.</p>
                </div>
                <div className='relative flex justify-center text-fg w-full'>
                    <div className="absolute top-1/2 -translate-y-1/2 w-full">
                        <HeroLightEffect />
                    </div>
                    <Link href={'/#contact-us'} className='px-6 py-3 bg-[linear-gradient(90deg,#3B82F6_0%,#619DFF_50%,#3B82F6_100%)] rounded-lg border-primary-button-border shadow-primary-button-shadow z-1'>
                        Upgrade to Business Central
                    </Link>
                </div>
            </div>
            <ImageComparisonSlider />
        </section>
    )
}
