import Breadcrumb from "@/components/BreadCrumbs";
import HeroCTR from "@/components/business-hub/BussinessHeroSection";
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import PartnerToolsCont from "@/containers/business-hub/vip-lounge/exclusive-business-partners/partner-directory/PartnerToolsCont";
import Link from "next/link";

export default function PartnerDirectory() {
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
                heading: "Partners hub",
                text: "",
                link: "",
                linkText: "View Details",
                bgColor: ""
            },
            {
                id: 2,
                heading: "Events hub",
                text: "",
                link: "",
                linkText: "View Details",
                bgColor: ""
            },
            {
                id: 3,
                heading: "Business hub",
                text: "",
                link: "",
                linkText: "View Details",
                bgColor: ""
            }
        ]
    }

    return (
        <>
            <div>
                <HeroCTR
                    img="/images/bussiness-hub/vip-lounge/exclusive-business-partners/herosection.png"
                    heading={
                        <span className="flex flex-col gap-0 leading-none">
                            <span className="font-extrabold whitespace-nowrap">Partner Directory</span>
                        </span>
                    }
                    para="Explore our curated network of trusted partners, collaborators, and service providers within the procurement ecosystem. Use the directory to discover key organizations, connect with industry experts, and find the right solutions to support your goals."
                />
                <Breadcrumb />
                <PartnerToolsCont />
                <PartnerWithUsComp data={partnerWithUs} />

            </div>
        </>
    )
}