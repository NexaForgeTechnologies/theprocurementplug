// import React from "react";

// import FeatureComponent from "@/components/features/FeatureComponent";

// function EventHighlightCTR({data}) {
//   console.log(JSON.parse(data));

//   const eventHighlight1 = [
//     {
//       id: 1,
//       heading: "Mastering Effective Negotiation Strategies",
//       text: 'Unlock the secrets to winning negotiations at our exclusive "Workshop: Mastering Negotiation Strategies". Tailored specifically for professionals eager to enhance their negotiation prowess, this focused session delivers practical techniques to secure favourable outcomes, build lasting partnerships, and navigate complex discussions. Dive into targeted negotiation tactics and expert insights designed to empower you to achieve success in every deal.',
//     },
//     {
//       id: 2,
//       heading: "Procurement Technology & Digital Tools",
//       text: 'Discover the keys to digital transformation at our exclusive "Workshop: Procurement Technology & Digital Tools, this focused session delivers practical insights and hands-on strategies to harness cutting-edge digital tools, streamline processes, and elevate procurement performance. Dive into the latest technology trends, and learn how to choose the right tools for your organization to secure a competitive edge in todays digital landscape.',
//     },
//   ];

//   const eventHighlight2 = [
//     {
//       id: 1,
//       heading: "Procurement Cost & Budget Control",
//       text: 'Unlock the secrets to smarter spending at our "Finance for Procurement – Cost Control & Budgeting" workshop. In this focused session, you will gain practical strategies to manage budgets effectively, control costs, and drive procurement excellence.. Dive into effective cost-control techniques and essential budgeting practices tailored to the procurement function, ensuring you drive measurable results and procurement excellence.',
//     },
//     {
//       id: 2,
//       heading: "Sustainability & ESG in Procurement",
//       text: 'Ideal for sustainable leadership at our "Workshop: Sustainability & ESG in Procurement." Tailored for procurement professionals, this forward-thinking session delivers strategic insights and robust impact analysis frameworks to integrate sustainability and ESG principles into your strategies. Delve into measuring your initiatives, building resilient supply chains, and driving long-term value —all while turning ESG into a competitive advantage.',
//     },
//   ];

//   return (
//     <div className="flex flex-col gap-6 md:gap-8">
//       <div className='max-w-[780px] m-auto text-center'>
//         <h3 className='font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]'>Event Workshops</h3>
//         <p className='text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed'>These curated workshops focus on empowering procurement professionals with strategic and practical skills across key areas. From mastering negotiation tactics and leveraging digital tools, to optimizing cost control and embedding sustainability through ESG principles, each session offers targeted insights designed to enhance performance, drive efficiency, and deliver long-term value in modern procurement practices.</p>
//       </div>

//       <FeatureComponent heading="Workshop" text={eventHighlight1} />
//       <FeatureComponent heading="Workshop" text={eventHighlight2} />
//     </div>
//   );
// }

// export default EventHighlightCTR;

import React from "react";
import FeatureComponent from "@/components/features/FeatureComponent";

function EventHighlightCTR({ data }) {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="max-w-[780px] m-auto text-center">
        <h3 className="font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]">
          Event Workshops
        </h3>
        <p className="text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed">
          These curated workshops focus on empowering procurement professionals
          with strategic and practical skills across key areas. From mastering
          negotiation tactics and leveraging digital tools, to optimizing cost
          control and embedding sustainability through ESG principles, each
          session offers targeted insights designed to enhance performance,
          drive efficiency, and deliver long-term value in modern procurement
          practices.
        </p>
      </div>

      {/* ✅ Dynamically loop through each workshop group */}
      {data.map((workshopGroup, index) => (
        <FeatureComponent
          key={index}
          heading="Workshop"
          // Map tiles to the structure FeatureComponent expects
          text={workshopGroup.tiles.map((tile, i) => ({
            id: i + 1,
            heading: tile.heading,
            text: tile.details,
          }))}
        />
      ))}
    </div>
  );
}

export default EventHighlightCTR;
