import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
// import mysql from "mysql2/promise";

export async function POST(req) {
    const { fullName, email, jobTitle, company, phoneNumber, linkedInUrl, consent } = await req.json();

    // Validate inputs
    if (!fullName || !email || !consent) {
        console.error("Missing required fields:", { fullName, email, consent });
        return NextResponse.json({ error: "Full name, email, and consent are required" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        console.error("Invalid email format:", email);
        return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }
    if (consent !== true) {
        console.error("Consent not provided:", consent);
        return NextResponse.json({ error: "You must consent to receive event updates" }, { status: 400 });
    }

    // Validate environment variables
    if (!process.env.SMTP_EVENT_USER || !process.env.SMTP_EVENT_PASS) {
        console.error("Missing email environment variables:", {
            SMTP_EVENT_USER: !!process.env.SMTP_EVENT_USER,
            SMTP_EVENT_PASS: !!process.env.SMTP_EVENT_PASS,
        });
        return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_EVENT_USER,
            pass: process.env.SMTP_EVENT_PASS,
        },
    });

    // Subscriber confirmation email template
    const subscriberEmailTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to The Procurement Plug!</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
         <div style=" background-color: #F4F4F4; width: 100%; height: 20px;"></div>
            <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <tr>
                    <td style="padding: 20px;">
                        <h1 style="font-size: 24px; color: #333333; margin: 0 0 20px;">Thank You for Registering!</h1>
                        <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                            Dear ${fullName},<br/>
                            Thank you for registering your interest in <strong>Elevate 2025: Caribbean Edition</strong>! You're now part of our community and will receive updates about the event and more.
                        </p>
                        <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                            Stay tuned for exciting news and insights straight to your inbox!
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 20px; text-align: center; background-color: #f4f4f4; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                        <p style="font-size: 14px; color: #999999; margin: 0;">
                            © ${new Date().getFullYear()} The Procurement Plug. All rights reserved.
                        </p>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `;

    // Admin notification email template
    const adminEmailTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Subscriber Notification</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
         <div style=" background-color: #F4F4F4; width: 100%; height: 20px;"></div>
            <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <tr>
                    <td style="padding: 20px;">
                        <h1 style="font-size: 24px; color: #333333; margin: 0 0 20px;">New Subscriber Notification</h1>
                        <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                            A new user has registered for <strong>Elevate 2025: Caribbean Edition</strong>.
                        </p>
                        <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                            <strong>Subscriber Details:</strong><br/>
                            Full Name: ${fullName}<br/>
                            Email: ${email}<br/>
                            Job Title: ${jobTitle || 'Not provided'}<br/>
                            Company: ${company || 'Not provided'}<br/>
                            Phone Number: ${phoneNumber || 'Not provided'}<br/>
                            LinkedIn URL: ${linkedInUrl || 'Not provided'}<br/>
                            Consent: ${consent ? 'Yes' : 'No'}<br/>
                            Subscribed at: ${new Date().toLocaleString()}
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 20px; text-align: center; background-color: #f4f4f4; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                        <p style="font-size: 14px; color: #999999; margin: 0;">
                            © ${new Date().getFullYear()} The Procurement Plug. All rights reserved.
                        </p>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `;

    // Email options for subscriber
    const subscriberMailOptions = {
        from: `"The Procurement Plug" <${process.env.SMTP_EVENT_USER}>`,
        to: email,
        subject: "Thank You for Registering for Elevate 2025!",
        html: subscriberEmailTemplate,
    };

    // Email options for admin
    const adminMailOptions = {
        from: `"The Procurement Plug" <${process.env.SMTP_EVENT_USER}>`,
        to: process.env.SMTP_EVENT_USER,
        subject: "New Subscriber for Elevate 2025",
        html: adminEmailTemplate,
    };

    // Send both emails
    try {
        await transporter.verify();
        console.log("Sending emails to:", { subscriberEmail: email, adminEmail: process.env.SMTP_EVENT_USER });
        await Promise.all([
            transporter.sendMail(subscriberMailOptions),
            transporter.sendMail(adminMailOptions),
        ]);
        return NextResponse.json({ message: "Registration successful, emails sent to subscriber and admin" });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({ error: `Failed to send emails: ${error.message}` }, { status: 500 });
    }
}