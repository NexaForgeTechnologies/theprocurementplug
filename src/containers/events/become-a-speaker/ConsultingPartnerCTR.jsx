import React from "react";
import ConsultingPartnerTile from "@/components/events/become-a-speaker/ConsultingPartnerTile";


function ConsultingPartnerCTR() {

  const consultantPartners = [
    {
      id: 1,
      img: "/images/events/become-a-speaker/star.png",
      heading: "Showcase Expertise",
      text: "Share your knowledge with an engaged professional audiences",
      url: "/business-hub/consulting-partner/six-sigma-change-management",
    },
    {
      id: 2,
      img: "/images/events/become-a-speaker/star.png",
      heading: "Grow Network",
      text: "Connect with industry leaders and expand your influence",
      url: "/business-hub/consulting-partner/procurement",
    },
    {
      id: 3,
      img: "/images/events/become-a-speaker/star.png",
      heading: "Shape Industry",
      text: "Contribute to the conversation on procurement best practices",
      url: "/business-hub/consulting-partner/esg-sustainability",
    },
  ];

  return (
    <div>
      <div className="max-w-[780px] m-auto text-center">
        <h3 className="font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]">
          Become a Speaker
        </h3>
        <p className="my-8 text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed">
          Contribute to The Procurement Plug Events
        </p>
      </div>

      {/* Consultant Cards */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {consultantPartners.map((partner) => (
          <ConsultingPartnerTile
            key={partner.id}
            img={partner.img}
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
