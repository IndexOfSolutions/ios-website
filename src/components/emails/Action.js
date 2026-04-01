"use server";

import { Resend } from "resend";
import LeadContactEmail from "./ContactTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(_prevState, formData) {
  try {

    const data = {
      name: String(formData.get("name") ?? "").trim(),
      companyName: String(formData.get("companyName") ?? "").trim(),
      typeOfBusiness: String(formData.get("typeOfBusiness") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      phoneNumber: String(formData.get("phoneNumber") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
    };

    // Minimal server-side validation (don’t rely on client only)
    const missing = Object.entries(data)
      .filter(([, v]) => !v)
      .map(([k]) => k);

    if (missing.length) {
      return {
        success: false,
        error: "Please fill in all fields and try again.",
      };
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM,
      to: process.env.CONTACT_TO,
      replyTo: data.email,
      subject: `New inquiry from ${data.name} (${data.companyName})`,
      react: <LeadContactEmail data={data} />,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        error: "Failed to send email. Please try again.",
      };
    }

    return {
      success: true,
      message: "Email Sent Successfully! We will get back to you as soon as possible.",
    };
  } catch (error) {
    console.error("Server action error:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}