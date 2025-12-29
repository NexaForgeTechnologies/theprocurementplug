import { sendEmail } from "@/lib/EmailsService";

//business-hub/procuretech-solution/contract-management/[]
export async function UserDownloadSheetsEmail({ email, name }) {
    await sendEmail({
        type: "xecXchange",
        to: email,
        subject: "Your Data Sheets Request Has Been Received",
        html: `
            <p><b>Hi ${name},</b></p>
            <p>Thank you for requesting a demo with <b>The Procurement Plug</b>.</p>
            <p>We’ve received your request.</p>
            <p>You can explore our solutions overview here:</p>
            <a target="_blank" href="https://staging.theprocurementplug.com/files/download/Partnership_Prospectus.pdf">
                Download the Overview PDF
            </a>
            <p>This document includes insights into our tools, process automation, and integration capabilities that help businesses streamline procurement management efficiently.</p>
            <p>If you have any questions, simply reply to this email or reach out at <a href="mailto:info@theprocurementplug.com">info@theprocurementplug.com</a>.</p>
            <p>Best regards,<br/>The Procurement Plug Team</p>
        `,
    });
}


// ------------------------- Download Partnership & Sponsorship pack Emails
export async function UserDownloadPartnershipEmail({ email, name }) {
    await sendEmail({
        type: "downloadPartnershipPack",
        to: email,
        subject: "Your Download Partnership & Sponsorship pack is Ready",
        html: `
            <p><b>Hi ${name},</b></p>
            <p>Thank you for your interest in partnering with <b>The Procurement Plug.</b> Your <b>Partnership & Sponsorship Pack</b> is ready for download.</p>
            <a target="_blank" href="https://staging.theprocurementplug.com/files/PartnershipDetails.pdf">Download the Pack</a>
            <p>Thank you for your interest in collaborating with us!</p>
            <p>Warm regards,<br/>The Procurement Plug Team</p>
        `,
    });
}
export async function AdminDownloadPartnershipEmail({ name, company, email, interest = [] }) {
    await sendEmail({
        type: "downloadPartnershipPack",
        to: process.env.SMTP_DOWNLOAD_PARTNERSHIP_USER,
        subject: "New Partnership & Sponsorship Pack Request",
        html: `
            <p>Hello Team,</p>
            <p>A user has requested the <b>Partnership & Sponsorship Pack.</b> Below are the details:</p>
            <ul style="list-style-type: disc; padding-left: 15px; margin: 0;">
                <li><b>Full Name:</b> ${name || "N/A"}</li>
                <li><b>Work Email:</b> ${email || "N/A"}</li>
                <li><b>Phone:</b> ${phone || "N/A"}</li>
                <li><b>Company Name:</b> ${company || "N/A"}</li>
                <li><b>Message/Notes:</b> ${company || "N/A"}</li>
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


// /business-hub/vip-lounge/exclusive-intelligence-reports/industry-insights
export async function UserRequestCustomBriefEmail({ email, fullName, topic }) {
    await sendEmail({
        type: "xecXchange",
        to: email,
        subject: "We’ve received your custom briefing request",
        html: `
        <p>Hi ${fullName},</p>

        <p>Thanks for requesting a tailored procurement intelligence briefing. Our team is reviewing your input on <strong>${topic}</strong> and will reach out within the next 24 hours to clarify any details and lock in your delivery timeline.</p>

        <p>In the meantime, you might browse our latest published reports here: 
        <a href="https://theprocurementplug.com/reports-library" target="_blank">Reports Library</a>
        </p>

        <p>Talk soon,<br>
        The Procurement Plug Intelligence Team</p>
`
        ,
    });
}


export async function AdminRequestCustomBriefEmail({ fullName, email, role, company, topic, objectives, desiredDeliveryDate }) {
    await sendEmail({
        type: "xecXchange",
        to: process.env.SMTP_XECXCHANGE_USER,
        subject: `New custom briefing request: ${fullName}`,
        html: `
    <p>A new “Custom Briefing” request has arrived:</p>

    <ul>
        <li><strong>Name:</strong> ${fullName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Company:</strong> ${company}</li>
        <li><strong>Role:</strong> ${role}</li>
        <li><strong>Topic / Scope:</strong> ${topic}</li>
        <li><strong>Key Questions / Objectives:</strong> “${objectives}”</li>
        <li><strong>Desired Delivery Date:</strong> ${desiredDeliveryDate}</li>
    </ul>

    <p>Please review and follow up within 24 hours to confirm details.</p>
`
    });
}


export async function UserSalaryRoleDownloadEmail({ email, name, SelectedTile }) {
    // Get the tile-specific download link
    const downloadLink = `https://staging.theprocurementplug.com/${SelectedTile?.pathName || "/files/dummy.pdf"}`;
    try {
        await sendEmail({
            type: "xecXchange",
            to: email,
            subject: `Here's your copy of: ${SelectedTile?.heading || "Requested Report"}`,
            html: `
            Hi ${name},<br><br>
            Thanks for requesting <strong>${SelectedTile?.heading || "the report"}</strong>.<br><br>
            👉 <a href="${downloadLink}" target="_blank" style="color: #1a73e8;">Click here to download your report</a><br><br>
            Best,<br>
            The Procurement Plug Team
        `,
        });
    }
    catch (err) {
        console.log("error : ", err)
    }
}


export async function AdminSalaryRoleDownloadEmail({ name, email, role, company, SelectedTile }) {
    await sendEmail({
        type: "xecXchange",
        to: process.env.SMTP_PARTNERSHIPS_USER,
        subject: `Report downloaded by ${name}`,
        html: `
            A new download occurred:<br><br>
            • Name: ${name}<br>
            • Email: ${email}<br>
            • Role / Title: ${role}<br>
            • Company: ${company}<br>
            • Report: ${SelectedTile?.heading || "Unknown"}<br>
        `,
    });
}

// ------------------------- Become a Partner Emails
export async function UserBecomePartnerEmail({ email, name }) {
    try {
        if (!email) throw new Error("User email is missing");
        console.log("📨 Sending UserBecomePartnerEmail to:", email);

        await sendEmail({
            type: "xecXchange",
            to: email,
            subject: "Your Become a Partner Task List is Ready",
            html: `
                <p><b>Hi ${name},</b></p>
                <p>Thanks for downloading our Procurement Concierge Task List.</p>
                <a target="_blank" href="https://staging.theprocurementplug.com/files/CONCIERGE_TASKS.pdf">Download Your Task List Here</a>
                <p>Inside, you’ll find examples of light, medium, and heavy tasks that our Concierge can handle — giving your team back time, reducing overhead, and ensuring every deliverable is quality-assured.</p>
                <p>If you’d like to learn more about how these tasks translate into real business value, simply email us at concierge@theprocurementplug.com or <a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">book a discovery call.</a></p>
                <p>Best regards,<br/>The Procurement Concierge Team</p>
            `,
        });
        console.log("✅ UserBecomePartnerEmail sent to:", email);
    } catch (err) {
        console.error("❌ Failed to send UserBecomePartnerEmail:", err.message);
    }
}

export async function AdminBecomePartnerEmail({ name, company, email, interest = [] }) {
    try {
        const adminEmail = process.env.SMTP_PARTNERSHIPS_USER
        if (!adminEmail) throw new Error("Admin email (SMTP_EVENT_USER) is not defined");
        console.log("📨 Sending AdminBecomePartnerEmail to:", adminEmail);

        await sendEmail({
            type: "xecXchange",
            to: adminEmail,
            subject: "Become a Partner Task List Download Request",
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
        console.log("✅ AdminBecomePartnerEmail sent to:", adminEmail);
    } catch (err) {
        console.error("❌ Failed to send AdminBecomePartnerEmail:", err.message);
    }
}

// -------------------------  Request an Introduction Partner Emails
export async function UserIntroRequestEmail({ email, fullName, areaOfInterest }) {
    try {
        if (!email) throw new Error("User email is missing");
        console.log("📨 Sending UserIntroRequestEmail to:", email);

        await sendEmail({
            type: "xecXchange",
            to: email,
            subject: "Your introduction request is received",
            html: `
                <p><b>Hi ${fullName},</b></p>
                <p>
                    Thanks for requesting an introduction to our vetted partner ecosystem for <b>${areaOfInterest}</b>.
                    We’ll be in touch within 24 hours with your curated connection.
                </p>
                <p>If you have any immediate questions, just reply to this email.</p>
                <p>Best regards,<br>The Procurement Plug Partnerships Team</p>
            `,
        });
        console.log("✅ UserIntroRequestEmail sent to:", email);
    } catch (err) {
        console.error("❌ Failed to send UserIntroRequestEmail:", err.message);
    }
}

export async function AdminIntroRequestEmail({ fullName, email, company, role, areaOfInterest, briefNote }) {
    try {
        const adminEmail = process.env.SMTP_PARTNERSHIPS_USER;
        if (!adminEmail) throw new Error("Admin email (SMTP_PARTNER_USER) is not defined");
        console.log("📨 Sending AdminIntroRequestEmail to:", adminEmail);

        await sendEmail({
            type: "xecXchange",
            to: adminEmail,
            subject: `New partner-intro request: ${fullName} (${company})`,
            html: `
                <p>A new “Request an Introduction” submission just came in:</p>
                <ul style="list-style-type: disc; padding-left: 20px;">
                    <li><b>Name:</b> ${fullName}</li>
                    <li><b>Email:</b> ${email}</li>
                    <li><b>Company:</b> ${company}</li>
                    <li><b>Role/Title:</b> ${role}</li>
                    <li><b>Area of Interest:</b> ${areaOfInterest}</li>
                    <li><b>Note:</b> “${briefNote}”</li>
                </ul>
                <p>📌 Please assign a Partner Manager to connect them within 24 hours.</p>
            `,
        });
        console.log("✅ AdminIntroRequestEmail sent to:", adminEmail);
    } catch (err) {
        console.error("❌ Failed to send AdminIntroRequestEmail:", err.message);
    }
}
