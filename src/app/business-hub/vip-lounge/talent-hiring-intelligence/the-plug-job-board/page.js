import Breadcrumb from '@/components/BreadCrumbs'
import HeroCTR from '@/components/business-hub/BussinessHeroSection'
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import GetStartedCont from '@/containers/business-hub/vip-lounge/talent-hiring-intelligence/the-plug-job-board/GetStartedCont'
import ThePlugJobBoardCTR from '@/containers/business-hub/vip-lounge/talent-hiring-intelligence/the-plug-job-board/ThePlugJobBoardCTR'
import Link from 'next/link'
export default function ThePlugJobBoard() {
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
                heading: "Collaboration and Thought Leadership ZONE",
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
            <HeroCTR
                img="/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/the-plug-job-board/herosection.png"
                heading={<span className='flex flex-col gap-0 leading-none'>
                    <span className="font-extrabold">Welcome to
                        The Plug Job Board
                    </span>
                </span>}
                para="Your Gateway to Procurement Career Growth & Talent Discovery"
            />
            <Breadcrumb />
            <ThePlugJobBoardCTR />
            <GetStartedCont />
            <PartnerWithUsComp data={partnerWithUs} />
        </>
    )
}