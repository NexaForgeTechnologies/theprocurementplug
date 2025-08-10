import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import mysql from "mysql2/promise";
import fs from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    // Parse form data using Next.js built-in formData
    const formDataEntries = await req.formData();
    const fields = Object.fromEntries(formDataEntries);

    // Convert fields to proper types
    const formData = {
      name: fields.name || "",
      email: fields.email || "",
      phone: fields.phone || "",
      linkedIn: fields.linkedIn || "",
      location: fields.location || "",
      experience: fields.experience || "",
      message: fields.message || "",
      mcipsCips: fields.mcipsCips === "true",
      projectmanagement: fields.projectmanagement === "true",
      sixsigma: fields.sixsigma === "true",
      other: fields.other === "true",
      contractdrafting: fields.contractdrafting === "true",
      categorystrategy: fields.categorystrategy === "true",
      commercialstrategies: fields.commercialstrategies === "true",
      interviewseat: fields.interviewseat === "true",
      tendersupport: fields.tendersupport === "true",
      sourcingsupplier: fields.sourcingsupplier === "true",
      marketinsight: fields.marketinsight === "true",
      evaluationseat: fields.evaluationseat === "true",
      p2pSrmESourcing: fields.p2pSrmESourcing === "true",
      immediately: fields.immediately === "true",
      withinonemonth: fields.withinonemonth === "true",
      withintwomonth: fields.withintwomonth === "true",
      laterdiscuss: fields.laterdiscuss === "true",
      occasionaltasks: fields.occasionaltasks === "true",
      opentolargecomplex: fields.opentolargecomplex === "true",
      regulartasks: fields.regulartasks === "true",
      Subscribe: fields.Subscribe === "true",
    };

    // Validate required fields
    if (!formData.name || !formData.email || !formData.experience || !formData.Subscribe) {
      console.error("Missing required fields:", {
        name: formData.name,
        email: formData.email,
        experience: formData.experience,
        Subscribe: formData.Subscribe,
      });
      return NextResponse.json(
        { error: "Name, email, experience, and consent are required" },
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

    // Handle file upload (if provided)
    let cvPath = null;
    const file = formDataEntries.get("cv");
    if (file && file instanceof File) {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(file.type)) {
        console.error("Invalid file type:", file.type);
        return NextResponse.json(
          { error: "Invalid file type. Please upload a PDF or Word document." },
          { status: 400 }
        );
      }
      const uploadDir = path.join(process.cwd(), "public", "uploads", "cvs");
      await fs.mkdir(uploadDir, { recursive: true });
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const fileExtension = path.extname(file.name);
      cvPath = path.join(uploadDir, `${uniqueSuffix}${fileExtension}`);
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      await fs.writeFile(cvPath, fileBuffer);
      cvPath = `/uploads/cvs/${uniqueSuffix}${fileExtension}`; // Relative path for DB storage
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

      // Insert application data into join_applications table
      await connection.execute(
        `INSERT INTO join_plug_concierge_expert (
          name, email, phone, linkedIn, location, experience, message, 
          mcipsCips, projectmanagement, sixsigma, other, contractdrafting, 
          categorystrategy, commercialstrategies, interviewseat, tendersupport, 
          sourcingsupplier, marketinsight, evaluationseat, p2pSrmESourcing, 
          immediately, withinonemonth, withintwomonth, laterdiscuss, 
          occasionaltasks, opentolargecomplex, regulartasks, Subscribe, cv_path, submitted_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
        [
          formData.name,
          formData.email,
          formData.phone,
          formData.linkedIn,
          formData.location,
          formData.experience,
          formData.message,
          formData.mcipsCips,
          formData.projectmanagement,
          formData.sixsigma,
          formData.other,
          formData.contractdrafting,
          formData.categorystrategy,
          formData.commercialstrategies,
          formData.interviewseat,
          formData.tendersupport,
          formData.sourcingsupplier,
          formData.marketinsight,
          formData.evaluationseat,
          formData.p2pSrmESourcing,
          formData.immediately,
          formData.withinonemonth,
          formData.withintwomonth,
          formData.laterdiscuss,
          formData.occasionaltasks,
          formData.opentolargecomplex,
          formData.regulartasks,
          formData.Subscribe,
          cvPath,
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
    const userEmailTemplate = ``;

    // Admin notification email template
    const adminEmailTemplate = ``;

    // Email options for user
    const userMailOptions = {
      from: `"The Procurement Plug" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject: "We’ve got your Plug Concierge Expert application",
      html: userEmailTemplate,
    };

    // Email options for admin
    const adminMailOptions = {
      from: `"The Procurement Plug" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Plug Concierge Expert Application",
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
        data: { ...formData, cvPath },
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