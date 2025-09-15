import React from "react";

import FeatureComponent from "@/components/features/FeatureComponent";

function EventHighlightCTR() {
  const eventHighlight1 = [
    {
      id: 1,
      heading: `TPRM: Practical Tools Every Professional Must Master`,
      text: `Gain hands-on expertise at our TPRM Masterclass. This focused session delivers practical strategies to identify, assess, and mitigate third-party risks across supplier networks. Learn step-by-step how to apply modern tools and frameworks that strengthen compliance, reduce exposure, and build resilience in procurement operations.`,    
    },
    {
      id: 2,
      heading: `Cross-Industry Insights: Lessons from Healthcare, Tech & Energy`,
      text: `Broaden your strategic outlook with insights from beyond procurement. This Cross-Industry Masterclass highlights lessons from healthcare, technology, energy, and non-procurement functions. Discover fresh approaches and proven practices that can be adapted to procurement to drive innovation, agility, and long-term impact.`,
    },

  ];

  const eventHighlight2 = [
    {
      id: 1,
      heading: `Career Accelerator Framework: Building Influence, Visibility & Global Credentials`,
      text: `Take control of your career growth at our Career Accelerator Masterclass. Learn a step-by-step framework to enhance your visibility, build influence, and secure international credentials. Designed for ambitious professionals, this session equips you to showcase your impact, stand out in your organization, and prepare for global opportunities.`,
    },
    {
      id: 2,
      heading: `Crisis Room Simulation: Making Enterprise-Level Decisions Under Pressure`,
      text: `Step into the heat of decision-making at our Crisis Room Simulation Masterclass. Experience a live scenario where you’ll navigate enterprise-level challenges like cyberattacks, supply chain collapse, or reputational risk. Build confidence, sharpen judgment, and develop the leadership skills needed to perform under pressure.`,
    },
  ];

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className='m-auto text-center'>
        <h3 className='font-extrabold text-2xl md:text-3xl mb-4 md:mb-8 text-[#010101]'>Event Workshops</h3>
        <p className='text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed'>These curated workshops focus on empowering procurement professionals with strategic and practical skills across key areas. From mastering negotiation tactics and leveraging digital tools, to optimizing cost control and embedding sustainability through ESG principles, each session offers targeted insights designed to enhance performance, drive efficiency, and deliver long-term value in modern procurement practices.</p>
      </div>

      <FeatureComponent heading="Mini Masterclass" text={eventHighlight1} />
      <FeatureComponent heading="Mini Masterclass" text={eventHighlight2} />
    </div>
  );
}

export default EventHighlightCTR;
