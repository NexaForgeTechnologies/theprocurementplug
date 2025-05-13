"use client";

import React, { useState } from "react";

import Icon from "@/components/icon/Icon";

function IconFeatureComponent({ heading, text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-6 rounded-2xl text-white w-full"
      style={{ background: "linear-gradient(140deg, #b08d57, #85009d)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>
        {`
          @keyframes bounceX {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(8px); }
          }
          .bounce-x {
            animation: bounceX 0.6s ease-in-out infinite;
          }
        `}
      </style>

      <div className="flex items-center gap-2">
        <div className={isHovered ? "bounce-x" : ""}>
          <Icon name="arrow" color="white" size={24} />
        </div>
        <h2 className="font-extrabold text-xl md:text-2xl">{heading}</h2>
      </div>

      <div className="p-6 bg-[#2121211a] min-h-28 md:h-40 overflow-hidden rounded-2xl mt-6">
        <p
          title={text}
          className="text-sm md:text-lg break-words overflow-hidden clamp-4 md:no-clamp"
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default IconFeatureComponent;
