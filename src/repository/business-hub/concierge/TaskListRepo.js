import { db } from "@/lib/db";

export class TaskListRepo {
    static async saveTaskListForm({ name, company, email, interest }) {

        try {
            const [result] = await db.query(
                `INSERT INTO task_list_requests (name, company, email, interest)
                VALUES (?, ?, ?, ?)`,
                [name, company, email, interest]
            );

            return {
                id: result.insertId,
                name,
                company,
                email,
                interest,
            };
        } catch (error) {
            console.error("Error saving form:", error);
            throw new Error("Unable to save form to the database");
        }
    }
}
