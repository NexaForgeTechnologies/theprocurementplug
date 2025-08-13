"use client";

import { useConsultantStore } from "@/store/consultantStore";
import ConsultantDetailClient from "@/components/business-hub/consultinng-partner/ConsultantDetailClient";
import { useParams } from "next/navigation";

export default function ConsultantDetail() {
  const { id } = useParams();
  const consultant = useConsultantStore((state) => state.consultant);

  if (!consultant) {
    return (
      <div className="max-w-[1200px] m-auto text-center p-8">
        <h1 className="font-extrabold text-4xl md:text-6xl mb-6 text-[#010101]">
          Consultant Not Found
        </h1>
        <p className="text-[#363636] text-base md:text-xl leading-relaxed">
          No consultant matches the ID {id}.
        </p>
      </div>
    );
  }

  return <ConsultantDetailClient consultant={consultant} />;
}
