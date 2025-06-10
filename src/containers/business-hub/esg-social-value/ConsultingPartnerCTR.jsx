import ConsultingPartnerTile from "@/components/business-hub/esg-social-value/ConsultingPartnerTile";
import React from "react";

function ConsultingPartnerCTR() {
  const consultantPartners = [
    {
      id: 1,
      heading: "ESG Reporting",
      text: "Measurement & disclose impact",
      // url: "",
    },
    {
      id: 2,
      heading: "Net-zero Roadmap",
      text: "Decarbonisation strategy",
      // url: "",
    },
    {
      id: 3,
      heading: "Supplier ESG Risk",
      text: "Assess supplier practices",
      // url: "",
    },
  ];

  return (
    <div>
      <div className="max-w-[850px] m-auto text-center">
        <h3 className="font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]">
          ESG Social Value
        </h3>
        <p className="my-8 text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed">
          Consultancy services to help your organisation achieve its environmental, social, and governance goals.
        </p>
      </div>

      {/* Consultant Cards */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {consultantPartners.map((partner) => (
          <ConsultingPartnerTile
            key={partner.id}
            heading={partner.heading}
            text={partner.text}
            // url={partner.url}
          />
        ))}
      </div>
    </div>
  );
}

export default ConsultingPartnerCTR;
