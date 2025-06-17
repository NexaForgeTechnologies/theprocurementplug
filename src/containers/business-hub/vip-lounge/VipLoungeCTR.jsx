import ConsultingPartnerTile from "@/components/business-hub/vip-lounge/ConsultingPartnerTile";
import React from "react";

function VipLoungeCTR() {
  const viplounge = [
    {
      id: 1,
      heading: "Collaboration & Thought Leadership",
      btntext: "View Details",
      url: "/business-hub/vip-lounge/collaboration-influence",
    },
    {
      id: 2,
      heading: "Featured Business Partners",
      btntext: "View Details",
      url: "/business-hub/vip-lounge/featured-business-partners",
    },
    {
      id: 3,
      heading: "Exclusive Intelligent & Reports",
      btntext: "View Details",
      url: "/business-hub/vip-lounge/exclusive-intelligence-reports",
    },
    {
      id: 4,
      heading: "Executive Leadership",
      btntext: "View Details",
      url: "/business-hub/vip-lounge/executive-leadership",
    },
    {
      id: 5,
      heading: "Innovation Vault",
      btntext: "View Details",
      url: "/business-hub/vip-lounge/innovation-vault",
    },
  ];

  return (
    <div>
      <div>
        <h3 className="font-semibold text-[24px] md:text-[32px] md:text-5xl mb-4 md:mb-8 text-[#1B1B1B]">
          VIP Business Lounge
        </h3>
      </div>

      {/* Consultant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {viplounge.map((partner) => (
          <ConsultingPartnerTile
            key={partner.id}
            heading={partner.heading}
            btntext={partner.btntext}
            url={partner.url}
          />
        ))}
      </div>
    </div>
  );
}

export default VipLoungeCTR;
