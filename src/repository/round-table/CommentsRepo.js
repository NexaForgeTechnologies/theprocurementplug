import { db } from "@/lib/db";

export class CommentRepo {

    // 🔹 Fetch all comments for a roundtable
    static async getByRoundtableId(roundtable_id) {
        try {
            const [rows] = await db.query(
                `
                    SELECT * 
                    FROM round_table_comments 
                    WHERE roundtable_id = ?
                    ORDER BY created_at ASC
                `,
                [roundtable_id]
            );

            return rows; // return flat list
        } catch (error) {
            console.error("Error fetching comments:", error);
            throw new Error("Database error");
        }
    }


    // 🔹 Add comment or reply
    static async createComment({ roundtable_id, parent_id, user_name, comment }) {
        // console.log({ roundtable_id, parent_id, user_name, comment });

        try {
            let finalParentId = parent_id;

            // --- Force one-level replies only ---
            if (parent_id) {
                const [rows] = await db.query(
                    `SELECT parent_id FROM round_table_comments WHERE id = ?`,
                    [parent_id]
                );

                const parentComment = rows[0];

                // If parent comment also has a parent → reply should attach to main parent
                if (parentComment && parentComment.parent_id) {
                    finalParentId = parentComment.parent_id;
                }
            }

            const [result] = await db.query(
                `
                INSERT INTO round_table_comments 
                (roundtable_id, parent_id, user_name, comment)
                VALUES (?, ?, ?, ?)
            `,
                [roundtable_id, finalParentId, user_name, comment]
            );

            return { id: result.insertId };
        } catch (error) {
            console.error("Error adding comment:", error);
            throw new Error("Database error");
        }
    }
}
