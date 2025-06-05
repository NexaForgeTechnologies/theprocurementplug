// "use client";

// import React, { useState } from "react";

// import ConsultantTile from "@/components/business-hub/venue-partner/ConsultantTile";
// function ConsultantPartnerCTR() {

//   const [selectedIndustry, setSelectedIndustry] = useState("");
//   const [selectedRegion, setSelectedRegion] = useState("");
//   const [visibleCount, setVisibleCount] = useState(3);

//   const consultantPartners = [
//     {
//       id: 1,
//       heading: "Venue Partner Name",
//       text1: "City, Capacity",
//       industry_id: 1,
//       industry_name: "Industry One",
//       region_id: 1,
//       region_name: "Region One",
//     },
//     {
//       id: 2,
//       heading: "Venue Partner Name",
//       text1: "City, Capacity",
//       industry_id: 2,
//       industry_name: "Industry One",
//       region_id: 2,
//       region_name: "Region One",
//     },
//     {
//       id: 3,
//       heading: "Venue Partner Name",
//       text1: "City, Capacity",
//       industry_id: 3,
//       industry_name: "Industry One",
//       region_id: 3,
//       region_name: "Region One",
//     },
//     {
//       id: 4,
//       heading: "Venue Partner Name",
//       text1: "City, Capacity",
//       industry_id: 1,
//       industry_name: "Industry One",
//       region_id: 1,
//       region_name: "Region One",
//     },
//     {
//       id: 5,
//       heading: "Venue Partner Name",
//       text1: "City, Capacity",
//       industry_id: 2,
//       industry_name: "Industry One",
//       region_id: 2,
//       region_name: "Region One",
//     },
//     {
//       id: 6,
//       heading: "Venue Partner Name",
//       text1: "City, Capacity",
//       industry_id: 3,
//       industry_name: "Industry One",
//       region_id: 3,
//       region_name: "Region One",
//     },
//   ];

//   const filteredConsultants = consultantPartners.filter((partner) => {
//     const matchesIndustry = selectedIndustry
//       ? partner.industry_id.toString() === selectedIndustry
//       : true;
//     const matchesRegion = selectedRegion
//       ? partner.region_id.toString() === selectedRegion
//       : true;

//     return matchesIndustry && matchesRegion;
//   });

//   const handleClearFilters = () => {
//     setSelectedIndustry("");
//     setSelectedRegion("");
//   };

//   const handleShowMore = () => {
//     setVisibleCount((prevCount) => prevCount + 4);
//   };

//   return (
//     <div>

//       <div className="mt-8">
//         <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6 md:mb-10 text-[#363636]">

//           {/* Location */}
//           <div className="flex flex-col gap-2">
//             <label className="text-xl font-bold" htmlFor="region">
//               <strong>Location</strong>
//             </label>
//             <select
//               id="region"
//               value={selectedRegion}
//               onChange={(e) => setSelectedRegion(e.target.value)}
//               className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
//             >
//               <option value="">Select Location</option>
//               <option value="1">Region One</option>
//               <option value="2">Region Two</option>
//               <option value="3">Region Three</option>
//             </select>
//           </div>

//           {/* Capacity */}
//           <div className="flex flex-col gap-2">
//             <label className="text-xl font-bold" htmlFor="region">
//               <strong>Capacity</strong>
//             </label>
//             <select
//               id="region"
//               value={selectedRegion}
//               onChange={(e) => setSelectedRegion(e.target.value)}
//               className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
//             >
//               <option value="">Select Capacity</option>
//               <option value="1">1-10</option>
//               <option value="2">11-20</option>
//               <option value="3">21-50</option>
//               <option value="4">51+</option>
//             </select>
//           </div>

//           {/* Amenities */}
//           <div className="flex flex-col gap-2">
//             <label className="text-xl font-bold" htmlFor="region">
//               <strong>Amenities</strong>
//             </label>
//             <select
//               id="region"
//               value={selectedRegion}
//               onChange={(e) => setSelectedRegion(e.target.value)}
//               className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
//             >
//               <option value="">Select Amenities</option>
//               <option value="1">Wi-Fi</option>
//               <option value="2">Projector</option>
//               <option value="3">Catering</option>
//               <option value="4">Parking</option>
//             </select>
//           </div>

//           {/* Clear Filters */}
//           <div className="flex flex-col justify-end gap-2 sm:col-span-1">
//             <button
//               onClick={handleClearFilters}
//               className="text-white bg-[#b08d57] cursor-pointer flex justify-center items-center gap-2 
//             py-[10px] px-2 rounded-md font-semibold w-full hover:shadow-lg transition hover:border-[#a07a4c] hover:text-white"
//             >
//               Clear Filters
//             </button>
//           </div>
//         </div>

//         {/* Consultant Cards */}
//         <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
//           {filteredConsultants.length > 0 ? (
//             filteredConsultants.slice(0, visibleCount).map((partner) => (
//               <ConsultantTile
//                 key={partner.id}
//                 heading={partner.heading}
//                 text1={partner.text1}
//               />
//             ))
//           ) : (
//             <div className="col-span-full text-center text-gray-500">
//               No consultant found matching your criteria.
//             </div>
//           )}
//         </div>
//         <div className="flex items-center justify-center w-full">
//           {visibleCount < filteredConsultants.length && (
//             <button
//               onClick={handleShowMore}
//               className="mt-4 text-white cursor-pointer px-4 py-2 bg-[#b08d57] rounded">
//               View All Venue Partners
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ConsultantPartnerCTR;

"use client";

import React, { useState } from "react";
import ConsultantTile from "@/components/business-hub/venue-partner/ConsultantTile";

