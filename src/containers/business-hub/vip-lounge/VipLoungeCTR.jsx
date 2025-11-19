// import ConsultingPartnerTile from "@/components/business-hub/vip-lounge/ConsultingPartnerTile";
// import React from "react";

// function VipLoungeCTR() {
//   const viplounge = [
//     {
//       id: 1,
//       heading: "Collaboration & Thought Leadership",
//       btntext: "View Details",
//       url: "/business-hub/vip-lounge/collaboration-influence",
//     },
//     {
//       id: 2,
//       heading: "Exclusive Business Partners",
//       btntext: "View Details",
//       url: "/business-hub/vip-lounge/exclusive-business-partners",
//     },
//     {
//       id: 3,
//       heading: "Exclusive Intelligent & Reports",
//       btntext: "View Details",
//       url: "/business-hub/vip-lounge/exclusive-intelligence-reports",
//     },
//     {
//       id: 4,
//       heading: "Executive Leadership",
//       btntext: "View Details",
//       url: "/business-hub/vip-lounge/executive-leadership",
//     },
//     {
//       id: 5,
//       heading: "Innovation Vault",
//       btntext: "View Details",
//       url: "/business-hub/vip-lounge/innovation-vault",
//     },
//     {
//       id: 6,
//       heading: "Talent & Hiring Intelligence",
//       btntext: "View Details",
//       url: "/business-hub/vip-lounge/talent-hiring-intelligence",
//     },
//   ];

//   return (
//     <div>
//       <div>
//         <h3 className="font-semibold text-[24px] md:text-[32px] md:text-5xl mb-4 md:mb-8 text-[#1B1B1B]">
//           VIP Business Lounge
//         </h3>
//       </div>

//       {/* Consultant Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
//         {viplounge.map((partner) => (
//           <ConsultingPartnerTile
//             key={partner.id}
//             heading={partner.heading}
//             btntext={partner.btntext}
//             url={partner.url}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default VipLoungeCTR;

import ConsultingPartnerTile from "@/components/business-hub/vip-lounge/ConsultingPartnerTile";
import React from "react";

function VipLoungeCTR() {
  const viplounge = [
    {
      id: 1,
      heading: "Collaboration & Thought Leadership Zone",
      para: "Members/Submitted content, Insights & Contributions from Our Community",
      smallimg: [
        "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/member1.png",
        "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/member2.png",
        "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/member3.png",
        "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/member4.png",
        "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/member5.png",
      ],
      btntext: "View Details",
      url: "/business-hub/vip-lounge/collaboration-influence",
    },
    {
      id: 2,
      heading: "Exclusive Business Partners",
      btntext: "View Details",
      url: "/business-hub/vip-lounge/exclusive-business-partners",
    },
    {
      id: 3,
      heading: "Exclusive Intelligence & Reports",
      btntext: "View Details",
      url: "/business-hub/vip-lounge/exclusive-intelligence-reports",
    },
    {
      id: 4,
      heading: "Innovation Vault",
      btntext: "View Details",
      url: "/business-hub/vip-lounge/innovation-vault",
    },
    {
      id: 5,
      heading: "Talent & Hiring Intelligence",
      btntext: "View Details",
      url: "/business-hub/vip-lounge/talent-hiring-intelligence",
    },
  ];

  return (
    <div>
      <div>
        <h3 className="font-semibold text-[24px] md:border-t-[1px] md:border-[#DBDBDB] md:pt-8 md:text-[32px] md:text-5xl mb-4 md:mb-8 text-[#1B1B1B]">
          VIP Business Lounge
        </h3>
      </div>

      {/* Consultant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-auto gap-6 md:gap-8">
        {viplounge.map((partner) => (
          <ConsultingPartnerTile
            key={partner.id}
            heading={partner.heading}
            para={partner.para}
            smallimg={partner.smallimg}
            btntext={partner.btntext}
            url={partner.url}
            isFeatured={partner.id === 1}
          />
        ))}
      </div>

    </div>
  );
}

export default VipLoungeCTR;