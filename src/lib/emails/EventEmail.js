import { sendEmail } from "@/lib/EmailsService";

// ------------------------- Become a Speaker Emails
export async function UserSpeakerEmail({ email, name }) {
    await sendEmail({
        type: "events",
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

export async function AdminSpeakerEmail({ name, company, email, interest = [] }) {
    await sendEmail({
        type: "events",
        to: process.env.SMTP_EVENT_USER,
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


// ------------------------- Download Partnership & Sponsorship pack Emails
export async function UserDownloadPartnershipEmail({ email, name }) {
    await sendEmail({
        type: "events",
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

export async function AdminDownloadPartnershipEmail({ name, company, email, interest = [] }) {
    await sendEmail({
        type: "events",
        to: process.env.SMTP_EVENT_USER,
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


