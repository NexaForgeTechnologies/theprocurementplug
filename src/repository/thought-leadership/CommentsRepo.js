import { db } from "@/lib/db";

export class CommentRepo {

    // 🔹 Fetch all comments for a roundtable
    static async getByPostId(post_id) {
        try {
            const [rows] = await db.query(
                `
                    SELECT * 
                    FROM viplounge_insight_posts_comments 
                    WHERE post_id = ?
                    ORDER BY created_at ASC
                `,
                [post_id]
            );

            return rows; // return flat list
        } catch (error) {
            console.error("Error fetching comments:", error);
            throw new Error("Database error");
        }
    }

    // Add comment or reply
    static async createComment({ post_id, parent_id, user_name, user_email, comment }) {

        try {
            let finalParentId = parent_id;

            // --- Force one-level replies only ---
            if (parent_id) {
                const [rows] = await db.query(
                    `SELECT parent_id FROM viplounge_insight_posts_comments WHERE id = ?`,
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
                INSERT INTO viplounge_insight_posts_comments 
                (post_id, parent_id, user_name, user_email, comment)
                VALUES (?, ?, ?, ?, ?)
            `,
                [post_id, finalParentId, user_name, user_email, comment]
            );

            return { id: result.insertId };
        } catch (error) {
            console.error("Error adding comment:", error);
            throw new Error("Database error");
        }
    }

    // Update comment
    static async updateComment({ id, comment }) {
        try {
            const [result] = await db.query(
                `
                    UPDATE viplounge_insight_posts_comments 
                    SET comment = ?, updated_at = NOW()
                    WHERE id = ?
                `,
                [comment, id]
            );

            return { updated: result.affectedRows > 0 };
        } catch (error) {
            console.error("Error updating comment:", error);
            throw new Error("Database error");
        }
    }

    // Delete comment
    static async deleteComment({ id }) {
        try {
            const [result] = await db.query(
                `
                    DELETE FROM viplounge_insight_posts_comments 
                    WHERE id = ? OR parent_id = ?
                `,
                [id, id]
            );

            return { id };
        } catch (error) {
            console.error("Error deleting comment:", error);
            throw new Error("Database error");
        }
    }
}
