import React from "react";

import FeatureComponent from "@/components/features/FeatureComponent";

function EventHighlightCTR() {
  const eventHighlight1 = [
    {
      id: 1,
      heading: "Financial & Risk Modeling for Senior Procurement Professionals",
      text: 'Join our Financial & Risk Modeling workshop for senior procurement professionals, led by expert actuaries and economists. Gain advanced techniques in risk management and financial forecasting to strengthen your procurement strategy and propel your boardroom decision-making skills.',
    },
    {
      id: 2,
      heading: "Executive Coaching & Leadership Development",
      text: 'Participate in our "Executive Coaching & Leadership Development" workshop, designed for senior procurement professionals eager to enhance their leadership capabilities. Led by seasoned coaches, and CEOs, this session will equip you with the tools and insights to elevate your leadership skills, drive organizational growth, and position yourself for executive-level success.',
    },
  ];

  const eventHighlight2 = [
    {
      id: 1,
      heading: "Strategic Risk & Compliance for Procurement Leaders",
      text: 'Attend our Strategic Risk & Compliance workshop for procurement leaders, led by expert actuaries and economists. Discover advanced risk management and compliance strategies that fortify your organization’s framework, empower you to drive strategic decisions, and propel your boardroom decision-making skills in today’s dynamic market.',
    },
    {
      id: 2,
      heading: "Executive Influence & Strategic Stakeholder Engagement",
      text: 'Elevate your influence with a highly strategic edge at our Executive Influence & Strategic Stakeholder Engagement workshop, delivered by top executive coaches and renowned industry thought leaders. Enhance your executive presence, master stakeholder dynamics, and drive high-impact strategic decisions that propel your leadership skills forward.',
    },
  ];

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className='m-auto text-center'>
        <h3 className='font-extrabold text-2xl md:text-3xl mb-4 md:mb-8 text-[#010101]'>Event Workshops</h3>
        <p className='text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed'>These curated workshops focus on empowering procurement professionals with strategic and practical skills across key areas. From mastering negotiation tactics and leveraging digital tools, to optimizing cost control and embedding sustainability through ESG principles, each session offers targeted insights designed to enhance performance, drive efficiency, and deliver long-term value in modern procurement practices.</p>
      </div>

      <FeatureComponent heading="Workshop" text={eventHighlight1} />
      <FeatureComponent heading="Workshop" text={eventHighlight2} />
    </div>
  );
}

export default EventHighlightCTR;
