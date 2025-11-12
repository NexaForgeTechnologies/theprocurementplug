import React, { useState } from "react";
import Image from "next/image";
import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";
import Link from "next/link";

const ToolComp = ({ data }) => {
  const [showFull, setShowFull] = useState(false);

  // Fallback URL
  const href = data?.url
    ? data.url
    : `/business-hub/vip-lounge/innovation-vault/explore-tools/${data?.id || ""}`;

  // Fallback image
  const imageSrc = data?.img || data?.logo || "/images/placeholder.png";

  // Description logic
  const description = data.text || data.description || "";
  const limit = 35;
  const isLong = description.length > limit;
  const displayedText = showFull
    ? description
    : isLong
    ? description.slice(0, limit) + "..."
    : description;

  return (
    <Link
      href={href}
      className="cursor-pointer flex gap-2 flex-col w-full rounded-[6px] border-2 border-[#DBBB89]
      hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-4 text-[#85009D] hover:text-white 
      transition-all duration-200 ease-in-out group"
    >
      <Image
        src={imageSrc}
        alt={data.heading || "Tool"}
        width={270}
        height={data.isBeta ? 250 : 350}
        className={`w-full max-w-[${data.isBeta ? 220 : 350}px] min-h-[220px] max-h-[220px] mx-auto mb-4 rounded-sm object-contain`}
      />

      {/* Beta label if applicable */}
      {data.isBeta && (
        <h2 className="rounded-[2px] text-xs max-w-max px-1 border border-[#85009D] group-hover:border-white text-[#1B1B1B] group-hover:text-white">
          Beta Access
        </h2>
      )}

      {/* Heading and rating */}
      <div className="flex items-center flex-wrap justify-between">
        <h2 className="text-[#85009D] font-bold text-2xl group-hover:text-white">
          {data.heading || data.title}
        </h2>
        <div>⭐⭐⭐⭐⭐</div>
      </div>

      {/* Category tag */}
      <span className="self-start text-xs px-2 py-0.5 rounded bg-white text-[#1B1B1B] group-hover:bg-white group-hover:text-[#85009D] border border-[#85009D]">
        {data.category || "No Tag"}
      </span>

      {/* Description with conditional "View More / Less" */}
      {description && (
        <p className="text-[#1B1B1B] group-hover:text-white text-sm">
          {displayedText}{" "}
          {isLong && (
            <button
              type="button"
              className="text-[#B08D57] hover:underline ml-1"
              onClick={(e) => {
                e.preventDefault(); // prevent Link navigation
                setShowFull(!showFull);
              }}
            >
              {showFull ? "View Less" : "View More"}
            </button>
          )}
        </p>
      )}

      {/* Arrow button */}
      <div>
        <ArrowButtonCom
          text={data.urlText || "View details"}
          borderColor="border-[#DBBB89]"
        />
      </div>
    </Link>
  );
};

export default ToolComp;
