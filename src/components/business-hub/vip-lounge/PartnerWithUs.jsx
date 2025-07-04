"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

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
    <div
      className="relative flex flex-col gap-6 md:gap-8 py-5"
      style={{
        width: "100vw",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        backgroundColor: "#85009D",
      }}
    >
      <Image
        width={88}
        height={190}
        src="/images/bussiness-hub/plug1.png"
        alt="The Procurement Plug Logo"
        className="absolute top-0 md:top-6 left-0"
      />
      <Image
        width={291}
        height={329}
        src="/images/bussiness-hub/plug2.png"
        alt="The Procurement Plug Logo"
        className="absolute bottom-0 right-0 md:top-1/2 md:-translate-y-1/2"
      />

      <div className="relative z-10 flex flex-col gap-6 md:gap-8 rounded-lg py-5 md:py-10 mx-auto max-w-[1440px] w-full
      px-6 sm:px-10 md:px-14 lg:px-20">
        <div>
          {data.Partnerheader.crossSellh3 && (
            <div className="max-w-[780px] m-auto text-center">
              <h3 className="max-w-[521px] m-auto leading-none font-semibold text-[32px] text-[#ffff]">
                {data.Partnerheader.crossSellh3}
              </h3>
            </div>
          )}

          {data.Partnerheader.h3 && (
            <div className="max-w-[780px] m-auto text-center">
              <h3 className="font-semibold text-[32px] text-[#ffff]">
                {data.Partnerheader.h3}
              </h3>
            </div>
          )}

          {data.Partnerheader.bullets && (
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 mt-4">
              <div>
                {data.Partnerheader.bullets.slice(0, 2).map((bullet, index) => (
                  <div key={index} className="flex gap-2 md:gap-4 items-start mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full shrink-0 mt-[3px]"></div>
                    <div>
                      <p className="text-[16px] text-[#FFFFFF]">{bullet}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                {data.Partnerheader.bullets.slice(2).map((bullet, index) => (
                  <div key={index} className="flex gap-2 md:gap-4 items-start mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full shrink-0 mt-[3px]"></div>
                    <div>
                      <p className="text-[16px] text-[#FFFFFF]">{bullet}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.Partnerheader.p && (
            <div className="max-w-[780px] m-auto text-center">
              <p className="text-[#ffff] text-sm md:text-base font-medium leading-normal md:leading-relaxed">
                {data.Partnerheader.p}
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.items?.map((partner) => {
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
                <div className="self-start">
                  <span
                    className="flex items-center cursor-pointer text-white px-4 py-2 rounded-[6px]"
                    style={{
                      backgroundColor: isHovered ? "#85009D" : "#b08d57",
                    }}
                  >
                    {partner.linkText}
                    <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div >
  );
}

export default BusinesFeatureComp;

