// lib/email.js
import nodemailer from "nodemailer";

export async function sendConfirmationEmail({ email, name }) {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false, // true if 465
        auth: {
            user: process.env.SMTP_MARKETING_USER,
            pass: process.env.SMTP_MARKETING_PASS,
        },
    });

    await transporter.sendMail({
        from: `"Procurement Plug" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Your Task List Download",
        html: `
      <p>Hi ${name},</p>
      <p>Thanks for requesting our Task List! You can download it here:</p>
      <a href="https://example.com/task-list.pdf">Download Task List</a>
      <p>Best regards,<br/>Procurement Plug Team</p>
    `,
    });
}
