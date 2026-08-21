"use server";

import { Resend } from "resend";
import LeadContactEmail from "./ContactTemplate";
import { trackLead } from "@/lib/opinly-events";

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

    // The visitor's Opinly anonymous ID, read from the pixel in the browser and
    // passed through with the submission. It is what attributes this lead to
    // the campaign that produced it, so it is deliberately not part of `data`
    // (nothing to validate, and it must not block the send if it is missing).
    const anonId = String(formData.get("opinlyAnonId") ?? "").trim();

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
        consoleError: error,
      };
    }

    // Record the conversion server-side, after the email actually sent. Sending
    // both anonId and email is the belt-and-braces move: the ID attributes
    // exactly, and the email is the fallback for when the ID never made it.
    // `trackLead` swallows its own errors, so this cannot fail the submission.
    await trackLead({
      email: data.email,
      anonId,
      source: "contact_form",
      // Dedup key: a double-submit from the same person in the same minute
      // collapses into one lead rather than counting twice.
      externalEventId: `contact:${data.email}:${new Date()
        .toISOString()
        .slice(0, 16)}`,
      properties: {
        company_name: data.companyName,
        type_of_business: data.typeOfBusiness,
        service: data.service,
      },
    });

    return {
      success: true,
      message: "Email Sent Successfully! We will get back to you as soon as possible.",
    };
  } catch (error) {
    console.error("Server action error:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again.",
      consoleError: error,
    };
  }
}