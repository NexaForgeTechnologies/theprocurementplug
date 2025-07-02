import React from "react";
import Link from "next/link";

function EventComp({ heading, designFor, href, time, tag, tagColor, location }) {
  return (
    <Link
      href={href}
      className="w-full border border-[#D09B48] transition-all duration-200 ease-in-out transform hover:shadow-2xl hover:border-[#A020F0] bg-white rounded-[6px]"
    >
      <div className="p-5">
        <div className="inline-flex">
          <p
            className="mb-2 text-[12px] rounded-[2px] px-2 py-1 text-[#FFFFFF]"
            style={{ backgroundColor: tagColor || "#85009D" }}
          >
            {tag}
          </p>        </div>
        <h3 className="text-[20px] font-semibold text-[#85009D] mb-3">{heading}</h3>

        <p className="text-sm text-[#1B1B1B] mb-2">
          <strong className="font-semibold">Event Date & Time: </strong>
          {time}
        </p>

        <p className="text-sm text-[#1B1B1B] mb-2">
          <strong className="font-semibold">Location: </strong>
          {location}
        </p>

        <p
          className="text-sm text-[#1B1B1B] mb-2 line-clamp-2"
          title={designFor}
        >
          <strong className="text-sm font-semibold text-[#1B1B1B]">Designed For: </strong>
          {designFor}
        </p>
      </div>
    </Link>
  );
}

export default EventComp;
