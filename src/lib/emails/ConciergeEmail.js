import { sendEmail } from "@/lib/EmailsService";

// Task List Download Email
export async function TaskListDownloadEmail({ email, name }) {
    await sendEmail({
        type: "concierge",
        to: email,
        subject: "Your Procurement Task List is Ready",
        html: `
            <p><b>Hi ${name},</b></p>
            <p>Thanks for downloading our Procurement Concierge Task List.</p>
            <a href="https://staging.theprocurementplug.com/files/CONCIERGE_TASKS.pdf">👉 [Download Your Task List Here]</a>
            <p>Inside, you’ll find examples of light, medium, and heavy tasks that our Concierge can handle — giving your team back time, reducing overhead, and ensuring every deliverable is quality-assured.</p>
            <p>If you’d like to learn more about how these tasks translate into real business value, simply email us at concierge@theprocurementplug.com or book a discovery call.</p>
            <p>Best regards,<br/>The Procurement Concierge Team</p>
        `,
    });
}

// Register Interest Form Email
export async function registerInterestEmail({ email, name }) {
    await sendEmail({
        type: "registerInterest",
        to: email,
        subject: "Thank You for Registering Your Interest",
        html: `
            <p><b>Hi ${name},</b></p>
            <p>Thank you for registering your interest in The Procurement Concierge by The Procurement Plug.</p>
            <p>Our team will be in touch shortly, but in the meantime, here’s a quick overview of how we support procurement teams like yours:</p>
            <ul style="list-style-type: disc; margin-left: 10px;">
            <li>Mobilisation in 24 hours.</li>
            <li>Flexible credit-based support model.</li>
            <li>Quality assurance on every deliverable, led by senior procurement professionals.</li>
            </ul>
            <p>To make things easy, you can book a discovery call right away:
            <br/>👉<br/>  
            We’re looking forward to exploring how we can support your business</p>
            <p>Best regards,<br/>The Procurement Concierge Team</p>
        `,
    });
}
