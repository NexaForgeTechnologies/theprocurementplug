import { NextRequest, NextResponse } from "next/server";

import { UserSecretRoundtableLinkEmail } from "@/lib/emails/RoundtableEmail";

// 🔹 PUT — Update
export async function POST(NextRequest) {
    try {
        const body = await NextRequest.json();

        await UserSecretRoundtableLinkEmail(body);

        return NextResponse.json({
            message: "Roundtable link sent successfully",
        });

    } catch (error) {
        console.error("Error sending Roundtable Link:", error);
        return NextResponse.json(
            { error: "Failed to update Roundtable Link" },
            { status: 500 }
        );
    }
}