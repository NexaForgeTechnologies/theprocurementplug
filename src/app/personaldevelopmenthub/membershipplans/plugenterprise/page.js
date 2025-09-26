import LetsTalk from "@/containers/personaldevelopmenthub/membershipplans/plugenterprise/LetsTalk";
import PlugEnterpriseHero from "@/containers/personaldevelopmenthub/membershipplans/plugenterprise/PlugEnterpriseHero";
import PlugListingsCont from "@/containers/personaldevelopmenthub/membershipplans/plugenterprise/PlugListingsCont";
import WhoIsPlugEnterpriseFor from "@/containers/personaldevelopmenthub/membershipplans/plugenterprise/WhoIsPlugEnterpriseFor";
import PartnerWithUsCont from "@/containers/personaldevelopmenthub/PartnerWithUsCont";

export default function PlugEnterprise() {
    return (
        <>
            <section className="bg-[url('/images/personaldevelopmenthub/plugenterprise/PlugEnterpriseIndex-bg.png')] bg-cover bg-center
            w-screen ml-[calc(50%-50vw)] px-6 sm:px-10 md:px-14 lg:px-30">
                <PlugEnterpriseHero />
                <PlugListingsCont />
                <WhoIsPlugEnterpriseFor />
                <LetsTalk />
                <PartnerWithUsCont />

            </section>
        </>
    );
}