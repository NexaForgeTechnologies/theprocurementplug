import React from "react";

import EventBenifitsComp from "@/components/events/EventBenifitsComp";

function EventBenifitsCTR() {
  const evenetBenifits = [
    {
      id: 1,
      icon: "wallet",
      heading: "Financial & Risk Modeling",
      text: "Boardroom-level decision-making skills",
    },
    {
      id: 2,
      icon: "idea",
      heading: "Executive Coaching",
      text: "Leadership development for procurement executives",
    },
    {
      id: 3,
      icon: "monitor",
      heading: "AI & Procurement Analytics",
      text: "Data-driven decision-making for procurement leaders",
    },
    {
      id: 4,
      icon: "management",
      heading: "Sustainability & ESG Leadership",
      text: "Leading corporate sustainability strategies",
    },
    {
      id: 5,
      icon: "growth",
      heading: "CEO Talks",
      text: "Hear from top performing CEO’s leading organisations to success",
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
