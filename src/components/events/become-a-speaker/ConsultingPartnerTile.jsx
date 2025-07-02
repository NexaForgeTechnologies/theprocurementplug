import React from "react";
import Image from "next/image";

function ConsultingPartnerTile({ heading, text, img }) {
  return (
    <div
      className="w-full rounded-[6px] border border-[#DBBB89] bg-[#FFFBF5] p-5 flex flex-col justify-between gap-6  text-[#85009D]"
    >
      <div className="bg-white p-4 rounded-full border border-[85009D] self-start">
        <Image
          className="w-16 h-16"
          src={img}
          alt={img}
          width={64}
          height={64}
        />
      </div>
      <h2 className="text-xl md:text-2xl font-semibold">{heading}</h2>
      <p className="text-[#1B1B1B] text-base">{text}</p>
    </div>
  );
}

export default ConsultingPartnerTile;
