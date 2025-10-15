import JobTileComp from "@/components/business-hub/vip-lounge/talent-hiring-intelligence/the-plug-job-board/job-listing/JobTileComp";
import QuickFilterCont from "./QuickFilterCont";

export default function JobListingCTR() {
    return (
        <>
            <section className="flex gap-3 relative">
                <QuickFilterCont />
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <JobTileComp
                    jobTitle="Procurement Analyst"
                    Employer={`XYZ Corporation — Lahore, Pakistan`}
                    JobType={`Full-Time | On-site`}
                    Posted={`2 Hour Ago`}
                    Description={`Support procurement operations, manage supplier relationships, and analyze cost-saving opportunities.`}
                    BtnName="Apply Now" 
                    url="/" />
                    <JobTileComp />
                </section>
            </section>
        </>
    )
}