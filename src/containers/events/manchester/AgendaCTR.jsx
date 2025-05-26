import IconComponent from "@/components/icon/Icon";
import React from "react";

function AgendaCTR() {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="max-w-[880px] m-auto text-center">
        <h3 className="font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]">
          See the Full Agenda of the Day!
        </h3>
        <div className="flex items-center justify-center gap-3">
          <div className="bounce-right">
            <IconComponent name="arrow" size="24" />
          </div>
          <a
            href="/files/agenda.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#363636] hover:text-[#85009d] text-sm md:text-lg leading-normal md:leading-relaxed"
          >
            Elevate 2025 Manchester Agenda
          </a>
        </div>
      </div>
    </div>
  );
}

export default AgendaCTR;
