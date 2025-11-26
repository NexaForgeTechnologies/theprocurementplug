import { NextResponse } from "next/server";
import { CommentRepo } from "@/repository/round-table/CommentsRepo";

// 🔹 GET — Get all comments for roundtable
export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const roundtable_id = searchParams.get("roundtable_id");

        if (!roundtable_id) {
            return NextResponse.json(
                { error: "roundtable_id is required" },
                { status: 400 }
            );
        }

        const comments = await CommentRepo.getByRoundtableId(roundtable_id);
        return NextResponse.json(comments);

    } catch (error) {
        console.error("Error fetching comments:", error);
        return NextResponse.json(
            { error: "Failed to fetch comments" },
            { status: 500 }
        );
    }
}

// 🔹 POST — Create a comment or reply
export async function POST(req) {
    try {
        const body = await req.json();

        const saved = await CommentRepo.createComment(body);

        return NextResponse.json({
            message: "Comment saved",
            id: saved.id,
        });

    } catch (error) {
        console.error("Error saving comment:", error);
        return NextResponse.json(
            { error: "Failed to save comment" },
            { status: 500 }
        );
    }
}

// PUT - Update comment
export async function PUT(req) {
    try {
        const body = await req.json();

        const comment = await CommentRepo.updateComment(body);

        return NextResponse.json({
            message: "Comment updated",
            id: comment.id,
        });

    } catch (error) {
        console.error("Error updating comment:", error);
        return NextResponse.json(
            { error: "Failed to update comment" },
            { status: 500 }
        );
    }
}

// DELETE - delete comment
export async function DELETE(req) {
    try {
        const body = await req.json();
        const comment = await CommentRepo.deleteComment(body);

        return NextResponse.json({
            message: "Comment deleted",
            id: comment.id,
        });
    } catch (error) {
        console.error("Error deleting comment:", error);
        return NextResponse.json(
            { error: "Failed to delete comment" },
            { status: 500 }
        );
    }
}
