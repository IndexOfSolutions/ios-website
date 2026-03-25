'use client'

import { AnswerBubbleCard } from '@/components/ui/AnswerBubbleCard';
import { QuestionBubbleCard } from '@/components/ui/QuestionBubbleCard';
import { FAQs } from '@/constants/FAQs';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const FAQ = () => {

    const containerRef = useRef();

    useGSAP(() => {

        console.log(process.env.CONTACT_TO)
        if (!containerRef.current) return;

        document.querySelectorAll(".qa").forEach((qa) => {
            const question = qa.querySelector(".question");
            const answer = qa.querySelector(".answer");

            gsap.fromTo(
                question,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: question,
                        start: "top 80%",
                        end: "bottom 60%",
                        scrub: true,
                        invalidateOnRefresh: true,
                    }
                }
            )

            gsap.fromTo(
                answer,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: answer,
                        start: "top 80%",
                        end: "bottom 60%",
                        scrub: true,
                        invalidateOnRefresh: true,
                    }
                }
            )
        })
    }, { scope: containerRef })

    return (
        <section id='faq' ref={containerRef} className='relative w-full px-4 md:px-8 py-section-vertical-sm md:py-section-vertical'>
            <div className='flex flex-col gap-1 items-center justify-center'>
                <div className="flex gap-8 items-center text-fg font-[newake] text-4xl mx-auto md:text-6xl">
                    <div className='hidden md:block glow-line-left w-72'></div>
                    <h2>FAQ</h2>
                    <div className='hidden md:block glow-line-right w-72'></div>
                </div>
                <div className="w-full md:hidden glow-line"></div>
                <h3 className='font-[interItalic] text-fg'>Frequently Asked Questions</h3>
            </div>
            <div className='relative container max-w-[1366] mx-auto pt-[60] grid grid-cols-1 gap-16 md:grid-cols-2'>
                <div className="md:sticky md:top-[139] flex flex-col gap-4 text-fg h-fit">
                    <h3 className='text-4xl font-[newake] md:text-5xl'>Frequently Asked Questions About Dynamics NAV &amp; Business Central</h3>
                    <p className='font-[inter]'>Find answers about Microsoft Dynamics NAV, Dynamics 365 Business Central, ERP implementation, consultancy, customization, support and training. Index of Solutions has over 12 years of experience helping small and medium businesses succeed with one connected ERP.</p>
                </div>
                <div className='flex flex-col gap-16 md:pt-28'>
                    {
                        FAQs.map((faq, index) => (
                            <div className="qa flex flex-col gap-8" key={index}>
                                <QuestionBubbleCard question={faq.question}/>
                                <AnswerBubbleCard answer={faq.answer}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
