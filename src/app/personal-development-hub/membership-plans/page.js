import ChooseMembershipPlans from "@/containers/personal-development-hub/membership-plans/ChooseMembershipPlans";
import MembershipPlansHero from "@/containers/personal-development-hub/membership-plans/MembershipPlansHero";
import PartnerWithUsCont from "@/containers/personal-development-hub/PartnerWithUsCont";

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