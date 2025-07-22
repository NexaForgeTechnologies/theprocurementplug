import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
// import mysql from "mysql2/promise";

export async function POST(req) {
  const { email } = await req.json();

  // Validate email
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    console.error("Invalid or missing email:", email);
    return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 });
  }

  // Validate environment variables
  if (!process.env.SUBSCRIBE_EMAIL_USER || !process.env.Subscribe_EMAIL_PASS) {
    console.error("Missing email environment variables:", {
      SUBSCRIBE_EMAIL_USER: !!process.env.SUBSCRIBE_EMAIL_USER,
      Subscribe_EMAIL_PASS: !!process.env.Subscribe_EMAIL_PASS,
    });
    return NextResponse.json({ error: "Internal server configuration error" }, { status: 500 });
  }

  // Initialize MySQL connection
  /*
  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
 
    // Check if email already exists
    const [rows] = await connection.execute(
      "SELECT email FROM subscribers WHERE email = ?",
      [email]
    );
 
    if (rows.length > 0) {
      return NextResponse.json({ error: "This email is already subscribed" }, { status: 400 });
    }
 
    // Insert email into subscribers table
    await connection.execute(
      "INSERT INTO subscribers (email, subscribed_at) VALUES (?, NOW())",
      [email]
    );
  } catch (error) {
    console.error("Database error:", error);
    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json({ error: "This email is already subscribed" }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to process subscription" }, { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
  */

  // Configure Nodemailer transporter
  // const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //         user: process.env.SUBSCRIBE_EMAIL_USER,
  //         pass: process.env.Subscribe_EMAIL_PASS,
  //     },
  // });
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SUBSCRIBE_EMAIL_USER,
      pass: process.env.Subscribe_EMAIL_PASS,
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
            <h1 style="font-size: 24px; color: #333333; margin: 0 0 20px;">Thank You for Subscribing!</h1>
            <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
              Welcome to <strong>The Procurement Plug</strong>! You're now part of our community and will receive the latest updates on features, releases, and more.
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
              A new user has subscribed to <strong>The Procurement Plug</strong> newsletter.
            </p>
            <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
              <strong>Subscriber Details:</strong><br/>
              Email: ${email}<br/>
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
    from: `"The Procurement Plug" <${process.env.SUBSCRIBE_EMAIL_USER}>`,
    to: email,
    subject: "Welcome to The Procurement Plug Newsletter!",
    html: subscriberEmailTemplate,
  };

  // Email options for admin
  const adminMailOptions = {
    from: `"The Procurement Plug" <${process.env.SUBSCRIBE_EMAIL_USER}>`,
    to: process.env.SUBSCRIBE_EMAIL_USER,
    subject: "New Subscriber Notification",
    html: adminEmailTemplate,
  };

  // Send both emails
  try {
    await transporter.verify();
    console.log("Sending emails to:", { subscriberEmail: email, adminEmail: process.env.SUBSCRIBE_EMAIL_USER });
    await Promise.all([
      transporter.sendMail(subscriberMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);
    return NextResponse.json({ message: "Subscription successful! Confirmation emails sent." });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send confirmation emails" }, { status: 500 });
  }
}