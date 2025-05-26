import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import mysql from "mysql2/promise";

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
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("Missing email environment variables:", {
            EMAIL_USER: !!process.env.EMAIL_USER,
            EMAIL_PASS: !!process.env.EMAIL_PASS,
        });
        return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Initialize MySQL connection
    let connection;
    try {
        connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

        // Insert contact data into messages table
        await connection.execute(
            "INSERT INTO messages (name, email, message, submitted_at) VALUES (?, ?, ?, NOW())",
            [name, email, message]
        );
    } catch (error) {
        console.error("Database error:", error);
        return NextResponse.json({ error: "Failed to save message to database" }, { status: 500 });
    } finally {
        if (connection) await connection.end();
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // User confirmation email template
    const userEmailTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You for Contacting The Procurement Plug!</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <tr>
                    <td style="padding: 20px; text-align: center; background-color: #212121; border-top-left-radius: 8px; border-top-right-radius: 8px;">
                        <img src="https://yourdomain.com/images/footer/Horizontal-V1-copy.png" alt="The Procurement Plug Logo" style="max-width: 260px; height: auto;" />
                    </td>
                </tr>
                <tr>
                    <td style="padding: 30px; text-align: center;">
                        <h1 style="font-size: 24px; color: #333333; margin: 0 0 20px;">Thank You for Your Message!</h1>
                        <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                            Dear ${name},<br/>
                            We have successfully received your message at <strong>The Procurement Plug</strong>. Thank you for reaching out to us!
                        </p>
                        <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                            <strong>Your Details:</strong><br/>
                            Email: ${email}<br/>
                            Message: ${message}
                        </p>
                        <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                            Our team will review your message and get back to you as soon as possible. We appreciate your patience and are excited to connect with you!
                        </p>
                        <a href="https://theprocurementplug.com" style="display: inline-block; padding: 12px 24px; background-color: #85009D; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px;">
                            Visit Our Website
                        </a>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 20px; text-align: center; background-color: #f4f4f4; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                        <p style="font-size: 14px; color: #999999; margin: 0;">
                            © ${new Date().getFullYear()} The Procurement Plug. All rights reserved.
                        </p>
                        <p style="font-size: 14px; color: #999999; margin: 5px 0 0;">
                            <a href="https://theprocurementplug.com" style="color: #85009D; text-decoration: none;">Contact Us</a>
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
            <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <tr>
                    <td style="padding: 20px; text-align: center; background-color: #212121; border-top-left-radius: 8px; border-top-right-radius: 8px;">
                        <img src="https://yourdomain.com/images/footer/Horizontal-V1-copy.png" alt="The Procurement Plug Logo" style="max-width: 260px; height: auto;" />
                    </td>
                </tr>
                <tr>
                    <td style="padding: 30px;">
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
                        <a href="https://theprocurementplug.com" style="display: inline-block; padding: 12px 24px; background-color: #85009D; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px;">
                            Visit Website
                        </a>
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
        from: `"The Procurement Plug" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "We’ve Received Your Message!",
        html: userEmailTemplate,
    };

    // Email options for admin (sent to EMAIL_USER)
    const adminMailOptions = {
        from: `"The Procurement Plug" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: "New Contact Form Submission",
        html: adminEmailTemplate,
    };

    // Send both emails
    try {
        // Verify transporter configuration
        await transporter.verify();
        
        // Log email recipients for debugging
        console.log("Sending emails to:", { userEmail: email, adminEmail: process.env.EMAIL_USER });

        await Promise.all([
            transporter.sendMail(userMailOptions),
            transporter.sendMail(adminMailOptions),
        ]);
        return NextResponse.json({ message: "Message sent, saved to database, and confirmation emails sent successfully" });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({ error: `Failed to send confirmation emails: ${error.message}` }, { status: 500 });
    }
}