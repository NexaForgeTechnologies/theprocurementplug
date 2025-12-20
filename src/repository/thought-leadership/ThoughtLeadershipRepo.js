import crypto from "crypto";

import { db } from "@/lib/db";
import { createSessionForInsightPost } from '@/lib/shared/helper';

function generateToken() {
  return crypto.randomBytes(32).toString("hex");  // 64-char token
}

export class ThoughtLeadershipRepo {
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
        `SELECT * FROM viplounge_insight_posts
       WHERE is_approved = 1 ORDER BY id DESC`
      );

      return rows; // return full array
    } catch (error) {
      console.error("Error fetching thought leadership records:", error);
      throw new Error("Database error");
    }
  }

  // static async createInsightPost(data, origin) {
  //   let stripeSession = null;

  //   if (data.sponsorship === true) {
  //     const priceId = process.env.price_id_insight_posts;
  //     stripeSession = await createSessionForInsightPost({ origin, priceId });
  //   }

  //   const slug = data.heading
  //     .toLowerCase()
  //     .trim()
  //     .replace(/[^a-z0-9\s-]/g, '')
  //     .replace(/\s+/g, '-')
  //     .replace(/-+/g, '-');

  //   const public_url = `${origin}/business-hub/vip-lounge/collaboration-influence/thought-leadership-wall/${slug}?status=false&session_id=null`;

  //   const secret_url = stripeSession
  //     ? `${origin}/business-hub/vip-lounge/collaboration-influence/thought-leadership-wall/${slug}?status=true&session_id=${stripeSession.id}`
  //     : null;

  //   const payment = data.sponsorship ? "pending" : "free";

  //   // Generate secure token 
  //   const access_token = generateToken();

  //   const [result] = await db.query(
  //     `
  //   INSERT INTO viplounge_insight_posts
  //   (name, email, heading, category, description, content_type, content, banner_img, profile_logo, sponsor, payment, public_url, secret_url, access_token, session_id)
  //   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  //   `,
  //     [
  //       data.name,
  //       data.email,
  //       data.heading,
  //       data.categoryType,
  //       data.description,
  //       data.contentType,
  //       data.contentUrl,
  //       data.bannerImage,
  //       data.logoImage,
  //       data.sponsorship,
  //       payment,
  //       public_url,
  //       secret_url,
  //       access_token,
  //       stripeSession?.id
  //     ]
  //   );

  //   return {
  //     url: stripeSession?.url ?? null,
  //     id: stripeSession?.id ?? null,
  //     postId: result.insertId,
  //   };
  // }

  static async createInsightPost(data, origin) {
    let stripeSession = null;
    const connection = await db.getConnection();

    try {
      await connection.beginTransaction();

      // 1️⃣ Create Stripe session if sponsored
      if (data.sponsorship === true) {
        const priceId = process.env.price_id_insight_posts;
        stripeSession = await createSessionForInsightPost({
          origin,
          priceId,
        });
      }

      const payment = data.sponsorship ? "pending" : "free";
      const access_token = generateToken();

      // 2️⃣ First INSERT (without slug & URLs)
      const [result] = await connection.query(
        `
      INSERT INTO viplounge_insight_posts
      (
        name,
        email,
        heading,
        category,
        description,
        content_type,
        content,
        banner_img,
        profile_logo,
        sponsor,
        payment,
        access_token,
        session_id
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
        [
          data.name,
          data.email,
          data.heading,
          data.categoryType,
          data.description,
          data.contentType,
          data.contentUrl,
          data.bannerImage,
          data.logoImage,
          data.sponsorship,
          payment,
          access_token,
          stripeSession?.id ?? null,
        ]
      );

      const postId = result.insertId;

      // 3️⃣ Create slug WITH ID (unique & SEO safe)
      const slug = data.heading
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

      // 4️⃣ Build URLs with ID + params
      const public_url =
        `${origin}/business-hub/vip-lounge/collaboration-influence/thought-leadership-wall/${slug}` +
        `?id=${postId}&status=false&session_id=null`;

      const secret_url = stripeSession
        ? `${origin}/business-hub/vip-lounge/collaboration-influence/thought-leadership-wall/${slug}` +
        `?id=${postId}&status=true&session_id=${stripeSession.id}`
        : null;

      // 5️⃣ Update record with URLs
      await connection.query(
        `
      UPDATE viplounge_insight_posts
      SET public_url = ?, secret_url = ?
      WHERE id = ?
      `,
        [public_url, secret_url, postId]
      );

      await connection.commit();

      // 6️⃣ Final response
      return {
        url: stripeSession?.url ?? null,
        id: stripeSession?.id ?? null,
        postId: result.insertId,
      };
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

}
