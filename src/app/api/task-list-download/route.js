import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import mysql from "mysql2/promise";

export async function POST(req) {
    try {
        // Parse form data
        const formDataEntries = await req.formData();
        const fields = Object.fromEntries(formDataEntries);

        // Convert fields to proper types
        const formData = {
            name: fields.name || "",
            company: fields.company || "",
            email: fields.email || "",
            interest: fields.interest || "",
        };

        // Validate required fields
        if (!formData.name || !formData.company || !formData.email || !formData.interest) {
            console.error("Missing required fields:", {
                name: formData.name,
                company: formData.company,
                email: formData.email,
                interest: formData.interest,
            });
            return NextResponse.json(
                { error: "All required fields must be filled" },
                { status: 400 }
            );
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            console.error("Invalid email format:", formData.email);
            return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
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

            // Insert form data into task_list_download table
            await connection.execute(
                `INSERT INTO task_list_download (
                    name, company, email, interest, submitted_at
                ) VALUES (?, ?, ?, ?, NOW())`,
                [
                    formData.name,
                    formData.company,
                    formData.email,
                    formData.interest,
                ]
            );
        } catch (error) {
            console.error("Database error:", error);
            return NextResponse.json({ error: "Failed to save form data to database" }, { status: 500 });
        } finally {
            if (connection) await connection.end();
        }

        // Validate environment variables for email
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error("Missing email environment variables:", {
                EMAIL_USER: !!process.env.EMAIL_USER,
                EMAIL_PASS: !!process.env.EMAIL_PASS,
            });
            return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
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
        <title>Here’s your Task List download, ${formData.name.split(" ")[0]}</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <div style="background-color: #f4f4f4; width: 100%; height: 20px;"></div>
        <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <tr>
            <td style="padding: 20px;">
              <h1 style="font-size: 24px; color: #333333; margin: 0 0 20px;">Here’s your Task List download, ${formData.name.split(" ")[0]}</h1>
              <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                Hi ${formData.name.split(" ")[0]},<br/>
                As requested, here’s your downloadable Task List:
              </p>
              <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                <a href="https://theprocurementplug.com/task-list-download" style="color: #85009D; text-decoration: none; font-weight: 600;">Download Task List</a>
              </p>
              <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                This template will help you understand what services your procurement function can benefit from by using The Plug Concierge —from requirement gathering through digital transformation and strategic reviews by our CPOs.
              </p>
              <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                While you’re here, you might also like:
              </p>
              <ul style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px; padding-left: 20px;">
              <li><span style="color: #1b1b1b; text-decoration: none; font-weight: 600;">Procurement Playbook:</span> Step-by-step best practices</li>
              <li><span style="color: #1b1b1b; text-decoration: none; font-weight: 600;">Supplier Scorecard Template:</span> Measure supplier performance</li>
              <li><span style="color: #1b1b1b; text-decoration: none; font-weight: 600;">Client Success Stories:</span> How others use these resources</li>
              </ul>
              <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                Enjoy—and let us know if you have any questions!
              </p>
              <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                Best,<br/>
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

        // Admin notification email template
        const adminEmailTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Task List Download Request</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <div style="background-color: #f4f4f4; width: 100%; height: 20px;"></div>
        <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <tr>
            <td style="padding: 20px;">
              <h1 style="font-size: 24px; color: #333333; margin: 0 0 20px;">New Task List Download Request</h1>
              <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                A new request for the Task List download has been submitted.
              </p>
              <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                <strong>Request Details:</strong><br/>
                Name: ${formData.name}<br/>
                Company: ${formData.company}<br/>
                Email: ${formData.email}<br/>
                Interest: ${formData.interest}<br/>
                Submitted at: ${new Date().toLocaleString()}
              </p>
              <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                Please follow up as needed.
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
            from: `"The Procurement Plug" <${process.env.EMAIL_USER}>`,
            to: formData.email,
            subject: `Here’s your Task List download, ${formData.name.split(" ")[0]}`,
            html: userEmailTemplate,
        };

        // Email options for admin
        const adminMailOptions = {
            from: `"The Procurement Plug" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: "New Task List Download Request",
            html: adminEmailTemplate,
        };

        // Send both emails
        try {
            await transporter.verify();
            console.log("Sending emails to:", { userEmail: formData.email, adminEmail: process.env.EMAIL_USER });
            await Promise.all([transporter.sendMail(userMailOptions), transporter.sendMail(adminMailOptions)]);
            return NextResponse.json({
                message: "Form submitted, saved to database, and confirmation emails sent successfully",
                success: true,
                data: formData,
            });
        } catch (error) {
            console.error("Email error:", error);
            return NextResponse.json({ error: `Failed to send confirmation emails: ${error.message}` }, { status: 500 });
        }
    } catch (error) {
        console.error("Server error:", error);
        return NextResponse.json({ error: "Failed to process form data" }, { status: 500 });
    }
}