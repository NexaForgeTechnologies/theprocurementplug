import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useVenueStore } from "@/store/venueStore";

function VenueTile({ data }) {
  if (!data) return null;

  const setVenue = useVenueStore((state) => state.setVenue);

  return (
    <Link
      href={`/business-hub/venue-partner/${data.id}`}
      onClick={() => setVenue(data)}
      className="w-full p-6 flex flex-col items-center text-center gap-4 rounded-[6px] hover:border-[#85009D] border border-[#DBBB89] hover:bg-[#85009D] bg-[#FFFBF5] text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group relative"
    >

      <Image
        className="rounded-md h-36 w-full object-cover"
        src={data.img || "/images/default-rectangle.webp"}
        alt={"Venue Partner Image"}
        width={150}
        height={150}
      />

      <h2 className="text-xl md:text-2xl font-extrabold">{data.name}</h2>

      <div>
        <p className="text-[#1B1B1B] text-base group-hover:text-white">{data.location}</p>
        <p className="text-[#1B1B1B] text-base group-hover:text-white">{data.capacity_name + " Capacity"}</p>
      </div>

      <button onClick={() => openEditForm(data)} className="mt-auto flex items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">View Details
        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
      </button>
    </Link>
  );
}

export default VenueTile;
