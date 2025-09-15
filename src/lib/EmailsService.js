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
        concierge: {
            user: process.env.SMTP_CONCIERGE_USER,
            pass: process.env.SMTP_CONCIERGE_PASS,
            label: "Procurement Plug Concierge",
        },
        registerInterest: {
            user: process.env.SMTP_CONCIERGE_USER,
            pass: process.env.SMTP_CONCIERGE_PASS,
            label: "Procurement Plug Concierge",
        },
        becomeExpert: {
            user: process.env.SMTP_CONCIERGE_EXPERT_USER,
            pass: process.env.SMTP_CONCIERGE_EXPERT_PASS,
            label: "Procurement Plug Concierge",
        },
        becomeQaPartner: {
            user: process.env.SMTP_CONCIERGE_EXPERT_USER,
            pass: process.env.SMTP_CONCIERGE_EXPERT_PASS,
            label: "Procurement Plug Concierge",
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
