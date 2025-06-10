import React from "react";

import Link from "next/link";

function ConsultantTile({ img, heading, subHeading, text1, text2, bgColor }) {
  // const urlFriendlyHeading = heading.replace(/\s+/g, "-").toLowerCase();
  return (
    <div
      className="
        text-[#363636] w-full rounded-2xl border border-[#85009D] hover:border-[#b08d57] bg-white hover:bg-[#85009D] p-5 flex flex-col items-center justify-center text-center hover:text-white transition-all duration-200 ease-in-out"
    >
      <h2 className="text-xl md:text-2xl font-extrabold">{heading}</h2>
      <h3
        className={`${bgColor ? "text-white" : "text-[#b08d57]"
          } text-xl md:text-2xl font-medium`}
      >
        {subHeading}
      </h3>
      <div className="my-2 flex flex-col items-center">
        <span className="font-bold">{text1}</span>
      </div>
      <Link
        href={`/business-hub/venue-partner/venue-partner-detail`}
        className="cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded"
      >
        View
      </Link>
    </div>
  );
}

export default ConsultantTile;
