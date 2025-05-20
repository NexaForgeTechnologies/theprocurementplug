"use client";

import Link from "next/link";
import React from "react";

function BusinesFeatureComp({ data, key }) {
  const handleClick = (e) => {
    if (!data.link) {
      e.preventDefault(); // Prevent navigation
      alert("Available soon!");
    }
  };

  return (
    <Link
      href={data.link || "#"}
      onClick={handleClick}
      key={key}
      className="transition-all flex flex-col items-center text-center gap-2 p-6 bg-[#b58c4a] rounded border border-[#85009D] hover:bg-[#85009D] text-white hover:text-white"
    >
      <h2 className="font-extrabold text-xl">{data.heading}</h2>
      <p className="text-sm md:text-lg leading-normal md:leading-relaxed">
        {data.text}
      </p>
      <span className="text-[#363636] cursor-pointer mb-1 max-w-max py-2 px-4 rounded bg-white">
        {data.linkText}
      </span>
    </Link>
  );
}

export default BusinesFeatureComp;
