import { db } from "@/lib/db";

export class ConciergeRepo {
    static async saveTaskListForm({ name, company, email, interest }) {
        try {
            const [result] = await db.query(
                `INSERT INTO concierge_task_list_download (name, company, email, interest)
                VALUES (?, ?, ?, ?)`,
                [name, company, email, JSON.stringify(interest)]
            );

            return {
                id: result.insertId,
                name,
                company,
                email,
                interest,
            };
        } catch (error) {
            console.error("Error saving form:", error);
            throw new Error("Unable to save form to the database");
        }
    }

    static async saveWaitlistListForm({ name, company, email, interest }) {
        try {
            const [result] = await db.query(
                `INSERT INTO concierge_join_waitlist (name, company, email, interest)
                VALUES (?, ?, ?, ?)`,
                [name, company, email, JSON.stringify(interest)]
            );

            return {
                id: result.insertId,
                name,
                company,
                email,
                interest,
            };
        } catch (error) {
            console.error("Error saving form:", error);
            throw new Error("Unable to save form to the database");
        }
    }

    static async savePricicngPackagingForm({ name, company, email, interest }) {
        try {
            const [result] = await db.query(
                `INSERT INTO concierge_pricing_packaging (name, company, email, interest)
                VALUES (?, ?, ?, ?)`,
                [name, company, email, JSON.stringify(interest)]
            );

            return {
                id: result.insertId,
                name,
                company,
                email,
                interest,
            };
        } catch (error) {
            console.error("Error saving form:", error);
            throw new Error("Unable to save form to the database");
        }
    }

    static async saveBecomeExpertForm(data) {
        try {
            const [result] = await db.query(
                `INSERT INTO concierge_become_expert
                (name, email, phone, linkedIn, location, experience, experties, procurementAreas, experience_details, availability, workload, cv, Subscribe)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                [
                    data.name,
                    data.email,
                    data.phone,
                    data.linkedIn,
                    data.location,
                    data.experience,
                    JSON.stringify(data.experties || []),
                    JSON.stringify(data.procurementAreas || []),
                    data.experience_details,
                    JSON.stringify(data.availability || []),
                    JSON.stringify(data.workload || []),
                    JSON.stringify(data.cv || []),
                    data.Subscribe ? 1 : 0,
                ]
            );

            return { id: result.insertId, ...data };
        } catch (error) {
            console.error("Error saving Become Expert form:", error);
            throw new Error("Unable to save form to the database");
        }
    }

    static async saveBecomeQaPartnerForm(data) {
        try {
            const [result] = await db.query(
                `INSERT INTO concierge_become_qa_partner
                (name, email, linkedin, location, company, role, experience, designation, industry, services, example, quality_risk_mindset, hours_per_month, interest_reason, cv)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [
                    data.name,
                    data.email,
                    data.linkedin,
                    data.location,
                    data.company,
                    data.role,
                    data.experience,
                    data.designation,
                    data.industry,
                    data.services,
                    data.example,
                    data.quality_risk_mindset,
                    data.hours_per_month,
                    data.interest_reason,
                    JSON.stringify(data.cv || []),
                ]
            );

            return { id: result.insertId, ...data };
        } catch (error) {
            console.error("Error saving QA form:", error);
            throw new Error("Unable to save form to the database");
        }
    }

    static async saveRegisterInterestForm(data) {
        try {
            const [result] = await db.query(
                `INSERT INTO concierge_register_interest
                (name, company, email, interest, subscribe)
                VALUES (?, ?, ?, ?, ?)`,
                [
                    data.name,
                    data.company,
                    data.email,
                    JSON.stringify(data.interest || []),
                    data.subscribe
                ]
            );

            return { id: result.insertId, ...data };
        } catch (error) {
            console.error("Error saving Register Interest form:", error);
            throw new Error("Unable to save form to the database");
        }
    }
}
