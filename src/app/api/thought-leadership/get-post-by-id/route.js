import { ThoughtLeadershipRepo } from '@/repository/thought-leadership/ThoughtLeadershipRepo';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const postId = searchParams.get("post_id");

        const post = await ThoughtLeadershipRepo.getPostById(postId);
        return Response.json(post, { status: 200 });

    } catch (error) {
        console.error("Error processing GET request:", error);
        return Response.json(
            { error: "Failed to process GET request for post" },
            { status: 500 }
        );
    }
}
