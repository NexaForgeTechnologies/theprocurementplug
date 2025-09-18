import { sendEmail } from "@/lib/EmailsService";

// --------------------Task List Download Email
export async function UserTaskListDownloadEmail({ email, name }) {
    await sendEmail({
        type: "concierge",
        to: email,
        subject: "Your Procurement Task List is Ready",
        html: `
            <p><b>Hi ${name},</b></p>
            <p>Thanks for downloading our Procurement Concierge Task List.</p>
            <a target="_blank" href="https://staging.theprocurementplug.com/files/CONCIERGE_TASKS.pdf">Download Your Task List Here</a>
            <p>Inside, you’ll find examples of light, medium, and heavy tasks that our Concierge can handle — giving your team back time, reducing overhead, and ensuring every deliverable is quality-assured.</p>
            <p>If you’d like to learn more about how these tasks translate into real business value, simply email us at concierge@theprocurementplug.com or <a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">book a discovery call.</a></p>
            <p>Best regards,<br/>The Procurement Concierge Team</p>
        `,
    });
}
export async function AdminTaskListDownloadEmail({ name, company, email, interest = [] }) {
    await sendEmail({
        type: "concierge",
        to: process.env.SMTP_CONCIERGE_USER,
        subject: "New Task List Download Request",
        html: `
            <p>Hello Team,</p>
            <p>A new user has downloaded the Procurement Concierge Task List.<br/>
            Here are the details submitted:</p>
            <ul style="list-style-type: disc; padding-left: 15px; margin: 0;">
                <li><b>Full Name:</b> ${name || "N/A"}</li>
                <li><b>Company Name:</b> ${company || "N/A"}</li>
                <li><b>Work Email:</b> ${email || "N/A"}</li>
            </ul>
            <p><b>Selected Services:</b></p>
            <ul style="list-style-type: disc; padding-left: 15px; margin: 0;">
                <li>Concierge + Services: ${interest.includes("Concierge + Services") ? "Yes" : "No"}</li>
                <li>Fractional Experts: ${interest.includes("Fractional Experts") ? "Yes" : "No"}</li>
                <li>Fractional CPO: ${interest.includes("Fractional CPO") ? "Yes" : "No"}</li>
                <li>Advisory Services: ${interest.includes("Advisory Services") ? "Yes" : "No"}</li>
            </ul>
            <p>📌 Please review and follow up as required.</p>
        `,
    });
}

// -------------------------Waitlist Email
export async function UserWaitlistListFormEmail({ email, name }) {
    await sendEmail({
        type: "concierge",
        to: email,
        subject: "You’re on the Waitlist!",
        html: `
            <p><b>Hi ${name},</b></p>
            <p>Thanks for signing up for the Procurement Concierge waitlist!</p>
            <p>We’re excited to have you on board and will notify you as soon as the service becomes available.</p>
            <p>In the meantime, feel free to explore our Resource Center or check out the Procurement Task List to get a head start.</p>
            <p>Got questions? Just reply to this email or reach out at: concierge@theprocurementplug.com</p>
            <p>Thanks Again,<br/>The Procurement Concierge Team</p>
        `,
    });
}
export async function AdminWaitlistListFormEmail({ name, company, email, interest = [] }) {
    await sendEmail({
        type: "concierge",
        to: process.env.SMTP_CONCIERGE_USER,
        subject: "New Task List Download Request",
        html: `
            <p>Hello Team,</p>
            <p>A new user has downloaded the Procurement Concierge Task List.<br/>
            Here are the details submitted:</p>
            <ul style="list-style-type: disc; padding-left: 15px; margin: 0;">
                <li><b>Full Name:</b> ${name || "N/A"}</li>
                <li><b>Company Name:</b> ${company || "N/A"}</li>
                <li><b>Work Email:</b> ${email || "N/A"}</li>
            </ul>
            <p><b>Selected Services:</b></p>
            <ul style="list-style-type: disc; padding-left: 15px; margin: 0;">
                <li>Concierge + Services: ${interest.includes("Concierge + Services") ? "Yes" : "No"}</li>
                <li>Fractional Experts: ${interest.includes("Fractional Experts") ? "Yes" : "No"}</li>
                <li>Fractional CPO: ${interest.includes("Fractional CPO") ? "Yes" : "No"}</li>
                <li>Advisory Services: ${interest.includes("Advisory Services") ? "Yes" : "No"}</li>
            </ul>
            <p>📌 Please review and follow up as required.</p>
        `,
    });
}

