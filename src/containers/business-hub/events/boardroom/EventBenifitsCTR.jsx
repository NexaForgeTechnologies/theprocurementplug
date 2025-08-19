import React from "react";

import EventBenifitsComp from "@/components/events/EventBenifitsComp";

function EventBenifitsCTR() {
  const evenetBenifits = [
    {
      id: 1,
      icon: "wallet",
      heading: "Essential Skills For Board-Level Influence",
      text: "Learn how to communicate procurement's value at the excecutive level",
    },
    {
      id: 2,
      icon: "idea",
      heading: "Strategic Leadership For Procurement Executives",
      text: "Develop leadership acumen that aligns with corporate strategy",
    },
    {
      id: 3,
      icon: "monitor",
      heading: "Governance & Risk Management",
      text: "Navigate regulatory compliance and risk assessment frameworks effectively",
    },
    {
      id: 4,
      icon: "management",
      heading: "Financial Acumen For Boardroom Success",
      text: "Understand key financial principles to engage confidently in boardroom discussions",
    },
    {
      id: 5,
      icon: "growth",
      heading: "Effective Decision-Making",
      text: "Learn how to make present and defend procurement stategies to key stakeholders",
    },
    {
      id: 6,
      icon: "linkedin",
      heading: "Updates & announcements—LinkedIn + X",
      text: "#TheProcurementPlugElevate2025 and #xecplugelevate2025 LinkedIn page: The Procurement Plug Founder LinkedIn: Annalisha Noel X: @ProcurementPlug Facebook: @theprocurementplug",
      bgColor: "#b08d57",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {evenetBenifits.map((benifit) => (
        <EventBenifitsComp
          key={benifit.id}
          icon={benifit.icon}
          heading={benifit.heading}
          text={benifit.text}
          bgColor={benifit.bgColor}
        />
      ))}
    </div>
  );
}

export default EventBenifitsCTR;
