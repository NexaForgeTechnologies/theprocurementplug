import Breadcrumb from "@/components/BreadCrumbs";
import HeroCTR from "@/components/business-hub/BussinessHeroSection";
import Link from "next/link";
import PartnerWithUsComp from "@/components/business-hub/vip-lounge/PartnerWithUs";
import HubsCTR from "./HubsCTR";

export default function CommunityHubCTR() {
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
                bgColor: "#85009D"
            },
            {
                id: 2,
                heading: "Collaboration and Thought Leadership ZONE",
                text: "",
                link: "",
                linkText: "View Details",
                bgColor: "#85009D"
            },
            {
                id: 3,
                heading: "Community Hub",
                text: "",
                link: "",
                linkText: "View Details",
                bgColor: "#85009D"
            }
        ]
    };

    return (
        <>
            <section>
                <HeroCTR
                    img="/images/community-hub/index/Hero-Img.png"
                    heading={`Welcome to The Procurement Plug Community Hub!`}
                    para={`Be part of a growing ecosystem designed to connect top procurement talent with the right opportunities.`}
                />
                <Breadcrumb />
                <div className="mb-8 flex flex-col gap-y-3">
                    <h3 className="font-semibold text-xl md:text-2xl text-[#1B1B1B]">
                        Welcome to The Procurement Plug Community Hub!
                    </h3>
                    <p className="md:text-lg text-[#1B1B1B] font-medium">
                        Be part of a growing ecosystem designed to connect top procurement talent with the right opportunities.
                    </p>
                    <p className="md:text-lg text-[#1B1B1B]">
                        Whether you're posting roles, browsing CVs, or engaging with our community - you’re in the right place to find skilled, motivated professionals across the procurement industry.
                    </p>
                    <p className="md:text-lg text-[#1B1B1B]">
                        Let’s streamline hiring and power the future of procurement together!
                    </p>
                </div>

                <h3 className="font-semibold text-xl md:text-2xl text-[#1B1B1B] mb-4">
                    Welcome to The Procurement Plug Community Hub!
                </h3>
                <HubsCTR />
                <PartnerWithUsComp data={partnerWithUs} />

            </section>
        </>
    )
}