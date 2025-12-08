import { ThoughtLeadershipRepo } from '@/repository/thought-leadership/ThoughtLeadershipRepo';

export async function GET() {
  try {

    const tables = await ThoughtLeadershipRepo.getAll();
    return Response.json(tables, { status: 200 });

  } catch (error) {
    console.error("Error processing GET request:", error);
    return Response.json(
      { error: "Failed to process GET request for tables" },
      { status: 500 }
    );
  }
}
