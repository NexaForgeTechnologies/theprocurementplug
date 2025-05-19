import React from "react";

import GuestComp from "@/components/events/GuestComp";

function GuessCTR() {
  const guessDetails = [
    {
      id: 1,
      img: "/images/guess/guess-1.jpg",
      heading: "Oliver Jones",
      subHeading: "Keynote",
      text1: "Consulting Director",
      text2: "H&Z Management Consulting",
    },
    {
      id: 2,
      img: "/images/guess/guess-2.jpg",
      heading: "Kiran Kachela",
      subHeading: "Keynote",
      text1: "CEO",
      text2: "CI Projects",
    },
    {
      id: 3,
      img: "/images/guess/guess-3.jpg",
      heading: "Sarah Socca",
      subHeading: "Workshop",
      text1: "CEO",
      text2: "Co Comply",
    },
    {
      id: 4,
      img: "/images/guess/guess-4.jpg",
      heading: "Luke Tomlinson",
      subHeading: "Panellist",
      text1: "Global categoy manager",
      text2: "RS Integrated Supply",
    },
    {
      id: 5,
      img: "/images/guess/guess-5.jpg",
      heading: "Fraser McBeth",
      subHeading: "Panellist",
      text1: "Procurement Director",
      text2: "Volta Trucks",
    },
    {
      id: 6,
      img: "/images/guess/guess-6.jpg",
      heading: "Adwoa Owusu Banahene",
      subHeading: "Keynote and Panellist",
      text1: "CEO",
      text2: "TOBS consultancy",
    },
    // {
    //   id: 7,
    //   img: "/images/guess/guess-7.jpg",
    //   heading: "Tanya Wade",
    //   subHeading: "Keynote",
    //   text1: "Procurement Transformation",
    //   text2: "KPMG",
    // },
    {
      id: 8,
      img: "/images/guess/guess-8.jpg",
      heading: "Christoper Robinson",
      subHeading: "Keynote",
      text1: "Associate Director",
      text2: "Turner and Townsend",
    },
    {
      id: 9,
      img: "/images/guess/guess-9.jpg",
      heading: "Fleur Summers",
      subHeading: "Keynote and Panellist",
      text1: "Senior Consultant",
      text2: "Turner and Townsend",
    },
    {
      id: 10,
      img: "/images/guess/guess-10.jpg",
      heading: "Josh Cable",
      subHeading: "Panellist",
      text1: "Managing recruitment consultant",
      text2: "Hays",
    },
    {
      id: 11,
      img: "/images/guess/guess-11.jpg",
      heading: "Laura Scarfe",
      subHeading: "Workshop Facilitator",
      text1: "CEO Director",
      text2: "Busniness academy online",
    },
    {
      id: 12,
      img: "/images/guess/guess-12.jpg",
      heading: "Jyothi Hartley",
      subHeading: "Moderator & Voice Of The Day",
      text1: "CEO & Procurement Professional",
      text2: "Axis Procurement",
    },
    {
      id: 13,
      img: "/images/guess/guess-13.jpg",
      heading: "Sussanah Gooch",
      subHeading: "Panellist & Workshop",
      text1: "CEO",
      text2: "Treyo & CIPS chapter lead",
    },
    {
      id: 14,
      img: "/images/guess/guess-14.jpg",
      heading: "Blessed Agyemang",
      subHeading: "Workshop",
      text1: "Sustainability and Procurement Innovation Consultant",
      text2: "",
    },
    {
      id: 15,
      img: "/images/guess/guess-15.jpg",
      heading: "Annalisha Noel",
      subHeading: "Host & Founder of TPP",
      text1: "The brains behind The Procurement Plug conception",
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
        {/* <p className='text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed'>This year’s event features a dynamic lineup of distinguished speakers, including keynote leaders, workshop facilitators, and expert panellists from across the procurement and consulting landscape. From CEOs and directors to transformation specialists and sustainability consultants, these voices bring deep expertise, practical insight, and forward-thinking strategies to every session. With diverse roles spanning industry giants, innovative startups, and global firms, each speaker contributes a unique perspective to drive meaningful dialogue and professional growth.</p> */}
        <p className="text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed">
          Our speakers will be announced soon—stay tuned!
        </p>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
      </div> */}
    </div>
  );
}

export default GuessCTR;
