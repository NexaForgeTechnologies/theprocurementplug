import Link from "next/link";
import React from "react";

function ConsultingPartnerTile({
  heading,
  para,
  btntext,
  url = "",
  bgImage = "",
  isLast = false,
  isFirst = false,
}) {
  return (
    <Link
      href={url}
      className="w-full rounded-[6px] border border-[#DBBB89] hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-5 flex flex-col justify-between gap-6 text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2
        className={` ${
          isLast || isFirst
            ? "text-white"
            : "text-[#85009D] group-hover:text-white"
        } text-xl md:text-2xl font-semibold`}
      >
        {heading}
      </h2>
      {para && (
        <p
          className={` ${isLast || isFirst ? "text-white" : "text-[#1b1b1b]"} ${
            isLast || isFirst
              ? "max-w-full sm:max-w-[400px]"
              : "max-w-full sm:max-w-[550px]"
          } text-[#1B1B1B] text-base group-hover:text-[#ffff]`}
        >
          {para}
        </p>
      )}
      {btntext && (
        <span className="flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
          {btntext}
          <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
        </span>
      )}
    </Link>
  );
}

export default ConsultingPartnerTile;
