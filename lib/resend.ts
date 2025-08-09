"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY) 

export const sendEmail = async (userEmail: string, name: string, message: string) => {
  try {
    await resend.emails.send({
      to: "anjalthapa578@gmail.com",
      from: "Portfolio Contact <onboarding@resend.dev>", // Keep using Resend's domain
      replyTo: userEmail, // This allows you to reply directly to the user
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name} (${userEmail})</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <hr>
          <p style="color: #666; font-size: 12px;">
            You can reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    })
  } catch (exception) {
    console.log("Error sending email: ", exception)
  } 
}