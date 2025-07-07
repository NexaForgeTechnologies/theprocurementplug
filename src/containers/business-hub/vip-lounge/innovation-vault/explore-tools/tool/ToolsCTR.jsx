import React from "react";

import ToolComp from "@/components/business-hub/vip-lounge/innovation-vault/explore-tool/ToolComp";

const ToolsCTR = () => {
  const tools = [
    {
      id: 1,
      img: "/images/bussiness-hub/vip-lounge/innovation-vault/tool-video.png",
      isBeta: false,
      heading: "This Month’s Highlighted Tool",
      text: "",
      url: "/business-hub/vip-lounge/innovation-vault/explore-tools/tool-profile",
      urlText: "Download Deck",
    },
    {
      id: 2,
      img: "/images/bussiness-hub/vip-lounge/innovation-vault/tool.png",
      isBeta: true,
      heading: "VaultMetrics",
      text: "Rapidly capture, refine and organize innovative ideas with collaborative input.",
      url: "/business-hub/vip-lounge/innovation-vault/explore-tools/tool-profile",
      urlText: "Request Demo",
    },
    {
      id: 3,
      img: "/images/bussiness-hub/vip-lounge/innovation-vault/tool.png",
      isBeta: true,
      heading: "VaultMetrics",
      text: "Rapidly capture, refine and organize innovative ideas with collaborative input.",
      url: "/business-hub/vip-lounge/innovation-vault/explore-tools/tool-profile",
      urlText: "Request Demo",
    },
    {
      id: 4,
      img: "/images/bussiness-hub/vip-lounge/innovation-vault/tool.png",
      isBeta: true,
      heading: "VaultMetrics",
      text: "Rapidly capture, refine and organize innovative ideas with collaborative input.",
      url: "/business-hub/vip-lounge/innovation-vault/explore-tools/tool-profile",
      urlText: "Request Demo",
    },
    {
      id: 5,
      img: "/images/bussiness-hub/vip-lounge/innovation-vault/tool.png",
      isBeta: true,
      heading: "VaultMetrics",
      text: "Rapidly capture, refine and organize innovative ideas with collaborative input.",
      url: "/business-hub/vip-lounge/innovation-vault/explore-tools/tool-profile",
      urlText: "Request Demo",
    },
    {
      id: 6,
      img: "/images/bussiness-hub/vip-lounge/innovation-vault/tool.png",
      isBeta: true,
      heading: "VaultMetrics",
      text: "Rapidly capture, refine and organize innovative ideas with collaborative input.",
      url: "/business-hub/vip-lounge/innovation-vault/explore-tools/tool-profile",
      urlText: "Request Demo",
    },
    {
      id: 7,
      img: "/images/bussiness-hub/vip-lounge/innovation-vault/tool.png",
      isBeta: true,
      heading: "VaultMetrics",
      text: "Rapidly capture, refine and organize innovative ideas with collaborative input.",
      url: "/business-hub/vip-lounge/innovation-vault/explore-tools/tool-profile",
      urlText: "Request Demo",
    },
    {
      id: 8,
      img: "/images/bussiness-hub/vip-lounge/innovation-vault/tool.png",
      isBeta: true,
      heading: "VaultMetrics",
      text: "Rapidly capture, refine and organize innovative ideas with collaborative input.",
      url: "/business-hub/vip-lounge/innovation-vault/explore-tools/tool-profile",
      urlText: "Request Demo",
    },
    {
      id: 9,
      img: "/images/bussiness-hub/vip-lounge/innovation-vault/tool.png",
      isBeta: true,
      heading: "VaultMetrics",
      text: "Rapidly capture, refine and organize innovative ideas with collaborative input.",
      url: "/business-hub/vip-lounge/innovation-vault/explore-tools/tool-profile",
      urlText: "Request Demo",
    },
  ];

  const filterOptions = {
    category: ["All", "Category 1", "Category 2"],
    stage: [ "live", "beta access", "pilot open", "In development - download Deck"],
    partner: ["All", "Partner A", "Partner B"],
    tag: ["All", "Tag 1", "Tag 2"],
  };
  return (
    <>
      <div>
        {/* Filter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-6 md:my-8">
          <select className="cursor-pointer border border-purple-500 rounded-md px-2 py-3 text-gray-700">
            <option>Category</option>
            {filterOptions.category.map((item, idx) => (
              <option key={idx}>{item}</option>
            ))}
          </select>

          <select className="cursor-pointer border border-purple-500 rounded-md px-2 py-3 text-gray-700">
            <option>Stage</option>
            {filterOptions.stage.map((item, idx) => (
              <option key={idx}>{item}</option>
            ))}
          </select>

          <select className="cursor-pointer border border-purple-500 rounded-md px-2 py-3 text-gray-700">
            <option>Partner</option>
            {filterOptions.partner.map((item, idx) => (
              <option key={idx}>{item}</option>
            ))}
          </select>

          <select className="cursor-pointer border border-purple-500 rounded-md px-2 py-3 text-gray-700">
            <option>Tag</option>
            {filterOptions.tag.map((item, idx) => (
              <option key={idx}>{item}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {tools.map((tool) => (
            <ToolComp key={tool.id} data={tool} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ToolsCTR;
