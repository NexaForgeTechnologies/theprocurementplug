"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { buildNestedComments } from "@/utils/buildNestedComments";
import CommentItem from "@/components/business-hub/vip-lounge/CommentSection";

export default function CommentSection({ id, isSecret }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [replyTo, setReplyTo] = useState(null);

  const loadComments = async () => {
    const res = await axios.get(
      `/api/round-table/comments?roundtable_id=${id}`
    );
    setComments(buildNestedComments(res.data));
  };

  useEffect(() => {
    loadComments();
  }, []);

  const submitComment = async () => {
    if (!newComment.trim()) return;

    await axios.post("/api/round-table/comments", {
      roundtable_id: id,
      parent_id: replyTo,
      user_name: "John Mathew", // dynamic later
      comment: newComment,
    });

    setNewComment("");
    setReplyTo(null);
    loadComments();
  };

  const handleReplySubmit = async (parentId, text) => {
    await axios.post("/api/round-table/comments", {
      roundtable_id: id,
      parent_id: parentId,
      user_name: "John Mathew",
      comment: text,
    });

    loadComments();
  };

  const handleEditComment = async (commentId, updatedText) => {
    await axios.put(`/api/round-table/comments`, {
      id: commentId,
      comment: updatedText,
    });
    loadComments();
  };

  const handleDeleteComment = async (commentId) => {
    await axios.delete(`/api/round-table/comments`, {
      data: { id: commentId },
    });

    loadComments();
  };

  return (
    <div className="text-[#000000] bg-[#FFFBF5] border border-[#D09B48] p-6 rounded-md">
      <h3 className="text-[#1B1B1B] font-semibold text-[24px] mb-6">
        Comments Section
      </h3>

      {comments.length === 0 && (
        <p className="text-[#919191] text-center">No comments yet. Be the first to comment! Try Submit a Question?</p>
      )}

      {/* Comment List */}
      <div>
        {comments.map((c) => (
          <CommentItem
            key={c.id}
            comment={c}
            onReplySubmit={handleReplySubmit}
            onEdit={handleEditComment}
            onDelete={handleDeleteComment}
            can_delete={true}
            isSecret={isSecret}
          />
        ))}
      </div>

      {/* Input Area */}
      {isSecret && (
        <div className="mt-6">
          {replyTo && (
            <p className="text-sm text-gray-600 mb-2">
              Replying to comment #{replyTo}
            </p>
          )}

          <textarea
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />

          <button
            onClick={submitComment}
            className="bg-[#1B1B1B] text-white px-4 py-2 mt-3 rounded-md"
          >
            Post Comment
          </button>
        </div>
      )}
    </div>
  );
}
