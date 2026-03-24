import { TextMarquee } from '@/components/animations/TextMarquee'
import { ContactUsForm } from '@/components/ui/ContactUsForm'
import { IconWrapper } from '@/components/ui/IconWrapper'
import Link from 'next/link'
import React from 'react'

export const ContactUs = () => {
    return (
        <section id='contact-us' className='w-full px-4 md:px-8 py-section-vertical-sm md:py-section-vertical overflow-x-hidden'>
            <div className="relative mx-auto max-w-[1728] flex flex-col gap-4 overflow-x-hidden">
                <div className='absolute top-0 left-0 w-16 h-full left-side-fade-mainBg'></div>
                <TextMarquee />
                <div className='absolute top-0 right-0 w-16 h-full right-side-fade-mainBg'></div>
            </div>
            <div className='relative container max-w-[1366] mx-auto flex flex-col md:flex-row md:justify-between gap-8 pt-16'>
                <div className="flex flex-col gap-4 text-fg font-[inter] w-full max-w-[686]">
                    <h2 className='text-5xl font-[inter] font-bold'>Contact Us</h2>
                    <ContactUsForm />
                </div>
                <div className="flex flex-col gap-  12 max-w-[552]">
                    <h3 className='font-[inter] font-bold text-5xl text-fg'>Our Information</h3>
                    <div className="flex flex-col gap-8 text-fg font-[inter] text-base">
                        <Link href={"mailto:y.nasser@indexofsolutions.com?subject=Service Inquiry [Type of Service Inquiry]&body=Hello, I'm [Your Name] from [Company Name], a/an [Type of Business] firm . We've been looking into your work and would love to partner with you for [Services Needed]. You can reach me at [Phone Number] and [Email] to discuss how we can get started."} className="grid grid-cols-[auto_1fr] gap-4 items-center">
                            <div className='relative w-[55] h-[55]'>
                                <IconWrapper icon={"fa-solid fa-at"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-[2px"} />
                                <IconWrapper icon={"fa-solid fa-at"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-xs"} />
                                <IconWrapper icon={"fa-solid fa-at"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-[6px]"} />
                                <IconWrapper icon={"fa-solid fa-at"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-sm"} />
                                <IconWrapper icon={"fa-solid fa-at"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-[10px]"} />
                                <IconWrapper icon={"fa-solid fa-at"} color={"var(--color-primary)"} size="2x" className={"absolute bg-transparent top-1/2 left-1/2 -translate-1/2"} />
                            </div>
                            <span>y.nasser@indexofsolutions.com</span>
                        </Link>
                        <Link href={"tel:+9613865174"} className="grid grid-cols-[auto_1fr] gap-4 items-center">
                            <div className='relative w-[55] h-[55]'>
                                <IconWrapper icon={"fa-solid fa-phone"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-[2px]"} />
                                <IconWrapper icon={"fa-solid fa-phone"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-xs"} />
                                <IconWrapper icon={"fa-solid fa-phone"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-[6px]"} />
                                <IconWrapper icon={"fa-solid fa-phone"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-sm"} />
                                <IconWrapper icon={"fa-solid fa-phone"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-[10px]"} />
                                <IconWrapper icon={"fa-solid fa-phone"} color={"var(--color-primary)"} size="2x" className={"absolute bg-transparent top-1/2 left-1/2 -translate-1/2"} />
                            </div>
                            <span>+961 3 865 174</span>
                        </Link>
                        <Link href={"https://maps.app.goo.gl/81wxEhbnypozH9fF8"} target='_blank' className="grid grid-cols-[auto_1fr] gap-4 items-center">
                            <div className="relative w-[55] h-[55]">
                                <IconWrapper icon={"fa-solid fa-location-dot"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-[2px]"} />
                                <IconWrapper icon={"fa-solid fa-location-dot"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-xs"} />
                                <IconWrapper icon={"fa-solid fa-location-dot"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-[6px]"} />
                                <IconWrapper icon={"fa-solid fa-location-dot"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-sm"} />
                                <IconWrapper icon={"fa-solid fa-location-dot"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-[10px]"} />
                                <IconWrapper icon={"fa-solid fa-location-dot"} color={"var(--color-primary)"} size="2x" className={"absolute bg-transparent top-1/2 left-1/2 -translate-1/2"} />
                            </div>
                            <span>Cornish al mazraa, Facing Liban Post, Sabah Center, Block B, 2nd floor, Beirut, Beirut 14-5703, LB</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
