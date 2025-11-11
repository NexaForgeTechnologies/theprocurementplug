"use client";

import React, { useState, useEffect } from "react";
import ToolComp from "@/components/business-hub/vip-lounge/innovation-vault/explore-tool/ToolComp";

const ToolsCTR = () => {
  const [tools, setTools] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Categories for the filter dropdown
  const categoryOptions = [
    { id: 1, value: "Live" },
    { id: 2, value: "Beta Access" },
    { id: 3, value: "Pilot Open" },
    { id: 4, value: "In Development - download deck" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "/api/business-hub/vip-lounge/innovation-vault/explore-tools"
        );
        if (!res.ok) throw new Error("Failed to fetch tools");

        const data = await res.json();
        console.log(data); // log the API response

        // Map categoryId to category value
        const mappedData = data.map((tool) => {
          const category =
            categoryOptions.find((cat) => cat.id === Number(tool.category_id))?.value ||
            "No Tag";

          return {
            ...tool,
            category,
          };
        });


        setTools(mappedData);
      } catch (error) {
        console.error("Error fetching tools:", error);
      }
    };

    fetchData();
  }, []);

  // Filter tools based on selected category
  const filteredTools =
    selectedCategory === "All"
      ? tools
      : tools.filter((tool) => tool.category === selectedCategory);

  return (
    <div>
      {/* Filter Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-6 md:my-8">
        <select
          className="cursor-pointer border border-purple-500 rounded-md px-2 py-3 text-gray-700"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          {categoryOptions.map((cat) => (
            <option key={cat.id} value={cat.value}>
              {cat.value}
            </option>
          ))}
        </select>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {filteredTools.map((tool) => (
          <ToolComp key={tool.id} data={tool} />
        ))}
      </div>
    </div>
  );
};

export default ToolsCTR;
