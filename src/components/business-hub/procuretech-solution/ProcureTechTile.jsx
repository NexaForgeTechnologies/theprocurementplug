"use client";

import React from "react";
import Link from "next/link";

import Image from "next/image";

import { useProcureTechStore } from "@/store/ProcuretechStore";

const ProcuretechSolutionTile = ({
    data
}) => {

    if (!data) return null;

    const setProcuretech = useProcureTechStore((state) => state.setProcuretech);

    return (
        <Link
            href={`/business-hub/procuretech-solution/${data.id}`}
            onClick={() => setProcuretech(data)} // save data before navigating
            className="w-full p-4 flex flex-col items-center text-center gap-6 rounded-[6px] hover:border-[#85009D] border border-[#DBBB89] hover:bg-[#85009D] bg-[#FFFBF5]
                 text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
        >

            <Image
                src="/images/bussiness-hub/procuretech-solution/procuretech-solution-detail/stcicon1.png"
                alt={data.img || ""}
                width={240}
                height={240}
            />

            <h2 className="text-xl md:text-2xl font-extrabold">{data.name}</h2>

            <button
                onClick={() => setProcuretech(data)} // save data before navigating
                className="mt-auto flex items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]"
            >
                View Details
                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
            </button>
        </Link>
    );
};

export default ProcuretechSolutionTile;
