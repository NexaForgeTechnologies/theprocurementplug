import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";

const NewTechComp = ({ data }) => {
  return (
    <Link
      href={data.url}
      className="cursor-pointer flex gap-4 flex-col w-full rounded-[6px] border-2 border-[#DBBB89] hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-4 text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
    >
      <Image
        src={data.img}
        alt={data.img || "img"}
        width={150}
        height={150}
        className="rounded-full m-auto max-w-[150px] max-h-[150px] object-contain"
      />

      <h2 className="text-[#85009D] font-bold text-base group-hover:text-white">
        {data.heading}
      </h2>

      <p className="text-[#1B1B1B] group-hover:text-white text-sm">
        {data.border ? (
          <>
            <strong>Sponsor label:</strong> {data.text}
          </>
        ) : (
          data.text
        )}
      </p>

      {data.border ? (
        <h2 className="rounded-[2px] text-xs max-w-max px-1 border border-[#85009D] group-hover:border-white text-[#1B1B1B] group-hover:text-white">
          {data.msg}
        </h2>
      ) : (
        <h2 className="text-[#b08d57] font-bold text-base group-hover:text-white">
          {data.msg}
        </h2>
      )}
      <ArrowButtonCom text={data.urlText} />
    </Link>
  );
};

export default NewTechComp;
