import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";

export const runtime = "nodejs";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Can be single file or multiple files
    const files = formData.getAll("file");

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    const uploadPromises = files.map(async (file) => {
      console.log(file.name);
      
      const buffer = Buffer.from(await file.arrayBuffer());
      const fileName = `uploads/${randomUUID()}-${file.name}`;

      await s3.send(
        new PutObjectCommand({
          Bucket: process.env.AWS_S3_BUCKET,
          Key: fileName,
          Body: buffer,
          ContentType: file.type,
        })
      );

      return `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
    });

    const urls = await Promise.all(uploadPromises);

    // Return single URL if only one file
    if (urls.length === 1) {
      return NextResponse.json({ url: urls[0] });
    }

    return NextResponse.json({ urls });
  } catch (error) {
    console.error("S3 upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload" },
      { status: 500 }
    );
  }
}
