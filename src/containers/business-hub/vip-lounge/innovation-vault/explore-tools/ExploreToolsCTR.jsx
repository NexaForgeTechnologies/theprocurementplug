import React from "react";
import Link from "next/link";

import HeroCTR from "@/components/business-hub/vip-lounge/VipHeroSection";
import PartnerWithUsComp from "@/components/business-hub/vip-lounge/PartnerWithUs";
import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";
import ToolsCTR from "./tool/ToolsCTR";

function Breadcrumb() {
  return (
    <nav className="text-sm breadcrumbs my-6 md:my-10">
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
        <li>
          <Link href="/business-hub/vip-lounge" className="hover:underline">
            VIP Business Lounge
          </Link>
        </li>
        <li>/</li>
        <li>
          <Link
            href="/business-hub/vip-lounge/innovation-vault"
            className="hover:underline"
          >
            Innovation Vault
          </Link>
        </li>
        <li>/</li>
        <li className="text-[#696969] ">Explore Innovation Tools</li>
      </ol>
    </nav>
  );
}

const ExploreToolsCTR = () => {
  const partnerWithUs = [
    {
      id: 1,
      heading: "Partners hub",
      link: "",
      linkText: "View Details",
    },
    {
      id: 2,
      heading: "Events hub",
      link: "",
      linkText: "View Details",
    },
    {
      id: 3,
      heading: "The Procurement Xec Plug",
      link: "",
      linkText: "View Details",
    },
  ];
  return (
    <>
      <div>
        <HeroCTR
          img="/images/bussiness-hub/vip-lounge/innovation-vault/explore-tool-bg.png"
          heading={
            <span className="flex flex-col gap-0 leading-none">
              <span className="font-extrabold">Explore Innovation Tools</span>
            </span>
          }
          para="Explore Innovation Tools to spark ideas, streamline collaboration and turn creative concepts into impactful solutions—all in one place."
        />
        <Breadcrumb />
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Explore Innovation Tools
        </h3>
        <p className="md:text-xl text-[#1B1B1B] my-4">
          Discover tested and emerging digital tools transforming procurement
          workflows.
        </p>
        <ToolsCTR />
      </div>

      <div
        className="bg-[#FBE3FF] py-6 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8"
        style={{
          boxShadow: "0 0 0 100vmax #FBE3FF",
          clipPath: "inset(0 -100vmax)",
        }}
      >
        <h2 className="font-medium max-w-[700px] text-3xl md:text-5xl text-[#85009D]">
          Got a <strong>tool</strong> you want to share with our members?
        </h2>
        <div className="min-w-[200px]">
          <ArrowButtonCom text="Partner with The Procurement Plug" />
        </div>
      </div>

      <PartnerWithUsComp data={partnerWithUs} />
    </>
  );
};

export default ExploreToolsCTR;
