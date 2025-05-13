import React from "react";

const BenifitsComp = ({ title, heading, text }) => {
  return (
    <div className="flex flex-col gap-2 md:gap-4 w-full border border-[#dddedf] p-6 rounded-lg">
      <span className="max-w-max text-[#85009d] px-5 py-3 bg-[#faeefb] text-lg font-bold rounded-md">
        {title}
      </span>
      <h3 className="font-bold text-xl text-[#363636]">{heading}</h3>
      <p className="text-[#363636] leading-normal md:leading-relaxed">{text}</p>
    </div>
  );
};

export default BenifitsComp;
