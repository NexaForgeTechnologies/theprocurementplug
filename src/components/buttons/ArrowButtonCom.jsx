import React from "react";

const ArrowButtonCom = ({ text }) => {
  return (
    <button className="flex items-center justify-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full sm:w-auto">
      {text}
      <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
    </button>
  );
};

export default ArrowButtonCom;
