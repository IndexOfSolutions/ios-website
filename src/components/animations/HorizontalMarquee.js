'use client';
import React, { useRef } from 'react'
import { IconWrapper } from '../ui/IconWrapper'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const HorizontalMarquee = () => {

    const marqueeRef = useRef(null);

    useGSAP(() => {
        const marquee = marqueeRef.current;
        // Calculate the width of one full set of testimonials
        const totalWidth = marquee.scrollWidth / 2;

        const animation = gsap.to(marquee, {
            x: -totalWidth, // Move to the left by half the total width
            duration: 10,   // Adjust for speed (higher = slower)
            ease: "none",
            repeat: -1,     // Infinite loop
        });

        // Pause on hover
        marquee.addEventListener("mouseenter", () => animation.pause());
        marquee.addEventListener("mouseleave", () => animation.play());

        return () => animation.kill(); // Cleanup
    });

    return (
        <div className="relative overflow-hidden w-full py-16">
            <div ref={marqueeRef} className="flex gap-16 whitespace-nowrap flex-nowrap">
                <div className='testimonial p-6 border-[1] border-primary rounded-lg flex flex-col justify-between text-base whitespace-normal w-[350px] md:w-[450px] items-stretch shrink-0 shadow-[0px_0px_10px_(var(--color-primary))] shadow-primary'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non veritatis totam numquam inventore odit voluptas minima, molestias ipsam dolorum at rerum unde dolores repudiandae aperiam perspiciatis, quis excepturi aliquid. Repudiandae, officia molestias quis accusantium necessitatibus magni! Exercitationem quibusdam, fugit.</p>
                    <div className="flex items-center gap-1 mt-4">
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                    </div>
                    <div className='flex flex-col gap-1 mt-4'>
                        <p className='font-bold text-sm'>Youssef Nasser 1</p>
                        <p className='text-xs font-[interItalic]'>CEO of Index of Solutions</p>
                    </div>
                </div>
                <div className='testimonial p-6 border-[1] border-primary rounded-lg flex flex-col justify-between whitespace-normal w-[350px] md:w-[450px] items-stretch shrink-0 shadow-[0px_0px_10px_(var(--color-primary))] shadow-primary'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati sapiente eveniet labore totam dolor culpa pariatur mollitia. Eum, voluptas cumque dolorum non eveniet in qui incidunt autem officiis eos eaque quibusdam ipsam animi expedita?</p>
                    <div className="flex items-center gap-1 mt-4">
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                    </div>
                    <div className='flex flex-col gap-1 mt-4'>
                        <p className='font-bold text-sm'>Youssef Nasser 2</p>
                        <p className='text-xs font-[interItalic]'>CEO of Index of Solutions</p>
                    </div>
                </div>
                <div className='testimonial p-6 border-[1] border-primary rounded-lg flex flex-col justify-between whitespace-normal w-[350px] md:w-[450px] items-stretch shrink-0 shadow-[0px_0px_10px_(var(--color-primary))] shadow-primary'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique soluta vitae voluptas quo magni accusamus quibusdam, voluptatum omnis et. Repudiandae quam similique amet velit fuga assumenda a! Eligendi consequuntur ut in sint, iure, assumenda soluta, blanditiis magni laudantium laboriosam voluptatem!</p>
                    <div className="flex items-center gap-1 mt-4">
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                    </div>
                    <div className='flex flex-col gap-1 mt-4'>
                        <p className='font-bold text-sm'>Youssef Nasser 3</p>
                        <p className='text-xs font-[interItalic]'>CEO of Index of Solutions</p>
                    </div>
                </div>
                <div className='testimonial p-6 border-[1] border-primary rounded-lg flex flex-col justify-between text-base whitespace-normal w-[350px] md:w-[450px] items-stretch shrink-0 shadow-[0px_0px_10px_(var(--color-primary))] shadow-primary'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non veritatis totam numquam inventore odit voluptas minima, molestias ipsam dolorum at rerum unde dolores repudiandae aperiam perspiciatis, quis excepturi aliquid. Repudiandae, officia molestias quis accusantium necessitatibus magni! Exercitationem quibusdam, fugit.</p>
                    <div className="flex items-center gap-1 mt-4">
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                    </div>
                    <div className='flex flex-col gap-1 mt-4'>
                        <p className='font-bold text-sm'>Youssef Nasser 1</p>
                        <p className='text-xs font-[interItalic]'>CEO of Index of Solutions</p>
                    </div>
                </div>
                <div className='testimonial p-6 border-[1] border-primary rounded-lg flex flex-col justify-between whitespace-normal w-[350px] md:w-[450px] items-stretch shrink-0 shadow-[0px_0px_10px_(var(--color-primary))] shadow-primary'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati sapiente eveniet labore totam dolor culpa pariatur mollitia. Eum, voluptas cumque dolorum non eveniet in qui incidunt autem officiis eos eaque quibusdam ipsam animi expedita?</p>
                    <div className="flex items-center gap-1 mt-4">
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                    </div>
                    <div className='flex flex-col gap-1 mt-4'>
                        <p className='font-bold text-sm'>Youssef Nasser 2</p>
                        <p className='text-xs font-[interItalic]'>CEO of Index of Solutions</p>
                    </div>
                </div>
                <div className='testimonial p-6 border-[1] border-primary rounded-lg flex flex-col justify-between whitespace-normal w-[350px] md:w-[450px] items-stretch shrink-0 shadow-[0px_0px_10px_(var(--color-primary))] shadow-primary'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique soluta vitae voluptas quo magni accusamus quibusdam, voluptatum omnis et. Repudiandae quam similique amet velit fuga assumenda a! Eligendi consequuntur ut in sint, iure, assumenda soluta, blanditiis magni laudantium laboriosam voluptatem!</p>
                    <div className="flex items-center gap-1 mt-4">
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                        <IconWrapper icon={"fa-solid fa-star"} color={"yellow"} size={"sm"} />
                    </div>
                    <div className='flex flex-col gap-1 mt-4'>
                        <p className='font-bold text-sm'>Youssef Nasser 3</p>
                        <p className='text-xs font-[interItalic]'>CEO of Index of Solutions</p>
                    </div>
                </div>
            </div>
            <div className='absolute top-0 left-0 w-16 h-full left-side-fade-mainBg'></div>
            <div className='absolute top-0 right-0 w-16 h-full right-side-fade-mainBg'></div>
        </div>
    )
}
