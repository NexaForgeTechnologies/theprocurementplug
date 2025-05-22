import Image from "next/image";
import React from "react";

function GuessComp({ img, heading, subHeading, text1, text2, bgColor }) {
  return (
    <>
      <div
        style={{ backgroundColor: bgColor ? bgColor : "#faf8f5" }}
        className={`${
          bgColor ? "text-white" : "text-[#363636]"
        }  border border-[#b08d57]  px-4 py-10 rounded-xl w-full flex flex-col items-center justify-center gap-2 text-center`}
      >
        <Image
          className="rounded-full w-32 h-32 object-cover"
          src={img}
          alt={img}
        />
        <h2 className="text-xl md:text-2xl font-extrabold">{heading}</h2>
        <h3
          className={`${
            bgColor ? "text-white" : "text-[#b08d57]"
          } text-xl md:text-2xl font-medium`}
        >
          {subHeading}
        </h3>
        <div className="mt-2 flex flex-col items-center">
          <span className="font-bold">{text1}</span>
          <span className="font-bold">{text2}</span>
        </div>
      </div>
    </>
  );
}

export default GuessComp;
