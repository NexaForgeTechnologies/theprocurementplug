import React from "react";
import Image from "next/image";

export default function FeatureReportTile({
  heading,
  para,
  bigimg,
  tag,
  btntext,
  url = "",
  onButtonClick,
}) {
  const handleClick = (e) => {
    if (onButtonClick) {
      e.preventDefault(); // prevent default link behavior
      onButtonClick();    // trigger parent-defined form logic
    }
    // else: allow default <a href={url} download>
  };

  return (
    <div className="w-full rounded-[6px] border border-[#DBBB89] bg-[#FFFBF5] p-2 flex flex-col justify-between gap-4 text-[#85009D]">
      <div className="flex flex-col items-start">
        {/* Render image only if `bigimg` prop is passed */}
        {bigimg && (
          <Image
            src={bigimg}
            alt="Report Image"
            width={259}
            height={60}
            className="mb-4 w-full object-cover"
          />
        )}

        {/* Render tag only if `tag` prop is passed */}
        {tag && (
          <p className="mb-2 text-[12px] border-1 border-[#85009D] rounded-[0.5px] px-1 bg-[#ffff] text-[#1B1B1B]">
            {tag}
          </p>
        )}

        {/* Render heading */}
        {heading && (
          <h2 className="mb-2 text-xl md:text-2xl font-semibold">{heading}</h2>
        )}

        {/* Render paragraph only if `para` prop is passed */}
        {para && (
          <p className="text-[#1B1B1B] text-base group-hover:text-[#ffff]">
            {para}
          </p>
        )}
      </div>

      {/* Render button only if `btntext` prop is passed */}
      {btntext && (
        <a
          href={onButtonClick ? "#" : url}  // If onButtonClick is passed, prevent default href behavior
          onClick={handleClick}
          className="flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]"
        >
          {btntext}
          <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45" />
        </a>
      )}
    </div>
  );
}
