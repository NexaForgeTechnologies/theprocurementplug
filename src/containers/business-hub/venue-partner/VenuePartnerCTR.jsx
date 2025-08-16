"use client";

import React, { useState } from "react";
import Link from "next/link";

import VenuePartnerTile from "@/components/business-hub/venue-partner/VenuePartnerTile";

import { useVenues } from "@/hooks/GetVenues";
import { useGenericTable } from "@/hooks/GetGenericType";

import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'

function Breadcrumb() {
  return (
    <nav className="text-sm breadcrumbs my-4 md:my-10">
      <ol className="list-reset flex gap-2 text-[#9C9C9C] whitespace-nowrap overflow-x-auto scrollbar-none md:overflow-x-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <li>
          <Link href="/business-hub" className="hover:underline">Business Hub</Link>
        </li>
        <li>/</li>
        <li className="text-[#696969]">
          Venue Partners
        </li>
      </ol>
    </nav>
  )
}

function ConsultantPartnerCTR() {
  const { venues, venueLoading, error, refetch: fetchVenues } = useVenues();

  const {
    data: locations,
    loading: isLocationLoading,
    error: isLocationError,
    refetch: locationsRefetch,
  } = useGenericTable("locations");
  const {
    data: capacities,
    loading: isCapacityLoading,
    error: isCapacityError,
    refetch: capacitiesRefetch,
  } = useGenericTable("capacities");
  const {
    data: amenities,
    loading: isAmenityLoading,
    error: isAmenityError,
    refetch: amenitiesRefetch,
  } = useGenericTable("amenities");

  // filter states
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCapacity, setSelectedCapacity] = useState("");
  const [selectedAmenity, setSelectedAmenity] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredVenuePartners = venues.filter((venue) => {
    const matchesLocation = selectedLocation
      ? venue.location === selectedLocation
      : true;
    const matchesCapacity = selectedCapacity
      ? venue.capacity_name === selectedCapacity
      : true;
    const matchesAmenity = selectedCapacity
      ? venue.capacity_name === selectedCapacity
      : true;

    return matchesLocation && matchesCapacity && matchesAmenity;
  });

  const handleClearFilters = () => {
    setSelectedLocation("");
    setSelectedCapacity("");
    setSelectedAmenity("");
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const partnerWithUs = {
    Partnerheader: {
      crossSellh3: "Cross Sell the Collaboration and Thought Leadership Zone",
      h3: "",
      p: ""
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

  return (
    <>
      <div>
        <HeroCTR
          img="/images/bussiness-hub/venue-partner/herosection.png"
          heading={
            <span className="flex flex-col gap-0 leading-none">
              <span className="font-extrabold">Venue Partners</span>
            </span>
          }
          para="Explore handpicked venues ideal for procurement
          events, conferences, and workshops—designed to
          meet your professional needs with the right
          capacity and amenities."
        />
        <Breadcrumb />
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Venue Partners
        </h3>
        <p className="max-w-[930px] md:text-xl text-[#1B1B1B] mt-4 mb-4 md:mb-8">
          Curated venues for procurement events and conferences
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6 md:mb-10 text-[#363636]">
          {/* Location */}
          <select
            id="location"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Location</option>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.value}
              </option>
            ))}
          </select>

          {/* Capicity */}
          <select
            id="Capicity"
            value={selectedCapacity}
            onChange={(e) => setSelectedCapacity(e.target.value)}
            className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Capacity</option>
            {capacities.map((capacity) => (
              <option key={capacity.id} value={capacity.id}>
                {capacity.value}
              </option>
            ))}
          </select>

          {/* Amenities */}
          <select
            id="amenity"
            value={selectedAmenity}
            onChange={(e) => setSelectedAmenity(e.target.value)}
            className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Amenity</option>
            {amenities.map((amenity) => (
              <option key={amenity.id} value={amenity.id}>
                {amenity.value}
              </option>
            ))}
          </select>

          {/* Clear Filters */}
          <button
            onClick={handleClearFilters}
            className="text-center text-white bg-[#b08d57] cursor-pointer p-3 rounded-md w-full hover:shadow-lg transition hover:border-[#a07a4c] hover:text-white"
          >
            Clear Filters
          </button>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-4">
          {filteredVenuePartners.length > 0 ? (
            filteredVenuePartners.slice(0, visibleCount).map((venue) => (
              <VenuePartnerTile
                key={venue.id}
                data={venue}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No venue partner found matching your criteria.
            </div>
          )}
        </div>
        <div className="flex items-center justify-center w-full">
          {visibleCount < filteredVenuePartners.length && (
            <button
              onClick={handleShowMore}
              className="flex self-center md:self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
              View All Venue Partners
              <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
            </button>
          )}
        </div>
      </div>


      <PartnerWithUsComp data={partnerWithUs} />
    </>
  );
}

export default ConsultantPartnerCTR;
