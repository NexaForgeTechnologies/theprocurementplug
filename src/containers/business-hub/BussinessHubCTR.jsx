import React from "react";
import Link from "next/link";

import HeroCTR from "@/components/business-hub/BussinessHeroSection";
import PartnerWithUsComp from "@/components/business-hub/vip-lounge/PartnerWithUs";
import BussinessTile from "@/components/business-hub/BussinessTile";

function Breadcrumb() {
  return (
    <nav className="text-sm breadcrumbs my-6 md:my-10">
      <ol
        className="list-reset flex gap-2 text-gray-600 whitespace-nowrap overflow-x-auto scrollbar-none md:overflow-x-hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <li className="text-[#696969]">Business Hub</li>
      </ol>
    </nav>
  );
}

function BussinessHubCTR() {
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

  const bussinesstile = [
    {
      id: 1,
      heading: "The Procurement Plug Concierge",
      para: "The Procurement Plug Concierge service is the first of its kind in the UK---providing on-demand. expert procurement support for teams of all sizes",
      btntext: "Coming Soon",
      url: "/business-hub/procurement-concierge",
    },
    {
      id: 2,
      heading: "Events",
      para: "Webinar-Seminar-Workshops Networking opportunity",
      btntext: "View Details",
      url: "/event",
    },
    {
      id: 3,
      heading: "Consulting Partners",
      para: "Six Sigma & Change Management Procurement ESG Sustainability",
      btntext: "View Details",
      url: "/business-hub/consulting-partner",
    },
    {
      id: 4,
      heading: "Venue Partners",
      para: "Webinar-Seminar-Workshops Networking opportunity",
      btntext: "View Details",
      url: "/business-hub/venue-partner",
    },
    {
      id: 5,
      heading: "Procure Tech Solutions",
      para: "Webinar-Seminar-Workshops Networking opportunity",
      btntext: "View Details",
      url: "/business-hub/procuretech-solution",
    },
    {
      id: 6,
      heading: "Legal & Compliance",
      para: "Webinar-Seminar-Workshops Networking opportunity",
      btntext: "View Details",
      url: "/business-hub/legal-compliance",
    },
    {
      id: 7,
      heading: "ESG Social Value",
      para: "ESG Lounge: Tools for sustainable procurement",
      // para: "ESG Lounge (Additional Resources)",
      btntext: "View Details",
      url: "/business-hub/esg-social-value",
    },
    {
      id: 8,
      heading: "VIP Business Lounge.",
      para: "Sit back, relax and access exclusive intelligence, bespoke data, unique solutions and thought leadership",
      btntext: "Get Plugged In",
      url: "/business-hub/vip-lounge",
    },
  ];
  return (
    <>
      <div>
        <HeroCTR
          img="/images/bussiness-hub/herosection.png"
          heading={
            <span className="flex flex-row items-center gap-2 leading-none">
              <span className="font-extrabold">The Business Hub</span>
            </span>
          }
          para="A central space for procurement professionals to
                access expert insights, tools, and partnerships that
                drive smarter, sustainable business decisions."
        />
        <Breadcrumb />
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Exclusive Business Hub Features
        </h3>
        <div>
          <p className="md:text-xl text-[#1B1B1B] mt-4 mb-2">
            <strong>Procurement Strategy & Transformation: </strong>Improve
            procure-mentorations with data-driven strategies and best practices.
          </p>
          <p className="md:text-xl text-[#1B1B1B] mb-2">
            <strong>Market Research: </strong>
            Access industry reports and analytics make informed bussiness
            decisions.
          </p>
          <p className="md:text-xl text-[#1B1B1B] mb-2">
            <strong>Sustainability & ESG Initiatives: </strong>Drive ethical and
            sustainable procurement practices aligned with global standards
          </p>
          <p className="md:text-xl text-[#1B1B1B] mb-4 md:mb-8">
            <strong>Legal & Compliance: </strong> Strengthen procurement
            governance with research-led risk assessment and mitigation
            strategies.
          </p>
        </div>

        {/* Consultant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {bussinesstile.map((partner, idx) => {
            const isFirst = idx === 0;
            const isLast = idx === bussinesstile.length - 1;

            let colSpanClass = "";
            if (isFirst) {
              colSpanClass = "col-span-1 sm:col-span-2 md:col-span-3";
            } else if (isLast) {
              colSpanClass = "col-span-1 sm:col-span-2 md:col-span-3";
            }

            const bgImage = isLast
              ? "/images/bussiness-hub/lastile.png"
              : isFirst
                ? "/images/bussiness-hub/firsttile.png"
                : "";

            return (
              <div key={partner.id} className={`h-full ${colSpanClass}`}>
                <BussinessTile
                  heading={partner.heading}
                  para={partner.para}
                  btntext={partner.btntext}
                  url={partner.url}
                  bgImage={bgImage}
                  isLast={isLast}
                  isFirst={isFirst} // optional, in case BussinessTile needs to handle logic
                />
              </div>
            );
          })}
        </div>
      </div>
      <PartnerWithUsComp data={partnerWithUs} />
    </>
  );
}

export default BussinessHubCTR;
