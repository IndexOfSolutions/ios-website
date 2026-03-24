import React from 'react'
import { IconWrapper } from '../ui/IconWrapper'
import Link from 'next/link'
import Image from 'next/image'
import { FooterLightEffect } from '../SVGs/FooterLightEffect'

export const Footer = () => {
    return (
        <footer className='relative w-full border-t border-border-color px-4 md:px-8 py-section-vertical-sm md:py-section-vertical'>
            <div className="container max-w-[1366] h-full mx-auto z-10">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="w-full flex flex-col gap-4">
                        <p className='underline text-2xl text-fg'>Social Media Links</p>
                        <div className='flex gap-4 items-center'>
                            <Link href="https://www.linkedin.com/company/indexofsolutions/" target='_blank' aria-label="Follow Index of Solutions on LinkedIn">
                                <IconWrapper icon="fa-brands fa-linkedin-in" color='var(--color-fg)' w={21} h={21} />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full justify-between md:w-fit flex flex-col gap-4 md:justify-self-end">
                        <p className='underline text-2xl text-fg'>Links</p>
                        <div className="w-full flex flex-wrap md:flex-nowrap items-start gap-12 text-fg text-base">
                            <ul className='flex flex-col gap-2'>
                                <li className="list-disc hover:text-primary">
                                    <Link href="/services/business-central-implementation">Business Central Implementation</Link>
                                </li>
                                <li className="list-disc hover:text-primary">
                                    <Link href="/services/business-central-consultancy">Business Central Consultancy</Link>
                                </li>
                                <li className="list-disc hover:text-primary">
                                    <Link href="/services/business-central-support">Business Central Support</Link>
                                </li>
                            </ul>
                            <ul className='flex flex-col gap-2'>
                                <li className="list-disc hover:text-primary">
                                    <Link href="/services/business-central-training">Business Central Training</Link>
                                </li>
                                <li className="list-disc hover:text-primary">
                                    <Link href="/services/power-bi-and-analytics">Power BI & Analytics</Link>
                                </li>
                                <li className="list-disc hover:text-primary">
                                    <Link href="/services/nav-to-business-central-upgrade">Dynamics NAV to Business Central Upgrade</Link>
                                </li>
                            </ul>
                            <ul className="flex flex-col gap-2">
                                <li className="list-disc hover:text-primary">
                                    <Link href="/about">About</Link>
                                </li>
                                <li className="list-disc hover:text-primary">
                                    <Link href="/about/case-studies">Case Studies</Link>
                                </li>
                                <li className="list-disc hover:text-primary">
                                    <Link href="#faq">FAQ</Link>
                                </li>
                            </ul>
                            <ul className="flex flex-col gap-2">
                                <li className="list-disc hover:text-primary">
                                    <Link href="/blogs">Blogs</Link>
                                </li>
                                <li className="list-disc hover:text-primary">
                                    <Link href="/privacy-policy">Privacy Policy</Link>
                                </li>
                                <li className="list-disc hover:text-primary">
                                    <Link href="/terms-and-conditions">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-8 mt-16'>
                    <div className='w-fit px-4 md:px-8 flex items-center py-2 gap-[10] bg-secondary rounded-lg text-fg font-[inter] text-sm'>
                        <Image src="/assets/images/SVGs/microsoft.svg" width={20} height={20} alt="" />
                        <span>Microsoft Certified Partner</span>
                    </div>
                    <div className="w-full hidden md:inline-block">
                        <svg
                            viewBox="0 0 1304 150"
                            width="100%"
                            preserveAspectRatio="xMidYMid meet"
                            className="inline-block text-[145px]"
                        >
                            <title>Index of Solutions</title>
                            <text
                                x="0%"
                                y="110"
                                textAnchor="left"
                                fill="white"
                                className='font-[newake] leading-none'
                            >
                                INDEX OF SOLUTIONS
                            </text>
                        </svg>
                    </div>
                    <div className="w-full inline-block md:hidden">
                        <svg
                            viewBox="0 0 710 251"
                            width="100%"
                            preserveAspectRatio="xMidYMid meet"
                            className="inline-block text-[145px]"
                        >
                            <title>Index of Solutions</title>
                            <text
                                x="0%"
                                y="110"
                                textAnchor="left"
                                fill="white"
                                className='font-[newake]'
                            >
                                INDEX OF
                            </text>
                            <text
                                x="0%"
                                y="250"
                                textAnchor="left"
                                fill="white"
                                className='font-[newake]'
                            >
                                SOLUTIONS
                            </text>
                        </svg>
                    </div>
                    <div className="w-full flex justify-end">
                        <span className='text-fg font-[inter]'>Powered by <span className='font-[newake] text-primary'>IOS Team</span></span>
                    </div>
                </div>
            </div>
            <div className='absolute left-0 bottom-0 w-full'>
                <FooterLightEffect />
            </div>
        </footer>
    )
}
