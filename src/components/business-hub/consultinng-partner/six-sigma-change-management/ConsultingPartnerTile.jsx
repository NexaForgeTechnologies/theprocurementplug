import Link from "next/link";
import React from "react";

function ConsultingPartnerTile({ heading, text, url = "" }) {
  return (
    <div className="w-full rounded-2xl border border-[#85009D] hover:border-[#A020F0] bg-white p-5 flex flex-col items-center justify-center text-center text-[#85009D]">
      <h2 className="text-xl md:text-2xl font-extrabold">{heading}</h2>
      <h3 className="my-4 text-xl md:text-2xl font-medium text-[#363636]">{text}</h3>
      {/* <Link
        href={url}
        className="cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded"
      >
        View
      </Link> */}
    </div>
  );
}

export default ConsultingPartnerTile;
