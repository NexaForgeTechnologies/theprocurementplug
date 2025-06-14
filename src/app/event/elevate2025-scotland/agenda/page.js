"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";

export default function Home() {
    const agendaItems = [
        {
            time: "08:30 - 09:00",
            title: "Registration & Welcome Coffee",
            description: '',
            speakers: "",
            moderator: "Voice of the Day & Moderator: Graham Copeland - GEP",
        },
        {
            time: "09:00 - 09:15",
            title: "Opening Remarks & Event Introduction",
            description: "",
            speakers: "Speakers: Graham / Annalisha",
            moderator: "",
        },
        {
            time: "09:15 - 09:35",
            title: "Keynote: Procurement Leadership & The Boardroom Journey",
            description: "",
            speakers: "Speaker: David Loseby",
            moderator: "",
        },
        {
            time: "09:40 - 10:00",
            title: "Keynote: Building Resilient Supply Chains in a Volatile Market",
            description: "",
            speakers: "Speaker: Atanu Chaudhuri",
            moderator: "",
        },
        {
            time: "10:00 - 10:15",
            title: "Networking break",
            description: "",
            speakers: "",
            moderator: "",
        },
        {
            time: "10:15 - 11:15",
            title: "Learning Breakout Session: Financial & Risk Modeling for Senior Procurement Professionals ",
            description: "",
            speakers: "Speaker: Francis - tbc",
            moderator: "",
        },
        {
            time: "10:15 - 11:15",
            title: "Learning Breakout Session: Executive Coaching & Leadership Development",
            description: "",
            speakers: "Speaker: Gary Weston",
            moderator: "",
        },
        {
            time: "10:15 - 11:15",
            title: "Learning Breakout Session: ESG and Social Value impact",
            description: "",
            speakers: "Speaker: Catherine Manning",
            moderator: "",
        },
        {
            time: "11:15 - 11:30",
            title: "Networking Break",
            description: "",
            speakers: "",
            moderator: "",
        },
        {
            time: "11:30 - 12:00",
            title: "Panel Discussion: AI & Procurement Analytics for Strategic Decision-Making",
            description: "",
            speakers: "Speakers: Sarah Socha , Salisu Uba, David Loseby, Steve Tosh",
            moderator: "Voice of the Day & Moderator: Graham Copeland",
        },
        {
            time: "12:00 - 13:15",
            title: "Networking Lunch",
            description: "Live Tech Demo",
            speakers: "Speakers: procurie | Nova-Love me Tender | Samification | TenderAI",
            moderator: "",
        },
        {
            time: "13:15 - 13:35",
            title: "Keynote: Sustainability & ESG Leadership in Procurement ",
            description: "",
            speakers: "Speakers: Gillian Askew",
            moderator: "",
        },
        {
            time: "13:35 - 14:10",
            title: "Panel Discussion: Executive Influence & Strategic Stakeholder Engagement",
            description: "",
            speakers: "Speakers: Iain Steel | Catherine Manning | Gary Weston",
            moderator: "",
        },
        {
            time: "14:15 - 15:15",
            title: "Learning Breakout Session: Strategic Risk & Compliance for Procurement Leaders",
            description: "",
            speakers: "Speaker: Steve Tosh ",
            moderator: "",
        },
        {
            time: "14:15 - 15:15",
            title: "Learning Breakout Session: Procurement Transformation & Change Leadership ",
            description: "",
            speakers: "Speakers: Iain Steel | Susan Walsh ",
            moderator: "",
        },
        {
            time: "14:15 - 15:15",
            title: "Learning Breakout Session: Crisis Management & Boardroom Resilience",
            description: "",
            speakers: "Speaker: Cameron Poole",
            moderator: "",
        },
        {
            time: "15:15 - 15:30",
            title: "Networking break",
            description: "",
            speakers: "",
            moderator: "",
        },
        {
            time: "15:30 - 16:10",
            title: "Case Study Panel: Successful Boardroom Transition from Procurement ",
            description: "",
            speakers: "Speakers: Gillian Askew | David Loseby",
            moderator: "Voice of the Day & Moderator: Graham Copeland",
        },
        {
            time: "16:10 - 16:25",
            title: "Closing Remarks & Future Outlook",
            description: "",
            speakers: "",
            moderator: "Voice of the Day & Moderator: Graham Copeland",
        },
        {
            time: "16:25 - 17:00",
            title: "Networking Drinks & Executive Meetups",
            description: "",
            speakers: "",
            moderator: "",
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
        const itemsPerPage = 6;
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
            doc.text("ELEVATE 2025", padding + contentWidth / 2, yOffset, { align: "center" });
            yOffset += 12;
            doc.setFont("Helvetica", "normal");
            doc.setFontSize(12);
            doc.setTextColor(96, 96, 96);
            doc.text("PROCUREMENT CAREER & INNOVATION SUMMIT", padding + contentWidth / 2, yOffset, { align: "center" });
            yOffset += 8;
            doc.text("26 August 2025 | Glasgow, Scotland", padding + contentWidth / 2, yOffset, { align: "center" });
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
                    const descriptionLines = doc.splitTextToSize(item.description, titleWidth);
                    doc.text(descriptionLines, padding + 45, yOffset);
                    yOffset += descriptionLines.length * 6 + 4;
                }

                if (item.speakers) {
                    const speakerWidth = titleWidth;
                    const speakerLines = doc.splitTextToSize(`${item.speakers}`, speakerWidth);
                    doc.text(speakerLines, padding + 45, yOffset);
                    yOffset += speakerLines.length * 6 + 2;
                }

                if (item.moderator) {
                    doc.text(`${item.moderator}`, padding + 45, yOffset);
                    yOffset += 6;
                }

                yOffset += 12;
            });

            // Footer
            doc.setFontSize(10);
            doc.setTextColor(96, 96, 96);
            // doc.text("hello@theprocurementplug.com | +44 7447 163285", padding, pageHeight - padding);
            doc.text("© 2025 The Procurement Plug. All rights reserved", pageWidth - padding, pageHeight - padding, { align: "right" });
        }

        doc.save("Elevate_2025_Agenda.pdf");
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
                        Download or browse the complete Elevate 2025 agenda below. Sessions include masterclasses, panel talks, live networking corners, and more
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
                        <h3 className="text-3xl md:text-6xl font-bold text-center text-[#85009D]">ELEVATE 2025</h3>
                        <p className="text-center text-gray-600">PROCUREMENT CAREER & INNOVATION SUMMIT</p>
                        <p className="text-center text-gray-600">26 August 2025 | Glasgow, Scotland</p>
                        <div className="w-full h-1 bg-[#85009D] rounded my-6"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#363636]">
                            {currentItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
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