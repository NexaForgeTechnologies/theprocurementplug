import Link from "next/link";
import React from "react";
import Image from "next/image";

function ConsultingPartnerTile({ heading, para, sponsor, btntext, bigimg, smallimg, url = "" }) {
  return (
    <Link
      href={url}
      className="w-full rounded-[6px] border border-[#DBBB89] hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-5 flex flex-col-reverse md:flex-row text-center md:text-start justify-center md:justify-between gap-6  text-[#85009D] hover:text-white transition-all duration-200 ease-in-out"
    >
      <div className="flex flex-col items-center md:items-start gap-4">
        <h2 className="text-xl md:text-2xl font-semibold">{heading}</h2>
        {para && <p className="text-[#1B1B1B] text-base">{para}</p>}
        {sponsor && <p className="text-[#B08D57] text-base">{sponsor}</p>}
        <span className="flex flex-wrap">
          {smallimg && Array.isArray(smallimg) && smallimg.length > 0 ? (
            smallimg.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${heading} image ${index + 1}`}
                width={44}
                height={44}
                className="w-[44px] h-[44px] object-cover"
              />
            ))
          ) : (
            btntext && (
              <span className="flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
                {btntext}
                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
              </span>
            )
          )}
        </span>
      </div>
      {bigimg &&
        <div className="flex justify-center md:justify-end shrink-0">
          <Image
            src={bigimg}
            alt={`member`}
            width={204}
            height={204}
            className="w-[204px] h-[204px] md:w-full"
          />
        </div>
      }
    </Link>
  );
}

export default ConsultingPartnerTile;
