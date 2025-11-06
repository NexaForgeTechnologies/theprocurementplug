"use client";
import { useEffect, useState } from "react";
import PartnerToolsComp from "@/components/business-hub/vip-lounge/exclusive-business-partners/partner-directory/PartnerToolsComp";

export default function PartnerToolsCont() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const res = await fetch("/api/business-hub/vip-lounge/exclusive-business-partners/partners-directory");
                const data = await res.json();
                console.log("data from db : ", data.data);
                setPartners(data.data || []); // data.data because API returns { success, data }
            } catch (error) {
                console.error("Error fetching partners:", error);
            }
        };
        fetchPartners();
    }, []);

    const categoryOptions = [
        { id: 1, value: "E-commerce" },
        { id: 2, value: "CyberSecurity" },
        { id: 3, value: "Sustainable Product" },
        { id: 4, value: "Software Development" },
    ];

    const getCategoryName = (categoryId) => {
        const found = categoryOptions.find((opt) => opt.id === categoryId);
        return found ? found.value : "Unknown";
    };

    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
                {partners.map((partner, i) => (
                    <PartnerToolsComp
                        key={i}
                        src={partner.logo || '/images/bussiness-hub/vip-lounge/exclusive-business-partners/categorylogo.png'}
                        title={partner.title}
                        tagline={`${partner.tagline}`}
                        category={`${getCategoryName(partner.category_id)}`}
                        description={`${partner.description}`}
                        SiteLink={`${partner.website}`}
                        btnName="Website Link"
                    />
                ))}
            </section>
        </>
    )
}