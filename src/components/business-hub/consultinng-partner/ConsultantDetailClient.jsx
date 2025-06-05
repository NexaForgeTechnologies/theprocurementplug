"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RequestDemoForm from "@/components/business-hub/request-demo-form/RequestDemoForm";
import PartnerWithUsComp from "@/components/partner-with-us/PartnerWithUsComp";

function Breadcrumb() {
  return (
    <nav className="text-sm breadcrumbs mb-4">
      <ol className="list-reset flex gap-2 text-gray-600">
        <li>
          <Link href="/business-hub" className="hover:underline">
            Business Hub
          </Link>
        </li>
        <li>/</li>
        <li className="text-gray-900 font-semibold">
          Consulting Partner Detail
        </li>
      </ol>
    </nav>
  );
}

export default function ConsultantDetailClient({ consultant }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const partnerWithUs = [
    {
      id: 1,
      heading: "The Prcurement Plug Academy",
      text: "",
      link: "",
      linkText: "View",
      bgColor: "#85009D",
    },
    {
      id: 2,
      heading: "Resources Library",
      text: "",
      link: "",
      linkText: "View",
      bgColor: "#85009D",
    },
    {
      id: 3,
      heading: "The Personal Development Hub",
      text: "",
      link: "",
      linkText: "View",
      bgColor: "#85009D",
    },
  ];

  return (
    <>
      <div>
        <Breadcrumb />
        <div className="max-w-3xl m-auto text-left text-[#85009D]">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4 md:gap-0">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#85009D]">
              {consultant.heading}
            </h1>
            <div>
              <Image
                className="rounded-full w-40 h-40 object-cover"
                src={consultant.img}
                alt={consultant.heading}
                width={160}
                height={160}
              />
              <div className="flex items-center justify-center">
                <span className="text-[#b58c4a] text-2xl md:text-3xl">
                  ★★★★
                </span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#85009D] mb-4">
              Overview
            </h2>
            <p className="text-[#010101] mb-4 md:mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              accusamus quo animi doloribus odio unde vero voluptatibus, laborum
              officia nisi exercitationem
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-[#85009D] mb-4">
              Expertise Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mb-4 md:mb-8">
              <p className="border-2 border-[#85009D] px-4 py-3 rounded text-[#010101]">
                AI & Machine Learning
              </p>
              <p className="border-2 border-[#85009D] px-4 py-3 rounded text-[#010101]">
                Cloud Computing
              </p>
              <p className="border-2 border-[#85009D] px-4 py-3 rounded text-[#010101]">
                Data Analytics
              </p>
              <p className="border-2 border-[#85009D] px-4 py-3 rounded text-[#010101]">
                Cybersecurity
              </p>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#85009D] mb-4">
              Engagement Models
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4 md:mb-8">
              <p className="border-2 border-[#85009D] px-4 py-3 rounded text-[#010101]">
                Dedicated Team
              </p>
              <p className="border-2 border-[#85009D] px-4 py-3 rounded text-[#010101]">
                Time & Material
              </p>
              <p className="border-2 border-[#85009D] px-4 py-3 rounded text-[#010101]">
                Fixed Price
              </p>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#85009D] mb-4">
              Clients
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-4 md:mb-8">
              <p className="border-2 border-[#85009D] px-4 py-3 rounded text-[#010101]">
                TechCorp Inc.
              </p>
              <p className="border-2 border-[#85009D] px-4 py-3 rounded text-[#010101]">
                HealthPlus
              </p>
              <p className="border-2 border-[#85009D] px-4 py-3 rounded text-[#010101]">
                FinServe Ltd.
              </p>
              <p className="border-2 border-[#85009D] px-4 py-3 rounded text-[#010101]">
                EduWorld
              </p>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#85009D] mb-4">
              Testimonials
            </h2>
            <div className="flex items-start gap-2 text-[#010101] mb-4 md:mb-8">
              <span className="text-5xl text-[#85009D] leading-none">“</span>
              <p>
                The team exceeded our expectations with their dedication and
                attention to detail. From planning to execution, everything was
                handled with the utmost professionalism.
              </p>
            </div>
            <div className="w-full md:w-[500px] m-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#b58c4a] text-white px-6 py-3 rounded"
              >
                Request Consultation
              </button>
              <button className="bg-[#b58c4a] text-white px-6 py-3 rounded">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="max-w-[780px] m-auto text-center">
          <h3 className="font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#85009D]">
            Partner With Us
          </h3>
          <p className="text-[#85009D] text-sm md:text-lg leading-normal md:leading-relaxed">
            <strong>marketing@theprocurement.com</strong> -{" "}
            <Link href="/partnerships">Visit our partnership page</Link>
          </p>
        </div>
        <div className="bg-[#85009D] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-[8px] p-5 md:p-10 ">
          {partnerWithUs?.map((content, idx) => (
            <PartnerWithUsComp key={idx} data={content} />
          ))}
        </div>
      </div>

      <RequestDemoForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
