import { db } from "@/lib/db";
import { createStripeSession } from '@/lib/shared/helper';

import crypto from "crypto";
function generateToken() {
    return crypto.randomBytes(32).toString("hex");  // 64-char token
}

export class RoundTableRepo {
    static async findByEmail(email) {
        try {
            const [rows] = await db.query(
                `SELECT id, email, already_partner 
         FROM viplounge_insight_posts 
         WHERE email = ? AND payment IS NOT NULL LIMIT 1`,
                [email]
            );

            return rows[0] || null;
        } catch (error) {
            console.error("Error fetching partner:", error);
            throw new Error("Database error");
        }
    }

    static async getAll() {
        try {
            const [rows] = await db.query(
                `SELECT * FROM roundtables
       WHERE is_approved = 1 ORDER BY id DESC`
            );

            return rows; // return full array
        } catch (error) {
            console.error("Error fetching thought leadership records:", error);
            throw new Error("Database error");
        }
    }

    static async createRoundTable(data, origin) {

        let priceId = process.env.price_id_week_1;

        if (data.package == "2 Weeks" && data.already_partner == 1) {
            priceId = process.env.price_id_week_2_existing_partner;
        } else if (data.package == "2 Weeks") {
            priceId = process.env.price_id_week_2_non_partner;
        }

        let stripe = await createStripeSession({ origin, priceId })

        const slug = data.title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')  // remove invalid characters
            .replace(/\s+/g, '-')          // spaces to dashes
            .replace(/-+/g, '-');          // remove multiple dashes
        const public_url = `${origin}/business-hub/vip-lounge/collaboration-influence/vip-forum/${slug}?status=false&session_id=null`;
        const secret_url = `${origin}/business-hub/vip-lounge/collaboration-influence/vip-forum/${slug}?status=true&session_id=${stripe.id}`;

        // Generate secure token
        const access_token = generateToken();

        const [result] = await db.query(
            `
                INSERT INTO round_table
                (
                session_id, name, email, website, companyName, package, title, description, targetAudience, date, banner_image, logo_image, payment,already_partner, public_url, secret_url, access_token)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `,
            [
                stripe.id, data.name, data.email, data.website, data.companyName, data.package, data.title, data.description, data.targetAudience, data.date, data.bannerImage, data.logoImage, data.payment, data.already_partner, public_url, secret_url, access_token
            ]
        );

        return {
            success: true,
            roundTableId: result.insertId,
            url: stripe.url,
            sessionId: stripe.id
        };
    }
}
