import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <section className='relative w-full h-full px-4 md:px-8 py-section-vertical-sm md:py-section-vertical'>
            <div className="relative container flex flex-col gap-16 max-w-[1366px] mx-auto w-full">
                <div className='flex flex-col gap-1 items-center text-center justify-center'>
                    <div className="flex gap-8 items-center text-fg font-[newake] text-4xl mx-auto md:text-6xl">
                        <div className='hidden md:block glow-line-left w-72'></div>
                        <h1>Business Central Implementation Case Studies</h1>
                        <div className='hidden md:block glow-line-right w-72'></div>
                    </div>
                    <div className="w-full md:hidden glow-line"></div>
                </div>
                <div className="flex flex-col gap-16 w-full max-w-[800] mx-auto text-white">
                    <Image src={`/assets/images/pages/business-central-case-studies-index-of-solutions.webp`} alt={"Business Central Case Studies Index Of Solutions Microsoft Business Solution Partner"} width={100} height={100} className='w-full' />
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col gap-2">
                            <h3 className='font-[inter] text-xl'><b>Mazen Pharmacy — Pharmaceutical Inventory & Retail:</b></h3>
                            <p className='ml-8'><b>Challenge:</b> Managing pharmaceutical inventory across multiple retail locations with expiry tracking and supply chain visibility.</p>
                            <p className='ml-8'><b>Solution:</b> Full Business Central implementation covering inventory, purchasing, and retail sales operations.</p>
                            <p className='ml-8'><b>Result:</b> Seamless supply chain continuity during transition. Mazen Pharmacy now manages all pharmaceutical inventory and retail operations in a single connected system.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className='font-[inter] text-xl'><b>Empire Cinema — Multi-Location Financial Reporting:</b></h3>
                            <p className='ml-8'><b>Challenge:</b> Real-time financial reporting across multiple cinema locations with consolidated accounting.</p>
                            <p className='ml-8'><b>Solution:</b> Customized Business Central implementation with multi-location accounting and consolidated reporting dashboards.</p>
                            <p className='ml-8'><b>Result:</b> Finance team now closes monthly accounts faster with full visibility across all locations.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className='font-[inter] text-xl'><b>Sports Experts — Retail Inventory & Sales:</b></h3>
                            <p className='ml-8'><b>Challenge:</b> Seasonal inventory management and sales tracking for a high-volume sports retail business.</p>
                            <p className='ml-8'><b>Solution:</b> Business Central with tailored inventory and sales configuration plus full staff training.</p>
                            <p className='ml-8'><b>Result:</b> Full team adoption within weeks. Improved stock management and sales tracking across the business.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className='font-[inter] text-xl'><b>AMB Group — Multi-Company ERP Integration:</b></h3>
                            <p className='ml-8'><b>Challenge:</b> Integrating diverse business operations across multiple companies into one unified ERP platform.</p>
                            <p className='ml-8'><b>Solution:</b> Complex Business Central implementation with custom development for multi-company consolidation.</p>
                            <p className='ml-8'><b>Result:</b> All companies now operate on a single platform with full cross-company visibility.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
