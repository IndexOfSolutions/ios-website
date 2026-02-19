import { BoxLightEffet } from '@/components/SVGs/BoxLightEffet'
import { SeparaterLightEffect } from '@/components/SVGs/SeparaterLightEffect'
import { HorizontalMarquee } from '@/components/animations/HorizontalMarquee'
import { IconWrapper } from '@/components/ui/IconWrapper'
import React from 'react'

export const WhyChooseIOS = () => {
    return (
        <section id='why-choose-us' className='w-full px-4 md:px-8 py-section-vertical-sm md:py-section-vertical overflow-x-hidden'>
            <div className='flex flex-col gap-1 items-center justify-center'>
                <div className="flex gap-8 items-center text-fg font-[newake] text-4xl mx-auto md:text-6xl">
                    <div className='hidden md:block glow-line-left w-72'></div>
                    <h1>Why Choose IOS</h1>
                    <div className='hidden md:block glow-line-right w-72'></div>
                </div>
                <div className="w-full md:hidden glow-line"></div>
                <h2 className='font-[interItalic] text-fg'>About Us</h2>
            </div>
            <div className="relative container max-w-[1366] mx-auto flex flex-col gap-6 justify-center pt-[60] w-full md:flex-row">
                <div className="absolute top-6 -left-1/4 md:-top-6 md:-left-20">
                    <BoxLightEffet direction={"left"} />
                </div>
                <div className="absolute -bottom-6 -right-1/6 md:-top-6 md:-right-20">
                    <BoxLightEffet direction={"right"} />
                </div>
                <div className="relative w-full bg-secondary/50 flex flex-col gap-2 border-2 p-6 border-border-color rounded-lg backdrop-blur-125 text-fg">
                    <h1 className='font-[newake] text-5xl md:text-8xl'>Our Mission</h1>
                    <p>
                        At IOS, we understand the critical role your mission plays, and we&apos;re here to ensure it thrives. Our mission-focused ERP services are tailored to your unique needs, optimizing your operations, enhancing transparency, and maximizing your impact. With our unwavering commitment to your cause and cutting-edge technology, we help you do more good, more efficiently. Join us in shaping a better future, one mission at a time. Elevate your mission with IOS.
                    </p>
                </div>
                <div className=" relative w-full bg-secondary/50 flex flex-col gap-2 border-2 p-6 border-border-color rounded-lg backdrop-blur-125 text-fg">
                    <h1 className='font-[newake] text-5xl md:text-8xl'>Our Vision </h1>
                    <p>
                        At IOS, we recognize that your vision is the d riving force behind your organization&apos;s success. Our visionary ERP services are designed to align seamlessly with your goals, providing the tools and insights needed to turn your vision into reality. With our forward-thinking approach and state-of-the-art technology, we empower you to see beyond horizons, optimize operations, and achieve unprecedented growth. Join us on the path to visionary excellence. Illuminate your journey with IOS.
                    </p>
                </div>
            </div>
            <div className='relative container max-w-[1366] mx-auto flex flex-col gap-8 justify-center items-center pt-[60] md:flex-row text-fg text-2xl font-[inter] font-semibold'>
                <h4>12+ Years <br></br> of Experience</h4>
                <div className="hidden md:block">
                    <SeparaterLightEffect direction={"vertical"} />
                </div>
                <div className="md:hidden">
                    <SeparaterLightEffect direction={"horizontal"} />
                </div>
                <h4>50+ Completed <br></br>Projects</h4>
                <div className="hidden md:block">
                    <SeparaterLightEffect direction={"vertical"} />
                </div>
                <div className="md:hidden">
                    <SeparaterLightEffect direction={"horizontal"} />
                </div>
                <h4>50+ Satisfied <br></br>Clients</h4>
                <div className="hidden md:block">
                    <SeparaterLightEffect direction={"vertical"} />
                </div>
                <div className="md:hidden">
                    <SeparaterLightEffect direction={"horizontal"} />
                </div>
                <h4>Microsoft Certified <br></br>Team Members</h4>
            </div>
            <div className='relative container max-w-[1366] mx-auto flex flex-col gap-8 items-center pt-[60] md:flex-row text-fg'>
                <div className='flex flex-col w-72 gap-4'>
                    <span>
                        <svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60 23.2203V50H34.1026V27.2034C34.1026 13.0791 41.1396 4.0113 55.2137 0L59.9145 8.64407C55.755 10.0565 52.7066 11.7514 50.7692 13.7288C48.8889 15.7062 47.9487 18.8701 47.9487 23.2203H60ZM25.9829 23.2203V50H0V27.2034C0 13.0791 7.06553 4.0113 21.1966 0L25.8974 8.64407C23.1054 9.60452 20.9402 10.5367 19.4017 11.4407C15.698 13.6441 13.8462 17.5706 13.8462 23.2203H25.9829Z" fill="white" />
                        </svg>
                    </span>
                    <span className='font-[inter] font-medium text-4xl'>What our customers are saying</span>
                </div>
                <HorizontalMarquee />
            </div>
        </section>
    )
}
