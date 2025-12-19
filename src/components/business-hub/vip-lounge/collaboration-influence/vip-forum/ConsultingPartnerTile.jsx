import Link from "next/link";
import React from "react";
import Image from "next/image";

import { useRoundtableStore } from "@/store/roundTableStore"; // <-- import zustand

function ConsultingPartnerTile({ data }) {

  const setSelectedRoundtable = useRoundtableStore((state) => state.setSelectedRoundtable);

  return (
    <Link
      onClick={() => setSelectedRoundtable(data)}   // <-- set zustand on click
      href={data.public_url || ""}
      className="w-full rounded-md border border-[#DBBB89] hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-4 text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group space-y-3"
    >

      <div className="w-full h-40 p-1 bg-white rounded-md">
        <Image
          src={data.banner_image ?? ""}
          alt={`logo`}
          width={24}
          height={24}
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-xl md:text-2xl font-semibold">{data.title}</h2>

      <p title={data.description} className="text-[#1B1B1B] group-hover:text-white line-clamp-5 sm:line-clamp-3">
        {data.description}
      </p>

      <p className="text-[#1B1B1B] group-hover:text-[#ffff]">Name: {data.name}</p>

      <span className="flex justify-center items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 
        rounded-md">
        View Details
        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
      </span>

    </Link>
  );
}

export default ConsultingPartnerTile;
