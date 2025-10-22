import { NextResponse } from "next/server";

export async function POST(req){
    const body = await req.json();
    console.log("In Api server : ", body);

    return NextResponse.json({ success: true });
}