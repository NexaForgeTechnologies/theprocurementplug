import mysql from "mysql2/promise";

export default async function handler(req, res) {
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

    res.status(200).json({ success: true, time: rows[0].currentTime });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
