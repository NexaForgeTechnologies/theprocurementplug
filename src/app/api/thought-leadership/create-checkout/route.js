import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // important
export const dynamic = 'force-dynamic';

import { ThoughtLeadershipRepo } from '@/repository/thought-leadership/ThoughtLeadershipRepo';

export async function POST(request) {
    try {
        const body = await request.json();

        const origin = request.headers.get("origin");

        const data = await ThoughtLeadershipRepo.createInsightPost(body, origin);

        return NextResponse.json({
            success: true,
            url: data?.url,
            sessionId: data?.id,
            postId: data?.postId,
        });
    } catch (error) {
        console.error("Error in POST /thought-leadership/create-checkout", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
