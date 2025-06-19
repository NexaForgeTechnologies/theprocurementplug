import NewTechComp from "@/components/business-hub/vip-lounge/innovation-vault/NewTechComp";
import HeroCTR from "@/components/business-hub/vip-lounge/VipHeroSection";
import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";
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
  const newTech = [
    {
      id: 1,
      img: "/images/bussiness-hub/vip-lounge/innovation-vault/dummy.png",
      heading: "IdeaForge",
      text: "Rapidly capture, refine and organize innovative ideas with collaborative input.",
      msg: "Coming Soon ⏳",
      urlText: "Apply to Join",
      url: "",
    },
    {
      id: 2,
      img: "/images/bussiness-hub/vip-lounge/innovation-vault/dummy.png",
      heading: "VisionBoard",
      text: "Map out future strategies with intuitive visual planning and goal tracking.",
      msg: "Coming Soon ⏳",
      urlText: "Apply to Join",
      url: "",
    },
    {
      id: 3,
      img: "/images/bussiness-hub/vip-lounge/innovation-vault/dummy.png",
      heading: "ProtoPulse",
      text: "Build and test prototypes quickly with real-time feedback loops.",
      msg: "Coming Soon ⏳",
      urlText: "Apply to Join",
      url: "",
    },
    {
      id: 4,
      img: "/images/bussiness-hub/vip-lounge/innovation-vault/dummy.png",
      heading: "TrendLens",
      text: "Discover emerging market trends and innovation opportunities in your industry.",
      msg: "Coming Soon ⏳",
      urlText: "Apply to Join",
      url: "",
    },
  ];

  const featuredPartner = [
    {
      id: 1,
      img: "/images/bussiness-hub/vip-lounge/innovation-vault/featured-partner.png",
      heading: "CollabCore",
      text: "Innovation Partner.",
      msg: "ESG",
      border: true,
      urlText: "Request Demo",
      url: "",
    },
    {
      id: 2,
      img: "/images/bussiness-hub/vip-lounge/innovation-vault/featured-partner.png",
      heading: "VaultMetrics",
      text: "Innovation Partner.",
      msg: "Spend Analytics",
      border: true,
      urlText: "Request Demo",
      url: "",
    },
    {
      id: 3,
      img: "/images/bussiness-hub/vip-lounge/innovation-vault/featured-partner.png",
      heading: "CollabCore",
      text: "Innovation Partner.",
      msg: "Contract Automation",
      border: true,
      urlText: "Request Demo",
      url: "",
    },
  ];

  return (
    <>
      <div className="border-b-2 border-[#85009D] pb-8 sm:pb-12">
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
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Innovation Vault
        </h3>
        <p className="md:text-xl text-[#1B1B1B] my-4">
          Unlock early access to the latest in ProcureTech, pilot tools, and
          future-shaping solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <ArrowButtonCom text="Explore Tools" />
          <ArrowButtonCom text="Join a Pilot Program" />
          <ArrowButtonCom text="Suggest a Solution" />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Be the First to Try New Tech
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6">
          {newTech.map((item) => (
            <NewTechComp key={item.id} data={item} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Featured Innovation Partners
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
          {featuredPartner.map((item) => (
            <NewTechComp key={item.id} data={item} />
          ))}
        </div>
      </div>
      <div className="border-b-2 border-[#85009D] pb-8 sm:pb-12">
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Recently Added to the Vault
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
          <p className="border-2 rounded-[6px] border-[#DBBB89] hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-4 font-semibold text-[#85009D] hover:text-white transition-all duration-200 ease-in-out">
            ProcureLytics
          </p>
          <p className="border-2 rounded-[6px] border-[#DBBB89] hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-4 font-semibold text-[#85009D] hover:text-white transition-all duration-200 ease-in-out">
            AchieveMeter Sync
          </p>
          <p className="border-2 rounded-[6px] border-[#DBBB89] hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-4 font-semibold text-[#85009D] hover:text-white transition-all duration-200 ease-in-out">
            Dynamic P2P Benchmarker
          </p>
        </div>
      </div>
    </>
  );
};

export default InnovationVaultCTR;
