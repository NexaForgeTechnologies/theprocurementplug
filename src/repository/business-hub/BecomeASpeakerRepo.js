import { db } from "@/lib/db";

export async function BecomeASpeakerRepo(data) {
  try {
    const {
      name,
      email,
      role,
      company,
      proposedtopic,
      interestin,
      proposal,
    } = data;

    const sql = `
      INSERT INTO become_a_speaker
      (name, email, role, company, proposedtopic, interestin, proposal)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      name,
      email,
      role,
      company,
      proposedtopic,
      interestin,
      proposal,
    ];

    await db.query(sql, values);

    console.log("✅ Become-a-Speaker form saved to DB");
    return { success: true };
  } catch (error) {
    console.error("❌ Error in BecomeASpeakerRepo:", error);
    return { success: false, error: error.message };
  }
}
