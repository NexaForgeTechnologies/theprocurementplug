import nodemailer from "nodemailer";

/**
 * Reusable function to send emails with different Outlook accounts.
 *
 * @param {Object} options
 * @param {"partnerships"|"contact"|"marketing"|"events"} options.type - Which account to use
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.html - Email body (HTML)
 */


export async function sendEmail({ type, to, subject, html }) {
    // Map account type → env vars
    const accounts = {
        partnerships: {
            user: process.env.SMTP_PARTNERSHIPS_USER,
            pass: process.env.SMTP_PARTNERSHIPS_PASS,
            label: "Procurement Plug Partnerships",
        },
        contact: {
            user: process.env.SMTP_CONTACT_USER,
            pass: process.env.SMTP_CONTACT_PASS,
            label: "Procurement Plug Support",
        },
        marketing: {
            user: process.env.SMTP_MARKETING_USER,
            pass: process.env.SMTP_MARKETING_PASS,
            label: "Procurement Plug Marketing",
        },
        events: {
            user: process.env.SMTP_EVENT_USER,
            pass: process.env.SMTP_EVENT_PASS,
            label: "Procurement Plug Events",
        },
    };

    const account = accounts[type];
    if (!account) {
        throw new Error(`Invalid email type: ${type}`);
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
            user: account.user,
            pass: account.pass,
        },
    });

    await transporter.sendMail({
        from: `"${account.label}" <${account.user}>`,
        to,
        subject,
        html,
    });
}
