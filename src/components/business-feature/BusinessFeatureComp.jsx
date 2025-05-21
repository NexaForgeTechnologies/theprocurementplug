"use client";

import Link from "next/link";
import React, { useState } from "react";

function BusinesFeatureComp({ data, key }) {
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = (e) => {
    if (!data.link) {
      e.preventDefault(); // Prevent navigation
      alert("Available soon!");
    }
  };

  const bgColor = data.bgColor || "#b58c4a";

  return (
    <Link
      href={data.link || "#"}
      onClick={handleClick}
      key={key}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '0.5rem',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        border: '1px solid #85009D',
        backgroundColor: isHovered ? '#85009D' : bgColor,
        color: 'white',
        transition: 'all 0.2s ease-in-out'
      }}
    // className="transition-all flex flex-col items-center text-center gap-2 p-6 bg-[#b58c4a] rounded border border-[#85009D] hover:bg-[#85009D] text-white hover:text-white"
    >
      <h2 className="font-extrabold text-xl">{data.heading}</h2>
      <p className="text-sm md:text-lg leading-normal md:leading-relaxed">
        {data.text}
      </p>
      <span className="text-[#363636] cursor-pointer mb-1 max-w-max py-1 px-4 rounded bg-white">
        {data.linkText}
      </span>
    </Link>
  );
}

export default BusinesFeatureComp;
