"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";

export default function Home() {
    const agendaItems = [
        {
            time: "11:00 - 11:10",
            title: "Executive Welcome & Strategic Opening",
            description: [
                "Introduction to the session objectives – Why procurement professionals must master boardroom dynamics",
                "Keynote welcome  - procurement’s evolving role at the executive level"
            ],
            speakers: "Annalisha Found, CEO, The Procurement Plug",
        },
        {
            time: "11:10 - 11:30",
            title: "The Future of Procurement: Boardroom Influence & C-Suite Expectations",
            description: [
                "Understanding board-level priorities and how procurement drives enterprise value",
                "Functional Leadership to enterprise leadership - CPO to CEO",
                "Pathways to executive leadership (What’s currently available and Xec Plug plans)",
                "Competency vs. character: balancing experience with adaptability",
                "The Executive Mindset: adapting to leadership challenges at the highest level"
            ],
            speakers: "David Loseby",
        },
        {
            time: "11:30  - 11:45",
            title: "Mastering Procurement Data for Strategic Decision-Making",
            description: [
                "Transforming procurement data to drive enterprise-wide Impact",
                "The executive cost of dirty data: risk exposure, inefficiency and poor forecasting",
                "Using data to accelerate innovation, sustainability, and competitive advantage",
                "Building a data-driven culture across procurement and supply functions"
            ],
            speakers: "Susan Walsh - CEO,  The Classification Guru and Samification ",
        },
        {
            time: "11:45  - 12:00",
            title: "Executive Recruitment Industry ",
            description: [
                "Cracking the code: What’s Shaping executive recruitment today",
                "What boards and investors now prioritise in executive hires",
                "The rise of digital leadership: how tech fluency is reshaping C-suite profiles",
                "How AI and predictive analytics are revolutionising executive search",
                "Myth busters and truth around executive search "
            ],
            speakers: "Craig Elvin",
        },
        {
            time: "12:00: - 12:10",
            title: "Closing and Q&A",
            description: [
                "Key takeaways and implementation strategies",
                "Exclusive follow-up opportunities (mentorship, executive coaching Elevate 2025 - Glasgow)",
                "Q&A"
            ],
            speakers: "Annalisha Found and CEO, The Procurement Plug",
        },
    ];

    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages
    const totalPages = Math.ceil(agendaItems.length / itemsPerPage);

    // Get the items for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = agendaItems.slice(startIndex, startIndex + itemsPerPage);

    // Handle page change
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        const itemsPerPage = 3;
        const padding = 15;
        const pageWidth = 210;
        const pageHeight = 297;
        const contentWidth = pageWidth - 2 * padding;

        for (let page = 0; page < Math.ceil(agendaItems.length / itemsPerPage); page++) {
            if (page > 0) doc.addPage();
            let yOffset = padding;

            // Header
            doc.setFont("Helvetica", "bold");
            doc.setFontSize(36);
            doc.setTextColor(133, 0, 157);
            doc.text("Boardroom Preparedness for Senior Procurement Professionals", padding + contentWidth / 2, yOffset, { align: "center" });
            yOffset += 12;
            doc.setFont("Helvetica", "normal");
            doc.setFontSize(12);
            doc.setTextColor(96, 96, 96);
            doc.text("Executive webinar Procurement Leaders", padding + contentWidth / 2, yOffset, { align: "center" });
            yOffset += 8;
            doc.text("July 17 2025 | Virtual Webinar", padding + contentWidth / 2, yOffset, { align: "center" });
            yOffset += 10;
            doc.setDrawColor(133, 0, 157);
            doc.line(padding, yOffset, pageWidth - padding, yOffset);
            yOffset += 16;

            // Agenda Items
            const startIndex = page * itemsPerPage;
            const pageItems = agendaItems.slice(startIndex, startIndex + itemsPerPage);
            pageItems.forEach((item) => {
                doc.setFontSize(12);
                doc.setTextColor(176, 141, 87);
                doc.setFont("Helvetica", "bold");
                doc.text(item.time, padding, yOffset);

                doc.setTextColor(133, 0, 157);
                doc.setFont("Helvetica", "bold");
                const titleWidth = contentWidth - 45;
                const titleLines = doc.splitTextToSize(item.title, titleWidth);
                doc.text(titleLines, padding + 45, yOffset);
                yOffset += titleLines.length * 6 + 2;

                doc.setTextColor(54, 54, 54);
                doc.setFont("Helvetica", "normal");
                if (item.description) {
                    item.description.forEach((desc) => {
                        const descriptionLines = doc.splitTextToSize(desc, titleWidth);
                        doc.text(descriptionLines, padding + 45, yOffset);
                        yOffset += descriptionLines.length * 6 + 2;
                    });
                }

                if (item.speakers) {
                    const speakerWidth = titleWidth;
                    const speakerLines = doc.splitTextToSize(`${item.speakers}`, speakerWidth);
                    doc.text(speakerLines, padding + 45, yOffset);
                    yOffset += speakerLines.length * 6 + 2;
                }

                if (item.moderator) {
                    const moderatorLines = doc.splitTextToSize(`${item.moderator}`, titleWidth);
                    doc.text(moderatorLines, padding + 45, yOffset);
                    yOffset += moderatorLines.length * 6 + 2;
                }

                yOffset += 12;
            });

            // Footer
            doc.setFontSize(10);
            doc.setTextColor(96, 96, 96);
            doc.text("© 2025 The Procurement Plug. All rights reserved", pageWidth - padding, pageHeight - padding, { align: "right" });
        }

        doc.save("Elevate_2025_Agenda.pdf");
    };

    return (
        <div className="w-full flex flex-col items-center">
            <main className="flex-1">
                <section className="bg-white">
                    <div className="flex items-center mb-4">
                        <svg className="w-8 h-8 text-[#85009D] mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V7h14v12zm-2-7H7v-2h10v2zm-4 4H7v-2h6v2z" />
                        </svg>
                        <h2 className="text-lg font-semibold text-[#010101]">View the Full Agenda</h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                        This executive-level event equips senior procurement professionals with the strategic insights, financial acumen, and leadership skills necessary to excel in boardroom discussions and influence executive decisions.
                    </p>
                    <div className="bg-[#85009D] text-white p-4 rounded flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <span>Page {currentPage} of {totalPages}</span>
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="cursor-pointer px-3 py-1 bg-white text-[#85009D] rounded disabled:opacity-50"
                                >
                                    -
                                </button>
                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="cursor-pointer px-2 py-1 bg-white text-[#85009D] rounded disabled:opacity-50"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center space-x-2">
                            <button
                                onClick={generatePDF}
                                className="cursor-pointer px-4 py-1 bg-white text-[#85009D] rounded hover:bg-gray-200"
                            >
                                Download PDF
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 p-2 bg-white rounded">
                        <h3 className="text-3xl md:text-6xl font-bold text-center text-[#85009D]">Boardroom Preparedness for Senior Procurement Professionals</h3>
                        <p className="text-center text-gray-600">Executive webinar Procurement Leaders</p>
                        <p className="text-center text-gray-600">July 17 2025 | Virtual Webinar</p>
                        <div className="w-full h-1 bg-[#85009D] rounded my-6"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#363636]">
                            {currentItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="basis-[50%]">
                                        <p className="text-[#B08D57]"><strong>{item.time}</strong></p>
                                    </div>
                                    <div className="basis-[220%]">
                                        <p className="text-[#85009D]"><strong>{item.title}</strong></p>
                                        {item.description && (
                                            <ul className=" list none">
                                                {item.description.map((desc, i) => (
                                                    <li key={i}>{desc}</li>
                                                ))}
                                            </ul>
                                        )}
                                        {item.speakers && <p>{item.speakers}</p>}
                                        {item.moderator && <p>{item.moderator}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
