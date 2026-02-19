'use client';
import React from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const ServicesHotizontalScrolling = () => {

    useGSAP(() => {
        let horizontalSection = document.querySelector('.horizontal');

        gsap.to(".horizontal", {
            x: () => -(horizontalSection.scrollWidth - window.innerWidth), //ensure smooth end
            scrollTrigger: {
                trigger: ".horizontal",
                start: 'center center',
                end: `${horizontalSection.scrollWidth} bottom`, //dynamic end
                pin: "#horizontal-scroll",
                scrub: 1,
                invalidateOnRefresh: true,
            }
        });
    })

    return (
        <div id='horizontal-scroll' className='mt-16'>
            <div className="horizontal-scroll-wrapper h-fit">
                <div className="horizontal flex items-center gap-16 h-full ">
                    <div className='pl-[calc(50%-171px)]'>
                        <div className="relative card min-w-[342] w-full max-w-[342] h-[392] inset-shadow-services-card p-6 flex flex-col items-start gap-36 rounded-lg border-2 border-border-color bg-mainbg">
                            <h1 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-4/5'>ERP Integration</h1>
                            <p className='mb-10 text-fg font-[inter]'>Unlock the power of efficiency, data insights, and streamlined operations. Embrace transformation, embrace excellence.</p>
                            <h2 className='font-[Newake] text-[160px] absolute right-6 top-6 text-secondary leading-none'>01</h2>
                        </div>
                    </div>
                    <div>
                        <div className="relative card min-w-[342] w-full max-w-[342] h-[392] inset-shadow-services-card p-6 flex flex-col items-start gap-36 rounded-lg border-2 border-border-color bg-mainbg">
                            <h1 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-4/5'>ERP Consultation</h1>
                            <p className='mb-10 text-fg font-[inter]'>Guiding Success: Your Future Starts with Consultation. Explore, Strategize, and Thrive with Our Expert Consultation Services.</p>
                            <h2 className='font-[Newake] text-[160px] absolute right-6 top-6 text-secondary leading-none'>02</h2>
                        </div>
                    </div>
                    <div>
                        <div className="relative card min-w-[342] w-full max-w-[342] h-[392] inset-shadow-services-card p-6 flex flex-col items-start gap-36 rounded-lg border-2 border-border-color bg-mainbg">
                            <h1 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-4/5'>System Upgrades</h1>
                            <p className='mb-10 text-fg font-[inter]'>Elevate Your System :Stay ahead of the competition and harness the latest technology innovations for enhanced productivity and unmatched efficiency.
                            </p>
                            <h2 className='font-[Newake] text-[160px] absolute right-6 top-6 text-secondary leading-none'>03</h2>
                        </div>
                    </div>
                    <div>
                        <div className="relative card min-w-[342] w-full max-w-[342] h-[392] inset-shadow-services-card p-6 flex flex-col items-start gap-36 rounded-lg border-2 border-border-color bg-mainbg">
                            <h1 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-4/5'>System Integrations</h1>
                            <p className='mb-10 text-fg font-[inter]'>Unlock Synergy: Elevate Your Business with Seamless System Integrations! Streamline, optimize, and supercharge your operations with hands free operations.</p>
                            <h2 className='font-[Newake] text-[160px] absolute right-6 top-6 text-secondary leading-none'>04</h2>
                        </div>
                    </div>
                    <div>
                        <div className="relative card min-w-[342] w-full max-w-[342] h-[392] inset-shadow-services-card p-6 flex flex-col items-start gap-36 rounded-lg border-2 border-border-color bg-mainbg">
                            <h1 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-4/5'>Training and Support</h1>
                            <p className='mb-10 text-fg font-[inter]'>Empowering Excellence: Your Success, Our Commitment. Discover the Power of Knowledge and Confidence with Our Training and Support.</p>
                            <h2 className='font-[Newake] text-[160px] absolute right-6 top-6 text-secondary leading-none'>05</h2>
                        </div>
                    </div>
                    <div>
                        <div className="relative card min-w-[342] w-full max-w-[342] h-[392] inset-shadow-services-card p-6 flex flex-col items-start gap-36 rounded-lg border-2 border-border-color bg-mainbg">
                            <h1 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-4/5'>Retail Solutions</h1>
                            <p className='mb-10 text-fg font-[inter]'>Elevate Retail: Empower Success with Our Solutions. Transform, Thrive, and Triumph in the World of Retail.
                            </p>
                            <h2 className='font-[Newake] text-[160px] absolute right-6 top-6 text-secondary leading-none'>06</h2>
                        </div>
                    </div>
                    <div className='pr-[calc(50%-171px)]'>
                        <div className="relative card min-w-[342] w-full max-w-[342] h-[392] inset-shadow-services-card p-6 flex flex-col items-start gap-36 rounded-lg border-2 border-border-color bg-mainbg">
                            <h1 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-4/5'>Data Analysis</h1>
                            <p className='mb-10 text-fg font-[inter]'>Illuminate Insights: Empowering Your Decisions with Data. Discover, Decide, and Dominate with Data Analysis
                            </p>
                            <h2 className='font-[Newake] text-[160px] absolute right-6 top-6 text-secondary leading-none'>07</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
