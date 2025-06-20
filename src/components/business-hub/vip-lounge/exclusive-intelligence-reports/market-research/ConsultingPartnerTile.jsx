import Link from "next/link";
import React from "react";
import Image from "next/image";

function ConsultingPartnerTile({ heading, para, bigimg, tag, btntext, download, url = "" }) {
  const Container = url ? Link : "div";
  return (
    <Container
      href={url}
      className="w-full rounded-[6px] border border-[#DBBB89] bg-[#FFFBF5] p-2 flex flex-col justify-between gap-4  text-[#85009D] "
    >
      <div className="flex flex-col items-start">
        {bigimg && (
          <Image
            src={bigimg}
            alt={`images`}
            width={259}
            height={60}
            className="mb-4 w-full object-cover"
          />
        )}
        {tag && <p className="mb-2 text-[12px] border-1 border-[#85009D] rounded-[0.5px] px-1 bg-[#ffff] text-[#1B1B1B]">{tag}</p>}
        <h2 className="mb-2 text-xl md:text-2xl font-semibold">{heading}</h2>
        {para && <p className="text-[#1B1B1B] text-base group-hover:text-[#ffff]">{para}</p>}
      </div>
      {btntext && (
        <a
          href={download || url} 
          {...(download ? { download: true } : {})} 
          className="flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]"
        >
          {btntext}
          <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
        </a>
      )}
    </Container>
  );
}

export default ConsultingPartnerTile;
