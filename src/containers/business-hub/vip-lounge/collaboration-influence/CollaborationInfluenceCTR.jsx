import ConsultingPartnerTile from "@/components/business-hub/vip-lounge/ConsultingPartnerTile";
import React from "react";

function CollaborationInfluenceCTR() {
  const collaboration = [
    {
      id: 1,
      heading: "VIP Forum",
      para: "Invite only discussion board",
      btntext: "Start a discussion",
      url: "/business-hub/vip-lounge/collaboration-influence/vip-forum",
    },
    {
      id: 2,
      heading: "Thought Leadership Wall",
      para: "Members/Submitted content",
      smallimg: [
        "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/member1.png",
        "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/member2.png",
        "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/member3.png",
        "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/member4.png",
        "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/member5.png",
      ],
      url: "/business-hub/vip-lounge/featured-business-partners",
    },
    {
      id: 3,
      heading: "Exclusive Roundtables",
      para: "Peer roundtable sessions for CPOs and Leaders",
      btntext: "XecXchange",
      url: "/business-hub/vip-lounge/exclusive-intelligence-reports",
    },
  ];

  return (
    <div>
      <div>
        <h3 className="font-semibold text-[32px] md:text-5xl mb-4 md:mb-8 text-[#1B1B1B]">
          Collaboration & Thought Leadership
        </h3>
      </div>

      {/* Pages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {collaboration.map((partner) => (
          <ConsultingPartnerTile
            key={partner.id}
            heading={partner.heading}
            para={partner.para}
            btntext={partner.btntext}
            smallimg={partner.smallimg} 
            url={partner.url}
          />
        ))}
      </div>
    </div>
  );
}

export default CollaborationInfluenceCTR;
