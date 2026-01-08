"use client";

import { useEffect, useState } from "react";
import { jsPDF } from "jspdf";

export default function Home() {
    const [day, setDay] = useState("Day1");
    const agenda = {
        Day1: [
            {
                time: "14:00 - 14:20",
                title: "Opening Keynote – Global Shifts in Talent",
                description: "What the Next Decade Means for Procurement Careers",
                speakers: "Speaker: Michael Van Keulen",
                moderator: "",
            },
            {
                time: "14:20 - 15:00",
                title: "The Resilient Supply Chain",
                description: "Integrating Sustainability Skills for Risk Management and ROI",
                speakers: "Speaker: Eirini Etoimou",
                moderator: "",
            },
            { time: "15:00 - 15:10", title: "Q&A", description: "", speakers: "", moderator: "" },
            {
                time: "15:10 - 15:50",
                title: "Panel – Beyond Procurement: Building Multi-Disciplinary Skills for Global Relevance",
                description: "",
                speakers: "Speakers: Nasima Mohammad, Ronald Martey, Celia SGAR, Urszula Woronowicz",
                moderator: "",
            },
            { time: "15:50 - 16:00", title: "Break", description: "", speakers: "", moderator: "" },
            {
                time: "16:00 - 16:30",
                title: "AI, Analytics & Automation Coupled with– Practical Tools Every Professional Must Master",
                description: "",
                speakers: "Speaker: James Meads",
                moderator: "",
            },
            { time: "16:30 - 17:00", title: "Humantic Perspective of AI Use", description: "", speakers: "Speaker: Karthik Rama", moderator: "" },
            { time: "17:00 - 17:15", title: "Q&A", description: "", speakers: "", moderator: "" },
            {
                time: "17:15 - 17:55",
                title: "Global Procurement for Public Good",
                description: "Ethics, ESG, Transparency & Sustainable Governance",
                speakers: "Speakers: Christopher Robinson, Fleur Summer, Jennifer Akongbota, Latasha Terry",
                moderator: "",
            },
            {
                time: "17:55 - 18:55",
                title: "Panel: Closing Insights – Your 12-Month Global Growth Action Plan and Career Accelerator",
                description: "",
                speakers: "Speakers: Suresh Kashavan, Blessed S. Agyemang, Costanza Campi, Chukwudi Uche",
                moderator: "",
            },
        ],
        Day2: [
            {
                time: "14:00 - 14:20",
                title: "Opening Keynote – Inside the Modern Boardroom: How Global Strategy Really Gets Shaped",
                description: "",
                speakers: "Speakers: Rodolfo Correira",
                moderator: "",
            },
            {
                time: "14:20 - 15:00",
                title: "Masterclass – Enterprise Risk Management: What Boards Expect Leaders to Understand",
                description: "",
                speakers: "Speakers: Paul Kurtz",
                moderator: "",
            },
            { time: "15:00 - 15:10", title: "Q&A", description: "", speakers: "", moderator: "" },
            {
                time: "15:10 - 15:50",
                title: "Panel – The Global Executive’s Playbook: Governance, Ethics and Executive Branding at Board Level",
                description: "",
                speakers: "Speakers: Zeina Arnous, Georgina Terry-Cowan, Ann Dunkin",
                moderator: "",
            },
            { time: "15:50 - 16:00", title: "Break", description: "", speakers: "", moderator: "" },
            { time: "16:00 - 16:40", title: "Q&A", description: "", speakers: "", moderator: "" },
            {
                time: "16:40 - 16:50",
                title: "Masterclass – Crisis Room Simulation: Making Enterprise-Level Decisions Under Pressure",
                description: "",
                speakers: "Speakers: Irene Poku",
                moderator: "",
            },
            {
                time: "16:50 - 17:30",
                title: "Closing Roadmap – Translating Experience into Boardroom Value",
                description: "",
                speakers: "Speakers: Georgina Terry-Cowan",
                moderator: "",
            },
        ],
    };

    const itemsForCurrentDay = agenda[day];
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(itemsForCurrentDay.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = itemsForCurrentDay.slice(startIndex, startIndex + itemsPerPage);

    useEffect(() => setCurrentPage(1), [day]);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        } else if (page > totalPages && day === "Day1") {
            setDay("Day2");
        } else if (page < 1 && day === "Day2") {
            setDay("Day1");
        }
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        const padding = 15;
        const pageWidth = 210;
        const pageHeight = 297;
        const contentWidth = pageWidth - 2 * padding;
        const itemsPerPage = 5;

        const agendaItems = agenda[day]; // Only use items for the current day

        for (let page = 0; page < Math.ceil(agendaItems.length / itemsPerPage); page++) {
            if (page > 0) doc.addPage();
            let yOffset = padding;

            // Header
            doc.setFont("Helvetica", "bold");
            doc.setFontSize(24);
            doc.setTextColor(133, 0, 157);
            doc.text("ELEVATE 2026", pageWidth / 2, yOffset, { align: "center" });

            yOffset += 10;
            doc.setFont("Helvetica", "normal");
            doc.setFontSize(12);
            doc.setTextColor(96, 96, 96);
            doc.text("PROCUREMENT CAREER & INNOVATION SUMMIT", pageWidth / 2, yOffset, { align: "center" });

            yOffset += 6;
            doc.text(
                day === "Day1" ? "28th Jan 2026 | Digital Global Edition, UK" : "29th Jan 2026 | Digital Global Edition, UK",
                pageWidth / 2,
                yOffset,
                { align: "center" }
            );

            yOffset += 10;
            doc.setDrawColor(133, 0, 157);
            doc.line(padding, yOffset, pageWidth - padding, yOffset);
            yOffset += 10;

            // Agenda items
            const startIndex = page * itemsPerPage;
            const pageItems = agendaItems.slice(startIndex, startIndex + itemsPerPage);

            pageItems.forEach((item) => {
                // Time
                doc.setFont("Helvetica", "bold");
                doc.setTextColor(176, 141, 87);
                doc.setFontSize(12);
                doc.text(item.time, padding, yOffset);

                // Title
                doc.setFont("Helvetica", "bold");
                doc.setTextColor(133, 0, 157);
                const titleLines = doc.splitTextToSize(item.title, contentWidth - 45);
                doc.text(titleLines, padding + 45, yOffset);
                yOffset += titleLines.length * 6 + 2;

                // Description
                if (item.description) {
                    doc.setFont("Helvetica", "normal");
                    doc.setTextColor(54, 54, 54);
                    const descLines = doc.splitTextToSize(item.description, contentWidth - 45);
                    doc.text(descLines, padding + 45, yOffset);
                    yOffset += descLines.length * 6 + 2;
                }

                // Speakers
                if (item.speakers) {
                    const speakerLines = doc.splitTextToSize(item.speakers, contentWidth - 45);
                    doc.text(speakerLines, padding + 45, yOffset);
                    yOffset += speakerLines.length * 6 + 2;
                }

                // Moderator
                if (item.moderator) {
                    const modLines = doc.splitTextToSize(item.moderator, contentWidth - 45);
                    doc.text(modLines, padding + 45, yOffset);
                    yOffset += modLines.length * 6 + 2;
                }

                yOffset += 8; // spacing between agenda items
            });

            // Footer
            doc.setFontSize(10);
            doc.setTextColor(96, 96, 96);
            doc.text("© 2026 The Procurement Plug. All rights reserved", pageWidth - padding, pageHeight - padding, { align: "right" });
        }

        doc.save(`Elevate_2026_Agenda_${day}.pdf`);
    };

    return (
        <div className=" w-full flex flex-col items-center">
            <main className="flex-1">
                <section className="bg-white">
                    <div className="flex items-center mb-4">
                        <svg className="w-8 h-8 text-[#85009D] mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V7h14v12zm-2-7H7v-2h10v2zm-4 4H7v-2h6v2z" />
                        </svg>
                        <h2 className="text-lg font-semibold text-[#010101]">View the Full Agenda</h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Download or browse the complete Elevate 2026 agenda below. Sessions include masterclasses, panel talks, live networking corners, and more
                    </p>
                    <div className="flex space-x-2 mb-4">
                        <button
                            onClick={() => setDay("Day1")}
                            className={`px-3 py-1 rounded ${day === "Day1" ? "bg-[#85009D] text-white" : "bg-gray-200"}`}
                        >
                            Day 1
                        </button>
                        <button
                            onClick={() => setDay("Day2")}
                            className={`px-3 py-1 rounded ${day === "Day2" ? "bg-[#85009D] text-white" : "bg-gray-200"}`}
                        >
                            Day 2
                        </button>
                    </div>
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
                        {/*<div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center space-x-2">
                             <button
                                 onClick={generatePDF}
                                 className="cursor-pointer px-4 py-1 bg-white text-[#85009D] rounded hover:bg-gray-200"
                             >
                                 Download PDF
                             </button>
                         </div> */}
                        <button
                            onClick={generatePDF}
                            className="cursor-pointer px-4 py-1 bg-white text-[#85009D] rounded hover:bg-gray-200"
                        >
                            Download PDF
                        </button>

                    </div>
                    <div className="mt-4 p-2 bg-white rounded">
                        <h3 className="text-3xl md:text-6xl font-bold text-center text-[#85009D]">ELEVATE 2026</h3>
                        <p className="text-center text-gray-600">PROCUREMENT CAREER & INNOVATION SUMMIT</p>
                        <p className="text-center text-gray-600">28th - 29th Jan 2026 | Digital Global Edition, UK</p>


                        <div className="w-full h-1 bg-[#85009D] rounded my-6"></div>
                        {/* <p className="text-center text-gray-600 text-2xl">Available Soon ...</p> */}
                        <p className="text-[#85009D] mb-3 font-semibold">
                            {day === "Day1" ? "28th Jan Day 1" : "29th Jan Day 2"}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#363636]">
                            {currentItems.map(item => (
                                <div key={item.id} className="flex items-start gap-4">
                                    <div className="basis-[50%]">
                                        <p className="text-[#B08D57]"><strong>{item.time}</strong></p>
                                    </div>
                                    <div className="basis-[220%]">
                                        <p className="text-[#85009D]"><strong>{item.title}</strong></p>
                                        <p>{item.description}</p>
                                        <p>{item.speakers}</p>
                                        <p>{item.moderator}</p>
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
