import React from "react";

function ESGSocialTypeComp({ type }) {

  return (
    <div
      className="w-full rounded-[6px] hover:border-[#85009D] border border-[#DBBB89] hover:bg-[#85009D] bg-[#FFFBF5] p-5 flex flex-col justify-between gap-4 text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
    >
      <h2 className="text-xl md:text-2xl font-semibold">{type.value}</h2>
      <p className="text-[#1B1B1B] text-base group-hover:text-white">{type.description}</p>
    </div>
  );
}

export default ESGSocialTypeComp;