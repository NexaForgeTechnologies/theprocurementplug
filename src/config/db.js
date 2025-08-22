// db.js
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import path from "path";

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

// Create a MySQL connection pool using environment variables
const db = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  waitForConnections: true,
  connectionLimit: 10, // optional: max connections
  queueLimit: 0,
});

// Export db as default
export default db;

// Optional: test DB connection
export async function testConnection() {
  try {
    const connection = await db.getConnection();
    console.log("✅ Connected to the MySQL database!");
    connection.release();
  } catch (error) {
    console.error("❌ Error connecting to the database:", error.message);
  }
}

// Run test only if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testConnection();
}
