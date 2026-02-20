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
                        <div className="relative card min-w-[342] w-full max-w-[342] h-[392] inset-shadow-services-card p-6 flex flex-col items-start justify-between rounded-lg border-2 border-border-color bg-mainbg">
                            <h3 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-full'>ERP Integration &amp; Business Central</h3>
                            <p className='mb-16 text-fg font-[inter]'>Unlock the power of efficiency, data insights, and streamlined operations. Embrace transformation, embrace excellence.</p>
                            <span className='font-[Newake] text-[160px] absolute right-6 top-6 text-edges leading-none' aria-hidden="true">01</span>
                        </div>
                    </div>
                    <div>
                        <div className="relative card min-w-[342] w-full max-w-[342] h-[392] inset-shadow-services-card p-6 flex flex-col items-start justify-between rounded-lg border-2 border-border-color bg-mainbg">
                            <h3 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-full'>ERP &amp; Dynamics BC Consultancy</h3>
                            <p className='mb-10 text-fg font-[inter]'>Expert Microsoft Dynamics NAV and Dynamics 365 Business Central consultancy. We help you strategize, select, and plan your ERP implementation for maximum ROI.</p>
                            <span className='font-[Newake] text-[160px] absolute right-6 top-6 text-edges leading-none' aria-hidden="true">02</span>
                        </div>
                    </div>
                    <div>
                        <div className="relative card min-w-[342] w-full max-w-[342] h-[392] inset-shadow-services-card p-6 flex flex-col items-start justify-between rounded-lg border-2 border-border-color bg-mainbg">
                            <h3 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-full'>Any ERP to BC Upgrade</h3>
                            <p className='mb-16 text-fg font-[inter]'>Upgrade from Any ERP to Dynamics 365 Business Central. Stay ahead with the latest ERP technology, cloud readiness, and enhanced productivity.</p>
                            <span className='font-[Newake] text-[160px] absolute right-6 top-6 text-edges leading-none' aria-hidden="true">03</span>
                        </div>
                    </div>
                    <div>
                        <div className="relative card min-w-[342] w-full max-w-[342] h-[392] inset-shadow-services-card p-6 flex flex-col items-start justify-between rounded-lg border-2 border-border-color bg-mainbg">
                            <h3 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-full'>ERP &amp; System Integrations</h3>
                            <p className='mb-10 text-fg font-[inter]'>Seamless integrations for Dynamics 365 Business Central and Dynamics NAV with CRM, e-commerce, and third-party apps. Streamline and automate operations.</p>
                            <span className='font-[Newake] text-[160px] absolute right-6 top-6 text-edges leading-none' aria-hidden="true">04</span>
                        </div>
                    </div>
                    <div>
                        <div className="relative card min-w-[342] w-full max-w-[342] h-[392] inset-shadow-services-card p-6 flex flex-col items-start justify-between rounded-lg border-2 border-border-color bg-mainbg">
                            <h3 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-full'>ERP Training &amp; Support</h3>
                            <p className='mb-10 text-fg font-[inter]'>Dynamics 365 BC and Dynamics NAV training and ongoing support. Get your team certified and keep your ERP running smoothly with our Microsoft Certified experts.</p>
                            <span className='font-[Newake] text-[160px] absolute right-6 top-6 text-edges leading-none' aria-hidden="true">05</span>
                        </div>
                    </div>
                    <div>
                        <div className="relative card min-w-[342] w-full max-w-[342] h-[392] inset-shadow-services-card p-6 flex flex-col items-start justify-between rounded-lg border-2 border-border-color bg-mainbg">
                            <h3 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-full'>Retail ERP Solutions</h3>
                            <p className='mb-10 text-fg font-[inter]'>Microsoft Dynamics 365 Business Central and Dynamics NAV for retail. Point of sale, inventory, and omnichannel solutions for small and medium retail businesses.</p>
                            <span className='font-[Newake] text-[160px] absolute right-6 top-6 text-edges leading-none' aria-hidden="true">06</span>
                        </div>
                    </div>
                    <div className='pr-[calc(50%-171px)]'>
                        <div className="relative card min-w-[342] w-full max-w-[342] h-[392] inset-shadow-services-card p-6 flex flex-col items-start justify-between rounded-lg border-2 border-border-color bg-mainbg">
                            <h3 className='z-1 font-[inter] text-fg text-4xl font-black leading-none w-full'>Data Analysis &amp; Power BI</h3>
                            <p className='mb-10 text-fg font-[inter]'>Finance analytics and business intelligence with Power BI and Dynamics 365 BC. Turn your ERP data into actionable insights and reports for better decisions.</p>
                            <span className='font-[Newake] text-[160px] absolute right-6 top-6 text-edges leading-none' aria-hidden="true">07</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
