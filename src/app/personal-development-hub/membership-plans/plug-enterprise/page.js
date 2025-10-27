import ContactusForm from "@/containers/personal-development-hub/membership-plans/plug-enterprise/ContactusForm";
import LetsTalk from "@/containers/personal-development-hub/membership-plans/plug-enterprise/LetsTalk";
import PlugEnterpriseHero from "@/containers/personal-development-hub/membership-plans/plug-enterprise/PlugEnterpriseHero";
import PlugListingsCont from "@/containers/personal-development-hub/membership-plans/plug-enterprise/PlugListingsCont";
import WhoIsPlugEnterpriseFor from "@/containers/personal-development-hub/membership-plans/plug-enterprise/WhoIsPlugEnterpriseFor";
import PartnerWithUsCont from "@/containers/personal-development-hub/PartnerWithUsCont";

export default function PlugEnterprise() {
    return (
        <>
            <section className="bg-[url('/images/personaldevelopmenthub/plugenterprise/PlugEnterpriseIndex-bg.png')] bg-cover bg-center
            w-screen ml-[calc(50%-50vw)] px-6 sm:px-10 md:px-14 lg:px-30 relative">
                <PlugEnterpriseHero />
                <PlugListingsCont />
                <WhoIsPlugEnterpriseFor />
                <LetsTalk />
                <PartnerWithUsCont />
                <ContactusForm/>

            </section>
        </>
    );
}