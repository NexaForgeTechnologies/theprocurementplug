// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import ConsultingPartnerTile from "@/components/business-hub/consultinng-partner/ConsultingPartnerTile";
// import HeroCTR from '@/components/business-hub/BussinessHeroSection';
// import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'

// import ConsultantTile from "@/components/business-hub/consultinng-partner/ConsultantTile";
// import { consultantPartners } from "@/app/business-hub/consulting-partner/data";

// function Breadcrumb() {
//   return (
//     <nav className="text-sm breadcrumbs my-4 md:my-10">
//       <ol className="list-reset flex gap-2 text-[#9C9C9C] whitespace-nowrap overflow-x-auto scrollbar-none md:overflow-x-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
//         <li>
//           <Link href="/business-hub" className="hover:underline">Business Hub</Link>
//         </li>
//         <li>/</li>
//         <li className="text-[#696969]">
//           Consulting Partner
//         </li>
//       </ol>
//     </nav>
//   );
// }

// function ConsultingPartnerCTR() {

//    const partnerWithUs = {
//         Partnerheader: {
//             crossSellh3: "Cross Sell the Collaboration and Thought Leadership Zone",
//             h3: "",
//             p: ""
//         },
//         items: [
//             {
//                 id: 1,
//                 heading: "The Procurement Plug Academy",
//                 text: "",
//                 link: "",
//                 linkText: "View Details",
//                 bgColor: "#85009D"
//             },
//             {
//                 id: 2,
//                 heading: "Resources Library",
//                 text: "",
//                 link: "",
//                 linkText: "View Details",
//                 bgColor: "#85009D"
//             },
//             {
//                 id: 3,
//                 heading: "The Personal Development Hub",
//                 text: "",
//                 link: "",
//                 linkText: "View Details",
//                 bgColor: "#85009D"
//             }
//         ]
//     };

//   const [selectedIndustry, setSelectedIndustry] = useState("");
//   const [selectedRegion, setSelectedRegion] = useState("");
//   const [visibleCount, setVisibleCount] = useState(4);

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
//     // setVisibleCount(4);
//   };

//   const handleShowMore = () => {
//     setVisibleCount((prevCount) => prevCount + 4);
//   };

//   const consultantPartnerTile = [
//     {
//       id: 1,
//       heading: "Six Sigma & Change Management",
//       text: "Process Improvement",
//       btntext: "View Details",
//       url: "/business-hub/consulting-partner/six-sigma-change-management",
//     },
//     {
//       id: 2,
//       heading: "Procurement",
//       text: "Strategy Development",
//       btntext: "View Details",
//       url: "/business-hub/consulting-partner/procurement",
//     },
//     {
//       id: 3,
//       heading: "ESG & Sustainability",
//       text: "Environmental Impact",
//       btntext: "View Details",
//       url: "/business-hub/consulting-partner/esg-sustainability",
//     },
//   ];

//   return (
//     <>
//       <div>
//         <HeroCTR
//           img="/images/bussiness-hub/consulting-partner/herosection.png"
//           heading={
//             <span className="flex flex-col gap-0 leading-none">
//               <span className="font-extrabold">Consulting Partners</span>
//             </span>
//           }
//           para="The Procurement Plug’s Consulting Partners deliver
//           expert solutions to enhance your procurement
//           strategy, from process improvement and strategy
//           development to ESG and sustainability impact."
//         />
//         <Breadcrumb />
//         <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
//           Consulting Partners
//         </h3>
//         <p className="max-w-[930px] md:text-xl text-[#1B1B1B] mt-4 mb-4 md:mb-8">
//           Expert consultancy services to elevate your procurement strategy.
//         </p>
//         <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
//           {consultantPartnerTile.map((partner) => (
//             <ConsultingPartnerTile
//               key={partner.id}
//               heading={partner.heading}
//               text={partner.text}
//               btntext={partner.btntext}
//               url={partner.url}
//             />
//           ))}
//         </div>
//       </div>

