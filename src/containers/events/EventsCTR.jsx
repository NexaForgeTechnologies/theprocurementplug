"use client";

import React, { useState } from "react";
import EventComp from "@/components/events/EventComp";

function ResourceLibraryCTR() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [searchText, setSearchText] = useState("");

  const events = [
    {
      id: 1,
      type_id: 2,
      type_name: "seminars",
      heading: "Elevate Manchester – June 2025",
      time: "25th June 2025, 8:30am to 5pm",
      date: "2025-06-25",
      location: "4Th Floor, City Tower, New York Street, Manchester M1 4BT",
      designFor:
        "Manchester Edition is designed for procurement professionals, focusing on innovation, strategy, and leadership in procurement.",
      link: "/event/elevate2025-manchester",
    },
    {
      id: 2,
      type_id: 2,
      type_name: "seminars",
      heading: "Elevate Glasgow – August 2025",
      time: "26th August 2025, 8:30am to 5pm",
      date: "2025-08-26",
      location: "3rd Floor, Beacon Building 176 St Vincent St Glasgow G2 5SG",
      designFor: "Senior procurement leaders, CPOs, Procurement Directors.",
      link: "/event/elevate2025-scotland",
    },
    {
      id: 3,
      type_id: 2,
      type_name: "seminars",
      heading: "Elevate Caribbean – November 2025",
      time: "November 2025",
      date: "2025-11-01",
      location: "Location will be provide soon. Stay Tuned!",
      designFor:
        "Chief Procurement Officers (CPO), Vice Presidents & Directors of Procurement, Senior Managers in Supply Chain & Procurement.",
      link: "/event/elevate2025-caribbean",
    },
    {
      id: 4,
      type_id: 1,
      type_name: "webinar",
      heading:
        "Boardroom Preparedness for Senior Procurement Professionals – July 2025",
      time: "17th July 2025, 11am to 12:15pm",
      date: "2025-07-17",
      location: "Virtual Webinar",
      designFor: "Keynote Speaker, Interactive Q&A.",
      link: "/event/boardroom-preparedness-for-senior-procurement-professionals",
    },
  ];

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
    <div className="text-[#363636]">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6 md:mb-10">
        {/* Event Type */}
        <div className="flex flex-col gap-2">
          <label className="text-xl font-bold" htmlFor="content-type">
            <strong>Event Type</strong>
          </label>
          <select
            id="content-type"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Select Type</option>
            <option value="webinar">Webinars</option>
            <option value="seminars">Seminars</option>
            <option value="workshops">Workshops</option>
            <option value="networking-opportunity">
              Networking Opportunities
            </option>
          </select>
        </div>

        {/* Date Filter */}
        <div className="flex flex-col gap-2">
          <label className="text-xl font-bold" htmlFor="date">
            <strong>Date (Month)</strong>
          </label>
          <input
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="outline outline-[#e0e0e0] px-2 py-[9px] rounded-md w-full"
            type="date"
          />
        </div>

        {/* Heading Search */}
        <div className="flex flex-col gap-2 col-span-1 sm:col-span-1">
          <label className="text-xl font-bold" htmlFor="search">
            <strong>Search</strong>
          </label>
          <input
            id="search"
            placeholder="Search by heading..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="outline outline-[#e0e0e0] px-2 py-[9px] rounded-md w-full"
            type="text"
          />
        </div>

        {/* Clear Filters Button */}
        <div className="flex flex-col justify-end gap-2 sm:col-span-1">
          <button
            onClick={handleClearFilters}
            className="bg-gray-300 text-black px-2 py-[10px] cursor-pointer rounded-md font-semibold hover:bg-gray-400 transition"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Events List */}
      <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventComp
              key={event.id}
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
  );
}

export default ResourceLibraryCTR;
