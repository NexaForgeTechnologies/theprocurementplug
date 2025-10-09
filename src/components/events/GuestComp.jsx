import Image from "next/image";
import React from "react";

function GuessComp({ data }) {
  return (
    <>
      <div
        style={{ backgroundColor: data.bg_color ? data.bg_color : "#faf8f5" }}
        className={`${
          data.bg_color ? "text-white" : "text-[#363636]"
        }  border border-[#b08d57]  px-4 py-10 rounded-xl w-full flex flex-col items-center justify-center gap-2 text-center`}
      >
        <Image
          className="rounded-full w-32 h-32 object-cover"
          src={data.img || "/images/events/consultant-alternate.png"}
          alt={"speaker img"}
          width={130}
          height={130}
        />
        <h2 className="text-xl md:text-2xl font-extrabold">{data.name}</h2>
        <h3
          className={`${
            data.bg_color ? "text-white" : "text-[#b08d57]"
          } text-xl md:text-2xl font-medium`}
        >
          {data.role}
        </h3>
        <div className="mt-2 flex flex-col items-center">
          <span className="font-bold">{data.designation}</span>
          <span className="font-bold">{data.company}</span>
        </div>
      </div>
    </>
  );
}

export default GuessComp;
