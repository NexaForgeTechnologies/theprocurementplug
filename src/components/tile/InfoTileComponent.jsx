"use client";

import Image from "next/image";
import React from "react";

function Tile({ img, heading, text }) {
  return (
    <div className="border-2 border-[#e0e0e0] p-6 md:p-8 rounded-2xl text-[#363636] flex flex-col md:flex-row gap-6 md:gap-8 justify-center w-full">
      <Image
        width={394}
        height={250}
        className="rounded-lg w-full flex-1 max-h-[250px] object-cover"
        src={img}
        alt=""
      />
      <div className="flex-2">
        <h2 className="font-extrabold text-xl md:text-2xl text-[#010101] mb-4 md:mb-2">
          {heading}
        </h2>
        <p className="text-sm md:text-lg text-[#363636] leading-normal md:leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Tile;
