import React from "react";
import Link from "next/link";

import { useEventStore } from "@/store/eventStore";

function EventComp({ data, url }) {
  if (!data) return null;

  const setEvent = useEventStore((state) => state.setEvent);

  // Default rendering for all other events
  return (
    <Link
      href={url || '#'}
      onClick={() => setEvent(data)}
      className="w-full border border-[#D09B48] transition-all duration-200 ease-in-out transform hover:shadow-2xl hover:border-[#A020F0] bg-white rounded-[6px]"
    >
      <div className="p-5">
        {data?.event_tag_name && (
          <div className="inline-flex">
            <p
              className="mb-2 text-[12px] rounded-[2px] px-2 py-1 text-[#FFFFFF]"
              style={{ backgroundColor: "#85009D" || "#85009D" }}
            >
              {data?.event_tag_name}
            </p>
          </div>
        )}

        <h3 className="text-[20px] font-semibold text-[#85009D] mb-3">
          {data?.event_name}
        </h3>

        <p className="text-sm text-[#1B1B1B] mb-2">
          <strong className="font-semibold">Event Date & Time: </strong>
          {data?.event_date_time}
        </p>

        <p className="text-sm text-[#1B1B1B] mb-2">
          <strong className="font-semibold">Location: </strong>
          {data?.event_location}
        </p>

        <p
          className="text-sm text-[#1B1B1B] mb-2 line-clamp-2"
          title={data?.event_designedfor}
        >
          <strong className="text-sm font-semibold text-[#1B1B1B]">
            Designed For:{" "}
          </strong>
          {data?.event_designedfor}
        </p>
      </div>
    </Link>
  );
}

export default EventComp;