//       <div>
//         <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
//           Featured Consultants
//         </h3>
//         <p className="max-w-[930px] md:text-xl text-[#1B1B1B] mt-4 mb-4 md:mb-8">
//           We are honored to be supported by a team of highly experienced
//           consultants who bring deep industry knowledge, strategic insight, and
//           proven leadership to our mission. These experts hold key roles such as
//           CEOs and Consulting Directors across respected organizations, and they
//           contribute valuable perspectives on innovation, compliance, and
//           organizational transformation.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6 md:mb-10 text-[#363636]">
//           {/* Industry */}
//           <select
//             id="industry"
//             value={selectedIndustry}
//             onChange={(e) => setSelectedIndustry(e.target.value)}
//             className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
//           >
//             <option value="">Industry</option>
//             <option value="1">Industry One</option>
//             <option value="2">Industry Two</option>
//             <option value="3">Industry Three</option>
//           </select>

//           {/* Location */}

//           <select
//             id="region"
//             value={selectedRegion}
//             onChange={(e) => setSelectedRegion(e.target.value)}
//             className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
//           >
//             <option value="">Location</option>
//             <option value="1">Region One</option>
//             <option value="2">Region Two</option>
//             <option value="3">Region Three</option>
//           </select>

//           {/* Specialism */}

//           <select
//             id="region"
//             value={selectedRegion}
//             onChange={(e) => setSelectedRegion(e.target.value)}
//             className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
//           >
//             <option value="">Specialism</option>
//             <option value="1">Region One</option>
//             <option value="2">Region Two</option>
//             <option value="3">Region Three</option>
//           </select>

//           {/* Clear Filters */}
//           <div className="flex flex-col justify-end gap-2 sm:col-span-1">
//             <button
//               onClick={handleClearFilters}
//               className="text-white bg-[#b08d57] cursor-pointer flex justify-start items-center gap-2
//              p-3 rounded-md w-full hover:shadow-lg transition hover:border-[#a07a4c] hover:text-white"
//             >
//               Clear Filters
//             </button>
//           </div>
//         </div>

//         {/* Consultant Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-4">
//           {filteredConsultants.length > 0 ? (
//             filteredConsultants.slice(0, visibleCount).map((partner) => (
//               <ConsultantTile
//                 key={partner.id}
//                 img={partner.img}
//                 heading={partner.heading}
//                 text1={partner.text1}
//                 text2={partner.text2}
//                 btntext={partner.btntext}
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
//               className="flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
//               View All Consultants
//               <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
//             </button>
//           )}
//         </div>
//       </div>
//       <PartnerWithUsComp data={partnerWithUs} />
//     </>
//   );
// }

// export default ConsultingPartnerCTR;

"use client";

import React, { useState, useEffect } from "react";

import { useGenericTable } from "@/hooks/GetGenericType";
import { useConsultants } from "@/hooks/GetConsultant";

import Link from "next/link";
import ConsultingPartnerTile from "@/components/business-hub/consultinng-partner/ConsultingPartnerTile";
import HeroCTR from "@/components/business-hub/BussinessHeroSection";
import PartnerWithUsComp from "@/components/business-hub/vip-lounge/PartnerWithUs";
import ConsultantTile from "@/components/business-hub/consultinng-partner/ConsultantTile";

function Breadcrumb() {
  return (
    <nav className="text-sm breadcrumbs my-4 md:my-10">
      <ol
        className="list-reset flex gap-2 text-[#9C9C9C] whitespace-nowrap overflow-x-auto scrollbar-none md:overflow-x-hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <li>
          <Link href="/business-hub" className="hover:underline">
            Business Hub
          </Link>
        </li>
        <li>/</li>
        <li className="text-[#696969]">Consulting Partner</li>
      </ol>
    </nav>
  );
}

