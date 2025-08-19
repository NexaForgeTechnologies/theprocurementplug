import React from "react";

import EventBenifitsComp from "@/components/events/EventBenifitsComp";

function EventBenifitsCTR() {
  const evenetBenifits = [
    {
      id: 1,
      icon: "wallet",
      heading: "Finance for Procurement",
      text: "Master cost control, budgeting, and financial strategy",
    },
    {
      id: 2,
      icon: "idea",
      heading: "Mastering Negotiation Strategies",
      text: "Secure the best supplier deals with proven tactics",
    },
    {
      id: 3,
      icon: "monitor",
      heading: "Procurement Technology & Digital Transformation",
      text: "Leverage tech to drive efficiency",
    },
    {
      id: 4,
      icon: "management",
      heading: "Stakeholder Management & Influence",
      text: "Build strategic relationships and leadership impact",
    },
    {
      id: 5,
      icon: "growth",
      heading: "Career growth strategies",
      text: "learn from the best on how to elevate your career",
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
