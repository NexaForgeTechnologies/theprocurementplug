import PartnerToolsComp from "@/components/business-hub/vip-lounge/exclusive-business-partners/partner-directory/PartnerToolsComp";

export default function PartnerToolsCont() {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
                <PartnerToolsComp
                    src={'/images/bussiness-hub/vip-lounge/exclusive-business-partners/categorylogo.png'}
                    title={`GlowCart`}
                    tagline={`Tagline: Where Trends Light Up`}
                    category={`Category: E-commerce`}
                    btnName={"Apply now"}
                />
            </section>
        </>
    )
}