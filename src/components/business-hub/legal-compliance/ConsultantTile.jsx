import React from "react";
import Image from "next/image";
import Link from "next/link";

function ConsultingPartnerTile({ heading, text1, text2, btntext, img, fullimg, rating, icon, url = "" }) {
  return (
    <Link
      href={url}
      className="w-full rounded-[6px] hover:border-[#85009D] border border-[#DBBB89] hover:bg-[#85009D] bg-[#FFFBF5] p-5 flex flex-col justify-between text-center md:text-start gap-6  text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
    >
      {fullimg && (
        <div className="flex justify-center">
          <Image
            className="md:w-full h-[103px] md:h-[103px] object-contain"
            src={fullimg}
            alt={fullimg}
            width={321}
            height={103}
          />
        </div>
      )}
      {img && (
        <div className="flex justify-center">
          <Image
            className="rounded-full w-[160px] md:w-[227px] h-[160px] md:h-[227px] object-cover"
            src={img}
            alt={img}
            width={227}
            height={27}
          />
        </div>
      )}
      {icon && (
        <div className=" self-center md:self-start">
          <Image
            className="w-25 h-25"
            src={icon}
            alt={icon}
            width={100}
            height={100}
          />
        </div>
      )}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">{heading}</h2>
        {rating && (<p className="text-[#F89800] font-semibold  md:text-2xl group-hover:text-white">{rating}</p>)}
        {text1 && (<p className="text-[#1B1B1B] text-base group-hover:text-white">{text1}</p>)}
        {text2 && (<p className="text-[#1B1B1B] text-base group-hover:text-white">{text2}</p>)}
      </div>
      <span className="flex self-center md:self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
        {btntext}
        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
      </span>
    </Link>
  );
}

export default ConsultingPartnerTile;
