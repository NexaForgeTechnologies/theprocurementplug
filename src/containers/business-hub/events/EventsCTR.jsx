"use client";

import React, { useState } from "react";
import Link from "next/link";

import EventComp from "@/components/events/EventComp";
import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import ElevateCard from '@/components/events/ElevateCardComp';
import IconComponent from "@/components/icon/Icon";
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import Breadcrumb from "@/components/BreadCrumbs";

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
      link: "/business-hub/event/elevate2025-manchester",
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
      link: "/business-hub/event/elevate2025-scotland",
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
      link: "/business-hub/event/elevate2025-caribbean",
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
      link: "/business-hub/event/boardroom-preparedness-for-senior-procurement-professionals",
      tagColor: "#B08D57",
    },
  ];

  const upcomingevents = [
    {
      id: 1,
      type_id: 2,
      banner: "/images/events/global.png",
      tag: "",
      type_name: "",
      para: "Join our BI-Monthly Webinar Series",
      heading: "Procurement Beyond Borders",
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
      link: "/business-hub/event/elevate2025-manchester",
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
      link: "/business-hub/event/elevate2025-scotland",
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
      link: "/business-hub/event/elevate2025-caribbean",
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
          <a
            href="mailto:partnerships@theprocurementplug.com"
            className="font-semibold text-white hover:underline"
          >
            partnerships@theprocurementplug.com
          </a> -{' '}
          <Link className="font-light" href="/partnerships">
            Visit our partnership page
          </Link>
        </>
      )
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
          img="/images/events/herosection.png"
          heading="Events Offerings"
          para="A central space for procurement professionals to
          access expert insights, tools, and partnerships that
          drive smarter, sustainable business decisions."
        />
        <Breadcrumb />
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Explore Our Dynamic Event Offerings
        </h3>
        <p className="max-w-[930px] md:text-xl text-[#1B1B1B] my-4">
          Whether you're looking to deepen your knowledge, build practical skills, or expand your professional
          network, our diverse event lineup has something for everyone. Join us for seminars that dive into
          expert insights, webinars you can attend from anywhere, workshops designed for hands-on learning,
          and networking opportunities that connect you with like-minded professionals and industry leaders.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link
            href={"/partnerships"}
            className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
            Become a Sponsor
            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
          </Link>
          <Link
            href={"/event/become-a-speaker"}
            className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
            Become a Speaker
            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
          </Link>
          <Link
            href={"/partnerships"}
            className="flex items-center justify-center md:justify-start cursor-pointer bg-[#85009D] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
            Become a Media Partner
            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
          </Link>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          The Procurement Plug flagship event series
        </h3>
        <p className="max-w-[930px] md:text-xl text-[#1B1B1B] my-4">
          The Procurement Plug Flagship Event Series brings together industry leaders to explore trends,
          share insights, and shape the future of procurement.
        </p>
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-8 gap-4">
          <Link
            href={"/event/elevate-by-the-procurement-plug"}
            className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
            learn more
            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
          </Link>
        </div>
        <ElevateCard cards={cardsData} />
      </div>

      <div
        style={{
          boxShadow: "0 0 0 100vmax #85009D",
          clipPath: "inset(0 -100vmax)",
        }}
        className="text-[#363636] bg-[#85009D] py-6 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6 md:mb-10">
          {/* Event Type */}
          <select
            id="content-type"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-white border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Event Type</option>
            <option value="webinar">Webinars</option>
            <option value="seminars">Seminars</option>
            <option value="workshops">Workshops</option>
            <option value="networking-opportunity">
              Networking Opportunities
            </option>
          </select>

          {/* Date Filter */}
          <input
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="outline bg-white outline-[#e0e0e0] px-2 py-[9px] rounded-md w-full"
            type="date"
          />

          {/* Heading Search */}
          <div className="relative flex items-center">
            <input
              id="search"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="outline bg-white outline-[#e0e0e0] px-2 py-[9px] pr-10 rounded-md w-full text-[#1b1b1b] focus:outline-none focus:border-[#85009D]"
              type="text"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <IconComponent name="search" color="#5D5D5D" size={16} />
            </span>
          </div>


          {/* Clear Filters Button */}
          <div className="flex flex-col justify-end gap-2 sm:col-span-1">
            <button
              onClick={handleClearFilters}
              className="text-white bg-[#b08d57] cursor-pointer text-left gap-2 
            py-[10px] px-2 rounded-md font-semibold w-full hover:shadow-lg transition hover:border-[#a07a4c] hover:text-white"
            >
              Track
            </button>
          </div>
        </div>

        {/* Events List */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventComp
                key={event.id}
                tag={event.tag}
                tagColor={event.tagColor}
                heading={event.heading}
                time={event.time}
                location={event.location}
                designFor={event.designFor}
                href={event.link}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No event found matching your criteria.
            </div>
          )}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Upcoming Events
        </h3>
        <p className="max-w-[930px] md:text-xl text-[#1B1B1B] my-4">
          We have a wide range of upcoming events planned, including seminars, webinars, workshops,
          and networking opportunities. Stay tuned for more details!
        </p>

        {/* Events List */}
        <div className="mt-10 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {upcomingevents.map((event) =>
            // event.id === 1 ? (
            //   <div key={event.id} className="w-full">
            //     <img
            //       src={event.banner}
            //       alt="Event Banner"
            //       className="w-full h-auto rounded-[6px] object-cover"
            //     />
            //   </div>
            // ) : (
            <EventComp
              key={event.id}
              id={event.id}
              tag={event.tag}
              tagColor={event.tagColor}
              heading={event.heading}
              time={event.time}
              location={event.location}
              designFor={event.designFor}
              href={event.link}
              banner={event.banner}
              para={event.para}
            />

            // )
          )}
        </div>
      </div >
      <PartnerWithUsComp data={partnerWithUs} />
    </>
  );
}

export default ResourceLibraryCTR;
