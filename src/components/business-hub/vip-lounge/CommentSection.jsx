import Image from "next/image";
import React, { useState, useRef } from "react";

export default function CommentItem({
  comment,
  onReplySubmit,
  onEdit,
  onDelete,
  secretToken
}) {

  const userEmail = localStorage.getItem("userEmail");     // string or null
  const accessToken = localStorage.getItem("accessToken");   // string or null

  const isOwner = comment.user_email === userEmail;
  const isAdmin = secretToken === accessToken;

  function formatTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;

    const minutes = Math.floor(diffMs / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes} min ago`;
    if (hours < 24) return `${hours} hr ago`;

    return date.toLocaleDateString("en-GB");
  }

  const canModify = isOwner || isAdmin;

  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(comment.comment);

  // NEW STATES
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");
  const replyInputRef = useRef(null);

  const handleSaveEdit = () => {
    if (updatedText.trim() === "") return;
    onEdit(comment.id, updatedText);
    setIsEditing(false);
  };

  const openReplyBox = () => {
    setShowReplyBox(true);
    const prefill = `@${comment.user_name} `;
    setReplyText(prefill);

    setTimeout(() => {
      replyInputRef.current?.focus();
    }, 100);
  };

  const submitReply = () => {
    if (!replyText.trim()) return;

    onReplySubmit(comment.id, replyText);
    setReplyText("");
    setShowReplyBox(false);
  };

  return (
    <div className="mb-2">
      {/* User Info */}
      <div className="flex items-center gap-2 mb-2">
        <Image
          src="/images/default-circle.png"
          alt="user"
          width={30}
          height={30}
          className="w-8 h-w-8 rounded-full"
        />
        <p className="text-[#1B1B1B] font-medium">{comment.user_name}</p>
        <p className="text-[#919191] text-sm">
          {formatTime(comment.created_at)}
        </p>
      </div>

      {/* Comment or Edit Mode */}
      {!isEditing ? (
        <p className="text-[#000000] text-xs md:text-sm leading-normal mb-1">
          {comment.comment}
        </p>
      ) : (
        <textarea
          className="w-full border p-2 rounded-md text-black"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
      )}

      {/* Action Buttons */}
      <div className="flex gap-6 items-center">
        {/* Reply */}
        {!isEditing && (
          <button
            className="text-[#505050] hover:underline text-sm"
            onClick={openReplyBox}
          >
            Reply
          </button>
        )}
        {canModify && (
          <div className="space-x-2 text-sm">
            {!isEditing ? (
              <button
                className="text-blue-600 hover:underline"
                onClick={() => setIsEditing(true)}
              >
                ✏️
              </button>
            ) : (
              <div className="space-x-2">
                <button
                  className="text-green-600 hover:underline"
                  onClick={handleSaveEdit}
                >
                  Save
                </button>

                <button
                  className="text-gray-500 hover:underline"
                  onClick={() => {
                    setUpdatedText(comment.comment);
                    setIsEditing(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            )}

            {/* Delete */}
            {!isEditing && (
              <button
                className="hover:underline"
                onClick={() => onDelete(comment.id)}
              >
                🗑️
              </button>
            )}
          </div>
        )}
      </div>

      {/* Reply Box (NEW) */}
      {showReplyBox && (
        <div className="mt-2 ml-12">
          <textarea
            ref={replyInputRef}
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder={`Reply to ${comment.user_name}`}
          />
          <div className="flex items-center gap-4 text-sm mt-1">
            <button
              className="text-gray-500 hover:underline"
              onClick={() => {
                setReplyText("");
                setShowReplyBox(false);
              }}
            >
              Cancel
            </button>
            <button
              className="text-green-600 hover:underline"
              onClick={submitReply}
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* Replies */}
      {comment.replies?.length > 0 && (
        <div className="ml-10 mt-4 border-l border-l-gray-400 pl-4">
          {comment.replies.map((r) => (
            <CommentItem
              key={r.id}
              comment={r}
              onReplySubmit={onReplySubmit}
              onEdit={onEdit}
              onDelete={onDelete}
              secretToken={secretToken}
            />
          ))}
        </div>
      )}
    </div>
  );
}
