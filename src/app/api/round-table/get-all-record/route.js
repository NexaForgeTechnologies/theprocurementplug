
import { get } from '@/lib/shared/database/db-query';

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req) {
  try {
    let body = {};
    try {
      body = await req.json();
    } catch {
      // No body or invalid JSON → keep body as {}
    }

    console.log("Request body:", body);

    let { status } = body;
    if (!status) {
      status = "payment done, but pending from admin";
    }

    const records = await get("round_table", { eq: { status } });

    if (!Array.isArray(records.data) || records.length === 0) {
      return jsonResponse({ error: "No records found" }, 404);
    }

    return jsonResponse({ data: records.data });
  } catch (error) {
    console.error("Error in POST /api/round-table/get-all-record:", error);
    return jsonResponse(
      { error: "Internal Server Error", details: error.message },
      500
    );
  }
}


