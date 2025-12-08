"use client";
import { useState } from "react";

import PostTile from "@/components/business-hub/vip-lounge/collaboration-influence/thought-leadership-wal/PostTile";

import { usePost } from "@/hooks/GetInsightsPost";

import CategoriesBar from "@/components/business-hub/vip-lounge/CategoriesBar";
import SubmissionModalForm from "@/components/business-hub/vip-lounge/collaboration-influence/thought-leadership-wal/RequestDemoForm";
import NominationForm from "@/components/business-hub/vip-lounge/collaboration-influence/thought-leadership-wal/NominationForm";

function ThoughtLeadershipWallCTR() {
  const { data = [] } = usePost(); // default empty array
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isNominationOpen, setIsNominationOpen] = useState(false);

  const categories = [
    "Strategic Sourcing",
    "Automation & AI",
    "ESG & Social Value",
    "Cross-Industry Insights",
    "Career & Personal Growth",
    "Boardroom Readiness",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  // Total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);
  // Pagination slice
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <div className="mb-4 md:mb-8">
        <h3 className="font-semibold text-[24px] md:text-[32px] md:text-5xl mb-4 md:mb-8 text-[#1B1B1B]">
          Thought Leadership Wall
        </h3>
        <p className="text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 md:mb-8">
          Your space to share, spotlight, and shape the future of procurement
          thinking.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto"
          >
            Submit Your Insight
            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
          </button>
          <button
            onClick={() => setIsNominationOpen(true)}
            className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto"
          >
            Nominate a Contributor
            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
          </button>
        </div>
      </div>

      <CategoriesBar categories={categories} />

      {/* Combined Spotlight and Leaderboard Section */}
      <div className="mb-4 md:mb-8">
        <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 md:mb-8 text-[#1B1B1B]">
          Spotlight
        </h3>

        {/* Post List with Pagination */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {paginatedData.map((post) => (
            <PostTile key={post.id} data={post} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            {/* Previous */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`text-[#1B1B1B] px-4 py-2 rounded-[10px] bg-white border border-[#EDEDED] text-lg ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:text-[#1B1B1B]"
              }`}
            >
              &lt;
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`text-lg px-4 py-2 rounded-[10px] ${
                    currentPage === page
                      ? "text-[#1B1B1B] font-semibold bg-[#EFEFEF]"
                      : "text-[#7D7D7D] hover:text-[#1B1B1B]"
                  }`}
                >
                  {page}
                </button>
              )
            )}

            {/* Next */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`text-[#1B1B1B] px-4 py-2 rounded-[10px] bg-white border border-[#EDEDED] text-lg ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:text-[#1B1B1B]"
              }`}
            >
              &gt;
            </button>
          </div>
        )}
      </div>

      {/* <div className="w-full h-[2px] bg-[#85009D] mb-4 md:mb-8"></div> */}
      <SubmissionModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <NominationForm
        isOpen={isNominationOpen}
        onClose={() => setIsNominationOpen(false)}
      />
    </div>
  );
}

export default ThoughtLeadershipWallCTR;
