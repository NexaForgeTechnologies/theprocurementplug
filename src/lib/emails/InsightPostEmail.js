import { sendEmail } from "@/lib/EmailsService";

// ------------------------- Insight Post Emails
export async function UserPostEmail({ email, name, heading }) {
    await sendEmail({
        type: "insightPost",
        to: email,
        subject: "Your Insight Submission Has Been Received",
        html: `
            <p><b>Hi ${name},</b></p>
            <p>Thank you for submitting your insight <b>${heading}</b>.</p>
            <p>Our team will review your post shortly. You’ll receive an update once it’s approved or rejected</p>
            <p>Thanks for contributing valuable thought leadership to our community!</p>
            <p>Best regards,<br/>The Procurement Plug Team</p>
        `,
    });
}

export async function AdminPostEmail({ email, heading, name, category }) {
    await sendEmail({
        type: "insightPost",
        to: email,
        subject: "New Insight Submission – Pending Review",
        html: `
            <p><b>Hello Team,</b></p>
            <p>A new insight post has been submitted for review.</p>
            <ul style="list-style-type: disc; padding-left: 15px; margin: 0;">
                <li><b>Title: </b> ${heading || "N/A"}</li>
                <li><b>Submitted By: </b> ${name || "N/A"}</li>
                <li><b>Category: </b> ${category || "N/A"}</li>
            </ul>
            <p>Please review and approve or reject in the admin dashboard.</p>
        `,
    });
}