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
      img: "/images/elevate-scotland/guest-20.jpg.jpg",
      heading: "Craig Elvin",
      // subHeading: "Panellist",
      text1:
        "Director | Executive Search Consultant",
      text2: "Executive Heads",
    },
        {
      id: 3,
      img: "/images/elevate-scotland/davidloseby.jpg",
      heading: "David Loseby",
      // subHeading: "Panellist",
      text1:
        "Senior Advisor & Educator in Procurement ESG & Behavioural Transformation",
      text2: "Editor in Chief Eurasia Academic Publishing Group Limited",
    },
        {
      id: 4,
      img: "/images/elevate-scotland/susanwalsh.jpg",
      heading: "Susan Walsh",
      // subHeading: "Panellist",
      text1: "Founder & Managing Director",
      text2: "The Classification Guru Ltd",
    },
  ];

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <div className="max-w-[780px] m-auto text-center">
        <h3 className="font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]">
          Event Speakers
        </h3>
        <p className='text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed'>This year’s event features a dynamic lineup of distinguished speakers, including keynote leaders, workshop facilitators, and expert panellists from across the procurement and consulting landscape. From CEOs and directors to transformation specialists and sustainability consultants, these voices bring deep expertise, practical insight, and forward-thinking strategies to every session. With diverse roles spanning industry giants, innovative startups, and global firms, each speaker contributes a unique perspective to drive meaningful dialogue and professional growth.</p>
        
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
