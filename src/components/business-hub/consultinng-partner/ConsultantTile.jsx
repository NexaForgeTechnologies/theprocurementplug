import React from "react";

import Image from "next/image";
import Link from "next/link";

function ConsultantTile({ img, heading, subHeading, text1, text2, bgColor }) {
  return (
    <div
      className="
        text-[#363636] w-full rounded-2xl border border-[#85009D] hover:border-[#A020F0] bg-white p-5 flex flex-col items-center justify-center text-center"
    >
      <Image
        className="rounded-full w-32 h-32 object-cover"
        src={img}
        alt={img}
        width={130}
        height={130}
      />
      <h2 className="text-xl md:text-2xl font-extrabold">{heading}</h2>
      <h3
        className={`${
          bgColor ? "text-white" : "text-[#b08d57]"
        } text-xl md:text-2xl font-medium`}
      >
        {subHeading}
      </h3>
      <div className="my-2 flex flex-col items-center">
        <span className="font-bold">{text1}</span>
        <span className="font-bold">{text2}</span>
      </div>
      <Link
        href=""
        className="cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded"
      >
        View
      </Link>
    </div>
  );
}

export default ConsultantTile;
