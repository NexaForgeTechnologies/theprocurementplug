import React from "react";
import Link from "next/link";

function ConsultingPartnerTile({ heading, text, text2, btntext, url = "" }) {
  return (
    <Link
      href={url}
      className="w-full rounded-[6px] hover:border-[#85009D] border border-[#DBBB89] hover:bg-[#85009D] bg-[#FFFBF5] p-5 flex flex-col justify-between gap-6  text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
    >
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">{heading}</h2>
        <p className="text-[#1B1B1B] text-base group-hover:text-white">{text}</p>
        {text2 && (
          <p className="text-[#1B1B1B] text-base group-hover:text-white mt-2">{text2}</p>
        )}
      </div>
      <span className="flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
        {btntext}
        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
      </span>
    </Link>
  );
}

export default ConsultingPartnerTile;
