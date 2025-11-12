"use client";

import React, { useState, useEffect } from "react";
import ToolComp from "@/components/business-hub/vip-lounge/innovation-vault/explore-tool/ToolComp";

const ToolsCTR = () => {
  const [tools, setTools] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Categories for the filter dropdown
  const categoryOptions = [
    { id: 1, value: "Live" },
    { id: 2, value: "Beta Access" },
    { id: 3, value: "Pilot Open" },
    { id: 4, value: "In Development - download deck" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(
          "/api/business-hub/vip-lounge/innovation-vault/explore-tools"
        );
        if (!res.ok) throw new Error("Failed to fetch tools");

        const data = await res.json();

        // Map categoryId to category value
        const mappedData = data.map((tool) => {
          const category =
            categoryOptions.find((cat) => cat.id === Number(tool.category_id))
              ?.value || "No Tag";

          return {
            ...tool,
            category,
          };
        });

        setTools(mappedData);
      } catch (error) {
        console.error("Error fetching tools:", error);
        setError("Failed to load tools. Please try again later.");
      } finally {
        setLoading(false);
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
          className="cursor-pointer border border-[#85009D] rounded-md px-2 py-3 text-gray-700 focus:ring-2 focus:ring-[#85009D]"
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

      {/* Tools Grid or Loader / Empty State */}
      {loading ? (
        // Loader Spinner
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-[#85009D] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <p className="text-center text-red-500 py-10">{error}</p>
      ) : filteredTools.length === 0 ? (
        // No tools found message
        <p className="text-center text-gray-600 text-lg py-10">
          No tools found.
        </p>
      ) : (
        // Tools grid
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {filteredTools.map((tool) => (
            <ToolComp key={tool.id} data={tool} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ToolsCTR;
