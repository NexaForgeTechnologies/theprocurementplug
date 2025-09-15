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

// Become Expert Form Email
export async function BecomeExpertEmail({ email, name }) {
    await sendEmail({
        type: "becomeExpert",
        to: email,
        subject: "Welcome to The Procurement Concierge Experts Network",
        html: `
            <p><b>Hi ${name},</b></p>
            <p>Thank you for registering your interest in joining The Procurement Concierge Experts Network.</p>
            <p>Over the coming days, our team will review your profile and confirm the level you will sit on within the network. This ensures every task is matched to the right skillset to deliver quality for our clients.</p>
            <p>As part of our network, you’ll gain:</p>
            <ul style="list-style-type: disc; padding-left: 15px; margin: 0;">
            <li>Opportunities to support on-demand client tasks.</li>
            <li>Access to collaboration with other vetted experts.</li>
            <li>Recognition as a trusted professional within our growing community.</li>
            </ul>
            <p>We’ll be in touch shortly with your onboarding details.</p>
            <p>👉 In the meantime, feel free to share this link with other trusted professionals who may want to join: concierge.expert@theprocurementplug.com</p>
            <p>Best regards,<br/>The Procurement Concierge Team</p>
        `,
    });
}

// Become QA Partner Form Email
export async function BecomeQaPartnerEmail({ email, name }) {
    await sendEmail({
        type: "becomeQaPartner",
        to: email,
        subject: "Welcome to The Procurement Concierge Experts Network",
        html: `
            <p><b>Hi ${name},</b></p>
            <p>Thank you for registering your interest in joining The Procurement Concierge Experts Network.</p>
            <p>Over the coming days, our team will review your profile and confirm the level you will sit on within the network. This ensures every task is matched to the right skillset to deliver quality for our clients.</p>
            <p>As part of our network, you’ll gain:</p>
            <ul style="list-style-type: disc; margin-left: 10px;">
            <li>Opportunities to support on-demand client tasks.</li>
            <li>Access to collaboration with other vetted experts.</li>
            <li>Recognition as a trusted professional within our growing community.</li>
            </ul>
            <p>We’ll be in touch shortly with your onboarding details.</p>
            <p>👉 In the meantime, feel free to share this link with other trusted professionals who may want to join: concierge.expert@theprocurementplug.com</p>
            <p>Best regards,<br/>The Procurement Concierge Team</p>
        `,
    });
}
