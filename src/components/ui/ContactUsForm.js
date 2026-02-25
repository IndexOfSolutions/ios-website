'use client'

import { useFormik } from 'formik'
import { showToast } from 'nextjs-toast-notify'
import React from 'react'
import { submitContactForm } from '../emails/Action'

export const ContactUsForm = () => {

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
        <form onSubmit={contactUsForm.handleSubmit} className='w-full flex flex-col'>
            <div className='text-wrap break-after-all wrap-anywhere leading-8 text-xl'>
                Hello, I&apos;m <input type='text' id='name' name='name' value={contactUsForm.values.name} onChange={contactUsForm.handleChange} onBlur={contactUsForm.handleBlur} placeholder={`Your Name ${contactUsForm.touched.name && contactUsForm.errors.name ? '*' : ''}`} className={`relative min-w-[1ch] w-auto max-w-fit field-sizing-content resize-none text-wrap capitalize font-bold placeholder:text-primary placeholder:font-bold outline-0 ring-0 focus:outline-0 border-0 ${contactUsForm.touched.name && contactUsForm.errors.name ? 'placeholder:text-red-400' : 'text-primary'}`} /> from <textarea id='company-name' name='companyName' value={contactUsForm.values.companyName} onChange={contactUsForm.handleChange} onBlur={contactUsForm.handleBlur} placeholder={`Company Name ${contactUsForm.touched.companyName && contactUsForm.errors.companyName ? '*' : ''}`} className={`relative min-w-[1ch] w-auto max-w-fit field-sizing-content resize-none text-wrap top-[10] valid:top-2 font-bold placeholder:text-primary placeholder:font-bold outline-0 ring-0 focus:outline-0 border-0 text-primary ${contactUsForm.touched.companyName && contactUsForm.errors.companyName ? 'placeholder:text-red-400' : 'text-primary'}`} /> , a/an <textarea id='type-of-business' name='typeOfBusiness' value={contactUsForm.values.typeOfBusiness} onChange={contactUsForm.handleChange} onBlur={contactUsForm.handleBlur} cols="1" placeholder={`Type of Business ${contactUsForm.touched.name && contactUsForm.errors.typeOfBusiness ? '*' : ''}`} className={`relative min-w-[1ch] w-auto max-w-fit field-sizing-content resize-none text-wrap top-[10] valid:top-2 font-bold placeholder:text-primary placeholder:font-bold outline-0 ring-0 focus:outline-0 text-primary ${contactUsForm.touched.typeOfBusiness && contactUsForm.errors.typeOfBusiness ? 'placeholder:text-red-400' : 'text-primary'}`} /> firm .
                We’ve been looking into your work and would love to partner with you for <textarea id='service' name='service' value={contactUsForm.values.service} onChange={contactUsForm.handleChange} onBlur={contactUsForm.handleBlur} placeholder={`Services needed ${contactUsForm.touched.service && contactUsForm.errors.service ? '*' : ''}`} className={`relative min-w-[1ch] w-auto max-w-fit field-sizing-content resize-none text-wrap capitalize top-[10] valid:top-2 font-bold placeholder:text-primary placeholder:font-bold outline-0 ring-0 focus:outline-0 border-0 ${contactUsForm.touched.service && contactUsForm.errors.service ? 'placeholder:text-red-400' : 'text-primary'}`} />.
                You can reach me at <input type='text' id='phoneNumber' name='phoneNumber' value={contactUsForm.values.phoneNumber} onChange={contactUsForm.handleChange} onBlur={contactUsForm.handleBlur} placeholder={`Your Phone Number ${contactUsForm.touched.phoneNumber && contactUsForm.errors.phoneNumber ? '*' : ''}`} className={`relative min-w-[1ch] w-auto max-w-fit field-sizing-content resize-none text-wrap capitalize font-bold placeholder:text-primary placeholder:font-bold outline-0 ring-0 focus:outline-0 border-0 ${contactUsForm.touched.phoneNumber && contactUsForm.errors.phoneNumber ? 'placeholder:text-red-400' : 'text-primary'}`} /> and <input type='text' id='email' name='email' value={contactUsForm.values.email} onChange={contactUsForm.handleChange} onBlur={contactUsForm.handleBlur} placeholder={`Your email ${contactUsForm.touched.email && contactUsForm.errors.email ? '*' : ''}`} className={`relative min-w-[1ch] w-auto max-w-fit field-sizing-content resize-none text-wrap font-bold placeholder:capitalize placeholder:text-primary placeholder:font-bold outline-0 ring-0 focus:outline-0 border-0 ${contactUsForm.touched.email && contactUsForm.errors.email ? 'placeholder:text-red-400' : 'text-primary'}`} /> to discuss how we can get started.
            </div>
            <button
                type='submit'
                disabled={contactUsForm.isSubmitting}
                className='mt-8 px-6 py-3 bg-[linear-gradient(90deg,#3B82F6_0%,#619DFF_50%,#3B82F6_100%)] rounded-lg border-primary-button-border shadow-primary-button-shadow w-fit cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed'
            >
                {contactUsForm.isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    )
}
