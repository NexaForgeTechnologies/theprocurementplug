import React from "react";

function EventHighlightComp({ heading, text }) {
  return (
    <div>
      <h3 className="font-bold text-xl md:text-2xl text-[#363636]">
        Workshop:
      </h3>
      <h4 className="font-bold text-xl md:text-2xl text-[#b08d57] mt-1 mb-4 md:mb-6">
        {heading}
      </h4>
      <p className="p-4 rounded-lg bg-[#9c27b0] text-lg">{text}</p>
    </div>
  );
}

export default EventHighlightComp;
