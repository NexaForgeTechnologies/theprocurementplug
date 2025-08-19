import { ConsultantRepo } from '@/repository/business-hub/ConsultantRepo';

export async function GET(request) {
    try {
        // extract query params from URL
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (id) {
            // ✅ get single consultant
            const consultant = await ConsultantRepo.getConsultantsByTypeId(id);

            if (!consultant) {
                return Response.json({ error: "Consultant not found" }, { status: 404 });
            }

            return Response.json(consultant, { status: 200 });
        }

        // ✅ get all consultants
        const consultants = await ConsultantRepo.getAllConsultants();
        return Response.json(consultants, { status: 200 });

    } catch (error) {
        console.error("Error processing GET request:", error);
        return Response.json(
            { error: "Failed to process GET request for consultants" },
            { status: 500 }
        );
    }
}
