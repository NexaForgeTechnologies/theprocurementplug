import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // important
export const dynamic = 'force-dynamic';

import { RoundTableRepo } from '@/repository/round-table/RoundTableRepo';

export async function GET() {
  return new Response(JSON.stringify({ error: "Method not allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request) {
  try {
    const body = await request.json();

    const origin = request.headers.get("origin");

    const data = await RoundTableRepo.createRoundTable(body, origin);

    return NextResponse.json({
      success: true,
      url: data?.url,
      sessionId: data?.sessionId,
      roundTableId: data?.roundTableId,
    });

  } catch (error) {
    console.error("Error in POST /round-table/create-checkout", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}