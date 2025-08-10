import fs from "fs";
import path from "path";

export async function saveFile(file, folder = "uploads") {
  const uploadDir = path.join(process.cwd(), "public", folder);

  // Ensure folder exists
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const fileName = `${Date.now()}-${file.name}`;
  const filePath = path.join(uploadDir, fileName);

  // Write file to public/uploads
  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(filePath, buffer);

  // Return relative path for DB
  return `/${folder}/${fileName}`;
}
