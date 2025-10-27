import PartnerWithUsComp from "@/components/business-hub/vip-lounge/PartnerWithUs";
import Link from "next/link";
export default function PartnerWithUsCont() {
    const partnerWithUs = {
        Partnerheader: {
            h3: "Partner with us",
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
            <PartnerWithUsComp data={partnerWithUs}/>
        </>
    )
}