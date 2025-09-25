import ChooseMembershipPlans from "@/containers/personaldevelopmenthub/membershipplans/ChooseMembershipPlans";
import MembershipPlansHero from "@/containers/personaldevelopmenthub/membershipplans/MembershipPlansHero";
import PartnerWithUsCont from "@/containers/personaldevelopmenthub/PartnerWithUsCont";

export default function MembershipPlans() {
    return (
        <>
            <section className="bg-[url(/images/personaldevelopmenthub/membershipplans/membership-bg.png)] bg-cover bg-center w-screen ml-[calc(50%-50vw)] px-6 sm:px-10 md:px-14 lg:px-30">
                <MembershipPlansHero />
                <ChooseMembershipPlans />
                <PartnerWithUsCont />

            </section>
        </>

    )
}