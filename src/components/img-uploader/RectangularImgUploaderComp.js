"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

const RectangularImgUploader = ({
  label,
  onImageSelect,
  showError,
  value,
}) => {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(value);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create a temporary preview
    const localPreview = URL.createObjectURL(file);
    setPreview(localPreview);

    // Pass file to parent
    onImageSelect(file);
  };

  const handleRemoveImage = () => {
    setPreview(undefined);
    onImageSelect(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="w-full">
      <div
        className={`relative border ${showError ? "border-red-500" : "border-[#85009D]"
          } w-full h-60 aspect-square flex items-center justify-center cursor-pointer
           transition text-[#010101] rounded-xs bg-white`}
        onClick={() => inputRef.current?.click()}
      >
        {preview ? (
          <>
            <img
              src={preview}
              alt="Preview"
              className="p-4 rounded-sm m-auto w-full h-60 object-contain"
            />
            <button
              type="button"
              className="absolute top-2 right-2 bg-white text-red-500 px-2 py-1 text-xs rounded shadow"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveImage();
              }}
            >
              Remove
            </button>
          </>
        ) : (
          <div className="text-center">
            <Image
              src="/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/download.png"
              alt="upload logo"
              width={128}
              height={128}
              className="m-auto w-32 h-32 object-cover mb-4"
            />
            <h2 className="font-semibold">Upload Media For</h2>
            <span className="text-sm">
              {label || "Click to upload image"}
            </span>
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default RectangularImgUploader;
