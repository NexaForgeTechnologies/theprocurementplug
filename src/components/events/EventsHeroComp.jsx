import React from "react";
import Link from "next/link";
import Image from "next/image";

function EventsHeroComp({ heading, name, date, comment, img }) {
  return (
    <div className="relative min-h-screen pb-10">
      <div
        style={{
          backgroundImage: `url(/images/blogs/blog-1/governance.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          boxShadow: "#00000036 0px 0px 0px 100vmax",
          clipPath: "inset(0 -100vmax)",
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
        }}
        className="w-screen ml-[calc(50%-50vw)] h-full absolute"
      >
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(33, 33, 33, 0.86), rgba(33, 33, 33, 0.86))",
          }}
        ></div>
      </div>
      <div className="relative z-10 py-20">
        <div className="block lg:flex gap-6 md:gap-8">
          <div className="flex-2">
            <div className="flex gap-4 md:gap-8">
              <div className="border-l-[10px] border-[#b08d57]"></div>
              <h3 className="leading-10 md:leading-20 font-extrabold text-3xl md:text-7xl text-white">
                <span className="block">ELEVATE MANCHESTER</span>
                <span className="text-[#b08d57]">June 2025</span>
              </h3>
            </div>
            <div className="text-white my-6 md:my-8">
              <h2 className="font-extrabold text-xl md:text-3xl">
                In Collaboration with:
              </h2>
              <Image
                width={250}
                height={70}
                className="bg-white max-w-[240px] md:max-w-[400px] mt-4"
                src="/images/events/collaboration.png"
                alt="collaboration"
              />
            </div>
            <div className="flex flex-col gap-6 text-white">
              <h2 className="font-extrabold text-xl">
                Fast-Track Your Procurement Career & Elevate Your Leadership
                Skills with Elevate 2025!{" "}
              </h2>
              <p className="text-sm md:text-lg leading-normal md:leading-relaxed">
                Are you looking to accelerate your career in procurement?
                Whether you're a mid-level professional aiming for leadership or
                an aspiring procurement specialist eager to break into the
                industry, this event is for you!
              </p>
              <p className="text-sm md:text-lg leading-normal md:leading-relaxed">
                Join industry experts and senior procurement leaders as they
                share insider strategies for career growth, skills development,
                and securing leadership roles.
              </p>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 mt-6 md:mt-0 flex flex-col gap-6 md:gap-8">
            <h2 className="text-[#9c27b0] font-extrabold text-xl md:text-3xl">
              Event Details
            </h2>
            <div className="text-[#363636] flex flex-col gap-2">
              <p className="text-sm md:text-lg leading-normal md:leading-relaxed">
                <strong className="font-extrabold">Event Date & Time: </strong>
                25th June 2025, 8:30am to 5pm
              </p>
              <p className="text-sm md:text-lg leading-normal md:leading-relaxed">
                <strong className="font-extrabold">Location: </strong>4Th Floor,
                City Tower, New York Street, Manchester M1 4BT
              </p>
              <p className="text-sm md:text-lg leading-normal md:leading-relaxed">
                <strong className="font-extrabold">Designed For: </strong>
                Manchester Edition is designed for procurement professionals,
                focusing on innovation, strategy, and leadership in procurement.
              </p>
            </div>
            <p className="text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed">
              <strong className="font-extrabold">Tickets: </strong>£149
            </p>
            <Link
              href="https://www.trybooking.com/uk/ERLV"
              target="_blank"
              className="mt-auto bg-[#9c27b0] rounded-md block text-center md:p-4 p-3"
            >
              Book Your Ticket Now!
            </Link>
          </div>
        </div>
        {/* <div className='relative z-10 mt-6 md:mt-8 flex gap-4 md:gap-8 items-center'>
                    <h3 className="text-[#b08d57] leading-10 md:leading-20 font-extrabold text-2xl md:text-7xl">
                        Register Interest
                    </h3>
                    <IconComponent name="arrow" color='#b08d57' size={40} />
                </div> */}
      </div>
    </div>
  );
}

export default EventsHeroComp;
