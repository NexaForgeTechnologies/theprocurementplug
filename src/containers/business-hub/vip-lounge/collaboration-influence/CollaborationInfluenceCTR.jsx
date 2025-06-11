import ConsultingPartnerTile from "@/components/business-hub/consultinng-partner/ConsultingPartnerTile";
import React from "react";

function CollaborationInfluenceCTR() {
  const collaboration = [
    {
      id: 1,
      heading: "VIP Forum",
      text: "Invite-only discussion board",
      url: "/business-hub/vip-lounge/collaboration-influence/vip-forum",
    },
    {
      id: 2,
      heading: "Thought Leadership Wall",
      text: "Showcase member submitted content",
      url: "/business-hub/vip-lounge/featured-business-partners",
    },
    {
      id: 3,
      heading: "Exclusive Roundtables",
      text: "Peer roundtable sessions for CPOs and Leaders",
      url: "/business-hub/vip-lounge/exclusive-intelligence-reports",
    },
  ];

  return (
    <div>
      <div className="max-w-[780px] m-auto text-center">
        <h3 className="font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]">
          Collaboration & Thought Leadership
        </h3>
        <p className="my-8 text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed">
          Welcome to the Collaboration & Thought Leadership. Your space to
          co-create, connect and shape the future of procurement leadership.
        </p>
      </div>

      {/* Pages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {collaboration.map((partner) => (
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

export default CollaborationInfluenceCTR;
