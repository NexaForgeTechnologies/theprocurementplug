import React from "react";
import Image from "next/image";

function ConsultingPartnerTile({ heading, text, img}) {
  return (
    <div
      className="
        text-[#363636] w-full rounded-2xl border border-[#85009D] hover:border-[#A020F0] bg-white p-5 flex flex-col items-center justify-center text-center"
    >
      <Image
        className="w-16 h-16 rounded"
        src={img}
        alt={img}
        width={64}
        height={64}
      />
      <h2 className="text-xl md:text-2xl font-extrabold">{heading}</h2>
 
      <div className="my-2 flex flex-col items-center">
        <span className="font-bold">{text}</span>
      </div>
    </div>
  );
}

export default ConsultingPartnerTile;
