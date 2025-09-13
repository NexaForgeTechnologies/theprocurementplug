import { sendEmail } from "@/lib/EmailsService";

// Task List Download Email (uses Marketing account)
export async function sendConfirmationEmail({ email, name }) {
    await sendEmail({
        type: "marketing",
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

// Expert Form Email (uses Contact/Support account)
export async function sendExpertFormEmail({ email, name }) {
    await sendEmail({
        type: "contact",
        to: email,
        subject: "Thank you for applying as a Plug Concierge Expert",
        html: `
        <p>Hi ${name},</p>
        <p>Thank you for submitting your application to become a <b>Plug Concierge Expert</b>.</p>
        <p>Our team will carefully review your profile and reach out to you if your application matches our current opportunities.</p>
        <p>We appreciate your interest in joining our growing network!</p>
        <p>Best regards,<br/>Procurement Plug Team</p>
    `,
    });
}
