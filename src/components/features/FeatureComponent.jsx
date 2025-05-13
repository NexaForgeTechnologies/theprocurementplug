"use client";

import React from "react";

function FeatureComponent({ heading, text }) {
  return (
    <div
      className="pt-6 px-6 pb-8 rounded-2xl text-white"
      style={{ background: "linear-gradient(140deg, #b08d57, #85009d)" }}
    >
      <h2 className="font-extrabold text-xl md:text-2xl">{heading}</h2>

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {text?.map((content, idx) => (
          <div
            key={idx}
            className="p-6 bg-[#2121211a] min-h-full overflow-hidden rounded-2xl flex-1"
          >
            <h3 className="font-extrabold text-lg md:text-xl leading-6 md:leading-6">
              {content.heading}
            </h3>
            <p
              title={content.text}
              className="text-sm md:text-lg mt-3 md:mt-5"
            >
              {content.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureComponent;
