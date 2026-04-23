import { TextMarquee } from '@/components/animations/TextMarquee'
import { ContactUsForm } from '@/components/ui/ContactUsForm'
import { IconWrapper } from '@/components/ui/IconWrapper'
import Link from 'next/link'
import React from 'react'

export const ContactUs = () => {
    return (
        <section id='contact-us' className='w-full px-4 md:px-8 py-section-vertical-sm md:py-section-vertical overflow-x-hidden'>
            <div className="relative mx-auto max-w-[1728] flex flex-col gap-4 overflow-x-hidden">
                <TextMarquee />
                <div className='absolute top-0 left-0 w-16 h-full left-side-fade-mainBg'></div>
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
                        <Link href={"javascript:location='mailto:\u0079\u002e\u006e\u0061\u0073\u0073\u0065\u0072\u0040\u0069\u006e\u0064\u0065\u0078\u006f\u0066\u0073\u006f\u006c\u0075\u0074\u0069\u006f\u006e\u0073\u002e\u0063\u006f\u006d\u003f\u0073\u0075\u0062\u006a\u0065\u0063\u0074\u003d\u0053\u0065\u0072\u0076\u0069\u0063\u0065\u0020\u0049\u006e\u0071\u0075\u0069\u0072\u0079\u0020\u005b\u0054\u0079\u0070\u0065\u0020\u006f\u0066\u0020\u0053\u0065\u0072\u0076\u0069\u0063\u0065\u0020\u0049\u006e\u0071\u0075\u0069\u0072\u0079\u005d\u0026\u0062\u006f\u0064\u0079\u003d\u0048\u0065\u006c\u006c\u006f\u002c\u0020\u0049\u0027\u006d\u0020\u005b\u0059\u006f\u0075\u0072\u0020\u004e\u0061\u006d\u0065\u005d\u00a0\u0066\u0072\u006f\u006d\u0020\u005b\u0043\u006f\u006d\u0070\u0061\u006e\u0079\u0020\u004e\u0061\u006d\u0065\u005d\u002c\u0020\u0061\u002f\u0061\u006e\u0020\u005b\u0054\u0079\u0070\u0065\u0020\u006f\u0066\u0020\u0042\u0075\u0073\u0069\u006e\u0065\u0073\u0073\u005d\u00a0\u0066\u0069\u0072\u006d\u0020\u002e\u0020\u0057\u0065\u0027\u0076\u0065\u0020\u0062\u0065\u0065\u006e\u0020\u006c\u006f\u006f\u006b\u0069\u006e\u0067\u0020\u0069\u006e\u0074\u006f\u0020\u0079\u006f\u0075\u0072\u0020\u0077\u006f\u0072\u006b\u0020\u0061\u006e\u0064\u0020\u0077\u006f\u0075\u006c\u0064\u0020\u006c\u006f\u0076\u0065\u0020\u0074\u006f\u0020\u0070\u0061\u0072\u0074\u006e\u0065\u0072\u0020\u0077\u0069\u0074\u0068\u0020\u0079\u006f\u0075\u0020\u0066\u006f\u0072\u0020\u005b\u0053\u0065\u0072\u0076\u0069\u0063\u0065\u0073\u0020\u004e\u0065\u0065\u0064\u0065\u0064\u005d\u002e\u0020\u0059\u006f\u0075\u0020\u0063\u0061\u006e\u0020\u0072\u0065\u0061\u0063\u0068\u0020\u006d\u0065\u0020\u0061\u0074\u0020\u005b\u0050\u0068\u006f\u006e\u0065\u0020\u004e\u0075\u006d\u0062\u0065\u0072\u005d\u00a0\u0061\u006e\u0064\u0020\u005b\u0045\u006d\u0061\u0069\u006c\u005d\u00a0\u0074\u006f\u0020\u0064\u0069\u0073\u0063\u0075\u0073\u0073\u0020\u0068\u006f\u0077\u0020\u0077\u0065\u0020\u0063\u0061\u006e\u0020\u0067\u0065\u0074\u0020\u0073\u0074\u0061\u0072\u0074\u0065\u0064\u002e';void 0;"} className="grid grid-cols-[auto_1fr] gap-4 items-center">
                            <div className='relative w-[55] h-[55]'>
                                <IconWrapper icon={"fa-solid fa-at"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-[2px"} />
                                <IconWrapper icon={"fa-solid fa-at"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-xs"} />
                                <IconWrapper icon={"fa-solid fa-at"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-[6px]"} />
                                <IconWrapper icon={"fa-solid fa-at"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-sm"} />
                                <IconWrapper icon={"fa-solid fa-at"} color={"var(--color-primary)"} size="2x" className={"absolute top-1/2 left-1/2 -translate-1/2 mix-blend-plus-lighter blur-[10px]"} />
                                <IconWrapper icon={"fa-solid fa-at"} color={"var(--color-primary)"} size="2x" className={"absolute bg-transparent top-1/2 left-1/2 -translate-1/2"} />
                            </div>
                            <span>&#121;&#46;&#110;&#97;&#115;&#115;&#101;&#114;&#64;&#105;&#110;&#100;&#101;&#120;&#111;&#102;&#115;&#111;&#108;&#117;&#116;&#105;&#111;&#110;&#115;&#46;&#99;&#111;&#109;</span>
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
                        <Link href={"https://maps.app.goo.gl/81wxEhbnypozH9fF8"} target='_blank' rel="noopener noreferrer" className="grid grid-cols-[auto_1fr] gap-4 items-center">
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
