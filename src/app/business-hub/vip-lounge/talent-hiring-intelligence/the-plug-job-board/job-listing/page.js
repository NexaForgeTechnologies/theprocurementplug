import Breadcrumb from '@/components/BreadCrumbs'
import HeroCTR from '@/components/business-hub/BussinessHeroSection'
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import JobListingCTR from '@/containers/business-hub/vip-lounge/talent-hiring-intelligence/the-plug-job-board/job-listing/JobListingCTR'
import Link from 'next/link'

export default function JobListing() {
    const partnerWithUs = {
        Partnerheader: {
            h3: "Partner With Us",
            p: (
                <>
                    <a
                        href="mailto:partnerships@theprocurementplug.com"
                        className="font-semibold text-white hover:underline"
                    >
                        partnerships@theprocurementplug.com
                    </a> -{' '}
                    <Link className="font-light" href="/partnerships">
                        Visit our partnership page
                    </Link>
                </>
            )
        },
        items: [
            {
                id: 1,
                heading: "The Procurement Plug Academy",
                text: "",
                link: "",
                linkText: "View Details",
                bgColor: ""
            },
            {
                id: 2,
                heading: `Collaboration and Thought Leadership ZONE`,
                text: "",
                link: "",
                linkText: "View Details",
                bgColor: ""
            },
            {
                id: 3,
                heading: "Community Hub",
                text: "",
                link: "",
                linkText: "View Details",
                bgColor: ""
            }
        ]
    }

    return (
        <>
            <section>
                <HeroCTR
                    img="/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/the-plug-job-board/job-listing/herosection.png"
                    heading={
                        <span className='flex flex-col gap-0 leading-none'>
                            <span className="font-extrabold">Job Listing page</span>
                        </span>}
                    para={`Your Gateway to Procurement Career Growth & Talent Discovery`}
                />
                <Breadcrumb />
                <JobListingCTR />
            </section>
            <PartnerWithUsComp data={partnerWithUs} />
        </>
    )
}