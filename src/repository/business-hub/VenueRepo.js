// src/repositories/VenuPartnerRepo.js
import { db } from "@/lib/db";

export class VenuPartnerRepo {
    static async getAllVenuePartners() {
        try {
            const [rows] = await db.query(`
        SELECT 
            vp.id,
            vp.img,
            vp.name,
            vp.location,
            vp.capacity_id,
            c.value AS capacity_name,
            vp.amenity_id,
            a.value AS amenity_name,
            vp.overview,
            vp.testimonials,
            vp.created_at,
            vp.updated_at,
            vp.deleted_at
        FROM venu_partners vp
        LEFT JOIN capacities c ON vp.capacity_id = c.id
        LEFT JOIN amenities a ON vp.amenity_id = a.id
        WHERE vp.deleted_at IS NULL
        ORDER BY vp.id DESC;
      `);

            const venuePartners = rows.map((row) => ({
                id: row.id,
                img: row.img,
                name: row.name,
                location: row.location,
                capacity_id: row.capacity_id,
                capacity_name: row.capacity_name,
                amenity_id: row.amenity_id,
                amenity_name: row.amenity_name,
                overview: row.overview,
                testimonials: row.testimonials,
                created_at: row.created_at,
                updated_at: row.updated_at,
                deleted_at: row.deleted_at,
            }));

            return venuePartners;
        } catch (error) {
            console.error("Error fetching venue partners:", error);
            throw new Error("Unable to fetch venue partners from the database");
        }
    }
}
