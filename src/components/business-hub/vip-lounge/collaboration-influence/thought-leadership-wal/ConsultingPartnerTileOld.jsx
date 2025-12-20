import Link from "next/link";
import React from "react";
import Image from "next/image";

function ConsultingPartnerTile({ heading, para, sponsor, btntext, bigimg, smallimg, url = "", tag, logo, vom, pick, isCol2 }) {
  return (
    <Link
      href={url}
      className={`w-full rounded-md border bg-[#FFFBF5] border-[#DBBB89] hover:border-[#85009D] hover:bg-[#85009D]  flex flex-col-reverse ${isCol2 ? 'lg:flex-row-reverse' : 'lg:flex-row'} ${isCol2 ? 'items-center lg:items-start' : 'items-center'} p-5 lg:flex-row text-center lg:text-start justify-center lg:justify-between gap-6 text-[#85009D]  hover:text-white transition-all duration-200 ease-in-out group`}
    >
      <div className={`${isCol2 ? 'gap-3.5' : 'gap-4'} flex flex-1 flex-col items-center lg:items-start`}>
        {tag && <p className="text-[12px] border border-[#85009D] rounded-[0.5px] px-1 bg-[#ffff] text-[#1B1B1B]">{tag}</p>}
        <h2 className={`${isCol2 ? 'text-2xl lg:text-[32px]' : 'text-xl lg:text-2xl'}  ${isCol2 ? 'max-w-full lg:max-w-[320px]' : 'max-w-full'} font-semibold`}>{heading}</h2>
        <div className="flex items-center gap-4">
          {para && <p className="text-[#1B1B1B] text-base group-hover:text-[#ffff]">{para}</p>}
          {logo && (
            <Image
              src={logo}
              alt={`logo`}
              width={24}
              height={24}
              className="w-6 h-6 object-cover"
            />
          )}
        </div>
        {sponsor && <p className="text-[#B08D57] text-base group-hover:text-[#ffff]">{sponsor}</p>}
        <span className="flex flex-wrap">
          {smallimg && Array.isArray(smallimg) && smallimg.length > 0 ? (
            smallimg.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${heading} image ${index + 1}`}
                width={44}
                height={44}
                className="w-11 h-11 object-cover"
              />
            ))
          ) : (
            btntext && (
              <span className={`flex self-start items-center cursor-pointer bg-[#B08D57] hover:bg-[#85009D] text-white px-4 py-2 rounded-md`}>
                {btntext}
                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
              </span>
            )
          )}
        </span>
      </div>
      {bigimg && (
        <div className="flex flex-col text-center items-center shrink-0 justify-center">
          <Image
            src={bigimg}
            alt="member"
            width={isCol2 ? 174 : 204}
            height={isCol2 ? 174 : 204}
            className={`${isCol2 ? 'w-full lg:w-[174px]' : 'w-full lg:w-[204px]'} ${isCol2 ? 'h-[174px]' : 'h-[204px]'} ${isCol2 ? 'mb-2' : 'mb-0'} border border-[#B08D57] rounded-full`}
          />
          {(vom || pick) && (
            <div className="flex flex-col">
              {vom && <p className="text-[12px] text-[#85009D] group-hover:text-[#ffff]">{vom}</p>}
              {pick && <p className="text-[#808080] group-hover:text-[#ffff]">{pick}</p>}
            </div>
          )}
        </div>
      )}
    </Link>
  );
}

export default ConsultingPartnerTile;
