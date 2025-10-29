
import { db } from "@/lib/db";
import { convertFileToBase64 } from "@/lib/upload/convertFileToBase64";

export async function RequestMentoringSessionRepo(data) {
  const topic = data.get("topic");
  const message = data.get("message");
  const timeFrom = data.get("timeFrom");
  const timeTo = data.get("timeTo");
  const cv = data.get("cv"); // File object

  let cvBase64 = null;
  if (cv) {
    cvBase64 = await convertFileToBase64(cv);
  }

  const sql = `
    INSERT INTO request_mentoring_session (
      topic, message, time_from, time_to, cv_filename
    ) VALUES (?, ?, ?, ?, ?)
  `;

  const values = [topic, message, timeFrom, timeTo, cvBase64];
  await db.query(sql, values);
}
