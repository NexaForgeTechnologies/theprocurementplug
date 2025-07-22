import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
// import mysql from "mysql2/promise";

export async function POST(req) {
    const { name, email, message } = await req.json();

    // Validate inputs
    if (!name || !email || !message) {
        console.error("Missing input fields:", { name, email, message });
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        console.error("Invalid email format:", email);
        return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Validate environment variables
    if (!process.env.CONTACT_EMAIL_USER || !process.env.CONTACT_EMAIL_PASS) {
        console.error("Missing email environment variables:", {
            CONTACT_EMAIL_USER: !!process.env.CONTACT_EMAIL_USER,
            CONTACT_EMAIL_PASS: !!process.env.CONTACT_EMAIL_PASS,
        });
        return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Initialize MySQL connection
    // let connection;
    // try {
    //     connection = await mysql.createConnection({
    //         host: process.env.DB_HOST,
    //         user: process.env.DB_USER,
    //         password: process.env.DB_PASSWORD,
    //         database: process.env.DB_NAME,
    //     });

    //     // Insert contact data into messages table
    //     await connection.execute(
    //         "INSERT INTO messages (name, email, message, submitted_at) VALUES (?, ?, ?, NOW())",
    //         [name, email, message]
    //     );
    // } catch (error) {
    //     console.error("Database error:", error);
    //     return NextResponse.json({ error: "Failed to save message to database" }, { status: 500 });
    // } finally {
    //     if (connection) await connection.end();
    // }

    // Configure Nodemailer transporter
    // const transporter = nodemailer.createTransport({
    //     service: "gmail",
    //     auth: {
    //         user: process.env.CONTACT_EMAIL_USER,
    //         pass: process.env.CONTACT_EMAIL_PASS,
    //     },
    // });
    const transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false, 
        auth: {
            user: process.env.CONTACT_EMAIL_USER,
            pass: process.env.CONTACT_EMAIL_PASS,
        },
    });

    // Updated User confirmation email template
    const userEmailTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thanks for Contacting Procurement Plug!</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <div style=" background-color: #F4F4F4; width: 100%; height: 20px;"></div>
            <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <tr>
                    <td style="padding: 20px;">
                        <h1 style="font-size: 24px; color: #333333; margin: 0 0 20px;">Thanks for Contacting Procurement Plug!</h1>
                        <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                            Hi ${name},<br/>
                            Thanks for getting in touch. We’ve received your inquiry and one of our experts will be in touch within the next 24 hours to discuss your needs.
                        </p>
                        <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                            Meanwhile, you might find these resources helpful:
                        </p>
                        <ul style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px; padding-left: 20px;">
                            <li><span style="color: #1b1b1b; text-decoration: none; font-weight: 600;">Quick Start Guide:</span> How to get the most from Procurement Plug</li>
                            <li><span style="color: #1b1b1b; text-decoration: none; font-weight: 600;">Customer Success Stories:</span> See how others are streamlining their sourcing</li>
                            <li><span style="color: #1b1b1b; text-decoration: none; font-weight: 600;">FAQs:</span> Answers to common questions</li>
                        </ul>
                        <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                            Looking forward to chatting soon!
                        </p>
                        <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                            Best regards,<br/>
                            The Procurement Plug Team
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

    // Admin notification email template (unchanged)
    const adminEmailTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <div style=" background-color: #F4F4F4; width: 100%; height: 20px;"></div>
            <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <tr>
                    <td style="padding: 20px;">
                        <h1 style="font-size: 24px; color: #333333; margin: 0 0 20px;">New Contact Form Submission</h1>
                        <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                            You have received a new message via the contact form on <strong>The Procurement Plug</strong>.
                        </p>
                        <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                            <strong>Submission Details:</strong><br/>
                            Name: ${name}<br/>
                            Email: ${email}<br/>
                            Message: ${message}<br/>
                            Submitted at: ${new Date().toLocaleString()}
                        </p>
                        <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                            Please review the message and respond to the user as needed.
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

    // Email options for user
    const userMailOptions = {
        from: `"The Procurement Plug" <${process.env.CONTACT_EMAIL_USER}>`,
        to: email,
        subject: "Thanks for Contacting Procurement Plug!",
        html: userEmailTemplate,
    };

    // Email options for admin
    const adminMailOptions = {
        from: `"The Procurement Plug" <${process.env.CONTACT_EMAIL_USER}>`,
        to: process.env.CONTACT_EMAIL_USER,
        subject: "New Contact Form Submission",
        html: adminEmailTemplate,
    };

    // Send both emails
    try {
        await transporter.verify();
        console.log("Sending emails to:", { userEmail: email, adminEmail: process.env.CONTACT_EMAIL_USER });

        await Promise.all([
            transporter.sendMail(userMailOptions),
            transporter.sendMail(adminMailOptions),
        ]);
        return NextResponse.json({
            message: "Message sent, saved to database, and confirmation emails sent successfully",
            success: true,
            data: { name, email, message }
        });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({ error: `Failed to send confirmation emails: ${error.message}` }, { status: 500 });
    }
}