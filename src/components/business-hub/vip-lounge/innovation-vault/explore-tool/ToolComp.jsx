import React from "react";
import Image from "next/image";

import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";
import Link from "next/link";

const ToolComp = ({ data }) => {
  return (
    <Link
      href={data.url}
      className="cursor-pointer flex gap-2 flex-col w-full rounded-[6px] border-2 border-[#DBBB89]
     hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-4 text-[#85009D] hover:text-white 
     transition-all duration-200 ease-in-out group"
    >
      {data.isBeta && (
        <>
          <Image
            src={data.img}
            alt={data.img}
            width={270}
            height={250}
            className="w-full max-w-[220px] max-h-[220px] mx-auto mb-4 rounded-sm object-contain"
          />

          <h2 className="rounded-[2px] text-xs max-w-max px-1 border border-[#85009D] group-hover:border-white text-[#1B1B1B] group-hover:text-white">
            Beta Access
          </h2>
          <div className="flex items-center flex-wrap justify-between">
            <h2 className="text-[#85009D] font-bold text-2xl group-hover:text-white">
              {data.heading}
            </h2>
            <div>⭐⭐⭐⭐⭐</div>
          </div>

          <p className="text-[#1B1B1B] group-hover:text-white text-sm">
            {data.text}
          </p>
        </>
      )}

      {!data.isBeta && (
        <>
          <Image
            src={data.img}
            alt={data.img}
            width={270}
            height={350}
            className="w-full max-w-[350px] max-h-[320px] mx-auto mb-4 rounded-sm object-contain"
          />

          <h2 className="text-[#85009D] text-2xl font-bold group-hover:text-white">
            {data.heading}
          </h2>
        </>
      )}

      <div className="mt-auto">
        <ArrowButtonCom text={data.urlText} />
      </div>
    </Link>
  );
};

export default ToolComp;
