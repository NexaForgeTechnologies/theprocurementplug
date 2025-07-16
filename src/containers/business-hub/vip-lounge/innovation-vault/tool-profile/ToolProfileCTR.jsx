import React from "react";
import Link from "next/link";

import HeroCTR from "@/components/business-hub/vip-lounge/VipHeroSection";
import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";
import PartnerWithUsComp from "@/components/business-hub/vip-lounge/PartnerWithUs";
import Image from "next/image";

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
            Vip lounge
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
        <li>
          <Link
            href="/business-hub/vip-lounge/innovation-vault/explore-tools"
            className="hover:underline"
          >
            Explore Innovation Tools
          </Link>
        </li>
        <li>/</li>
        <li className="text-[#696969] ">VaultMetric Sync</li>
      </ol>
    </nav>
  );
}

const ToolProfileCTR = () => {
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
        heading: "Partners hub",
        text: "",
        link: "",
        linkText: "View Details",
        bgColor: ""
      },
      {
        id: 2,
        heading: "Events hub",
        text: "",
        link: "",
        linkText: "View Details",
        bgColor: ""
      },
      {
        id: 3,
        heading: "Business hub",
        text: "",
        link: "",
        linkText: "View Details",
        bgColor: ""
      }
    ]
  }
  return (
    <>
      <div className="border-b-2 border-[#85009D] pb-8 sm:pb-12">
        <HeroCTR
          img="/images/bussiness-hub/vip-lounge/innovation-vault/tool-profile.png"
          heading={
            <span className="flex flex-col gap-0 leading-none">
              <span className="font-extrabold">VaultMetric Sync</span>
            </span>
          }
          para="VaultMetric Sync integrates seamlessly with your HR workflows to track and visualise procurement career progression."
        />
        <Breadcrumb />
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          VaultMetric Sync
        </h3>
        <p className="md:text-xl text-[#1B1B1B] my-4">
          VaultMetric Sync integrates seamlessly with your HR workflows to track
          and visualise procurement career progression.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <ArrowButtonCom text="Request Demo" />
          <ArrowButtonCom text="Apply To Join Pilot" />
          <ArrowButtonCom text="Visit Partner Website" />
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-4">
          KEY FEATURES
        </h3>
        <div className="grid gap-4 md:place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border border-[#DBBB89] bg-[#FFFBF5] p-4 rounded-md">
          <div className="flex gap-2 items-center">
            <div className="border border-[#85009D] p-4 rounded-full">
              <Image
                src="/images/bussiness-hub/vip-lounge/innovation-vault/icon-1.png"
                alt="img"
                width={80}
                height={80}
                className="object-cover max-w-[50px]"
              />
            </div>
            <p className="md:text-xl text-[#1B1B1B] font-medium">
              AI-Based Learning Milestones
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="border border-[#85009D] p-4 rounded-full">
              <Image
                src="/images/bussiness-hub/vip-lounge/innovation-vault/icon-3.png"
                alt="img"
                width={80}
                height={80}
                className="object-cover max-w-[50px]"
              />
            </div>
            <p className="md:text-xl text-[#1B1B1B] font-medium">
              Smart KPI Sync
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="border border-[#85009D] p-4 rounded-full">
              <Image
                src="/images/bussiness-hub/vip-lounge/innovation-vault/icon-2.png"
                alt="img"
                width={80}
                height={80}
                className="object-cover max-w-[50px]"
              />
            </div>
            <p className="md:text-xl text-[#1B1B1B] font-medium">
              Performance Dashboard for HR & CPOs
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          boxShadow: "0 0 0 100vmax #FBE3FF",
          clipPath: "inset(0 -100vmax)",
        }}
        className="flex flex-col items-center md:flex-row gap-6 md:gap-8 bg-[#FBE3FF] text-white py-20"
      >
        <div className="flex-1">
          <div className="mb-6 md:mb-8">
            <h3 className="text-[#85009D] mb-2 font-medium text-2xl md:text-4xl">
              Currently in Beta
            </h3>
            <p className="md:text-xl text-[#1B1B1B] font-medium">
              Accepting enterprise users for pilot access.
            </p>
          </div>
          <h3 className="font-medium text-2xl md:text-4xl text-[#85009D] mb-4">
            TOOLS OFTEN USED WITH THIS:
          </h3>
          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <span className="w-[16px] h-[16px] rounded-full bg-[#B08D57]"></span>
              <p className="text-[#1B1B1B] font-medium">Talent Xchange</p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-[16px] h-[16px] rounded-full bg-[#B08D57]"></span>
              <p className="text-[#1B1B1B] font-medium">
                ProcureLytiOS Insight Suite
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-[16px] h-[16px] rounded-full bg-[#B08D57]"></span>
              <p className="text-[#1B1B1B] font-medium">MyAchieve Sync</p>
            </div>
          </div>
          <p className="text-[#B08D57] font-medium mt-6">
            Sponsored by <strong>Quantum Insight</strong>.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/images/bussiness-hub/vip-lounge/innovation-vault/desktop-computer.png"
            alt="img"
            width="510"
            height="448"
            className="w-full max-h-[350px] object-contain"
          />
        </div>
      </div>
      <PartnerWithUsComp data={partnerWithUs} />
    </>
  );
};

export default ToolProfileCTR;
