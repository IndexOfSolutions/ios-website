'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import React from 'react'

gsap.registerPlugin(ScrollTrigger);

export const TextMarquee = () => {

    useGSAP(() => {
        
        gsap.to(
            ".text-fill",
            {
                x: "-15vw",
                scrollTrigger: {
                    trigger: ".text-fill",
                    start: "-250 center",
                    end: "500 center",
                    scrub: true,
                }
            }
        )

        gsap.to(
            ".text-outline",
            {
                x: "15vw",
                scrollTrigger: {
                    trigger: ".text-fill",
                    start: "-250 center",
                    end: "500 center",
                    scrub: true,
                }
            }
        )
    })

    return (
        <>
            <h2 className='text-fill self-start text-fg font-[newake] text-7xl md:text-9xl text-nowrap'>Let&apos;s Talk Let&apos;s Talk Let&apos;s Talk Let&apos;s Talk Let&apos;s Talk</h2>
            <h2 className='text-outline place-self-end text-mainbg text-shadow-text-outline-mobile md:text-shadow-text-outline font-[newake] text-7xl md:text-9xl text-nowrap'>Let&apos;s Talk Let&apos;s Talk Let&apos;s Talk Let&apos;s Talk Let&apos;s Talk</h2>
        </>
    )
}
