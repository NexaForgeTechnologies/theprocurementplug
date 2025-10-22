import { db } from "@/lib/db";

export class LegalRepo {
    static async getAllLegal() {
        try {
            const [rows] = await db.query(`
                SELECT 
                    lc.id,
                    lc.legal_compliance_type_id,
                    lct.value AS legal_compliance_type_name,
                    lc.industry_id,
                    i.value AS industry_name,
                    lc.region_id,
                    r.value AS region_name,
                    lc.img,
                    lc.name,
                    lc.experties,
                    lc.overview,
                    lc.email,
                    lc.jurisdictional_coverage,
                    lc.company_logo,
                    lc.practice_areas,
                    lc.services,
                    lc.sample_templates,
                    lc.testimonials,
                    lc.created_at,
                    lc.updated_at,
                    lc.deleted_at
                FROM legal_compliance lc
                LEFT JOIN legal_compliance_types lct ON lc.legal_compliance_type_id = lct.id
                LEFT JOIN industries i ON lc.industry_id = i.id
                LEFT JOIN regions r ON lc.region_id = r.id
                WHERE lc.deleted_at IS NULL
                ORDER BY lc.id DESC;
            `);

            return rows.map((row) => ({
                id: row.id,
                legal_compliance_type_id: row.legal_compliance_type_id,
                legal_compliance_type_name: row.legal_compliance_type_name,
                industry_id: row.industry_id,
                industry_name: row.industry_name,
                region_id: row.region_id,
                region_name: row.region_name,
                img: row.img,
                name: row.name,
                experties: row.experties,
                overview: row.overview,
                email: row.email,
                jurisdictional_coverage: row.jurisdictional_coverage,
                company_logo: row.company_logo || [],
                practice_areas: row.practice_areas,
                services: row.services || [],
                sample_templates: row.sample_templates || [],
                testimonials: row.testimonials,
                created_at: row.created_at,
                updated_at: row.updated_at,
                deleted_at: row.deleted_at,
            }));
        } catch (error) {
            console.error("Error fetching legal_compliance:", error);
            throw new Error("Unable to fetch legal_compliance from the database");
        }
    }
}
