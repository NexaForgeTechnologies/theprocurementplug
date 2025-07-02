"use client";

import Link from "next/link";
import React, { useState } from "react";

function BusinesFeatureComp({ data, key }) {
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = (e) => {
    if (!data.link) {
      e.preventDefault();
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
        padding: '2.5rem',
        borderRadius: '0.5rem',
        // border: '4px solid #b58c4a',
        border: `4px solid ${isHovered ? "#ffffff" : "#b58c4a"}`, 
        backgroundColor: isHovered ? '#b58c4a' : bgColor,
        color: 'white',
        transition: 'all 0.2s ease-in-out'
      }}
    >
      <h2 className="font-extrabold text-xl">{data.heading}</h2>
      <p className="text-sm md:text-lg leading-normal md:leading-relaxed">
        {data.text}
      </p>
      {/* <span className="text-[#ffff] cursor-pointer mb-1 max-w-max py-1 px-4 rounded bg-[#b58c4a]">
        {data.linkText}
      </span> */}
      <span
        className="cursor-pointer mb-1 max-w-max py-1 px-4 rounded"
        style={{
          backgroundColor: isHovered ? "#ffffff" : "#b58c4a",
          color: isHovered ? "#363636" : "#ffffff",
        }}
      >
        {data.linkText}
      </span>
    </Link>
  );
}

export default BusinesFeatureComp;
