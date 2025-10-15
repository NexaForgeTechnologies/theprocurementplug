import PartnerToolsComp from "@/components/business-hub/vip-lounge/exclusive-business-partners/partner-directory/PartnerToolsComp";

export default function PartnerToolsCont() {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
                <PartnerToolsComp
                    title={`Partner Tools`}
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, accusantium.`}
                    btnName={"Apply now"}
                />
                <PartnerToolsComp
                    title={`Partner Tools`}
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, accusantium.`}
                    btnName={"Apply now"}
                />
                <PartnerToolsComp
                    title={`Partner Tools`}
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, accusantium.`}
                    btnName={"Apply now"}
                />
            </section>
        </>
    )
}