import React from "react";

import EventBenifitsComp from "@/components/events/EventBenifitsComp";

function EventBenifitsCTR() {
  const evenetBenifits = [
    {
      id: 1,
      icon: "wallet",
      heading: "Strategic Procurement Leadership",
      text: "Master Stratgies to drive procurement excellence, optimize performence, and enhance organizational value",
    },
    {
      id: 2,
      icon: "idea",
      heading: "Finiancial & Risk Management",
      text: "Learn essential techniques to manage procurement financials effectively and mitigate risks to safeguard organization success",
    },
    {
      id: 3,
      icon: "monitor",
      heading: "Executive Coaching & Development",
      text: "Strengthen leadership capabilities through personalized coaching and targeted development strategies",
    },
    {
      id: 4,
      icon: "management",
      heading: "Governence and Compliance in contracting",
      text: "Discover best practices for ensuring robust governance, regulatory compliance, and integrity throughout your procurement contracts",
    },
    {
      id: 5,
      icon: "growth",
      heading: "Leveraging Procurement for Regional Business Growth",
      text: "Discover strategic approches to leverage procurement effectively driving sustainable growth and competitive across the Caribbean",
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