function ConsultantPartnerCTR() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  // Updated consultantPartners with country and city
  const consultantPartners = [
    {
      id: 1,
      heading: "Venue Partner Name",
      text1: "New York, 1-10",
      industry_id: 1,
      industry_name: "Industry One",
      country_id: 1,
      country_name: "USA",
      city_id: 1,
      city_name: "New York",
      capacity: "1-10",
    },
    {
      id: 2,
      heading: "Venue Partner Name",
      text1: "Los Angeles, 11-20",
      industry_id: 2,
      industry_name: "Industry One",
      country_id: 1,
      country_name: "USA",
      city_id: 2,
      city_name: "Los Angeles",
      capacity: "11-20",
    },
    {
      id: 3,
      heading: "Venue Partner Name",
      text1: "Toronto, 21-50",
      industry_id: 3,
      industry_name: "Industry One",
      country_id: 2,
      country_name: "Canada",
      city_id: 3,
      city_name: "Toronto",
      capacity: "21-50",
    },
    {
      id: 4,
      heading: "Venue Partner Name",
      text1: "Vancouver, 1-10",
      industry_id: 1,
      industry_name: "Industry One",
      country_id: 2,
      country_name: "Canada",
      city_id: 4,
      city_name: "Vancouver",
      capacity: "1-10",
    },
    {
      id: 5,
      heading: "Venue Partner Name",
      text1: "London, 11-20",
      industry_id: 2,
      industry_name: "Industry One",
      country_id: 3,
      country_name: "UK",
      city_id: 5,
      city_name: "London",
      capacity: "11-20",
    },
    {
      id: 6,
      heading: "Venue Partner Name",
      text1: "Manchester, 51+",
      industry_id: 3,
      industry_name: "Industry One",
      country_id: 3,
      country_name: "UK",
      city_id: 6,
      city_name: "Manchester",
      capacity: "51+",
    },
  ];

  // Define cities per country
  const citiesByCountry = {
    "1": [
      { id: 1, name: "New York" },
      { id: 2, name: "Los Angeles" },
    ],
    "2": [
      { id: 3, name: "Toronto" },
      { id: 4, name: "Vancouver" },
    ],
    "3": [
      { id: 5, name: "London" },
      { id: 6, name: "Manchester" },
    ],
  };

  const filteredConsultants = consultantPartners.filter((partner) => {
    const matchesIndustry = selectedIndustry
      ? partner.industry_id.toString() === selectedIndustry
      : true;
    const matchesCountry = selectedCountry
      ? partner.country_id.toString() === selectedCountry
      : true;
    const matchesCity = selectedCity
      ? partner.city_id.toString() === selectedCity
      : true;

    return matchesIndustry && matchesCountry && matchesCity;
  });

  const handleClearFilters = () => {
    setSelectedIndustry("");
    setSelectedCountry("");
    setSelectedCity("");
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div>
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6 md:mb-10 text-[#363636]">
          {/* Country */}
          <div className="flex flex-col gap-2">
            <label className="text-xl font-bold" htmlFor="country">
              <strong>Country</strong>
            </label>
            <select
              id="country"
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setSelectedCity(""); // Reset city when country changes
              }}
              className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
            >
              <option value="">Select Country</option>
              <option value="1">Country One</option>
              <option value="2">Country Two</option>
              <option value="3">Country Three</option>
            </select>
          </div>

          {/* City */}
          <div className="flex flex-col gap-2">
            <label className="text-xl font-bold" htmlFor="city">
              <strong>City</strong>
            </label>
            <select
              id="city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
              disabled={!selectedCountry} // Disable until country is selected
            >
              <option value="">Select City</option>
              {selectedCountry &&
                citiesByCountry[selectedCountry]?.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
            </select>
          </div>

          {/* Capacity */}
          <div className="flex flex-col gap-2">
            <label className="text-xl font-bold" htmlFor="capacity">
              <strong>Capacity</strong>
            </label>
            <select
              id="capacity"
              value={selectedIndustry} // Changed to use selectedIndustry for consistency
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
            >
              <option value="">Select Capacity</option>
              <option value="1">1-10</option>
              <option value="2">11-20</option>
              <option value="3">21-50</option>
              <option value="4">51+</option>
            </select>
          </div>

          {/* Amenities */}
          <div className="flex flex-col gap-2">
            <label className="text-xl font-bold" htmlFor="amenities">
              <strong>Amenities</strong>
            </label>
            <select
              id="amenities"
              value={selectedIndustry} // Changed to use selectedIndustry for consistency
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
            >
              <option value="">Select Amenities</option>
              <option value="1">Wi-Fi</option>
              <option value="2">Projector</option>
              <option value="3">Catering</option>
              <option value="4">Parking</option>
            </select>
          </div>

          {/* Clear Filters */}
          <div className="flex flex-col justify-end gap-2 sm:col-span-1">
            <button
              onClick={handleClearFilters}
              className="text-white bg-[#b08d57] cursor-pointer flex justify-center items-center gap-2 
              py-[10px] px-2 rounded-md font-semibold w-full hover:shadow-lg transition hover:border-[#a07a4c] hover:text-white"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Consultant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {filteredConsultants.length > 0 ? (
            filteredConsultants.slice(0, visibleCount).map((partner) => (
              <ConsultantTile
                key={partner.id}
                heading={partner.heading}
                text1={partner.text1}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No consultant found matching your criteria.
            </div>
          )}
        </div>
        <div className="flex items-center justify-center w-full">
          {visibleCount < filteredConsultants.length && (
            <button
              onClick={handleShowMore}
              className="mt-4 text-white cursor-pointer px-4 py-2 bg-[#b08d57] rounded"
            >
              View All Venue Partners
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConsultantPartnerCTR;