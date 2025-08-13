import React from "react";

import Link from "next/link";

import { useConsultantStore } from "@/store/consultantStore";

function ConsultingPartnerTile({ data }) {
  if (!data) return null; // don't render if data is missing

  const setConsultant = useConsultantStore((state) => state.setConsultant);

  return (
    <Link
      href={`/business-hub/consulting-partner/${data.id}`}
      onClick={() => setConsultant(data)} // save data before navigating
      className="w-full rounded-[6px] hover:border-[#85009D] border border-[#DBBB89] hover:bg-[#85009D] bg-[#FFFBF5] p-5 flex flex-col justify-between text-center md:text-start gap-6  text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
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
      <span className="flex self-center md:self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
        View Details
        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
      </span>
    </Link>
  );
}

export default ConsultingPartnerTile;
