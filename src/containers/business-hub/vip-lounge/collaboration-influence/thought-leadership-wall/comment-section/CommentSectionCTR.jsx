"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import { buildNestedComments } from "@/utils/buildNestedComments";

import CommentItem from "@/components/business-hub/vip-lounge/CommentSection";

export default function CommentSection({ id, secretToken }) {

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [replyTo, setReplyTo] = useState(null);

  const loadComments = async () => {
    const res = await axios.get(
      `/api/thought-leadership/comments?post_id=${id}`
    );
    setComments(buildNestedComments(res.data));
  };
  useEffect(() => {
    loadComments();
  }, []);

  // User Info
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    setUserName(localStorage.getItem("userName") || "");
    setUserEmail(localStorage.getItem("userEmail") || "");
    setAccessToken(localStorage.getItem("accessToken") || "");
  }, []);
  const handleUserNameChange = (e) => {
    const value = e.target.value;
    setUserName(value);
    localStorage.setItem("userName", value);
  };
  const handleUserEmailChange = (e) => {
    const value = e.target.value;
    setUserEmail(value);
    localStorage.setItem("userEmail", value);
  };
  const handleAccessTokenChange = (e) => {
    const value = e.target.value;
    setAccessToken(value);
    localStorage.setItem("accessToken", value);
  };

  // Captcha popup
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");

  useEffect(() => {
    setCaptchaValue(Math.random().toString(36).substring(2, 7));
  }, []);

  // Submit main comment
  const submitComment = async () => {
    if (!newComment.trim()) return;

    // If user not verified → open captcha instead of posting
    if (!userName) {
      setShowCaptcha(true);
      return;
    }

    await axios.post("/api/thought-leadership/comments", {
      post_id: id,
      parent_id: replyTo,
      user_name: userName,
      user_email: userEmail,
      comment: newComment,
    });

    setNewComment("");
    setReplyTo(null);
    loadComments();
  };

  // Submit reply
  const handleReplySubmit = async (parentId, text) => {
    await axios.post("/api/thought-leadership/comments", {
      post_id: id,
      parent_id: parentId,
      user_name: userName,
      user_email: userEmail,
      comment: text,
    });

    loadComments();
  };

  // Edit comment
  const handleEditComment = async (commentId, updatedText) => {
    await axios.put(`/api/thought-leadership/comments`, {
      id: commentId,
      comment: updatedText,
    });
    loadComments();
  };

  // Delete comment
  const handleDeleteComment = async (commentId) => {
    await axios.delete(`/api/thought-leadership/comments`, {
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
        <p className="text-[#919191] text-center">
          No comments yet. Be the first to comment! Try Submit a Question?
        </p>
      )}

      {/* Comment List */}
      {comments.map((c) => (
        <CommentItem
          key={c.id}
          comment={c}
          onReplySubmit={handleReplySubmit}
          onEdit={handleEditComment}
          onDelete={handleDeleteComment}
          secretToken={secretToken}
        />
      ))}

      {/* Comment Input Area - Only when user is verified */}
      <div className="mt-6">
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

      {/* Captcha Popup */}
      {showCaptcha && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md w-[350px] shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Verify Yourself
            </h3>

            <input
              className="w-full mb-3 p-2 border rounded"
              placeholder="Your Name"
              value={userName}
              onChange={handleUserNameChange}
            />

            <input
              className="w-full mb-3 p-2 border rounded"
              placeholder="Your Email"
              value={userEmail}
              onChange={handleUserEmailChange}
            />

            <input
              className="w-full mb-3 p-2 border rounded"
              placeholder="Access Token (If any)"
              value={accessToken}
              onChange={handleAccessTokenChange}
            />

            {/* Captcha */}
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gray-200 px-4 py-2 rounded text-lg font-bold">
                {captchaValue}
              </div>
              <button
                onClick={() =>
                  setCaptchaValue(Math.random().toString(36).substring(2, 7))
                }
                className="text-sm text-blue-500"
              >
                Refresh
              </button>
            </div>

            <input
              className="w-full mb-3 p-2 border rounded"
              placeholder="Enter Captcha"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
            />

            <button
              onClick={() => {
                if (!userName.trim() || !userEmail.trim()) {
                  alert("Please enter name & email");
                  return;
                }

                if (captchaInput !== captchaValue) {
                  alert("Captcha incorrect");
                  return;
                }

                setShowCaptcha(false); // Close popup
                submitComment();
              }}
              className="w-full bg-black text-white py-2 rounded-md"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
