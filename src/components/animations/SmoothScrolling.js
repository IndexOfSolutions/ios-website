"use client";
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { ReactLenis } from 'lenis/react';

export const SmoothScrolling = ({children}) => {

    const lenisRef = useRef();

    useEffect(() => {
        function update(time) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);

        return () => {
            gsap.ticker.remove(update);
        };

    }, []);

  return (
    <ReactLenis root options={{lerp: 0.1, duration: 2, smoothTouch: true, autoRaf: false}} ref={lenisRef}>
        {children}
    </ReactLenis>
  )
}
