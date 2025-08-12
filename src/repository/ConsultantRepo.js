import { db } from "@/lib/db";

export class ConsultantRepo {
    static async getAllConsultants() {
        try {
            const [rows] = await db.query(`
                SELECT 
                    c.id,
                    c.consultant_type_id,
                    ct.value AS consultant_type_name,
                    c.industry_id,
                    i.value AS industry_name,
                    c.location_id,
                    l.value AS location_name,
                    c.specialism_id,
                    s.value AS specialism_name,
                    c.img,
                    c.name,
                    c.designation,
                    c.company,
                    c.overview,
                    c.email,
                    c.experties_areas,
                    c.engagement_models,
                    c.clients,
                    c.testimonials,
                    c.created_at,
                    c.updated_at,
                    c.deleted_at
                FROM consultants c
                LEFT JOIN consultant_types ct ON c.consultant_type_id = ct.id
                LEFT JOIN industries i ON c.industry_id = i.id
                LEFT JOIN locations l ON c.location_id = l.id
                LEFT JOIN specialisms s ON c.specialism_id = s.id
                WHERE c.deleted_at IS NULL
                ORDER BY c.id DESC;
            `);
            
            const consultants = rows.map((row) => ({
                id: row.id,
                consultant_type_id: row.consultant_type_id,
                consultant_type_name: row.consultant_type_name,
                industry_id: row.industry_id,
                industry_name: row.industry_name,
                location_id: row.location_id,
                location_name: row.location_name,
                specialism_id: row.specialism_id,
                specialism_name: row.specialism_name,
                img: row.img,
                name: row.name,
                designation: row.designation,
                company: row.company,
                overview: row.overview,
                email: row.email,
                experties_areas: row.experties_areas,
                engagement_models: row.engagement_models,
                clients: row.clients,
                testimonials: row.testimonials,
                created_at: row.created_at,
                updated_at: row.updated_at,
                deleted_at: row.deleted_at,
            }));

            return consultants;
        } catch (error) {
            console.error("Error fetching consultants:", error);
            throw new Error("Unable to fetch consultants from the database");
        }
    }
}
