import { db } from "@/lib/db";

export class GenericRepo {
    static async getAll(tableName) {
        try {
            const [rows] = await db.query(`
                SELECT *
                FROM ${tableName}
                WHERE deleted_at IS NULL
                ORDER BY id ASC
            `);

            return rows;
        } catch (error) {
            console.error(`Error fetching from ${tableName}:`, error);
            throw new Error(`Unable to fetch records from ${tableName}`);
        }
    }
}
