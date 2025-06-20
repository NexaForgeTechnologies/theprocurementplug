"use client";

import Link from "next/link";
import React, { useState } from "react";

function BusinesFeatureComp({ data }) {
  const [hoveredId, setHoveredId] = useState(null);

  const handleClick = (e, link) => {
    if (!link) {
      e.preventDefault();
      alert("Available soon!");
    }
  };

  const bgColor = data.bgColor || "#FFFBF5";

  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url("/images/bussiness-hub/vip-lounge/partnerwithus.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          boxShadow: "#00000036 0px 0px 0px 100vmax",
          clipPath: "inset(0 -100vmax)",
        }}
        className="w-screen ml-[calc(50%-50vw)] h-full absolute top-0 left-0 -z-10"
      ></div>

      <div className="relative z-10 flex flex-col gap-6 md:gap-8 rounded-lg py-5 md:py-10 ">
        <div className="max-w-[780px] m-auto text-center">
          <h3 className="font-semibold text-[32px] text-[#ffff]">
            Partner With Us
          </h3>
          <p className="text-[#ffff] text-sm md:text-base font-medium leading-normal md:leading-relaxed">
            <strong>partnerships@theprocurementplug.com</strong> -
            <Link className="font-light" href="/partnerships">
              Visit our partnership page
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.map((partner) => {
            const isHovered = hoveredId === partner.id;

            return (
              <Link
                key={partner.id}
                href={partner.link || "#"}
                onClick={(e) => handleClick(e, partner.link)}
                onMouseEnter={() => setHoveredId(partner.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "24px",
                  padding: "20px",
                  borderRadius: "6px",
                  border: `1.5px solid ${isHovered ? "#ffffff" : "#D09B48"}`,
                  backgroundColor: isHovered ? "#b58c4a" : bgColor,
                  color: "white",
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <h2
                  className="font-semibold text-[24px]"
                  style={{ color: isHovered ? "#ffffff" : "#85009D" }}
                >
                  {partner.heading}
                </h2>
                <span
                  className="flex w-[132px] items-center cursor-pointer text-white px-4 py-2 rounded-[6px]"
                  style={{
                    backgroundColor: isHovered ? "#85009D" : "#b08d57",
                  }}
                >
                  {partner.linkText}
                  <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BusinesFeatureComp;
