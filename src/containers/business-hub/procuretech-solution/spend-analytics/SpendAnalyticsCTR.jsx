"use client";

import React, { useState } from "react";

import { useGenericTable } from "@/hooks/GetGenericType";
import { useProcuretech } from "@/hooks/GetProcureTech";

import ProcureTechTile from "@/components/business-hub/procuretech-solution/ProcureTechTile";
import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import Breadcrumb from "@/components/BreadCrumbs";

function ConsultantPartnerCTR() {
  const { procuretechSolutions } = useProcuretech(3);

  const {
    data: deployment_models,
  } = useGenericTable("deployment_model");
  const {
    data: pricing_models,
  } = useGenericTable("pricing_model");
  const {
    data: integration_models,
  } = useGenericTable("integration_model");

  const [selectedDeployment, setSelectedDeployment] = useState("");
  const [selectedPricing, setSelectedPricing] = useState("");
  const [selectedIntegration, setSelectedIntegration] = useState("");

  const [visibleCount, setVisibleCount] = useState(3);

  const filteredProcuretech = procuretechSolutions.filter((solution) => {
    const matchesDeployment = selectedDeployment
      ? solution.deployment_id.toString() === selectedDeployment
      : true;
    const matchesPricing = selectedPricing
      ? solution.pricing_id.toString() === selectedPricing
      : true;
    const matchesIntegration = selectedIntegration
      ? solution.integration_id.toString() === selectedIntegration
      : true;

    return matchesDeployment && matchesIntegration && matchesPricing;
  });

  const handleClearFilters = () => {
    setSelectedDeployment("");
    setSelectedPricing("");
    setSelectedIntegration("");
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const partnerWithUs = {
    Partnerheader: {
      crossSellh3: "Thought Leadership Zone",
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
          img="/images/bussiness-hub/procuretech-solution/procuretech-solution-detail/herosection.png"
          heading="Spend Analytics"
          para="Source-to-Contract (S2C) streamlines the procurement
          process from supplier sourcing to contract signing, helping
          businesses save time, reduce risks, and improve compliance."
        />
        <Breadcrumb />
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Spend Analytics
        </h3>
        <p className="max-w-[843px] md:text-xl text-[#1B1B1B] mt-4">
          End-to-end process covering supplier identification, sourcing, negotiation, contract
          creation, approval, and e-signature
        </p>

        <p className="max-w-[843px] md:text-xl text-[#1B1B1B] mb-4 md:mb-8">Explore solutions that automate each stage of your S2C workflow, boost compliance, and accelerate time-to-value.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6 md:mb-10 text-[#363636]">
          {/* Deployment Model */}
          <select
            id="Deployment Model"
            value={selectedDeployment}
            onChange={(e) => setSelectedDeployment(e.target.value)}
            className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Deployment Model</option>
            {deployment_models.map((model) => (
              <option key={model.id} value={model.id}>
                {model.value}
              </option>
            ))}
          </select>

          {/* Pricing Model */}
          <select
            id="Pricing Model"
            value={selectedPricing}
            onChange={(e) => setSelectedPricing(e.target.value)}
            className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Pricing Model</option>
            {pricing_models.map((model) => (
              <option key={model.id} value={model.id}>
                {model.value}
              </option>
            ))}
          </select>

          {/* Integration Model */}
          <select
            id="Integration Model"
            value={selectedIntegration}
            onChange={(e) => setSelectedIntegration(e.target.value)}
            className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Integration Model</option>
            {integration_models.map((model) => (
              <option key={model.id} value={model.id}>
                {model.value}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {filteredProcuretech.length > 0 ? (
            filteredProcuretech
              .slice(0, visibleCount)
              .map((solution) => (
                <ProcureTechTile
                  key={solution.id}
                  data={solution}
                  url={`/business-hub/procuretech-solution/spend-analytics/${solution.id}`}
                />
              ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No procuretech found matching your criteria.
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-center w-full">
          {visibleCount < filteredProcuretech.length && (
            <button
              onClick={handleShowMore}
              className="flex items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
              View All ProcureTech
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