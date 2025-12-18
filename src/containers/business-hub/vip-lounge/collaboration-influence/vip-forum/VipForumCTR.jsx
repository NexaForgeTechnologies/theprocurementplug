"use client";
import React, { useState } from "react";

import ConsultingPartnerTile from "@/components/business-hub/vip-lounge/collaboration-influence/vip-forum/ConsultingPartnerTile";
import HostARoundaTableForm from "@/components/business-hub/vip-lounge/collaboration-influence/vip-forum/HostARoundtableForm";

import { useRoundtable } from "@/hooks/GetROundtables";

function VipForumCTR() {
  const { data = [] } = useRoundtable(); // default empty array
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      {/* Header */}
      <div className="flex justify-between align-top flex-col md:flex-row mb-6 md:mb-8">
        <div>
          <h3 className="font-semibold text-[24px] md:text-[32px] md:text-5xl mb-4 text-[#1B1B1B]">
            VIP Forum
          </h3>
          <p className="text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 md:mb-0">
            Host or join exclusive conversations shaping procurement leadership.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 
          rounded-md w-full md:w-auto"
        >
          Host a Roundtable
          <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
        </button>
      </div>

      {/* Roundtable List with Pagination */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {paginatedData.map((partner) => (
          <ConsultingPartnerTile key={partner.id} data={partner} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          {/* Previous */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`text-[#1B1B1B] px-4 py-2 rounded-[10px] bg-white border border-[#EDEDED] text-lg ${currentPage === 1
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
                className={`text-lg px-4 py-2 rounded-[10px] ${currentPage === page
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
            className={`text-[#1B1B1B] px-4 py-2 rounded-[10px] bg-white border border-[#EDEDED] text-lg ${currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:text-[#1B1B1B]"
              }`}
          >
            &gt;
          </button>
        </div>
      )}

      {/* Modal */}
      <HostARoundaTableForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default VipForumCTR;