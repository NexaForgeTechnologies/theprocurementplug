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
            email: fields.email || "",
            phone: fields.phone || "",
            linkedIn: fields.linkedIn || "",
            location: fields.location || "",
            currentCompany: fields.currentCompany || "",
            role: fields.role || "",
            experience: fields.experience || "",
            companyrole: fields.companyrole || "",
            industries: fields.industries || "",
            advisoryYes: fields.advisoryYes === "true",
            advisoryNo: fields.advisoryNo === "true",
            boardProject: fields.boardProject || "",
            strategicRisk: fields.strategicRisk || "",
            hoursPerMonth: fields.hoursPerMonth || "",
            interestReason: fields.interestReason || "",
        };

        // Validate required fields
        if (!formData.name || !formData.email || !formData.currentCompany || !formData.role || !formData.experience || !formData.industries || !formData.companyrole || !formData.hoursPerMonth || !formData.interestReason) {
            console.error("Missing required fields:", {
                name: formData.name,
                email: formData.email,
                currentCompany: formData.currentCompany,
                role: formData.role,
                experience: formData.experience,
                companyrole: formData.companyrole,
                industries: formData.industries,
                hoursPerMonth: formData.hoursPerMonth,
                interestReason: formData.interestReason,
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
        if (formData.linkedIn && !/^https?:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/i.test(formData.linkedIn)) {
            console.error("Invalid LinkedIn URL:", formData.linkedIn);
            return NextResponse.json(
                { error: "Invalid LinkedIn URL. Please provide a valid LinkedIn profile URL or leave it blank." },
                { status: 400 }
            );
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

            // Insert application data into strategic_qa_partner table
            await connection.execute(
                `INSERT INTO strategic_qa_partner (
          name, email, phone, linkedIn, location, current_company, role, experience,
          companyrole, industries, advisory_yes, advisory_no, board_project, strategic_risk, 
          hours_per_month, interest_reason, submitted_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
                [
                    formData.name,
                    formData.email,
                    formData.phone,
                    formData.linkedIn,
                    formData.location,
                    formData.currentCompany,
                    formData.role,
                    formData.experience,
                    formData.companyrole,
                    formData.industries,
                    formData.advisoryYes,
                    formData.advisoryNo,
                    formData.boardProject,
                    formData.strategicRisk,
                    formData.hoursPerMonth,
                    formData.interestReason,
                ]
            );
        } catch (error) {
            console.error("Database error:", error);
            return NextResponse.json({ error: "Failed to save application to database" }, { status: 500 });
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
        <title>Your QA Partner application is in—what’s next?</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <div style="background-color: #f4f4f4; width: 100%; height: 20px;"></div>
        <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <tr>
            <td style="padding: 20px;">
              <h1 style="font-size: 24px; color: #333333; margin: 0 0 20px;">Your QA Partner application is in—what’s next?</h1>
              <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                Hi ${formData.name.split(" ")[0]},<br/>
                Thanks for applying to become a Plug Strategic QA Partner. We’ve added your details to our review queue—our team will evaluate your background and be in touch within 2 business days.
              </p>
              <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                While you wait, you might explore:
              </p>
              <ul style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px; padding-left: 20px;">
              <li><span style="color: #1b1b1b; text-decoration: none; font-weight: 600;">Program Overview:</span> Key responsibilities & benefits</li>
              <li><span style="color: #1b1b1b; text-decoration: none; font-weight: 600;">Partner Success Stories:</span> How our QA Partners drive quality improvements</li>
               <li><span style="color: #1b1b1b; text-decoration: none; font-weight: 600;">Partner Community Forum:</span> Connect with current QA Partners and ask questions</li>
              </ul>
              <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                We appreciate your interest and look forward to reviewing your expertise!
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

        // Admin notification email template
        const adminEmailTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Plug Strategic QA Partner Application</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <div style="background-color: #f4f4f4; width: 100%; height: 20px;"></div>
        <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <tr>
            <td style="padding: 20px;">
              <h1 style="font-size: 24px; color: #333333; margin: 0 0 20px;">New Plug Strategic QA Partner Application</h1>
              <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                A new application has been submitted for the Plug Strategic QA Partner program.
              </p>
              <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                <strong>Applicant Details:</strong><br/>
                Name: ${formData.name}<br/>
                Email: ${formData.email}<br/>
                Phone: ${formData.phone || 'Not provided'}<br/>
                LinkedIn: ${formData.linkedIn || 'Not provided'}<br/>
                Location: ${formData.location || 'Not provided'}<br/>
                Current Company: ${formData.currentCompany}<br/>
                Role: ${formData.role}<br/>
                Company/Role: ${formData.companyrole}<br/>
                Experience: ${formData.experience}<br/>
                Industries: ${formData.industries}<br/>
                Submitted at: ${new Date().toLocaleString()}
              </p>
              <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                <strong>Strategic & Leadership Exposure:</strong><br/>
                Advisory to Boards/C-Suite (Yes): ${formData.advisoryYes ? 'Yes' : 'No'}<br/>
                Advisory to Boards/C-Suite (No): ${formData.advisoryNo ? 'Yes' : 'No'}<br/>
                Board-Level/Enterprise Project: ${formData.boardProject || 'Not provided'}
              </p>
              <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                <strong>Quality & Risk Mindset:</strong><br/>
                Strategic Risk Example: ${formData.strategicRisk || 'Not provided'}
              </p>
              <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                <strong>Availability & Interest:</strong><br/>
                Hours per Month: ${formData.hoursPerMonth}<br/>
                Reason for Interest: ${formData.interestReason}
              </p>
              <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                Please review the application and follow up as needed.
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
            subject: "We’ve got your Plug Strategic QA Partner application",
            html: userEmailTemplate,
        };

        // Email options for admin
        const adminMailOptions = {
            from: `"The Procurement Plug" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: "New Plug Strategic QA Partner Application",
            html: adminEmailTemplate,
        };

        // Send both emails
        try {
            await transporter.verify();
            console.log("Sending emails to:", { userEmail: formData.email, adminEmail: process.env.EMAIL_USER });
            await Promise.all([transporter.sendMail(userMailOptions), transporter.sendMail(adminMailOptions)]);
            return NextResponse.json({
                message: "Application sent, saved to database, and confirmation emails sent successfully",
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