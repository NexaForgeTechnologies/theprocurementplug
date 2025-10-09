import React from "react";
import Image from "next/image";
import Link from "next/link";

function EventOppertunityCTR({ data }) {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="max-w-[780px] m-auto text-center">
        <h3 className="font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]">
          Event Highlights
        </h3>
        <p className="text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed">
          {data.hightlight_heading}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
        <div className="flex-1 w-full">
          {/* <img className='w-full' src="/images/events/manchester/highlight.png" alt="" /> */}
          <Image
            className="w-full rounded-[12px] md:h-[578px]"
            src={"/images/events/oppertunity.png"}
            alt={"member"}
            width={578}
            height={578}
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 md:gap-6 text-[#363636]">
          <h2 className="font-extrabold text-2xl leading-6 md:leading-6">
            Attendees will gain access to:
          </h2>
          <div>
            <h2 className="font-extrabold text-lg leading-6 mb-1 md:leading-6">
              {data.hightlight_subheading_1}
            </h2>
            <p className="text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed">
              {data.hightlight_subdetail_1}
            </p>
          </div>
          <div>
            <h2 className="font-extrabold text-lg leading-6 mb-1 md:leading-6">
              {data.hightlight_subheading_2}
            </h2>
            <p className="text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed">
              {data.hightlight_subdetail_2}
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-[#7E0095] rounded-[10px] p-6 flex flex-col justify-between gap-2 text-center lg:text-start">
        <h2 className="text-[#ffff] font-extrabold text-lg leading-6 md:leading-6">
          Relive the Moments from Elevate Manchester 2025
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-4 lg:gap-0">
          <p className="max-w-[450px] text-[#ffff] text-sm md:text-lg leading-normal">
            See all videos, photo galleries, and behind-the-scenes content
          </p>
          <Link
            target="_blank"
            href={data.youtube_link || ""}
            className="inline-flex justify-center items-center cursor-pointer bg-[#b08d57] text-white px-4 py-3 rounded-[6px] w-full lg:w-auto"
          >
            Watch on Youtube
            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventOppertunityCTR;
