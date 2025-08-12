import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { name, email, password, login_source } = await req.json();

    if (!name || !email || !password || !login_source) {
      return new Response(JSON.stringify({ message: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // Check if user already exists
    const [existingUsers] = await connection.execute(
      'SELECT * FROM users_frontend WHERE email = ?',
      [email]
    );

    if (existingUsers.length > 0) {
      await connection.end();
      return new Response(JSON.stringify({ message: 'User already exists' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into database
    await connection.execute(
      'INSERT INTO users_frontend (name, email, password, login_source) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, login_source]
    );

    await connection.end();
    return new Response(JSON.stringify({ message: 'User created successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
