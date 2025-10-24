'use client';
import { useState } from "react";
import JobTileComp from "@/components/business-hub/vip-lounge/talent-hiring-intelligence/the-plug-job-board/job-listing/JobTileComp";
import QuickFilterCont from "./QuickFilterCont";
import JobApplicationForm from "./JobApplicationForm";
import { set } from "zod";

export default function JobListingCTR() {
    const [isOpen, setIsOpen] = useState(false);
    const [JobData, setJobData] = useState(null);
    const JobListings = [
        {
            jobTitle: "Procurement Analyst",
            Employer: "XYZ Corporation — Lahore, Pakistan",
            JobType: "Full-Time | On-site",
            Posted: "2 Hour Ago",
            Description: "Support procurement operations, manage supplier relationships, and analyze cost-saving opportunities.",
            BtnName: "Apply Now",
            url: "/",
        },
        {
            jobTitle: "Business Analyst",
            Employer: "ABC Solutions — Karachi, Pakistan",
            JobType: "Part-Time | Remote",
            Posted: "1 Day Ago",
            Description: "Analyze business processes, identify gaps, and deliver actionable insights.",
            BtnName: "Apply Now",
            url: "/",
        },
        {
            jobTitle: "Software Developer",
            Employer: "TechNova — Islamabad, Pakistan",
            JobType: "Full-Time | Hybrid",
            Posted: "3 Days Ago",
            Description: "Develop, test, and maintain web applications using modern frameworks.",
            BtnName: "Apply Now",
            url: "/",
        },
        {
            jobTitle: "Software Developer",
            Employer: "TechNova — Islamabad, Pakistan",
            JobType: "Full-Time | Hybrid",
            Posted: "3 Days Ago",
            Description: "Develop, test, and maintain web applications using modern frameworks.",
            BtnName: "Apply Now",
            url: "/",
        },
        {
            jobTitle: "Software Developer",
            Employer: "TechNova — Islamabad, Pakistan",
            JobType: "Full-Time | Hybrid",
            Posted: "3 Days Ago",
            Description: "Develop, test, and maintain web applications using modern frameworks.",
            BtnName: "Apply Now",
            url: "/",
        },
    ];

    const BtnClickHandle = (e) => {
        setIsOpen(!isOpen);
        setJobData(e);
    }
    return (
        <>
            <section className="flex flex-col sm:flex-row items-start sm:gap-3 relative">

                {/* Sidebar container to isolate sticky behavior */}
                <div className="w-full lg:max-w-[25%] shadow-lg md:shadow-none overflow-y-auto mb-5 hide-scrollbar sticky top-19 z-40 md:top-25 ">
                    <QuickFilterCont />
                </div>

                {/* Main content area */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {JobListings.map((job, index) => (
                        <JobTileComp
                            key={index}
                            jobTitle={job.jobTitle}
                            Employer={job.Employer}
                            JobType={job.JobType}
                            Posted={job.Posted}
                            Description={job.Description}
                            BtnName={job.BtnName}
                            BtnOnClick={() => BtnClickHandle(job)}
                        />
                    ))}
                </div>
            </section>
            <JobApplicationForm isOpen={isOpen} onClose={() => setIsOpen(false)} JobData={JobData} />
        </>
    );
}
