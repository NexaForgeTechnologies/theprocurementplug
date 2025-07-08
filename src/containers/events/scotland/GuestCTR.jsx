import React from "react";

import GuestComp from "@/components/events/GuestComp";

function GuessCTR() {
  const guessDetails = [
    {
      id: 1,
      img: "/images/guess/guest-19.jpg",
      heading: "Annalisha Noel",
      subHeading: "Host",
      text1: "Founder and CEO",
      text2: "The Procurement Plug",
      bgColor: "rgb(176, 141, 87)",
    },
    {
      id: 2,
      img: "/images/elevate-scotland/grahamcopeland.jpg",
      heading: "Graham Copeland",
      subHeading: "Voice of the Day",
      text1: "Procurement Expert & Business Development Director",
      text2: "GEP",
      bgColor: "#9c27b0",
    },
    {
      id: 3,
      img: "/images/elevate-scotland/atanu.jpeg",
      heading: "Atanu Chaudhuri",
      // subHeading: "Keynote",
      text1: "Professor of Technology and Operations Management",
      text2: "Durham University Business School",
    },
    {
      id: 4,
      img: "/images/elevate-scotland/davidloseby.jpg",
      heading: "David Loseby",
      // subHeading: "Panellist",
      text1:
        "Senior Advisor & Educator in Procurement ESG & Behavioural Transformation",
      text2: "Editor in Chief Eurasia Academic Publishing Group Limited",
    },

    {
      id: 5,
      img: "/images/elevate-scotland/Iainsteel.jpg",
      heading: "Iain Steel",
      // subHeading: "Workshop",
      text1: "Director of Procurement & Business Transformation",
      text2: "Beneffrey Consulting",
    },
    {
      id: 6,
      img: "/images/elevate-scotland/stevetosh.png",
      heading: "Steve Tosh",
      // subHeading: "Keynote",
      text1: "Procurement Fraud & Anti-Corruption Consultant",
      text2: "Director at Global Risk Alliance Ltd",
    },

    {
      id: 7,
      img: "/images/elevate-scotland/susanwalsh.jpg",
      heading: "Susan Walsh",
      // subHeading: "Panellist",
      text1: "Founder & Managing Director",
      text2: "The Classification Guru Ltd",
    },
    {
      id: 8,
      img: "/images/elevate-scotland/francis.jpeg",
      heading: "Francis Ekenimoh",
      // subHeading: "",
      text1: "Senior Economist",
      text2: "The Department of Health and Social Care (DHSC)",
    },
    {
      id: 9,
      img: "/images/guess/guess-3.jpg",
      heading: "Sarah Socha",
      // subHeading: "Workshop",
      text1: "Founder Stratify Social AI Sales",
      text2: "AI Strategist & Enterprise Growth Leader",
    },
    {
      id: 10,
      img: "/images/guess/salisu-uba.jpeg",
      heading: "Dr Salisu Uba",
      // subHeading: "Workshop",
      text1: "Founder & CEO",
      text2: "NatQuest & OpenTenderAI",
    },
    {
      id: 11,
      img: "/images/guess/gillian-askew.jpg",
      heading: "Gillian Askew",
      // subHeading: "Workshop",
      text1: "Director and Co-Founder",
      text2: "Go4Growth",
    },
    {
      id: 12,
      img: "/images/guess/cameron-poole.png",
      heading: "Cameron Poole",
      // subHeading: "Workshop",
      text1: "Leadership & Resilience Coach",
      text2: "Trajectory Group",
    },
    {
      id: 13,
      img: "/images/guess/gary-weston.jpeg",
      heading: "Gary Weston",
      // subHeading: "Workshop",
      text1:
        "Founder, The Leadership Team | Regional VP, NEDonBoard | Strategic Consultant, Scottish Enterprise",
      text2: "Vistage",
    },
    {
      id: 14,
      img: "/images/guess/catherine-manning.jpg",
      heading: "Catherine Manning",
      // subHeading: "Workshop",
      text1: "Head of Impact Practice",
      text2: "Impact Reporting",
    },
  ];

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="max-w-[780px] m-auto text-center">
        <h3 className="font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]">
          Event Speakers
        </h3>
        <p className="text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed">
          This year’s event features a dynamic lineup of distinguished speakers,
          including keynote leaders, workshop facilitators, and expert
          panellists from across the procurement and consulting landscape. From
          CEOs and directors to transformation specialists and sustainability
          consultants, these voices bring deep expertise, practical insight, and
          forward-thinking strategies to every session. With diverse roles
          spanning industry giants, innovative startups, and global firms, each
          speaker contributes a unique perspective to drive meaningful dialogue
          and professional growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {guessDetails.map((guess) => (
          <GuestComp
            key={guess.id}
            img={guess.img}
            heading={guess.heading}
            subHeading={guess.subHeading}
            text1={guess.text1}
            text2={guess.text2}
            bgColor={guess.bgColor}
          />
        ))}
      </div>
    </div>
  );
}

export default GuessCTR;
