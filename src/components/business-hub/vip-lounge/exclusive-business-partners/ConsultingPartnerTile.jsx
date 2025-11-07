"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

function ConsultingPartnerTile({ heading, para, description, category, btntext, bigimg, url = "", BtnLink }) {
  const [showFullPara, setShowFullPara] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation(); // prevent bubbling
    if (BtnLink && typeof BtnLink === "function") {
      BtnLink(); // handle popup toggle or any custom logic
    }
  };

  // Helper to truncate text and toggle
  const renderTextWithToggle = (text, showFull, setShowFull) => {
    if (!text) return null;
    const limit = 120;
    const isLong = text.length > limit;
    const displayedText = showFull || !isLong ? text : text.slice(0, limit) + "...";

    return (
      <p className="text-[#1B1B1B] text-base group-hover:text-[#ffff] flex flex-col">
        {displayedText}
        {isLong && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowFull(!showFull);
            }}
            className="text-[#85009D] group-hover:text-[#DBBB89] font-semibold text-sm mt-1 self-start"
          >
            {showFull ? "View Less" : "View More"}
          </button>
        )}
      </p>
    );
  };

  const content = (
    <div
      className="w-full rounded border border-[#DBBB89] hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-5 flex flex-col md:flex-row text-center md:text-start justify-between items-center gap-6 text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
    >
      {bigimg && (
        <div className="flex justify-center md:justify-end">
          <Image
            src={bigimg}
            alt="logo"
            width={250}
            height={153}
            className="w-full max-w-[150px] h-auto md:w-full"
            style={{ height: "auto" }}
          />
        </div>
      )}

      <div className="flex-1 flex flex-col items-center md:items-start gap-4">
        <h2 className="text-xl md:text-2xl font-semibold">{heading}</h2>

        {para && (
          <div className="flex flex-col">
            <span className="font-medium">Tagline:</span>
            {renderTextWithToggle(para, showFullPara, setShowFullPara)}
          </div>
        )}

        {description && (
          <div className="flex flex-col">
            <span className="font-medium">Description:</span>
            {renderTextWithToggle(description, showFullDesc, setShowFullDesc)}
          </div>
        )}

        {category && (
          <p className="text-[#1B1B1B] text-base group-hover:text-[#ffff] mb-0 md:mb-8 flex flex-col">
            <span className="font-medium text-[#85009D] group-hover:text-[#ffff]">Category:</span> {category}
          </p>
        )}

        {btntext && (
          BtnLink && typeof BtnLink === "string" ? (
            <a
              href={BtnLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex self-center md:self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] focus:outline-none"
            >
              {btntext}
              <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
            </a>
          ) : (
            <button
              type="button"
              onClick={handleClick}
              className="flex self-center md:self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] focus:outline-none"
            >
              {btntext}
              <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
            </button>
          )
        )}
      </div>
    </div>
  );

  return url && !BtnLink ? <Link href={url}>{content}</Link> : content;
}

export default ConsultingPartnerTile;
