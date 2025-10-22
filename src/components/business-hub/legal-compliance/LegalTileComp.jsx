import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useLegalStore } from "@/store/LegalComplianceStore";

function LegalTile({ data, url }) {
    if (!data) return null;

    const setLegal = useLegalStore((state) => state.setLegal);

    return (
        <Link
            href={url}
            onClick={() => setLegal(data)} // save data before navigating
            className="w-full p-4 flex flex-col items-center text-center gap-2 rounded-[6px] hover:border-[#85009D] border border-[#DBBB89] hover:bg-[#85009D] bg-[#FFFBF5] text-[#85009D]
             hover:text-white transition-all duration-200 ease-in-out group relative"
        >

            <Image
                className="rounded-full w-40 h-40 object-cover"
                src={data.img || "/images/default-circle.png"}
                alt={"Legal Compliance Image"}
                width={160}
                height={160}
            />

            <h2 className="text-xl md:text-2xl font-semibold">{data.name}</h2>

            <div className="my-2">
                <p className="text-[#1B1B1B] text-base group-hover:text-white">{data.experties}</p>
            </div>

            <button onClick={() => openEditForm(data)} className="mt-auto flex items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">View Details
                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
            </button>
        </Link>
    );
}

export default LegalTile;
