import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ message: 'Email and password are required' }), {
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

    // Check if user exists
    const [users] = await connection.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (users.length === 0) {
      await connection.end();
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const user = users[0];
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      await connection.end();
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await connection.end();
    return new Response(
      JSON.stringify({ message: 'Login successful', user: { id: user.id, email: user.email, name: user.name } }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}