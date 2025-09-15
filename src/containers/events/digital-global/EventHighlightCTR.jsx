import React from "react";

import FeatureComponent from "@/components/features/FeatureComponent";

function EventHighlightCTR() {
  const eventHighlight1 = [
    {
      id: 1,
      heading: `TPRM: Practical Tools Every Professional Must Master`,
      text: `Gain hands-on expertise at our TPRM Masterclass. This focused session delivers practical strategies to identify, assess, 
      and mitigate third-party risks across supplier networks. 
      Learn step-by-step how to apply modern tools and frameworks that strengthen compliance, 
      reduce exposure, and build resilience in procurement operations.`,
    },
    {
      id: 2,
      heading: `Career Accelerator Framework – Building Influence,
Visibility & Global Credentials`,
      text: `Speaker Type: Executive coach, LinkedIn career strategist,
or senior procurement leader who’s made the leap to
global roles. Definition: Step-by-step system to help mid-level
professionals grow influence, showcase their impact,
and position themselves for promotions or international
opportunities.`,
    },

  ];

  const eventHighlight2 = [
    {
      id: 1,
      heading: `Boardroom Finance Mastery – Interpreting Balance
Sheets, Valuations & Enterprise Risk`,
      text: `Speaker Type: Finance professor, CFO, or corporate
treasurer who teaches boards/NEDs. Definition: A practical financial literacy bootcamp for
senior leaders. Attendees learn how to read balance
sheets, understand financial ratios, and spot enterprise
risks like a board director.`,
    },
    {
      id: 2,
      heading: ` Crisis Room Simulation – Making Enterprise-Level
Decisions Under Pressure`,
      text: `Speaker Type: Former CEO, risk strategist, or crisis
management expert. Definition: A live simulation masterclass where attendees
walk through a high-stakes board-level crisis (e.g.,
cyberattack, supply chain collapse, reputational scandal)
and learn how leaders make decisions under extreme
pressure.`,
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
