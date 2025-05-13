import Link from "next/link";
import React from "react";

function TalkToTeamCTR() {
  return (
    <div className="relative w-full min-h-[40vh] overflow-hidden rounded-2xl">
      {/* Background Layer */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/images/home/tiles/tile-1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          filter: "brightness(0.8)",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(140deg, #b08d57cc, #85009dcc)",
        }}
      ></div>

      {/* Constrained Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-white text-center flex flex-col items-center justify-center min-h-[40vh]">
        <h3 className="font-extrabold text-3xl md:text-5xl mb-4">
          We're here to help
        </h3>
        <p className="text-sm md:text-lg leading-normal md:leading-relaxed pb-6 max-w-2xl">
          Have questions or need guidance? Our team is here to help—let’s start
          the conversation!
        </p>
        <Link
          href="/contact-us"
          className="bg-[#212121] px-6 py-3 text-white rounded-xl text-sm md:text-lg leading-normal md:leading-relaxed cursor-pointer"
        >
          Contact Our Team
        </Link>
      </div>
    </div>
  );
}

export default TalkToTeamCTR;