function ConsultingPartnerCTR() {
  const { consultants, consultantLoading, error, refetch } = useConsultants();

  const {
    data: industries,
    loading,
    error: industryLoading,
    refetch: industryRefetch,
  } = useGenericTable("industries");
  const {
    data: locations,
    loading: isLocationLoading,
    error: isLocationError,
    refetch: locationsRefetch,
  } = useGenericTable("locations");
  const {
    data: specialisms,
    loading: isSpecialismLoading,
    error: isSpecialismError,
    refetch: specialismRefetch,
  } = useGenericTable("specialisms");
  const {
    data: consultant_types,
    loading: isCOnsultantTypeLoading,
    error: isCOnsultantTypeError,
    refetch: consultantTypeRefetch,
  } = useGenericTable("consultant_types");

  // filter states
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSpecialism, setSelectedSpecialism] = useState("");

  const [visibleCount, setVisibleCount] = useState(4);

  const filteredConsultants = consultants.filter((partner) => {
    const matchesIndustry = selectedIndustry
      ? partner.industry_id.toString() === selectedIndustry
      : true;
    const matchesLocation = selectedLocation
      ? partner.location_id.toString() === selectedLocation
      : true;
    const matchesSpecialism = selectedSpecialism
      ? partner.specialism_id?.toString() === selectedSpecialism
      : true;

    return matchesIndustry && matchesLocation && matchesSpecialism;
  });

  const handleClearFilters = () => {
    setSelectedIndustry("");
    setSelectedLocation("");
    setSelectedSpecialism("");
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const partnerWithUs = {
    Partnerheader: {
      crossSellh3: "Cross Sell the Collaboration and Thought Leadership Zone",
      h3: "",
      p: "",
    },
    items: [
      {
        id: 1,
        heading: "The Procurement Plug Academy",
        text: "",
        link: "",
        linkText: "View Details",
        bgColor: "#85009D",
      },
      {
        id: 2,
        heading: "Resources Library",
        text: "",
        link: "",
        linkText: "View Details",
        bgColor: "#85009D",
      },
      {
        id: 3,
        heading: "The Personal Development Hub",
        text: "",
        link: "",
        linkText: "View Details",
        bgColor: "#85009D",
      },
    ],
  };

  return (
    <>
      <div>
        <HeroCTR
          img="/images/bussiness-hub/consulting-partner/herosection.png"
          heading={
            <span className="flex flex-col gap-0 leading-none">
              <span className="font-extrabold">Consulting Partners</span>
            </span>
          }
          para="The Procurement Plug’s Consulting Partners deliver
          expert solutions to enhance your procurement
          strategy, from process improvement and strategy
          development to ESG and sustainability impact."
        />
        <Breadcrumb />
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Consulting Partners
        </h3>
        <p className="max-w-[930px] md:text-xl text-[#1B1B1B] mt-4 mb-4 md:mb-8">
          Expert consultancy services to elevate your procurement strategy.
        </p>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {consultant_types.map((partner) => (
            <ConsultingPartnerTile
              key={partner.id}
              heading={partner.value}
              text={partner.description}
              btntext="View Details"
              url={partner.value}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Featured Consultants
        </h3>
        <p className="max-w-[930px] md:text-xl text-[#1B1B1B] mt-4 mb-4 md:mb-8">
          We are honored to be supported by a team of highly experienced
          consultants...
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6 md:mb-10 text-[#363636]">
          {/* Industry */}
          <select
            id="industry"
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Industry</option>
            {industries.map((industry) => (
              <option key={industry.id} value={industry.id}>
                {industry.value}
              </option>
            ))}
          </select>

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

          {/* Specialism */}
          <select
            id="specialism"
            value={selectedSpecialism}
            onChange={(e) => setSelectedSpecialism(e.target.value)}
            className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Specialism</option>
            {specialisms.map((specialism) => (
              <option key={specialism.id} value={specialism.id}>
                {specialism.value}
              </option>
            ))}
          </select>

          {/* Clear Filters */}
          <div className="flex flex-col justify-end gap-2 sm:col-span-1">
            <button
              onClick={handleClearFilters}
              className="text-white bg-[#b08d57] cursor-pointer flex justify-start items-center gap-2 
             p-3 rounded-md w-full hover:shadow-lg transition hover:border-[#a07a4c] hover:text-white"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Consultant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-4">
          {filteredConsultants.length > 0 ? (
            filteredConsultants
              .slice(0, visibleCount)
              .map((consultant) => (
                <ConsultantTile key={consultant.id} data={consultant} />
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
              className="flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]"
            >
              View All Consultants
              <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
            </button>
          )}
        </div>
      </div>
      <PartnerWithUsComp data={partnerWithUs} />
    </>
  );
}

export default ConsultingPartnerCTR;
