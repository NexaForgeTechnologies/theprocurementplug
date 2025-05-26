import React from "react";
import Link from "next/link";

function EventComp({ heading, designFor, href, time, location }) {
  return (
    <Link
      href={href}
      className="w-full rounded-2xl border border-[#85009D] transition-all duration-200 ease-in-out transform hover:shadow-2xl hover:border-[#A020F0] bg-white"
    >
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#85009D] mb-3">{heading}</h3>

        <p className="text-sm md:text-base text-gray-700 mb-2">
          <strong className="font-semibold">📅 Event Date & Time: </strong>
          {time}
        </p>

        <p className="text-sm md:text-base text-gray-700 mb-2">
          <strong className="font-semibold">📍 Location: </strong>
          {location}
        </p>

        <p
          className="text-sm md:text-base text-gray-700 mb-2 line-clamp-2"
          title={designFor}
        >
          <strong className="font-semibold">👥 Designed For: </strong>
          {designFor}
        </p>
      </div>
    </Link>
  );
}

export default EventComp;
