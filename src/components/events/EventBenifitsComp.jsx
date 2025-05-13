import React from "react";
import IconComponent from "../icon/Icon";

function EventBenifitsComp({ icon, heading, text, bgColor }) {
  return (
    <>
      <div
        style={{ backgroundColor: bgColor ? bgColor : "#f7f7f7" }}
        className={`${
          bgColor ? "text-white" : "text-[#363636]"
        } px-6 py-8 rounded-xl w-full outline`}
      >
        <IconComponent
          name={icon}
          size={50}
          color={`${bgColor ? "white" : "#000"}`}
        />
        <h2 className="font-bold text-xl md:text-3xl my-2 md:my-4">
          {heading}
        </h2>
        <p
          title={text}
          className="break-words overflow-hidden clamp-4 md:no-clamp"
        >
          {text}
        </p>
      </div>
    </>
  );
}

export default EventBenifitsComp;
