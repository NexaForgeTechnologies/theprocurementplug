import Image from "next/image";
import React, { useState, useRef } from "react";

export default function CommentItem({
  comment,
  onReplySubmit,
  onEdit,
  onDelete,
  can_delete = false,
  isSecret,
  secretToken,
}) {
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
    <div className="mb-6">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-3">
        <Image
          src="/images/default-circle.png"
          alt="user"
          width={36}
          height={36}
          className="w-[36px] h-[36px] rounded-full"
        />
        <p className="text-[#1B1B1B] font-medium">{comment.user_name}</p>
        <p className="text-[#919191] text-sm">
          {formatTime(comment.created_at)}
        </p>
      </div>

      {/* Comment or Edit Mode */}
      {!isEditing ? (
        <p className="text-[#000000] text-[16px] md:text-[19px] leading-[1.5] mb-2">
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
      {isSecret && (
        <div className="flex items-center gap-4 text-sm mt-2">
          {/* Reply */}
          <button
            className="text-[#505050] hover:underline"
            onClick={openReplyBox}
          >
            Reply
          </button>

          {/* Edit */}
          {!isEditing ? (
            <button
              className="text-blue-600 hover:underline"
              onClick={() => setIsEditing(true)}
            >
              ✏️
            </button>
          ) : (
            <button
              className="text-green-600 hover:underline"
              onClick={handleSaveEdit}
            >
              Save
            </button>
          )}

          {/* Cancel Edit */}
          {isEditing && (
            <button
              className="text-gray-500 hover:underline"
              onClick={() => {
                setUpdatedText(comment.comment);
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
          )}

          {/* Delete */}
          {can_delete && (
            <button
              className="text-red-600 hover:underline"
              onClick={() => onDelete(comment.id)}
            >
              🗑️
            </button>
          )}
        </div>
      )}

      {/* Reply Box (NEW) */}
      {showReplyBox && (
        <div className="mt-3 ml-12">
          <textarea
            ref={replyInputRef}
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder={`Reply to ${comment.user_name}`}
          />
          <div className="flex items-center gap-4 text-sm mt-2">
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
              can_delete={can_delete}
              isSecret={isSecret}
            />
          ))}
        </div>
      )}
    </div>
  );
}
