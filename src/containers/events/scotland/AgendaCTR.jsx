import IconComponent from "@/components/icon/Icon";
import Link from "next/link";
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
          <Link
            href="/event/elevate2025-scotland/agenda"
            className="underline text-[#363636] hover:text-[#85009d] text-sm md:text-lg leading-normal md:leading-relaxed"
          >
            AGENDA Elevate 2025 - Scotland
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AgendaCTR;
