import React from "react";

const ArrowButtonCom = ({
  text,
  bgColor,
  textColor,
  hoverBgColor,
  hoverTextColor,
  borderColor="border-none",
  arrowColor, // optional for arrow color
}) => {
  return (
    <button
      className={`flex items-center justify-center cursor-pointer px-4 py-2 rounded-[6px] w-full sm:w-auto transition-colors duration-200 border font-medium text-xs md:text-sm hover:shadow-md ${bgColor} ${textColor} ${borderColor} ${hoverBgColor} ${hoverTextColor}`}
    >
      {text}
      <div
        className={`ml-1 w-2 h-2 border-t-2 border-r-2 transform rotate-45 ${arrowColor}`}
      ></div>
    </button>
  );
};

export default ArrowButtonCom;
