const { SignJWT, jwtVerify } = require('jose');

// Make sure to call this *after* dotenv.config() if using env vars from .env
const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET);

async function signToken(payload) {
    const token = await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setExpirationTime('3h')
        .sign(SECRET_KEY);

    return token;
}

async function verifyToken(token) {
    try {
        const { payload } = await jwtVerify(token, SECRET_KEY, {
            algorithms: ['HS256'],
        });

        return payload;
    } catch (error) {
        console.error('Token verification failed:', error);
        return null;
    }
}

module.exports = {
    signToken,
    verifyToken,
};
