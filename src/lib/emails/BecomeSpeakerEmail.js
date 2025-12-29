import { sendEmail } from "@/lib/EmailsService";

// ------------------------- Become a Speaker Emails
export async function UserSpeakerEmail({ email, name }) {
    await sendEmail({
        type: "becomeSpeaker",
        to: email,
        subject: "Your Speaker Proposal Has Been Received!",
        html: `
            <p><b>Hi ${name},</b></p>
            <p>Thank you for submitting your speaker proposal to <b>The Procurement Plug.</b> We’re excited to learn more about your expertise and the value you aim to bring to our audience.</p>
            <p>Our team will now review your submission. If your topic aligns with our upcoming events, we will contact you with the next steps.</p>
            <p>Warm regards,<br/><b>The Procurement Plug Team</b></p>
            <a target="_blank" href="http://theprocurementplug.com/">www.theprocurementplug.com</a>
        `,
    });
}

export async function AdminSpeakerEmail({ name, email, role, company }) {
    await sendEmail({
        type: "becomeSpeaker",
        to: process.env.SMTP_BECOME_A_SPEAKER_USER,
        subject: "New Speaker Proposal Submission Received",
        html: `
            <p>Hello Team,</p>
            <p>A new speaker proposal has been submitted through the <b>Become a Speaker form.</b> Below are the details:</p>
            <ul style="list-style-type: disc; padding-left: 15px; margin: 0;">
                <li><b>Full Name:</b> ${name || "N/A"}</li>
                <li><b>Work Email:</b> ${email || "N/A"}</li>
                <li><b>Role:</b> ${role || "N/A"}</li>
                <li><b>Company Name:</b> ${company || "N/A"}</li>
            </ul>
            <p>Please review the submission and follow up with the applicant if they are a strong fit for upcoming events.</p>
            <p>Warm regards,<br/><b>The Procurement Plug – System Notification</b></p>
        `,
    });
}
