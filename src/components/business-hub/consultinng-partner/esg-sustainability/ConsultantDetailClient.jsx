"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RequestDemoForm from "@/components/business-hub/request-demo-form/RequestDemoForm";

export default function ConsultantDetailClient({ consultant }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="max-w-3xl m-auto text-left p-6 md:p-8 border-2 text-[#85009D] rounded">
        <div className="mb-4 md:mb-8">
          <Link
            href="/business-hub/consulting-partner"
            className="text-xl font-bold text-[#85009D]"
          >
            Back
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-8 gap-4 md:gap-0">
          <Image
            className="rounded-full w-40 h-40 object-cover md:mr-6"
            src={consultant.img}
            alt={consultant.heading}
            width={160}
            height={160}
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#85009D]">
              {consultant.heading}
            </h1>
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-[#b58c4a] text-2xl md:text-3xl">★★★★☆</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mt-4 md:mt-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#85009D] mb-4">
              Overview
            </h2>
            <p className="text-[#010101] mb-4 md:mb-8">
              Brief overview of vendors Source-to-Contract solution, highlighting
              key benefits and differentiators.
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-[#85009D] mb-4">
              Key Features
            </h2>
            <ul className="list-disc pl-5 text-[#010101] mb-4">
              <li>Feature one</li>
              <li>Feature two</li>
              <li>Feature three</li>
              <li>Feature four</li>
            </ul>
          </div>
          <div className="flex gap-4 mb-4">
            <div>
              <div className="w-[2px] h-[100%] bg-[#85009D]"></div>
            </div>
            <div>
              <h2 className="mb-2 text-xl md:text-2xl font-medium text-[#010101]">
                <strong>Deployment</strong>
              </h2>
              <p className="text-[#010101]">Cloud</p>
              <h2 className="my-2 text-xl md:text-2xl font-medium text-[#010101]">
                <strong>Integrations</strong>
              </h2>
              <p className="text-[#010101]">ERP, CRM, API</p>
              <h2 className="my-2 text-xl md:text-2xl font-medium text-[#010101]">
                <strong>Pricing</strong>
              </h2>
              <p className="text-[#010101]">Subscription</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-[8px] mt-4 md:mt-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#b58c4a] text-white px-6 py-3 rounded"
          >
            Request Demo
          </button>
          <button className="bg-[#b58c4a] text-white px-6 py-3 rounded">
            Contact Sales
          </button>
          <button className="bg-[#b58c4a] text-white px-6 py-3 rounded">
            Download Datasheet
          </button>
        </div>
        <div className="flex flex-col gap-2 mt-4 md:mt-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#85009D] mb-4">
            Recommended for you
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-[8px]">
            <button className="border-2 border-[#85009D] text-[#010101] px-4 py-2 rounded">
              Implementation Consultants
            </button>
            <button className="border-2 border-[#85009D] text-[#010101] px-4 py-2 rounded">
              The Procurement Plug Academy
            </button>
          </div>
        </div>
      </div>
      <RequestDemoForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}