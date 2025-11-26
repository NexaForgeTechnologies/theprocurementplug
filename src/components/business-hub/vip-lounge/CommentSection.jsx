import Image from "next/image";
import React, { useState } from "react";

export default function CommentItem({
  comment,
  onReplyClick,
  onEdit,
  onDelete,
  can_delete = false,
  isSecret,
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

    // Format: DD-MM-YYYY
    return date.toLocaleDateString("en-GB");
  }

  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(comment.comment);

  const handleSaveEdit = () => {
    if (updatedText.trim() === "") return;
    onEdit(comment.id, updatedText);
    setIsEditing(false);
  };

  const handleReplyClick = () => {
    onReplyClick(comment.id);

    // 👇 SCROLL TO REPLY BOX
    const replyBox = document.getElementById("reply-box");
    if (replyBox) {
      replyBox.scrollIntoView({ behavior: "smooth", block: "center" });
      replyBox.focus(); // auto focus input
    }
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
            onClick={handleReplyClick}
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

          {/* Delete (Only Show If Allowed) */}
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

      {/* Replies */}
      {comment.replies?.length > 0 && (
        <div className="ml-10 mt-4 border-l border-l-gray-400 pl-4">
          {comment.replies.map((r) => (
            <CommentItem
              key={r.id}
              comment={r}
              onReplyClick={onReplyClick}
              onEdit={onEdit}
              onDelete={onDelete}
              can_delete={can_delete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
