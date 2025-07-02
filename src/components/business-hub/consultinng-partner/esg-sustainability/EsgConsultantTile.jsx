import React from "react";
import Image from "next/image";

function ConsultingPartnerTile({ heading, text1, text2, img }) {
  return (
    <div
      className="w-full rounded-[6px] hover:border-[#85009D] border border-[#DBBB89] hover:bg-[#85009D] bg-[#FFFBF5] p-5 flex flex-col justify-between text-center md:text-start gap-6  text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
    >
      <div className="flex justify-center">
        <Image
          className="rounded-full w-[160px] md:w-[227px] h-[160px] md:h-[227px] object-cover"
          src={img}
          alt={img}
          width={227}
          height={27}
        />
      </div>
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">{heading}</h2>
        <p className="text-[#1B1B1B] text-base group-hover:text-white">{text1}</p>
        <p className="text-[#1B1B1B] text-base group-hover:text-white">{text2}</p>
      </div>
    </div>
  );
}

export default ConsultingPartnerTile;
