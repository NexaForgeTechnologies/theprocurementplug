import { db } from "@/lib/db";

export class ConciergeRepo {
    static async saveTaskListForm({ name, company, email, interest }) {

        try {
            const [result] = await db.query(
                `INSERT INTO concierge_task_list_download (name, company, email, interest)
                VALUES (?, ?, ?, ?)`,
                [name, company, email, interest]
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
        const [result] = await db.query(
            `INSERT INTO concierge_become_expert
                (name, email, phone, linkedIn, location, experience, message,
                mcipsCips, projectmanagement, sixsigma, other,
                contractdrafting, categorystrategy, commercialstrategies,
                interviewseat, tendersupport, sourcingsupplier, marketinsight,
                evaluationseat, p2pSrmESourcing,
                immediately, withinonemonth, withintwomonth, laterdiscuss,
                occasionaltasks, opentolargecomplex, regulartasks, Subscribe)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.name,
                data.email,
                data.phone,
                data.linkedIn,
                data.location,
                data.experience,
                data.message,
                data.mcipsCips ? 1 : 0,
                data.projectmanagement ? 1 : 0,
                data.sixsigma ? 1 : 0,
                data.other ? 1 : 0,
                data.contractdrafting ? 1 : 0,
                data.categorystrategy ? 1 : 0,
                data.commercialstrategies ? 1 : 0,
                data.interviewseat ? 1 : 0,
                data.tendersupport ? 1 : 0,
                data.sourcingsupplier ? 1 : 0,
                data.marketinsight ? 1 : 0,
                data.evaluationseat ? 1 : 0,
                data.p2pSrmESourcing ? 1 : 0,
                data.immediately ? 1 : 0,
                data.withinonemonth ? 1 : 0,
                data.withintwomonth ? 1 : 0,
                data.laterdiscuss ? 1 : 0,
                data.occasionaltasks ? 1 : 0,
                data.opentolargecomplex ? 1 : 0,
                data.regulartasks ? 1 : 0,
                data.Subscribe ? 1 : 0,
            ]
        );

        return { id: result.insertId, ...data };
    }
}
