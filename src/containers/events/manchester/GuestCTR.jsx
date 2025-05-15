import React from "react";

import GuestComp from "@/components/events/GuestComp";

function GuessCTR() {
  const guessDetails = [
    {
      id: 1,
      img: "/images/guess/guess-1.jpg",
      heading: "Oliver Jones",
      // subHeading: "Keynote",
      text1: "Consulting Director",
      text2: "H&Z Management Consulting",
    },
    {
      id: 2,
      img: "/images/guess/guess-2.jpg",
      heading: "Kiran Kachela",
      // subHeading: "Keynote",
      text1: "CEO",
      text2: "CI Projects",
    },
    {
      id: 3,
      img: "/images/guess/guess-3.jpg",
      heading: "Sarah Socca",
      // subHeading: "Workshop",
      text1: "CEO",
      text2: "Co Comply",
    },
    {
      id: 4,
      img: "/images/guess/guess-4.jpg",
      heading: "Luke Tomlinson",
      // subHeading: "Panellist",
      text1: "Global Categoy Manager",
      text2: "RS Integrated Supply",
    },
    {
      id: 5,
      img: "/images/guess/guess-5.jpg",
      heading: "Fraser McBeth",
      // subHeading: "Panellist",
      text1: "Procurement Director",
      // text2: "Volta Trucks",
    },
    {
      id: 6,
      img: "/images/guess/guess-6.jpg",
      heading: "Adwoa Owusu Banahene",
      // subHeading: "Keynote and Panellist",
      text1: "CEO",
      text2: "TOBS Consultancy",
    },
    {
      id: 7,
      img: "/images/guess/guess-17.jpg",
      heading: "Miranda Gordon",
      // subHeading: "Panel And Workshop",
      text1: "Procurement Director",
      text2: "DHL",
    },
    {
      id: 8,
      img: "/images/guess/guess-8.jpg",
      heading: "Christoper Robinson",
      // subHeading: "Keynote",
      text1: "Associate Director",
      text2: "A Procurement Podcast  - The Reform Rundown",
    },
    {
      id: 9,
      img: "/images/guess/guess-9.jpg",
      heading: "Fleur Summers",
      // subHeading: "Keynote and Panellist",
      text1: "Senior Consultant",
      text2: "A Procurement Podcast  - The Reform Rundown",
    },
    {
      id: 10,
      img: "/images/guess/guess-10.jpg",
      heading: "Josh Cable",
      // subHeading: "Panellist",
      text1: "Managing Recruitment Consultant",
      text2: "Hays",
    },
    {
      id: 11,
      img: "/images/guess/guess-11.jpg",
      heading: "Laura Scarfe",
      // subHeading: "Workshop Facilitator",
      text1: "CEO & Director",
      text2: "Busniness Academy Online",
    },
    {
      id: 13,
      img: "/images/guess/guess-13.jpg",
      heading: "Susannah Gooch",
      // subHeading: "Panellist & Workshop",
      text1: "CEO",
      text2: "Treyo & CIPS Chapter Lead",
    },
    {
      id: 14,
      img: "/images/guess/guess-14.jpg",
      heading: "Blessed Agyemang",
      // subHeading: "Workshop",
      text1: "Digital Technologies and Sustainability Expert - Supply Chain",
      text2: "",
    },
    {
      id: 16,
      img: "/images/guess/guess-16.jpg",
      heading: "Mick Ramsden",
      // subHeading: "Workshop",
      text1: "Director at Essential Sourcing Ltd",
      text2: "",
    },
    {
      id: 17,
      img: "/images/guess/guess-7.jpg",
      heading: "Rachel Repper",
      // subHeading: "Keynote",
      text1: "Digital Procurement Lead at Amazon Business",
      text2: "",
    },
    {
      id: 18,
      img: "/images/guess/guess-18.jpg",
      heading: "Lewis Sinkala",
      // subHeading: "Panel And Workshop",
      text1: "Head of Procurement at Leeds City Council",
      text2: "",
    },
    {
      id: 12,
      img: "/images/guess/guess-12.jpg",
      heading: "Jyothi Hartley",
      // subHeading: "Moderator & Voice Of The Day",
      text1: "CEO Axis Procurement",
      text2: "Voice of the Day",
      bgColor: "rgb(176, 141, 87)",
    },
    {
      id: 15,
      img: "/images/guess/guess-15.jpg",
      heading: "Annalisha Noel",
      // subHeading: "Host & Founder of TPP",
      text1: "Founder and the CEO of The Procurement",
      text2: "",
      bgColor: "#9c27b0",
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
