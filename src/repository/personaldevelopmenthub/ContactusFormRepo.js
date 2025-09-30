import { db } from '@/lib/shared/database/db';

export async function insertContactForm(data) {
    const {
        name, company, job, email, phone,
        teamsize, priorities, contactMethod, additionalNotes
    } = data;

    const sql = `
    INSERT INTO contact_us_form (
      name, company, job, email, phone,
      teamsize, priorities, contact_method, additional_notes
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

    const values = [
        name,
        company,
        job,
        email,
        phone,
        teamsize,
        JSON.stringify(priorities), // Store array as string
        contactMethod,
        additionalNotes,
    ];

    await db.query(sql, values);
}