// -------------------------Pricing Packaging Email
export async function UserPricicngPackagingFormEmail({ email, name }) {
    await sendEmail({
        type: "concierge",
        to: email,
        subject: "Your Procurement Concierge Brochure is Ready",
        html: `
            <p><b>Hi ${name},</b></p>
            <p>Thank you for your interest in The Procurement Concierge by The Procurement Plug.</p>
            <a target="_blank" href="https://staging.theprocurementplug.com/files/THE_PROCUREMENT_CONCIERGER_BROCHURE.pdf">Download Your Brochure Here</a>
            <p>Our Concierge gives your procurement team instant access to vetted expertise, rapid task delivery, and senior QA support — without ongoing POs or lengthy onboarding.</p>
            <p>If you have questions or would like to explore how this could work for your organisation, simply email us at concierge@theprocurementplug.com or <a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">book a discovery call.</a></p>
            <p>Best regards,<br/>The Procurement Concierge Team</p>
        `,
    });
}
export async function AdminPricicngPackagingFormEmail({ name, company, email, interest = [] }) {
    await sendEmail({
        type: "concierge",
        to: process.env.SMTP_CONCIERGE_USER,
        subject: "New Task List Download Request",
        html: `
            <p>Hello Team,</p>
            <p>A new user has downloaded the Procurement Concierge Task List.<br/>
            Here are the details submitted:</p>
            <ul style="list-style-type: disc; padding-left: 15px; margin: 0;">
                <li><b>Full Name:</b> ${name || "N/A"}</li>
                <li><b>Company Name:</b> ${company || "N/A"}</li>
                <li><b>Work Email:</b> ${email || "N/A"}</li>
            </ul>
            <p><b>Selected Services:</b></p>
            <ul style="list-style-type: disc; padding-left: 15px; margin: 0;">
                <li>Concierge + Services: ${interest.includes("Concierge + Services") ? "Yes" : "No"}</li>
                <li>Fractional Experts: ${interest.includes("Fractional Experts") ? "Yes" : "No"}</li>
                <li>Fractional CPO: ${interest.includes("Fractional CPO") ? "Yes" : "No"}</li>
                <li>Advisory Services: ${interest.includes("Advisory Services") ? "Yes" : "No"}</li>
            </ul>
            <p>📌 Please review and follow up as required.</p>
        `,
    });
}

