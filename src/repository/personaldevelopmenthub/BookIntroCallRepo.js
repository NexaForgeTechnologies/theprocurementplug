import { db } from "@/lib/db";
import { convertFileToBase64 } from "@/lib/upload/convertFileToBase64";

export async function BookIntroCallRepo(data) {
  const topic = data.get("topic");
  const message = data.get("message");
  const date = data.get("date");
  const timeFrom = data.get("timeFrom");
  const timeTo = data.get("timeTo");
  const cv = data.get("cv"); // File object

  let cvBase64 = null;
  if (cv) {
    cvBase64 = await convertFileToBase64(cv);
  }

  const sql = `
    INSERT INTO book_intro_calls (
      topic, message, date, time_from, time_to, cv_filename
    ) VALUES (?, ?, ?, ?, ?, ?)
  `;

  const values = [topic, message, date, timeFrom, timeTo, cvBase64];
  await db.query(sql, values);
}
