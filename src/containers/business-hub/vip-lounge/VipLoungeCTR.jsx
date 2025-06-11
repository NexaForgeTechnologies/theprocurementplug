import ConsultingPartnerTile from "@/components/business-hub/consultinng-partner/ConsultingPartnerTile";
import React from "react";

function VipLoungeCTR() {
  const viplounge = [
    {
      id: 1,
      heading: "Collaboration & Influence Zone",
      text: "",
      url: "/business-hub/vip-lounge/collaboration-influence",
    },
    {
      id: 2,
      heading: "Featured Business Partners",
      text: "",
      url: "/business-hub/vip-lounge/featured-business-partners",
    },
    {
      id: 3,
      heading: "Exclusive Intelligent & Reports",
      text: "",
      url: "/business-hub/vip-lounge/exclusive-intelligence-reports",
    },
    {
      id: 4,
      heading: "Executive Leadership",
      text: "",
      url: "/business-hub/vip-lounge/executive-leadership",
    },
    {
      id: 5,
      heading: "Innovation Vault",
      text: "",
      url: "/business-hub/vip-lounge/innovation-vault",
    },
  ];

  return (
    <div>
      <div className="max-w-[780px] m-auto text-center">
        <h3 className="font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]">
          VIP Business Lounge
        </h3>
        <p className="my-8 text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed">
          Welcome to the VIP Business Lounge — your gateway to elite
          connections, strategic insights, and cutting-edge innovation. This
          exclusive hub is designed for visionary leaders and influential
          partners to collaborate, access premium intelligence and reports, and
          explore breakthrough ideas in our Innovation Vault. Whether you're
          seeking executive leadership content or featured business alliances,
          this is where future-shaping partnerships begin.
        </p>
      </div>

      {/* Consultant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {viplounge.map((partner) => (
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

export default VipLoungeCTR;
