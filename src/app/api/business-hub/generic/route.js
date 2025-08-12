import { GenericRepo } from "@/repository/GenericRepo";

function getTableFromQuery(req) {
  const { searchParams } = new URL(req.url);
  return searchParams.get("table");
}

export async function GET(req) {
  const table = getTableFromQuery(req);
  if (!table) {
    return Response.json({ error: "Table name is required" }, { status: 400 });
  }

  try {
    const data = await GenericRepo.getAll(table);
    return Response.json(data, { status: 200 });
  } catch (error) {
    console.error(`Error fetching ${table}:`, error);
    return Response.json({ error: `Failed to fetch ${table}` }, { status: 500 });
  }
}