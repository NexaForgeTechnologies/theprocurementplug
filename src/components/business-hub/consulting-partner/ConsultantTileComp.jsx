import React from "react";

import Link from "next/link";

import { useConsultantStore } from "@/store/consultantStore";

function ConsultingPartnerTile({ data, url }) {
  if (!data) return null;

  const setConsultant = useConsultantStore((state) => state.setConsultant);

  return (
    <Link
      href={url}
      onClick={() => setConsultant(data)} // save data before navigating
      className="w-full p-4 flex flex-col items-center text-center gap-2 rounded-[6px] hover:border-[#85009D] border border-[#DBBB89] hover:bg-[#85009D] bg-[#FFFBF5] text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group relative"
    >
      <div className="flex justify-center">
        <img
          className="rounded-full w-[160px] md:w-[227px] h-[160px] md:h-[227px] object-cover"
          src="https://procurementplug-dashboard.vercel.app/images/consultant-alternate.png"
        // src={data.img || ""}
        />
      </div>
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">{data.name}</h2>
        <p className="text-[#1B1B1B] text-base group-hover:text-white">
          {data.company}
        </p>
        {data.designation && (
          <p className="text-[#1B1B1B] text-base group-hover:text-white">
            {data.designation}
          </p>
        )}
      </div>
      <span className="flex items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
        View Details
        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
      </span>
    </Link>
  );
}

export default ConsultingPartnerTile;