// -------------------------Register Interest Email
export async function UserRegisterInterestEmail({ email, name }) {
    await sendEmail({
        type: "concierge",
        to: email,
        subject: "Thank You for Registering Your Interest",
        html: `
            <p><b>Hi ${name},</b></p>
            <p>Thank you for registering your interest in The Procurement Concierge by The Procurement Plug.</p>
            <p>Our team will be in touch shortly, but in the meantime, here’s a quick overview of how we support procurement teams like yours:</p>
            <ul style="list-style-type: disc; padding-left: 15px; margin: 0;">
            <li>Mobilisation in 24 hours.</li>
            <li>Flexible credit-based support model.</li>
            <li>Quality assurance on every deliverable, led by senior procurement professionals.</li>
            </ul>
            <p>To make things easy, you can<a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile"> book a discovery call </a>right away.</p>
            <p>We’re looking forward to exploring how we can support your business</p>
            <p>Best regards,<br/>The Procurement Concierge Team</p>
        `,
    });
}
export async function AdminRegisterInterestEmail({ name, company, email, interest = [] }) {
    await sendEmail({
        type: "concierge",
        to: process.env.SMTP_CONCIERGE_USER,
        subject: "Thank You for Registering Your Interest",
        html: `
            <p>Hello Team,</p>
            <p>A new user registered.<br/>
            Here are the details submitted:</p>
            <ul style="list-style-type: disc; padding-left: 15px; margin: 0;">
                <li><b>Full Name:</b> ${name || "N/A"}</li>
                <li><b>Company Name:</b> ${company || "N/A"}</li>
                <li><b>Work Email:</b> ${email || "N/A"}</li>
            </ul>
            <p><b>Selected Services:</b></p>
            <ul style="list-style-type: disc; padding-left: 15px; margin: 0;">
                <li>Concierge + Services: ${interest.includes("Concierge + Services") ? "Yes" : "No"}</li>
                <li>Fractional Experts: ${interest.includes("Fractional Experts") ? "Yes" : "No"}</li>
                <li>Fractional CPO: ${interest.includes("Fractional CPO") ? "Yes" : "No"}</li>
                <li>Advisory Services: ${interest.includes("Advisory Services") ? "Yes" : "No"}</li>
            </ul>
            <p>📌 Please review and follow up as required.</p>
        `,
    });
}

// -------------------------Become Expert Form Email
export async function UserBecomeExpertEmail({ email, name }) {
    await sendEmail({
        type: "conciergeExpert",
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
            <p>In the meantime, feel free to share this link with other trusted professionals who may want to join: <a target="_blank" href="https://staging.theprocurementplug.com/concierge/plug-concierge-experts">Join the Concierge Experts Network</a></p>
            <p>Best regards,<br/>The Procurement Concierge Team</p>
        `,
    });
}
export async function AdminBecomeExpertEmail({ name, email, linkedin }) {
    await sendEmail({
        type: "conciergeExpert",
        to: process.env.SMTP_CONCIERGE_EXPERT_USER,
        subject: "New The Procurement Concierge Experts Network Request",
        html: `
            <p>Hello Team,</p>
            <p>A new user has join us at The Procurement Concierge Experts Network.<br/>
            Here are the details submitted:</p>
            <ul style="list-style-type: disc; padding-left: 15px; margin: 0;">
                <li><b>Full Name:</b> ${name || "N/A"}</li>
                <li><b>Email:</b> ${email || "N/A"}</li>
                <li><b>Linkedin Profile:</b> ${linkedin || "N/A"}</li>
            </ul>
            <p>📌 Please review and follow up as required.</p>
        `,
    });
}

// -------------------------Become QA Partner Form Email
export async function UserBecomeQaPartnerEmail({ email, name }) {
    await sendEmail({
        type: "conciergeExpert",
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
            <p>In the meantime, feel free to share this link with other trusted professionals who may want to join: concierge.expert@theprocurementplug.com</p>
            <p>Best regards,<br/>The Procurement Concierge Team</p>
        `,
    });
}
export async function AdminBecomeQaPartnerEmail({ name, email, linkedin }) {
    await sendEmail({
        type: "conciergeExpert",
        to: process.env.SMTP_CONCIERGE_EXPERT_USER,
        subject: "New The Procurement Concierge Experts Network Request",
        html: `
            <p>Hello Team,</p>
            <p>A new user has join us at The Procurement Concierge Experts Network.<br/>
            Here are the details submitted:</p>
            <ul style="list-style-type: disc; padding-left: 15px; margin: 0;">
                <li><b>Full Name:</b> ${name || "N/A"}</li>
                <li><b>Email:</b> ${email || "N/A"}</li>
                <li><b>Linkedin Profile:</b> ${linkedin || "N/A"}</li>
            </ul>
            <p>📌 Please review and follow up as required.</p>
        `,
    });
}
