import React from "react";
import Link from "next/link";

function PricingPlanTile({ tag, heading, credit, creditvalue, name, data, workingday, workingdayvalue, btntext, url = "", bgColor, textColor, isAnnual }) {
    return (
        <Link
            href={url}
            className="w-full rounded-[6px] hover:border-[#85009D] border border-[#DBBB89] hover:bg-[#85009D] bg-[#FFFBF5] p-5 flex flex-col justify-between text-center md:text-start gap-6  text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
        >
            <div>
                <h2 className="text-xl md:text-[24px] font-semibold px-3 py-1 rounded-[2px] inline-block mb-4 "
                    style={{ color: textColor, backgroundColor: bgColor }}
                >{tag}</h2>
                <h2 className="text-xl md:text-[42px] font-semibold">
                    {heading}{" "}
                    {isAnnual && (
                        <span className="text-[#7B7B7B] text-base group-hover:text-white">
                            /year
                        </span>
                    )}
                </h2>
                <div className="w-full h-[1px] bg-[#B08D57] my-4"></div>
                {credit && (<p className="text-[#1B1B1B] md:text-[20px] group-hover:text-white">{credit}</p>)}
                {creditvalue && (<p className="text-[#7B7B7B] group-hover:text-white mb-2">{creditvalue}</p>)}
                {name && (<p className="text-[#1B1B1B] md:text-[20px] group-hover:text-white">{name}</p>)}
                {data && (<p className="text-[#7B7B7B] group-hover:text-white mb-2">{data}</p>)}
                {workingday && (<p className="text-[#1B1B1B] md:text-[20px] group-hover:text-white">{workingday}</p>)}
                {workingdayvalue && (<p className="text-[#7B7B7B] group-hover:text-white">{workingdayvalue}</p>)}

            </div>
            <span className="flex justify-center items-center cursor-pointer border border-[#85009D] text-[#85009D] group-hover:text-white group-hover:border-white px-4 py-2 rounded-[6px] w-full">
                {btntext}
            </span>
        </Link>
    );
}

export default PricingPlanTile;
