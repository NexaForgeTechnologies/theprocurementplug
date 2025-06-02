import React from "react";
import { consultantPartners } from "@/app/business-hub/consulting-partner/esg-sustainability/data";
import ConsultantDetailClient from "@/components/business-hub/consultant-detail-client/ConsultantDetailClient";

export default async function ConsultantDetail({ params }) {
  const { heading } = await params;
  const displayHeading = heading
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Find consultant data
  const consultant = consultantPartners.find(
    (partner) => partner.heading === displayHeading
  );

  if (!consultant) {
    return (
      <div className="max-w-[1200px] m-auto text-center p-8">
        <h1 className="font-extrabold text-4xl md:text-6xl mb-6 text-[#010101]">
          Consultant Not Found
        </h1>
        <p className="text-[#363636] text-base md:text-xl leading-relaxed">
          No consultant matches the name {displayHeading}.
        </p>
      </div>
    );
  }

  return <ConsultantDetailClient consultant={consultant} />;
}