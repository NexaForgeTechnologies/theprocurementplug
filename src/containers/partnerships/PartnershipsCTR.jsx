"use client"
import React, { useState } from "react";

import BenifitsComp from "@/components/benifit/BenifitsComp";
import Icon from "@/components/icon/Icon";
import Link from "next/link";
import PartnerCTR from "@/containers/home/partners/PartnerCTR";
import Image from "next/image";
import BecomeAPartner from "@/components/business-hub/consulting-partner/BecomeAPartner";
import DownloadPartnership from "@/components/business-hub/consulting-partner/DownloadPartnership";
function PartnershipsCTR() {
  const partneringContent = [
    {
      id: 1,
      title: 1,
      heading: "Targeted Market Exposure",
      text: "Showcase your brand, services, and products to procurement professionals actively searching for industry solutions.",
    },
    {
      id: 2,
      title: 2,
      heading: "Premium Partnership Opportunities",
      text: "Gain high-visibility placements on our website, newsletters, and events.",
    },
    {
      id: 3,
      title: 3,
      heading: "Lead Generation & Business Growth",
      text: "Engage with potential clients and partners looking for innovative procurement solutions.",
    },
    {
      id: 4,
      title: 4,
      heading: "Industry Thought Leadership",
      text: "Position your brand as a leader through sponsored content, webinars, and exclusive reports.",
    },
  ];
  const OpportunitiesContent = [
    {
      id: 1,
      title: "Opportunities",
      heading: "Procurement Plug Events & Roundtables",
      text: "Become an event sponsor and engage directly with procurement leaders.",
    },
    {
      id: 2,
      title: "Opportunities",
      heading: "Sponsored Webinars & Thought Leadership Content",
      text: "Position your brand as a knowledge leader.",
    },
    {
      id: 3,
      title: "Opportunities",
      heading: "Industry Research Sponsorship",
      text: "Get featured in TPP’s reports and insights on procurement trends.",
    },
  ];

  const[isOpen, setIsOpen] = useState(false);
  const[isOpenDownload, setIsOpenDownload] = useState(false);
  return (
    <>
      <div className="flex gap-6 md:gap-8 flex-col-reverse lg:flex-row items-center min-h-[80vh]">
        <div className="flex-1">
          <h3 className="font-bold text-2xl md:text-4xl mb-4 text-[#363636]">
            Partner Opportunities with The Procurement Plug
          </h3>
          <p className="text-sm md:text-lg text-[#363636] leading-normal md:leading-relaxed">
            The Procurement Plug is a leading platform for procurement
            professionals, offering a dynamic ecosystem for businesses to
            connect with a targeted audience of procurement specialists,
            decision-makers, and industry leaders. By partnering with TPP, you
            gain direct access to professionals looking for cutting-edge
            solutions, services, and suppliers.
          </p>
          <div className="flex flex-wrap gap-2 items-center mt-6">
            <div
              // href="mailto:request@theprocurementplug.com"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#ffff] bg-[#85009D] text-sm md:text-lg cursor-pointer flex items-center gap-2 py-3 px-5 rounded-md w-full md:w-max"
            >
              <Icon name="email" color="white" size={20} />
              Become A Partner
            </div>

            <Link
              href="mailto:request@theprocurementplug.com"
              className="text-[#ffff] bg-[#85009D] text-sm md:text-lg cursor-pointer flex items-center gap-2 py-3 px-5 rounded-md w-full md:w-max"
            >
              <Icon name="email" color="white" size={20} />
              Become A Media Partner
            </Link>

            <Link
              href="mailto:request@theprocurementplug.com"
              className="text-[#ffff] bg-[#85009D] text-sm md:text-lg cursor-pointer flex items-center gap-2 py-3 px-5 rounded-md w-full md:w-max"
            >
              <Icon name="email" color="white" size={20} />
              Explore Partnership Opportunities
            </Link>

            <button
            onClick={() => setIsOpenDownload(!isOpen)}
              className="text-[#ffff] bg-[#b08d57] text-sm md:text-lg cursor-pointer flex items-center 
            gap-2 py-3 px-5 rounded-md w-full md:w-max"
            >
              <span className="rotate-90">
                <Icon name="arrow" color="white" size={20} />
              </span>
              Download Partnership & Sponsorship Pack
            </button>
          </div>
        </div>
        <div className="flex-1">
          <Image
            width={624}
            height={600}
            className="rounded-2xl md:rounded-br-[130px] w-full max-h-[600px] object-cover"
            src="/images/home/tiles/tile-1.png"
            alt="partnership"
          />
        </div>
      </div>
      <div>
        <div className="max-w-[780px] m-auto text-center">
          <h3 className="font-bold text-3xl md:text-4xl mb-4 md:mb-8 text-[#010101]">
            Why Partner With Us?
          </h3>
          <p className="text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed mb-4 md:mb-8">
            Find out why partnering with The Procurement Hub can be beneficial
            to your business.
          </p>
        </div>
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
          {partneringContent?.map((item) => (
            <BenifitsComp
              key={item.id}
              title={item.title}
              heading={item.heading}
              text={item.text}
            />
          ))}
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${"/images/contactus/contactus.png"})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          boxShadow: "#00000036 0px 0px 0px 100vmax",
          clipPath: "inset(0 -100vmax)",
        }}
        className="w-screen ml-[calc(50%-50vw)] relative p-[20px] md:p-[100px]"
      >
        <div className="bg-[rgba(255,255,255,0.84)] rounded-lg py-5 px-5 md:py-20 md:px-12 flex item-start flex-col lg:flex-row">
          <div className="flex-1">
            <h2 className="text-sm mb-4 text-[#212121]">Get Started!</h2>
            <h2 className="font-bold text-3xl md:text-5xl mb-4 text-[#010101]">
              Partner With Us
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-sm md:text-lg text-[#363636] leading-normal md:leading-relaxed mb-4 md:mb-5">
              Unlock the full potential of The Procurement Plug Ecosystem and
              connect with procurement professionals actively seeking your
              services.
            </p>
            <p className="text-sm md:text-lg text-[#363636] leading-normal md:leading-relaxed">
              Contact us to discuss the best partnership package for your
              business.
            </p>
            <div className="mt-1">
              <Link
                href="mailto:request@theprocurementplug.com"
                className="text-[#ffff] bg-[#B08D57] mt-3 text-sm md:text-lg cursor-pointer flex items-center gap-2 p-3 rounded-lg w-full md:max-w-max"
              >
                <Icon name="email" color="white" size={20} />
                partnerships@theprocurementplug.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="max-w-[780px] m-auto text-center font-bold text-3xl md:text-4xl mb-4 md:mb-8 text-[#363636]">
          Gain Access To Some Exclusive Partnering Opportunities With The
          Procurement Plug
        </h3>
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
          {OpportunitiesContent?.map((item) => (
            <BenifitsComp
              key={item.id}
              title={item.title}
              heading={item.heading}
              text={item.text}
            />
          ))}
        </div>
      </div>
      <PartnerCTR />
      <BecomeAPartner isOpen={isOpen} onClose={() => setIsOpen(false)} title="Become a partner"/>
      <DownloadPartnership isOpen={isOpenDownload} onClose={() => setIsOpenDownload(false)} title="Download Partnership & Sponsorship Pack"/>
    </>
  );
}

export default PartnershipsCTR;
