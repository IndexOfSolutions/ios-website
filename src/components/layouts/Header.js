'use client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { IconWrapper } from '../ui/IconWrapper'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Header = () => {

    const [open, setOpen] = useState(false);

    useEffect(() => {

    })

    return (
        <>
            <header className='w-full h-[100] border-b border-border-color z-100'>
                <div className="container max-w-[1366] h-full mx-auto p-4 flex items-center justify-between">
                    <div className="flex gap-[100] items-center">
                        <Image src="/assets/images/logo/ios.webp" alt="Index of Solutions - Microsoft Dynamics NAV and Dynamics 365 Business Central ERP Partner" width={50} height={52} sizes="50px" />
                        <nav className='hidden md:block'>
                            <menu>
                                <ul className='flex items-center gap-4 text-fg'>
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/#why-choose-us">About</Link>
                                    </li>
                                    <li>
                                        <Link href="/#what-we-offer">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/#contact-us">Contact</Link>
                                    </li>
                                </ul>
                            </menu>
                        </nav>
                    </div>
                    <div className="hidden items-center gap-8 text-fg  md:flex">
                        <Link href={'https://www.linkedin.com/company/indexofsolutions/'} target='_blank'>
                            <span className='flex items-center'>Follow on Linked <span className='relative top-[1]'><IconWrapper icon="fa-brands fa-linkedin-in" color='var(--color-primary)' className={"w-3.5 h-3.5"} /></span></span>
                        </Link>
                        <Link href="/assets/PDFs/IOSDesign16.pdf" target='_blank' className='px-6 py-3 bg-[linear-gradient(90deg,#3B82F6_0%,#619DFF_50%,#3B82F6_100%)] rounded-lg border-primary-button-border shadow-primary-button-shadow'>
                            IOS Brochure
                        </Link>
                    </div>
                    <button type='button' onClick={() => { setOpen(!open) }} className='px-6 py-3 md:hidden bg-[linear-gradient(90deg,#3B82F6_0%,#619DFF_50%,#3B82F6_100%)] rounded-lg border-primary-button-border shadow-primary-button-shadow cursor-pointer'>
                        <IconWrapper icon={'fa-solid fa-bars-staggered'} color={'var(--color-fg)'} className={"w-[20] h-[20]"} />
                    </button>
                </div>
            </header>
            <div className={`${open ? 'fixed' : 'hidden'} modal w-full h-full top-0 bg-secondary z-10 select-none p-8 flex flex-col gap-4 overflow-y-hidden lg:hidden`}>
                <button type="button" onClick={() => { setOpen(!open) }} className="self-end">
                    <IconWrapper icon={"fa-solid fa-xmark"} color={"var(--color-fg)"} size={"xl"} />
                </button>
                <nav className='w-full h-full'>
                    <menu className='w-full h-full'>
                        <ul className='w-full h-full flex flex-col items-center justify-center gap-4 text-fg font-[newake] text-5xl'>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/#why-choose-us">About</Link>
                            </li>
                            <li>
                                <Link href="/#what-we-offer">Services</Link>
                            </li>
                            <li>
                                <Link href="/#contact-us">Contact</Link>
                            </li>
                        </ul>
                    </menu>
                </nav>
                <Link href="/assets/PDFs/IOSDesign16.pdf" target='_blank' className='w-fit mx-auto px-6 py-3 bg-[linear-gradient(90deg,#3B82F6_0%,#619DFF_50%,#3B82F6_100%)] rounded-lg border-primary-button-border shadow-primary-button-shadow'>
                    IOS Brochure
                </Link>
                <Link href={'https://www.linkedin.com/company/indexofsolutions/'} className='text-center mx-auto' target='_blank'>
                    <span className='flex items-center text-fg'>Follow on Linked <span className='relative top-[1]'><IconWrapper icon="fa-brands fa-linkedin-in" color='var(--color-primary)' className={"w-3.5 h-3.5"} /></span></span>
                </Link>
            </div>
        </>
    )
}
