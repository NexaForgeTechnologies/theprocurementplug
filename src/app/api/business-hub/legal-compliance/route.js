import { LegalRepo } from '@/repository/business-hub/LegalRepo';

export async function GET(request) {
    try {
        // extract query params from URL
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (id) {

            // ✅ get single legal
            const legal = await LegalRepo.getLegalById(id);

            if (!legal) {
                return Response.json({ error: "Legal not found" }, { status: 404 });
            }

            return Response.json(legal, { status: 200 });
        }

        // ✅ get all legals
        const legal = await LegalRepo.getAllLegal();

        return Response.json(legal, { status: 200 });

    } catch (error) {
        console.error("Error processing GET request:", error);
        return Response.json(
            { error: "Failed to process GET request for legal" },
            { status: 500 }
        );
    }
}
