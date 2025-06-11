import Link from "next/link";
import React from "react";

function ConsultingPartnerTile({ heading, text, url = "" }) {
  return (
    <Link
      href={url}
      className="w-full rounded-2xl border border-[#85009D] hover:border-[#b08d57] bg-white hover:bg-[#85009D] p-5 flex flex-col items-center justify-center text-center text-[#85009D] hover:text-white transition-all duration-200 ease-in-out"
    >
      <h2 className="text-xl md:text-2xl font-extrabold">{heading}</h2>
      <h3 className="my-4 text-xl md:text-2xl font-medium">{text}</h3>
      <span className="cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded">
        View
      </span>
    </Link>
  );
}

export default ConsultingPartnerTile;
