export async function convertFileToBase64(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");

  // Optional: include file type for easier rendering later (data URI)
  const mimeType = file.type;
  return `data:${mimeType};base64,${base64}`;
}
