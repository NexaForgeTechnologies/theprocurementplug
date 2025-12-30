import { sendEmail } from "@/lib/EmailsService";

// ------------------------- Insight Post Emails
export async function UserQuoteEmail({ email, name }) {
    await sendEmail({
        type: "venuRequestQuote",
        to: email,
        subject: "Your Quote Request Has Been Received",
        html: `
            <p><b>Hi ${name},</b></p>
            <p>Thank you for requesting a quote from <b>The Procurement Plug</b>.</p>
            <p>	Our team has received your submission and will review your project details.</p>
            <p>We will contact you soon with next steps, pricing information, or any clarifying questions we may have.</p>
            <p>Warm regards,<br/>
            The Procurement Plug Team</p>
        `,
    });
}

export async function AdminQuoteEmail({ name, company, role, email, phone, capacity, timeframe }) {
    await sendEmail({
        type: "venuRequestQuote",
        // to: process.env.SMTP_VENU_REQUEST_QUOTE_USER,
        to: "xelenta45@gmail.com",
        subject: "New Quote Request Submission",
        html: `
            <p><b>Hello Team,</b></p>
            <p> user has submitted the Request a Quote form. Below are the details:</p>
            <ul style="list-style-type: disc; padding-left: 15px; margin: 0;">
                <li><b>Name: </b> ${name || "N/A"}</li>
                <li><b>Company: </b> ${company || "N/A"}</li>
                <li><b>Role: </b> ${role || "N/A"}</li>
                <li><b>Email: </b> ${email || "N/A"}</li>
                <li><b>Phone: </b> ${phone || "N/A"}</li>
                <li><b>Capacity: </b> ${capacity || "N/A"}</li>
                <li><b>Project Timeframe: </b> ${timeframe || "N/A"}</li>
            </ul>
            <p>Please review the submission and follow up with the user as needed.</p>
             <p>Warm regards,<br/>
            The Procurement Plug – System Notification</p>
        `,
    });
}