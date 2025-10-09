import React from "react";

import GuestComp from "@/components/events/GuestComp";

function GuessCTR({ speakers, heading }) {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="max-w-[780px] m-auto text-center">
        <h3 className="font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]">
          Event Speakers
        </h3>

        {heading ? (
          <p className="text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed">
            {heading}
          </p>
        ) : (
          // If no heading, show default message
          <p className="text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed">
            Our speakers will be announced soon—stay tuned!
          </p>
        )}
      </div>

      {speakers && speakers.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {speakers?.map((speaker) => (
            <GuestComp key={speaker.id} data={speaker} />
          ))}
        </div>
      )}
    </div>
  );
}

export default GuessCTR;
