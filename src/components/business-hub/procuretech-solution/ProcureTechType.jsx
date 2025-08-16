import React from "react";

import Link from "next/link";
import Image from "next/image";

// helper to make URL safe
const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/&/g, "") // remove & completely
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with -
    .replace(/(^-|-$)/g, ""); // trim starting/ending -

function ProcureTechType({ data }) {
  const href = `/business-hub/procuretech-solution/${slugify(data.value)}`;
  return (
    <Link
    
      href={href}
      className="w-full rounded-[6px] hover:border-[#85009D] border border-[#DBBB89] hover:bg-[#85009D] bg-[#FFFBF5] p-5 flex flex-col items-center text-center md:text-start gap-2 sm:gap-4 text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
    >
      <Image
        className="w-25 h-25"
        src={data.icon}
        alt={data.icon}
        width={100}
        height={100}
      />
      <div className="my-4 space-y-1 text-center">
        <h2 className="text-xl md:text-2xl font-semibold">{data.value}</h2>
        <p className="text-[#1B1B1B] text-base group-hover:text-white">{data.description}</p>
      </div>
      <span className="mt-auto flex items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
        View Details
        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
      </span>
    </Link>
  );
}

export default ProcureTechType;
