import React from "react";

const ArrowButtonCom = ({
  text,
  bgColor = "bg-[#b08d57]",
  textColor = "text-white",
  hoverBgColor = "hover:bg-[#a07c4f]",
  hoverTextColor = "hover:text-white",
  borderColor = "border-[#b08d57]",
  arrowColor = "border-white", // optional for arrow color
}) => {
  return (
    <button
      className={`flex items-center justify-center cursor-pointer px-4 py-2 rounded-[6px] w-full sm:w-auto transition-colors duration-200 border font-medium text-sm hover:shadow-md ${bgColor} ${textColor} ${borderColor} ${hoverBgColor} ${hoverTextColor}`}
    >
      {text}
      <div
        className={`ml-1 w-2 h-2 border-t-2 border-r-2 transform rotate-45 ${arrowColor}`}
      ></div>
    </button>
  );
};

export default ArrowButtonCom;
