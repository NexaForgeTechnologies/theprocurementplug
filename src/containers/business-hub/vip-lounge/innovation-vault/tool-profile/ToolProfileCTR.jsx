"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import HeroCTR from "@/components/business-hub/vip-lounge/VipHeroSection";
import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";
import PartnerWithUsComp from "@/components/business-hub/vip-lounge/PartnerWithUs";
import Image from "next/image";
import { useParams } from "next/navigation";

const ToolProfileCTR = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 loading state
  const [error, setError] = useState(""); // 👈 optional error handling
  const params = useParams();
  const id = params.tools;

  const categoryOptions = [
    { id: 1, value: "Live" },
    { id: 2, value: "Beta Access" },
    { id: 3, value: "Pilot Open" },
    { id: 4, value: "In Development - download deck" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "/api/business-hub/vip-lounge/innovation-vault/explore-tools"
        );
        if (!res.ok) throw new Error("Failed to fetch tools");

        const data = await res.json();

        const safeJSONParse = (val) => {
          if (!val) return [];
          if (typeof val === "string") {
            try {
              const parsed = JSON.parse(val);
              return Array.isArray(parsed) ? parsed : [];
            } catch {
              return [];
            }
          }
          return Array.isArray(val) ? val : [];
        };

        const mappedData = data.map((tool) => ({
          ...tool,
          category:
            categoryOptions.find(
              (cat) => cat.id === Number(tool.category_id)
            )?.value || "No Tag",
          key_features: safeJSONParse(tool.key_features),
          related_tools: safeJSONParse(tool.related_tools),
        }));

        setDetails(mappedData);
      } catch (error) {
        console.error("Error fetching tools:", error);
        setError("Failed to load tools. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 👇 handle loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center py-40">
        <div className="w-12 h-12 border-4 border-[#85009D] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // 👇 handle no data or fetch error
  if (error) {
    return (
      <div className="text-center py-20 text-lg text-red-500">{error}</div>
    );
  }

  if (details.length === 0) {
    return (
      <div className="text-center py-20 text-lg text-gray-600">
        No tools found.
      </div>
    );
  }

  const selectedTool = details.find((tool) => tool.id === Number(id)) || {};

  if (!selectedTool.id) {
    return <div className="text-center py-20 text-lg">Tool not found.</div>;
  }
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
          <li className="text-[#696969] ">
            <Link href="/business-hub/vip-lounge/innovation-vault" className="hover:underline">
              Innovation Vault
            </Link>
          </li>
          <li>/</li>
          <li className="text-[#696969]">
            <Link href="/business-hub/vip-lounge/innovation-vault/explore-tools" className="hover:underline">
              Explore Tools
            </Link>
          </li>
          <li>/</li>
          <li className="text-[#696969] ">{selectedTool.title}</li>
        </ol>
      </nav>
    );
  }
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
          </a>{" "}
          -{" "}
          <Link className="font-light" href="/partnerships">
            Visit our partnership page
          </Link>
        </>
      ),
    },
    items: [
      { id: 1, heading: "Partners hub", text: "", link: "", linkText: "View Details" },
      { id: 2, heading: "Events hub", text: "", link: "", linkText: "View Details" },
      { id: 3, heading: "Business hub", text: "", link: "", linkText: "View Details" },
    ],
  };

  return (
    <>
      <div className="border-b-2 border-[#85009D] pb-8 sm:pb-12">
        <HeroCTR
          img={
            selectedTool.heroImg ||
            "/images/bussiness-hub/vip-lounge/innovation-vault/tool-profile.png"
          }
          heading={
            <span className="flex flex-col gap-0 leading-none">
              <span className="font-extrabold">{selectedTool.title || ""}</span>
            </span>
          }
          para={selectedTool.description || ""}
        />
        <Breadcrumb />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
              {selectedTool.title || "Tool Title"} -{" "}
              <span className="text-[#85009D]">
                {selectedTool.category || "No Category"}
              </span>
            </h3>
            <p className="md:text-xl text-[#1B1B1B] my-4">
              {selectedTool.description || ""}
            </p>

            <div className="flex flex-wrap gap-4">
              <ArrowButtonCom
                text="Request Demo"
                link={selectedTool.demoLink || "#"}
              />
              <ArrowButtonCom
                text="Apply To Join Pilot"
                link={selectedTool.pilotLink || "#"}
              />
              <ArrowButtonCom
                text="Visit Partner Website"
                link={selectedTool.partnerWebsite || "#"}
              />
            </div>
          </div>
          <div className="flex justify-center items-start pt-5 md:pt-0">
            <img
              src={selectedTool.logo}
              alt="logo"
              className="object-contain h-20 sm:h-24 md:h-30 lg:h-45"
            />
          </div>
        </div>
      </div>

      {/* KEY FEATURES */}
      <div>
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-4">
          KEY FEATURES
        </h3>
        <div className="space-y-2">
          {selectedTool.key_features?.length > 0 ? (
            selectedTool.key_features.map((feature, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <span className="w-[16px] h-[16px] rounded-full bg-[#B08D57]"></span>
                <p className="text-[#1B1B1B] font-medium">{feature}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No key features available.</p>
          )}
        </div>
      </div>

      {/* BETA SECTION */}
      <div
        style={{ boxShadow: "0 0 0 100vmax #FBE3FF", clipPath: "inset(0 -100vmax)" }}
        className="flex flex-col items-center md:flex-row gap-6 md:gap-8 bg-[#FBE3FF] text-white py-20"
      >
        <div className="flex-1">
          <div className="mb-6 md:mb-8">
            <h3 className="text-[#85009D] mb-2 font-medium text-2xl md:text-4xl">
              Currently in {selectedTool.category || "No Category"}
            </h3>
            <p className="md:text-xl text-[#1B1B1B] font-medium">
              {selectedTool.category_description || ""}
            </p>
          </div>

          {/* RELATED TOOLS */}
          <div className="my-8">
            <h3 className="font-semibold text-xl md:text-2xl text-[#85009D] mb-4">
              TOOLS OFTEN USED WITH THIS:
            </h3>
            <div className="space-y-2">
              {selectedTool.related_tools?.length > 0 ? (
                selectedTool.related_tools.map((tool, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <span className="w-[16px] h-[16px] rounded-full bg-[#B08D57]"></span>
                    <p className="text-[#1B1B1B] font-medium">{tool}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No related tools available.</p>
              )}
            </div>
          </div>

          <p className="text-[#B08D57] font-medium mt-6">
            Sponsored by <strong>{selectedTool.sponsored_by || "No Data Found"}</strong>.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={
              "/images/bussiness-hub/vip-lounge/innovation-vault/desktop-computer.png"
            }
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
