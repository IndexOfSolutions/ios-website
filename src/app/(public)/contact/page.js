'use client'

import { IconWrapper } from '@/components/ui/IconWrapper'
import Link from 'next/link'
import { useFormik } from 'formik'
import { showToast } from 'nextjs-toast-notify'
import React from 'react'
import { submitContactForm } from '@/components/emails/Action'

export default function Contact() {

    const contactUsForm = useFormik({
        initialValues: {
            companyName: "",
            typeOfBusiness: "",
            service: "",
            name: "",
            phoneNumber: "",
            email: "",
        },

        validate: (data) => {
            let errors = {};
            if (!data.companyName) {
                errors.companyName = "Company Name field is required.";
            }

            if (!data.typeOfBusiness) {
                errors.typeOfBusiness = "Type of Business field is required."
            }

            if (!data.service) {
                errors.service = "Provide the service you need help with."
            }

            if (!data.name) {
                errors.name = "Name field is required."
            }

            if (!data.phoneNumber) {
                errors.phoneNumber = "Phone Number field is required."
            }

            if (!data.email) {
                errors.email = "Email field is required."
            }


            return errors;
        },
        onSubmit: async (values) => {
            try {
                const formData = new FormData()
                formData.append('companyName', values.companyName)
                formData.append('typeOfBusiness', values.typeOfBusiness)
                formData.append('service', values.service)
                formData.append('name', values.name)
                formData.append('phoneNumber', values.phoneNumber)
                formData.append('email', values.email)

                const res = await submitContactForm(undefined, formData)

                if (res?.success) {
                    showToast.success(res.message ?? 'Message sent!', { position: 'top-center' })
                    contactUsForm.resetForm()
                } else {
                    showToast.error(res?.error ?? 'Failed to send. Please try again.', { position: 'top-center' })
                }
            } catch (err) {
                console.error(err)
                showToast.error('Failed to send. Please try again.', { position: 'top-center' })
            }
        }
    })

    return (
        <section id='why-choose-us' className='w-full px-4 md:px-8 py-section-vertical-sm md:py-section-vertical overflow-x-hidden'>
            <div className='flex flex-col gap-1 items-center justify-center'>
                <div className="flex gap-8 items-center text-fg font-[newake] text-4xl mx-auto md:text-6xl">
                    <div className='hidden md:block glow-line-left w-72'></div>
                    <h2>Contact Us</h2>
                    <div className='hidden md:block glow-line-right w-72'></div>
                </div>
                <div className="w-full md:hidden glow-line"></div>
                <h3 className='font-[interItalic] text-fg'>Get in Touch</h3>
            </div>
            <div className='relative container max-w-[1366] mx-auto flex flex-col lg:flex-row md:justify-between gap-16 lg:8 pt-16'>
                <div className="flex flex-col gap-4 text-fg font-[inter] w-full max-w-[786]">
                    <h2 className='text-5xl font-[inter] font-bold'>Contact Us</h2>
                    <form onSubmit={contactUsForm.handleSubmit} className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Full Name</label>
                            <input type='text' id='name' name='name' value={contactUsForm.values.name} onChange={contactUsForm.handleChange} onBlur={contactUsForm.handleBlur} placeholder={`Full Name`} className={`relative capitalize font-bold placeholder:font-bold border border-primary px-4 py-2`} />
                            {contactUsForm.touched.name && contactUsForm.errors.name && <span className='text-red-500 text-sm'>{contactUsForm.errors.name}</span>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="companyName">Company Name</label>
                            <input type='text' id='companyName' name='companyName' value={contactUsForm.values["companyName"]} onChange={contactUsForm.handleChange} onBlur={contactUsForm.handleBlur} placeholder={`companyName`} className={`relative capitalize font-bold placeholder:font-bold border border-primary px-4 py-2`} />
                            {contactUsForm.touched["companyName"] && contactUsForm.errors["companyName"] && <span className='text-red-500 text-sm'>{contactUsForm.errors["companyName"]}</span>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="typeOfBusiness">Type Of Business</label>
                            <input type='text' id='typeOfBusiness' name='typeOfBusiness' value={contactUsForm.values.typeOfBusiness} onChange={contactUsForm.handleChange} onBlur={contactUsForm.handleBlur} placeholder={`Type Of Business`} className={`relative capitalize font-bold placeholder:font-bold border border-primary px-4 py-2`} />
                            {contactUsForm.touched.typeOfBusiness && contactUsForm.errors.typeOfBusiness && <span className='text-red-500 text-sm'>{contactUsForm.errors.typeOfBusiness}</span>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="Service">Service</label>
                            <input type='text' id='service' name='service' value={contactUsForm.values.service} onChange={contactUsForm.handleChange} onBlur={contactUsForm.handleBlur} placeholder={`service`} className={`relative capitalize font-bold placeholder:font-bold border border-primary px-4 py-2`} />
                            {contactUsForm.touched.service && contactUsForm.errors.service && <span className='text-red-500 text-sm'>{contactUsForm.errors.service}</span>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input type='text' id='phoneNumber' name='phoneNumber' value={contactUsForm.values.phoneNumber} onChange={contactUsForm.handleChange} onBlur={contactUsForm.handleBlur} placeholder={`Phone Number`} className={`relative capitalize font-bold placeholder:font-bold border border-primary px-4 py-2`} />
                            {contactUsForm.touched.phoneNumber && contactUsForm.errors.phoneNumber && <span className='text-red-500 text-sm'>{contactUsForm.errors.phoneNumber}</span>}
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email</label>
                            <input type='text' id='email' name='email' value={contactUsForm.values.email} onChange={contactUsForm.handleChange} onBlur={contactUsForm.handleBlur} placeholder={`Email`} className={`relative capitalize font-bold placeholder:font-bold border border-primary px-4 py-2`} />
                            {contactUsForm.touched.email && contactUsForm.errors.email && <span className='text-red-500 text-sm'>{contactUsForm.errors.email}</span>}
                        </div>
                        <button
                            type='submit'
                            disabled={contactUsForm.isSubmitting}
                            className='mt-8 px-6 py-3 bg-[linear-gradient(90deg,#3B82F6_0%,#619DFF_50%,#3B82F6_100%)] rounded-lg border-primary-button-border shadow-primary-button-shadow w-fit cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed'
                        >
                            {contactUsForm.isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
                <div className="flex flex-col gap-  12 max-w-[452]">
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
