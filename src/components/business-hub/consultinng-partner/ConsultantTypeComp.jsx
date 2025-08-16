import React from "react";
import Link from "next/link";

// helper to make URL safe
const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/&/g, "") // remove & completely
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with -
    .replace(/(^-|-$)/g, ""); // trim starting/ending -

function ConsultingPartnerTile({ type }) {
  const href = `/business-hub/consulting-partner/${slugify(type.value)}`;

  return (
    <Link
      href={href}
      className="w-full rounded-[6px] hover:border-[#85009D] border border-[#DBBB89] hover:bg-[#85009D] bg-[#FFFBF5] p-5 flex flex-col justify-between gap-6 text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
    >
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">{type.value}</h2>
        <p className="text-[#1B1B1B] text-base group-hover:text-white">{type.description}</p>
      </div>
      <span className="flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
        View Details
        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
      </span>
    </Link>
  );
}

export default ConsultingPartnerTile;