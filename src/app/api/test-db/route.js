import mysql from "mysql2/promise";

export async function GET(req) {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT,
        });

        const [rows] = await connection.execute("SELECT NOW() as currentTime");
        await connection.end();

        return new Response(
            JSON.stringify({ success: true, time: rows[0].currentTime }),
            { status: 200 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            { status: 500 }
        );
    }
}
