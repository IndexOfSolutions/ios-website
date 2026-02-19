'use client';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import Image from 'next/image';
import React, { useRef } from 'react'
import { IconWrapper } from '../ui/IconWrapper';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(Draggable);

export const ImageComparisonSlider = () => {

    const containerRef = useRef(null);
    const sliderRef = useRef(null);
    const beforeImageRef = useRef(null);

    useGSAP(() => {
        if (!containerRef.current || !sliderRef.current || !beforeImageRef.current) return;

        const container = containerRef.current;
        const beforeImg = beforeImageRef.current;

        // Initialize Draggable
        Draggable.create(sliderRef.current, {
            type: "x",
            bounds: container,
            onDrag: function () {
                // 1. Calculate the percentage of the drag relative to container width
                // We use 'this.x' for the current drag position
                // Adding 'container.offsetWidth / 2' because your slider starts at left-1/2 (50%)
                const containerWidth = container.offsetWidth;
                const currentX = this.x + (containerWidth / 2);
                const percentage = (currentX / containerWidth) * 100;

                // 2. Update the clip-path of the "Before" image
                gsap.set(beforeImg, {
                    clipPath: `polygon(0% 0%, ${percentage}% 0%, ${percentage}% 100%, 0% 100%)`
                });
            },
        });
    }, { scope: containerRef }); // Scope ensures GSAP finds elements within this component

    return (
        <div className='relative container w-full max-w-[1366px] h-fit mx-auto mt-16 px-4 md:px-8'>
            <div 
                ref={containerRef} 
                className="relative drag-wrapper min-w-full max-w-[1092px] h-full aspect-video mx-auto overflow-hidden rounded-lg"
            >
                {/* Background Image (Bottom) */}
                <div className="bi-image absolute top-0 left-0 w-full h-full select-none pointer-events-none">
                    <Image 
                        src="/assets/images/dashboard/Power-BI.webp" 
                        fill
                        alt='After' 
                        className='object-cover'
                    />
                </div>

                {/* Foreground Image (Top - Clipped) */}
                <div 
                    ref={beforeImageRef}
                    className="bc-image absolute top-0 left-0 w-full h-full z-1 select-none pointer-events-none"
                    style={{ clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)' }}
                >
                    <Image 
                        src="/assets/images/dashboard/Business-Central.webp" 
                        fill
                        alt='Before' 
                        className='object-cover'
                    />
                </div>

                {/* Draggable Handle */}
                <div 
                    ref={sliderRef}
                    className="slider absolute top-0 left-1/2 w-[4px] h-full bg-white z-10 cursor-ew-resize -translate-x-1/2"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-primary rounded-full shadow-xl">
                        <IconWrapper icon="fa-solid fa-arrows-left-right" color="white" w={20} h={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}
