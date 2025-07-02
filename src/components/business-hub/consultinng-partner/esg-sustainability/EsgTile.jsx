import React from "react";

function ConsultingPartnerTile({ heading, text}) {
  return (
    <div
      className="w-full rounded-[6px] hover:border-[#85009D] border border-[#DBBB89] hover:bg-[#85009D] bg-[#FFFBF5] p-5 flex flex-col justify-between gap-6  text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
    >
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">{heading}</h2>
        <p className="text-[#1B1B1B] text-base group-hover:text-white">{text}</p>
      </div>
    </div>
  );
}

export default ConsultingPartnerTile;
