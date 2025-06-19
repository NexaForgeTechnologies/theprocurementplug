import HeroCTR from "@/components/business-hub/vip-lounge/VipHeroSection";
import Link from "next/link";
import React from "react";

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
        <li className="text-[#696969] ">Innovation Vault</li>
      </ol>
    </nav>
  );
}

const InnovationVaultCTR = () => {
  return (
    <>
      <div>
        <HeroCTR
          img="/images/bussiness-hub/vip-lounge/innovation-vault/hero-bg.png"
          heading={
            <span className="flex flex-col gap-0 leading-none">
              <span className="font-extrabold">Innovation</span> Vault
            </span>
          }
          para="Innovation Vault is a hub for cutting-edge ideas and digital solutions, offering tools, insights, and platforms that help businesses and creators unlock their full potential."
        />
        <Breadcrumb />
        <div className="mb-4 md:mb-8">
          <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
            Innovation Vault
          </h3>
          <p className="md:text-xl text-[#1B1B1B] my-4">
            Unlock early access to the latest in ProcureTech, pilot tools, and future-shaping solutions.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="flex items-center justify-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
              Explore Tools
              <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
            </button>
            <button className="flex items-center justify-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
              Join a Pilot Program
              <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
            </button>
            <button className="flex items-center justify-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
              Suggest a Solution
              <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InnovationVaultCTR;
