"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";

export default function Home() {
    const agendaItems = [
        {
            time: "08:30 - 09:00",
            title: "Registration & Welcome Coffee",
            description: 'PROCUREMENT CONFESSIONS WALL - Share your stories, lessons, or funny procurement moments. No names needed. Be real, be bold, be you.',
            speakers: "All Attendees",
            moderator: "",
        },
        {
            time: "09:00 - 09:15",
            title: "Opening Remarks & Event Introduction",
            description: "",
            speakers: "Speakers: Annalisha Noel / Jyothi Hartley",
            moderator: "Voice of the Day & Moderator: Jyothi Hartley",
        },
        {
            time: "09:15 - 09:40",
            title: "Keynote: The Future of Procurement & Digital Transformation",
            description: "",
            speakers: "Speaker: Oliver Jones",
            moderator: "",
        },
        {
            time: "09:40 - 10:00",
            title: "Keynote: Procuring a Service from a Supplier Perspective",
            description: "",
            speakers: "Speaker: Dan Craddock",
            moderator: "",
        },
        {
            time: "10:15 - 11:15",
            title: "Learning Breakout: Finance for Procurement Cost Control & Budgeting",
            description: "",
            speakers: "Speaker: Susannah Gooch",
            moderator: "",
        },
        {
            time: "10:15 - 11:15",
            title: "Learning Breakout: Mastering Negotiation Strategies",
            description: "",
            speakers: "Speaker: Laura Scarfe",
            moderator: "",
        },
        /*{ updated by abubakar
            time: "10:15 - 11:15",
            title: "Learning Breakout: The Power of Stakeholder Influence",
            description: "",
            speakers: "Speakers: Blessed S. Agyemang / Christoper Robinson",
            moderator: "",
        },*/
        {
            time: "11:15 - 11:30",
            title: "Networking Break",
            description: "Focused Chat Corners - Mentors' Networking | Plug ProcureTech | The Procurement Plug",
            speakers: "",
            moderator: "",
        },
        {
            time: "11:30 - 12:00",
            title: "Panel: Procurement Leadership & Career Growth",
            description: "",
            speakers: "Speakers: Susannah Gooch, Fraser McBeth, Josh Caple, Miranda Gordon, Adwoa Owusu Banahene",
            moderator: "Voice of the Day & Moderator: Jyothi Hartley",
        },
        {
            time: "12:00 - 13:15",
            title: "Networking Lunch",
            description: "Career Connect Plug - Recruitment Surgery",
            speakers: "Speakers: Mick Ramsden | Josh Caple",
            moderator: "",
        },
        {
            time: "13:20 - 14:00",
            title: "Panel: Driving Innovation - Procurement Innovation, Sustainability & Agility - Public and Private sector",
            description: "",
            speakers: "Speakers: Oliver Jones, Christopher Robinson, Fleur Summers, Blessed S. Agyemang, Lewis Sinkala",
            moderator: "Voice of the Day & Moderator: Jyothi Hartley",
        },
        {
            time: "14:05 - 15:05",
            title: "Learning Breakout Session: The Power of Stakeholder Influence",
            description: "",
            speakers: "Speakers: Blessed S. Agyemang | Christopher Robinson",
            moderator: "",
        },
        {
            time: "14:05 - 15:05",
            title: "Learning Breakout Session: Contract Management & Commercial Awareness",
            description: "",
            speakers: "Speaker: Miranda Gordon",
            moderator: "",
        },
        {
            time: "15:10 - 15:20",
            title: "Networking Break",
            description: "Focused Chat Corners - Mentors' Networking Plug | ProcureTech | The Procurement Plug",
            speakers: "",
            moderator: "",
        },
        {
            time: "15:20 - 15:50",
            title: "Panel Case Study: Real-World Procurement Success Stories",
            description: "",
            speakers: "Speakers: Luke Tomlinson, Fraser McBeth, Fleur Summers, Lewis Sinkala, Adwoa Owusu Banahene",
            moderator: "Voice of the Day & Moderator: Jyothi Hartley",
        },
        {
            time: "15:50 - 16:15",
            title: "Closing Remarks & Future Outlook",
            description: "",
            speakers: "Speaker: Annalisha Noel",
            moderator: "Voice of the Day & Moderator: Jyothi Hartley",
        },
        {
            time: "16:15 - 17:00",
            title: "Networking & Informal Discussions",
            description: "Focused Chat Corners - Mentoring | ProcureTech | Recruitment | PROCUREMENT CONFESSIONS",
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

    // const generatePDF = () => {
    //     const doc = new jsPDF();
    //     const itemsPerPage = 5;
    //     const padding = 15;
    //     const pageWidth = 210;
    //     const pageHeight = 297;
    //     const contentWidth = pageWidth - 2 * padding;

    //     for (let page = 0; page < Math.ceil(agendaItems.length / itemsPerPage); page++) {
    //         if (page > 0) doc.addPage();
    //         let yOffset = padding;

    //         // Header
    //         doc.setFont("Helvetica", "bold");
    //         doc.setFontSize(36);
    //         doc.setTextColor(133, 0, 157);
    //         doc.text("ELEVATE 2025", padding + contentWidth / 2, yOffset, { align: "center" });
    //         yOffset += 12;
    //         doc.setFont("Helvetica", "normal");
    //         doc.setFontSize(12);
    //         doc.setTextColor(96, 96, 96);
    //         doc.text("PROCUREMENT CAREER & INNOVATION SUMMIT", padding + contentWidth / 2, yOffset, { align: "center" });
    //         yOffset += 8;
    //         doc.text("25 JUNE 2026 | Digital Global Edition, UK", padding + contentWidth / 2, yOffset, { align: "center" });
    //         yOffset += 10;
    //         doc.setDrawColor(133, 0, 157);
    //         doc.line(padding, yOffset, pageWidth - padding, yOffset);
    //         yOffset += 16;

    //         // Agenda Items
    //         const startIndex = page * itemsPerPage;
    //         const pageItems = agendaItems.slice(startIndex, startIndex + itemsPerPage);
    //         pageItems.forEach((item) => {
    //             doc.setFontSize(12);
    //             doc.setTextColor(176, 141, 87);
    //             doc.setFont("Helvetica", "bold");
    //             doc.text(item.time, padding, yOffset);

    //             doc.setTextColor(133, 0, 157);
    //             doc.setFont("Helvetica", "bold");
    //             const titleWidth = contentWidth - 45;
    //             const titleLines = doc.splitTextToSize(item.title, titleWidth);
    //             doc.text(titleLines, padding + 45, yOffset);
    //             yOffset += titleLines.length * 6 + 2;

    //             doc.setTextColor(54, 54, 54);
    //             doc.setFont("Helvetica", "normal");
    //             if (item.description) {
    //                 const descriptionLines = doc.splitTextToSize(item.description, titleWidth);
    //                 doc.text(descriptionLines, padding + 45, yOffset);
    //                 yOffset += descriptionLines.length * 6 + 4;
    //             }

    //             if (item.speakers) {
    //                 const speakerWidth = titleWidth;
    //                 const speakerLines = doc.splitTextToSize(`${item.speakers}`, speakerWidth);
    //                 doc.text(speakerLines, padding + 45, yOffset);
    //                 yOffset += speakerLines.length * 6 + 2;
    //             }

    //             if (item.moderator) {
    //                 doc.text(`${item.moderator}`, padding + 45, yOffset);
    //                 yOffset += 6;
    //             }

    //             yOffset += 12;
    //         });

    //         // Footer
    //         doc.setFontSize(10);
    //         doc.setTextColor(96, 96, 96);
    //         // doc.text("hello@theprocurementplug.com | +44 7447 163285", padding, pageHeight - padding);
    //         doc.text("© 2025 The Procurement Plug. All rights reserved", pageWidth - padding, pageHeight - padding, { align: "right" });
    //     }

    //     doc.save("Elevate_2025_Agenda.pdf");
    // };
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
                        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center space-x-2">
                            <button
                                onClick={() => alert("Available Soon")}
                                className="cursor-pointer px-4 py-1 bg-white text-[#85009D] rounded hover:bg-gray-200"
                            >
                                Download PDF
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 p-2 bg-white rounded">
                        <h3 className="text-3xl md:text-6xl font-bold text-center text-[#85009D]">ELEVATE 2026</h3>
                        <p className="text-center text-gray-600">PROCUREMENT CAREER & INNOVATION SUMMIT</p>
                        <p className="text-center text-gray-600">28th Jan 2026 | Digital Global Edition, UK</p>
                        <div className="w-full h-1 bg-[#85009D] rounded my-6"></div>
                        <p className="text-center text-gray-600 text-2xl">Available Soon ...</p>

                        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#363636]">
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
                        </div> */}
                    </div>
                </section>
            </main>
        </div>
    );
}
