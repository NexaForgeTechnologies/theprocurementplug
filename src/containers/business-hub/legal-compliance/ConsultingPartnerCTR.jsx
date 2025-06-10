import ConsultingPartnerTile from "@/components/business-hub/legal-compliance/ConsultingPartnerTile";
import React from "react";

function ConsultingPartnerCTR() {
  const consultantPartners = [
    {
      id: 1,
      heading: "Contract Management",
      text: "Customizable legal docs",
      url: "",
    },
    {
      id: 2,
      heading: "Regulatory Updates",
      text: "Stay current with laws",
      url: "",
    },
    {
      id: 3,
      heading: "Risk Assessments",
      text: "Identify migitate risks",
      url: "",
    },
  ];

  return (
    <div>
      <div className="max-w-[780px] m-auto text-center">
        <h3 className="font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]">
          Legal & Compliance
        </h3>
        <p className="my-8 text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed">
          Legal resources and contract management to safeguard your procurement operations:
        </p>
      </div>

      {/* Consultant Cards */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {consultantPartners.map((partner) => (
          <ConsultingPartnerTile
            key={partner.id}
            heading={partner.heading}
            text={partner.text}
            url={partner.url}
          />
        ))}
      </div>
    </div>
  );
}

export default ConsultingPartnerCTR;
