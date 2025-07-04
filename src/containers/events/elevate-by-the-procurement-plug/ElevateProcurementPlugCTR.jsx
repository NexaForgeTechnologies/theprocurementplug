"use client";

import React, { useState } from "react";
// import EventComp from "@/components/events/EventComp";
import Link from "next/link";
import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import ElevateCard from '@/components/events/ElevateCardComp';
// import IconComponent from "@/components/icon/Icon";
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'

function Breadcrumb() {
  return (
    <nav className="text-sm breadcrumbs my-4 md:my-10">
      <ol className="list-reset flex gap-2 text-[#9C9C9C] whitespace-nowrap overflow-x-auto scrollbar-none md:overflow-x-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <li>
          <Link href="/business-hub" className="hover:underline">Business Hub</Link>
        </li>
        <li>/</li>
        <li>
          <Link href="/event" className="hover:underline">Events</Link>
        </li>
        <li>/</li>
        <li className="text-[#696969] ">
          Elevate by The Procurement Plug
        </li>
      </ol>
    </nav>
  )
}

function ResourceLibraryCTR() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [searchText, setSearchText] = useState("");

  const events = [
    {
      id: 1,
      type_id: 2,
      tag: "Next Gen",
      type_name: "seminars",
      heading: "Elevate Manchester – June 2025",
      time: "25th June 2025, 8:30am to 5pm",
      date: "2025-06-25",
      location: "4Th Floor, City Tower, New York Street, Manchester M1 4BT",
      designFor:
        "Manchester Edition is designed for procurement professionals, focusing on innovation, strategy, and leadership in procurement.",
      link: "/event/elevate2025-manchester",
      tagColor: "#B08D57",
    },
    {
      id: 2,
      type_id: 2,
      tag: "Bloom",
      type_name: "seminars",
      heading: "Elevate Glasgow – August 2025",
      time: "26th August 2025, 8:30am to 5pm",
      date: "2025-08-26",
      location: "3rd Floor, Beacon Building 176 St Vincent St Glasgow G2 5SG",
      designFor: "Senior procurement leaders, CPOs, Procurement Directors.",
      link: "/event/elevate2025-scotland",
      tagColor: "#85009D",
    },
    {
      id: 3,
      type_id: 2,
      tag: "Xec",
      type_name: "seminars",
      heading: "Elevate Caribbean – November 2025",
      time: "November 2025",
      date: "2025-11-01",
      location: "Location will be provide soon. Stay Tuned!",
      designFor:
        "Chief Procurement Officers (CPO), Vice Presidents & Directors of Procurement, Senior Managers in Supply Chain & Procurement.",
      link: "/event/elevate2025-caribbean",
      tagColor: "#000000",
    },
    {
      id: 4,
      type_id: 1,
      tag: "Next Gen",
      type_name: "webinar",
      heading:
        "Boardroom Preparedness for Senior Procurement Professionals – July 2025",
      time: "17th July 2025, 11am to 12:15pm",
      date: "2025-07-17",
      location: "Virtual Webinar",
      designFor: "Keynote Speaker, Interactive Q&A.",
      link: "/event/boardroom-preparedness-for-senior-procurement-professionals",
      tagColor: "#B08D57",
    },
  ];

  const upcomingevents = [
    {
      id: 1,
      type_id: 2,
      banner: "/images/events/banner.png",
      tag: "",
      type_name: "",
      heading: "",
      time: "",
      date: "",
      location: "",
      designFor:
        "",
      link: "",
      tagColor: "",
    },
    {
      id: 2,
      type_id: 2,
      tag: "Next Gen",
      type_name: "seminars",
      heading: "Elevate Manchester – June 2025",
      time: "25th June 2025, 8:30am to 5pm",
      date: "2025-06-25",
      location: "4Th Floor, City Tower, New York Street, Manchester M1 4BT",
      designFor:
        "Manchester Edition is designed for procurement professionals, focusing on innovation, strategy, and leadership in procurement.",
      link: "/event/elevate2025-manchester",
      tagColor: "#B08D57",
    },
    {
      id: 3,
      type_id: 2,
      tag: "Bloom",
      type_name: "seminars",
      heading: "Elevate Glasgow – August 2025",
      time: "26th August 2025, 8:30am to 5pm",
      date: "2025-08-26",
      location: "3rd Floor, Beacon Building 176 St Vincent St Glasgow G2 5SG",
      designFor: "Senior procurement leaders, CPOs, Procurement Directors.",
      link: "/event/elevate2025-scotland",
      tagColor: "#85009D",
    },
    {
      id: 4,
      type_id: 2,
      tag: "Xec",
      type_name: "seminars",
      heading: "Elevate Caribbean – November 2025",
      time: "November 2025",
      date: "2025-11-01",
      location: "Location will be provide soon. Stay Tuned!",
      designFor:
        "Chief Procurement Officers (CPO), Vice Presidents & Directors of Procurement, Senior Managers in Supply Chain & Procurement.",
      link: "/event/elevate2025-caribbean",
      tagColor: "#000000",
    },
  ];


  const cardsData = [
    {
      prefix: 'ELEVATE',
      title: 'NextGen',
      subtitle: 'PROCUREMENT AS A CAREER',
      description: 'Inspiring the Next Generation of Procurement Leaders',
      bgFrom: '#E5A83D',
      bgTo: '#B47E34',
      textColor: '#FCF3C9',
    },
    {
      prefix: 'ELEVATE',
      title: 'Bloom',
      subtitle: 'GROWTH, CONFIDENCE & LEADERSHIP',
      description: 'Empowering Mid-Career Professionals to Thrive',
      bgFrom: '#823C6E',
      bgTo: '#4C2A67',
      textColor: '#FFEEC8',
    },
    {
      prefix: 'ELEVATE',
      title: 'Xec',
      subtitle: 'STRATEGIC EXCELLENCE & LEADERSHIP',
      description: 'Developing Boardroom Leaders & Legacies',
      bgFrom: '#1F1E23',
      bgTo: '#2B2B2D',
      textColor: '#F3C770',
    },
  ];

  const partnerWithUs = {
    Partnerheader: {
      h3: "Partner With Us",
      p: (
        <>
          <strong>partnerships@theprocurementplug.com</strong> -{' '}
          <Link className="font-light" href="/partnerships">
            Visit our partnership page
          </Link>
        </>
      ),
      bullets: [
        "Position Your Brand as a strategic employer and change leader",
        "Access Talent Pipelines across all levels",
        "Be Part of the Conversation shaping the future of procurement",
        "Support Economic Mobility & industry visibility",
      ],
    },
    items: [
      {
        id: 1,
        heading: "The Procurement Plug Academy",
        text: "",
        link: "",
        linkText: "View Details",
        bgColor: "#85009D"
      },
      {
        id: 2,
        heading: "Resources Library",
        text: "",
        link: "",
        linkText: "View Details",
        bgColor: "#85009D"
      },
      {
        id: 3,
        heading: "The Personal Development Hub",
        text: "",
        link: "",
        linkText: "View Details",
        bgColor: "#85009D"
      }
    ]
  };


  const filteredEvents = events.filter((event) => {
    const matchesType = selectedType
      ? event.type_name.toLowerCase() === selectedType.toLowerCase()
      : true;

    const matchesDate = selectedDate
      ? (() => {
        const selected = new Date(selectedDate);
        const eventDate = new Date(event.date);
        return (
          selected.getMonth() === eventDate.getMonth() &&
          selected.getFullYear() === eventDate.getFullYear()
        );
      })()
      : true;

    const matchesHeading = searchText
      ? event.heading.toLowerCase().includes(searchText.toLowerCase())
      : true;

    return matchesType && matchesDate && matchesHeading;
  });

  const handleClearFilters = () => {
    setSelectedType("");
    setSelectedDate("");
    setSearchText("");
  };

  return (
    <>
      <div>
        <HeroCTR
          img="/images/events/elevate-by-the-procurement-plug/herosection.png"
          // heading={<span className='flex flex-col gap-0 leading-none'>
          //   <span className="font-extrabold">Elevate by
          //   </span> The Procurement Plug
          // </span>} 
          heading={
            <span className="flex flex-col gap-0 leading-none">
              <span className="font-extrabold">Elevate by The Procurement Plug</span>
            </span>
          }
          para="Elevate by The Procurement Plug empowers
          procurement professionals through tailored
          growth and leadership programs. It supports
          every career stage, from entry-level to executive."
        />
        <Breadcrumb />
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Elevate by The Procurement Plug
        </h3>
        <p className="max-w-[930px] md:text-xl text-[#1B1B1B] my-4">
          One Brand. Three Journeys. Infinite Growth.
        </p>
        <p className="max-w-[930px]  text-[#1B1B1B] ">
          From first steps into procurement to shaping global strategy, Elevate is the UK’s flagship event series supporting professionals
          at every stage of their career.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-4">
          What is Elevate?
        </h3>
        <p className="leading-none max-w-[930px] md:text-xl text-[#1B1B1B] mb-2">
          <strong>Elevate is not just a series of events</strong>
        </p>
        <p className="max-w-[930px] md:text-xl text-[#1B1B1B] mb-4">
          it’s a movement. Curated by The Procurement Plug, Elevate creates human-first, forward-thinking spaces for
          career discovery, transformation, and executive impact in procurement.
        </p>
        <p className="max-w-[930px] md:text-xl text-[#1B1B1B]">
          We believe in growth that is strategic, inclusive, and legacy-building — whether you're just starting out or
          stepping into the boardroom.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-4">
          The Series at a Glance
        </h3>
        <ElevateCard cards={cardsData} />

        <div className="rounded-[6px] border border-[#DBBB89] bg-[#FFFBF5] p-5 w-full lg:self-start hover:text-[#ffff] my-4 md:my-8">
          <h3 className="text-[24px] md:text-[32px] mb-4 text-[#B08D57]">
            Elevate <span className="font-semibold">NextGen</span>
          </h3>
          <p className="max-w-[930px] md:text-xl text-[#1B1B1B]">
            <strong>Theme:</strong> Procurement as a Career
          </p>
          <p className="max-w-[930px] md:text-xl text-[#1B1B1B]">
            <strong>Audience:</strong> Students, career switchers, early professionals
          </p>
          <p className="max-w-[930px] md:text-xl text-[#1B1B1B] mb-4">
            <strong>Format:</strong> School & college outreach, live events, employer showcases
          </p>
          <h3 className="font-semibold text-[20px] text-[#1B1B1B] mb-2">
            Why It Matters
          </h3>
          <p className="max-w-[930px] md:text-xl text-[#1B1B1B]">
            Most people fall into procurement — we help them choose it
          </p>
          <p className="max-w-[930px] md:text-xl text-[#1B1B1B] mb-4">
            NextGen introduces procurement as a powerful career path, connecting talent with employers,
            mentors, and inspiration.
          </p>
          <h3 className="font-semibold text-[20px] text-[#1B1B1B] mb-2">
            What They’ll Get:
          </h3>

          <div className="flex gap-2 md:gap-4 items-start mb-4">
            <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[3px] md:mt-[5px] shrink-0"></div>
            <div>
              <p className="text-[16px] md:text-[20px] text-[#1B1B1B]">Career tasters & simulations</p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-4 items-start mb-4">
            <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[3px] md:mt-[5px] shrink-0"></div>
            <div>
              <p className="text-[16px] md:text-[20px] text-[#1B1B1B]">CV clinics & mentoring</p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-4 items-start mb-4">
            <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[3px] md:mt-[5px] shrink-0"></div>
            <div>
              <p className="text-[16px] md:text-[20px] text-[#1B1B1B]">Access to internships and apprenticeship info</p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-4 items-start mb-4 ">
            <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[3px] md:mt-[5px] shrink-0"></div>
            <div>
              <p className="text-[16px] md:text-[20px] text-[#1B1B1B]">Human stories from diverse procurement professionals</p>
            </div>
          </div>
        </div>
        <div className="rounded-[6px] border border-[#DBBB89] bg-[#FFFBF5] p-5 w-full lg:self-start hover:text-[#ffff] mb-4 md:my-8">
          <h3 className="text-[24px] md:text-[32px] mb-4 text-[#85009D]">
            Elevate <span className="font-semibold">Bloom</span>
          </h3>
          <p className="max-w-[930px] md:text-xl text-[#1B1B1B]">
            <strong>Theme:</strong> Growth, Confidence & Leadership
          </p>
          <p className="max-w-[930px] md:text-xl text-[#1B1B1B]">
            <strong>Audience:</strong> Junior to Mid-career professionals
          </p>
          <p className="max-w-[930px] md:text-xl text-[#1B1B1B] mb-4">
            <strong>Format:</strong> Skills clinics, soft power labs, transformation workshops
          </p>
          <h3 className="font-semibold text-[20px] text-[#1B1B1B] mb-2">
            Why It Matters
          </h3>
          <p className="max-w-[930px] md:text-xl text-[#1B1B1B]">
            Mid-career is the tipping point between delivery and influence.
          </p>
          <p className="max-w-[930px] md:text-xl text-[#1B1B1B] mb-4">
            Bloom supports professionals who are ready to lead — but haven't had the room or recognition to rise.
          </p>
          <h3 className="font-semibold text-[20px] text-[#1B1B1B] mb-2">
            What They'll Get:
          </h3>

          <div className="flex gap-2 md:gap-4 items-start mb-4">
            <div className="w-[20px] h-[20px] bg-[#85009D] rounded-full mt-[3px] md:mt-[5px] shrink-0"></div>
            <div>
              <p className="text-[16px] md:text-[20px] text-[#1B1B1B]">Stakeholder strategy sessions</p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-4 items-start mb-4">
            <div className="w-[20px] h-[20px] bg-[#85009D] rounded-full mt-[3px] md:mt-[5px] shrink-0"></div>
            <div>
              <p className="text-[16px] md:text-[20px] text-[#1B1B1B]">Confidence coaching & leadership labs</p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-4 items-start mb-4">
            <div className="w-[20px] h-[20px] bg-[#85009D] rounded-full mt-[3px] md:mt-[5px] shrink-0"></div>
            <div>
              <p className="text-[16px] md:text-[20px] text-[#1B1B1B]">Peer mentoring and new networks</p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-4 items-start mb-4 ">
            <div className="w-[20px] h-[20px] bg-[#85009D] rounded-full mt-[3px] md:mt-[5px] shrink-0"></div>
            <div>
              <p className="text-[16px] md:text-[20px] text-[#1B1B1B]">Tools to grow from “doing” to “leading”</p>
            </div>
          </div>
        </div>
        <div className="rounded-[6px] border border-[#DBBB89] bg-[#FFFBF5] p-5 w-full lg:self-start hover:text-[#ffff] mb-4 md:my-8">
          <h3 className="text-[24px] md:text-[32px] mb-4 text-[#000000]">
            Elevate <span className="font-semibold">Xec</span>
          </h3>
          <p className="max-w-[930px] md:text-xl text-[#1B1B1B]">
            <strong>Theme:</strong> Strategic Excellence & Leadership
          </p>
          <p className="max-w-[930px] md:text-xl text-[#1B1B1B]">
            <strong>Audience:</strong> Senior professionals (Heads, Directors, CPOs, VPs)
          </p>
          <p className="max-w-[930px] md:text-xl text-[#1B1B1B] mb-4">
            <strong>Format:</strong> Leadership retreats, peer exchanges, boardroom intensives
          </p>
          <h3 className="font-semibold text-[20px] text-[#1B1B1B] mb-2">
            Why It Matters
          </h3>
          <p className="max-w-[930px] md:text-xl text-[#1B1B1B]">
            Procurement deserves a seat at the top.
          </p>
          <p className="max-w-[930px] md:text-xl text-[#1B1B1B] mb-4">
            Xec exists to accelerate boardroom-readiness, legacy-building, and enterprise-level transformation.
          </p>
          <h3 className="font-semibold text-[20px] text-[#1B1B1B] mb-2">
            What They'll Get:
          </h3>

          <div className="flex gap-2 md:gap-4 items-start mb-4">
            <div className="w-[20px] h-[20px] bg-[#000000] rounded-full mt-[3px] md:mt-[5px] shrink-0"></div>
            <div>
              <p className="text-[16px] md:text-[20px] text-[#1B1B1B]">Access to our proprietary Xec Tools</p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-4 items-start mb-4">
            <div className="w-[20px] h-[20px] bg-[#000000] rounded-full mt-[3px] md:mt-[5px] shrink-0"></div>
            <div>
              <p className="text-[16px] md:text-[20px] text-[#1B1B1B]">Peer-to-peer CEO/CPO coaching</p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-4 items-start mb-4">
            <div className="w-[20px] h-[20px] bg-[#000000] rounded-full mt-[3px] md:mt-[5px] shrink-0"></div>
            <div>
              <p className="text-[16px] md:text-[20px] text-[#1B1B1B]">Executive networking in private forums and retreats</p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-4 items-start mb-4 ">
            <div className="w-[20px] h-[20px] bg-[#000000] rounded-full mt-[3px] md:mt-[5px] shrink-0"></div>
            <div>
              <p className="text-[16px] md:text-[20px] text-[#1B1B1B]">Strategic deep dives in finance, governance, and ESG</p>
            </div>
          </div>
        </div>
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-4">
          WHO SHOULD ATTEND?
        </h3>
        {/* <div className="bg-[#FFFBF5] text-[#1B1B1B]">
          <table class="w-full border-collapse bg-[#FFFBF5] text-left border-2 border-[#DBBB89] rounded-[6px]">
            <tr class="bg-[#FFFBF5] text-2xl font-semibold">
              <th class="p-4 border-2 border-[#DBBB89]">Track</th>
              <th class="p-4 border-2 border-[#DBBB89]">Ideal For</th>
            </tr>
            <tr class="bg-[#FFFBF5] text-[20px]">
              <td class="p-4 border-2 border-[#DBBB89]">NextGen</td>
              <td class="p-4 border-2 border-[#DBBB89]">College students, university undergrads, career changers, apprenticeship seekers</td>
            </tr>
            <tr class="bg-[#FFFBF5] text-[20px]">
              <td class="p-4 border-2 border-[#DBBB89]">Bloom</td>
              <td class="p-4 border-2 border-[#DBBB89]">Procurement officers, category managers, sourcing professionals, delivery leaders</td>
            </tr>
            <tr class="bg-[#FFFBF5] text-[20px]">
              <td class="p-4 border-2 border-[#DBBB89]">Xec</td>
              <td class="p-4 border-2 border-[#DBBB89]">CPOs, Directors, Heads of Procurement, VPs, or executives moving toward the boardroom</td>
            </tr>
          </table>
        </div> */}
        <div className="bg-[#FFFBF5] text-[#1B1B1B]">
          <table className="w-full border-collapse bg-[#FFFBF5] text-left border-2 border-[#DBBB89] rounded-[6px]">
            <tbody>
              <tr className="bg-[#FFFBF5] text-2xl font-semibold">
                <th className="p-4 border-2 border-[#DBBB89]">Track</th>
                <th className="p-4 border-2 border-[#DBBB89]">Ideal For</th>
              </tr>
              <tr className="bg-[#FFFBF5] text-[20px]">
                <td className="p-4 border-2 border-[#DBBB89]">NextGen</td>
                <td className="p-4 border-2 border-[#DBBB89]">College students, university undergrads, career changers, apprenticeship seekers</td>
              </tr>
              <tr className="bg-[#FFFBF5] text-[20px]">
                <td className="p-4 border-2 border-[#DBBB89]">Bloom</td>
                <td className="p-4 border-2 border-[#DBBB89]">Procurement officers, category managers, sourcing professionals, delivery leaders</td>
              </tr>
              <tr className="bg-[#FFFBF5] text-[20px]">
                <td className="p-4 border-2 border-[#DBBB89]">Xec</td>
                <td className="p-4 border-2 border-[#DBBB89]">CPOs, Directors, Heads of Procurement, VPs, or executives moving toward the boardroom</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div >
      <PartnerWithUsComp data={partnerWithUs} />
    </>
  );
}

export default ResourceLibraryCTR;
