"use client"
import React, { useState } from "react";
import ConsultingPartnerTile from "@/components/business-hub/vip-lounge/collaboration-influence/vip-forum/ConsultingPartnerTile";
import Image from "next/image";
import SalaryDownloadForm from "./SalaryDownloadForm";
import FeatureReportTile from "@/components/business-hub/vip-lounge/exclusive-intelligence-reports/market-research/FeatureReportTile";

const SalaryRoleTrackerCTR = () => {
    const [ShowForm, setShowForm] = useState(false)
    const [selectedTile, setSelectedTile] = useState(null);

    const collaboration = [
        {
            id: 1,
            heading: "Salary tracker",
            para: "Invite only discussion board",
            btntext: "View",
            url: "/business-hub/vip-lounge/talent-hiring-intelligence/salary-and-role-tracker",
        },
        {
            id: 2,
            heading: "Role tracker",
            para: "Invite only discussion board",
            btntext: "View",
            url: "/business-hub/vip-lounge/talent-hiring-intelligence/salary-and-role-tracker",
        },
        {
            id: 3,
            heading: "Employer insights",
            para: "Invite only discussion board",
            btntext: "View",
            url: "/business-hub/vip-lounge/talent-hiring-intelligence/salary-and-role-tracker",
        },
    ];

    const featuretile = [
        {
            id: 1,
            tag: "Sponsored",
            heading: "Procurement in the AI Era – 2025 Outlook",
            para: (
                <span className="flex items-center">
                    <span>Format: </span>
                    <Image
                        src="/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/pdf.png"
                        alt="PDF Icon"
                        width={23}
                        height={24}
                        className="ml-2"
                    />
                </span>
            ),
            btntext: "Download",
            bigimg: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/futuristic.png",
            // url: "/files/dummy.pdf",
            pathName: "/files/dummy.pdf"
        },
        {
            id: 2,
            tag: "Updated",
            heading: "UK Salary Tracker (Q2 Edition)",
            para: (
                <span className="flex items-center">
                    <span>Format: </span>
                    <Image
                        src="/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/pdf.png"
                        alt="PDF Icon"
                        width={23}
                        height={24}
                        className="ml-2"
                    />
                </span>
            ),
            btntext: "Download",
            bigimg: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/modernonitior.png",
            // url: "/files/dummy.pdf",
            pathName: "/files/dummy.pdf"
        },
        {
            id: 3,
            tag: "Sponsored",
            heading: "Top 5 Digital Procurement Vendors Comparison",
            para: (
                <span className="flex items-center">
                    <span>Format: </span>
                    <Image
                        src="/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/pdf.png"
                        alt="PDF Icon"
                        width={23}
                        height={24}
                        className="ml-2"
                    />
                </span>
            ),
            btntext: "Download",
            bigimg: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/bussiness.png",
            // url: "/files/dummy.pdf",
            pathName: "/files/dummy.pdf"
        },
        {
            id: 4,
            tag: "New",
            heading: "FM & Utilities Category Report",
            para: (
                <span className="flex items-center">
                    <span>Format: </span>
                    <Image
                        src="/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/pdf.png"
                        alt="PDF Icon"
                        width={23}
                        height={24}
                        className="ml-2"
                    />
                </span>
            ),
            btntext: "Download",
            bigimg: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/table.png",
            // url: "/files/dummy.pdf",
            pathName: "/files/dummy.pdf"
        },
    ];

    return (
        <>
            <div className="md:mb-8">
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                    Salary and Role Tracker
                </h3>
                <p className="max-w-[709px] md:text-xl text-[#1B1B1B] my-4">
                    Track salary trends, role shifts, and career progression to make smarter
                    hiring and workforce planning decisions.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {collaboration.map((partner) => (
                    <ConsultingPartnerTile
                        key={partner.id}
                        heading={partner.heading}
                        para={partner.para}
                        btntext={partner.btntext}
                        url={partner.url}
                    />
                ))}
            </div>
            <div className="">
                <h3 className="font-semibold text-2xl md:text-3xl my-8 text-[#1B1B1B]">
                    Latest Insights
                </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-4 md:mb-8">
                {featuretile.map((partner) => (
                    <FeatureReportTile
                        key={partner.id}
                        tag={partner.tag}
                        heading={partner.heading}
                        para={partner.para}
                        btntext={partner.btntext}
                        bigimg={partner.bigimg}
                        url={partner.url}
                        onButtonClick={() => {
                            setSelectedTile(partner);
                            setShowForm(true);
                        }}
                    />
                ))}
            </div>
            <SalaryDownloadForm
                isOpen={ShowForm}
                onClose={() => setShowForm(false)}
                tile={selectedTile}
            />

        </>
    );
};

export default SalaryRoleTrackerCTR;
