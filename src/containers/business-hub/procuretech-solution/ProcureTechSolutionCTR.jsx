"use client";

import React from "react";

import { useGenericTable } from "@/hooks/GetGenericType";

import ProcureTechType from "@/components/business-hub/procuretech-solution/ProcureTechType";
import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import Breadcrumb from "@/components/BreadCrumbs";

function ProcureTechCTR() {

  const {
    data
  } = useGenericTable("procuretech_solution_types");

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
          img="/images/bussiness-hub/procuretech-solution/herosection.png"
          heading="ProcureTech Solutions"
          para="ProcureTech Solutions offers smart digital tools to
        simplify and speed up the procurement process,
        helping businesses manage sourcing, contracts,
        and spending more efficiently."
        />

        <Breadcrumb />

        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          ProcureTech Solutions
        </h3>
        <p className="md:text-xl text-[#1B1B1B] mt-4 mb-4 md:mb-8">
          Digital tools and platform to streamline procurement
        </p>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {data.length > 0 ? (
            data
              .map((solution) => (
                <ProcureTechType
                  key={solution.id}
                  data={solution}
                />
              ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No type found matching your criteria.
            </div>
          )}
        </div>
      </div>
      <PartnerWithUsComp data={partnerWithUs} />
    </>
  );
}

export default ProcureTechCTR;
