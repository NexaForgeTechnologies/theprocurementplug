import FormApplication from "../containers/FormApplication";
import FoundingCTA from "../containers/FoundingCTA";
import HeroCont from "../containers/HeroCont";
import InvestorOpportunity from "../containers/InvestorOpportunity";
import MembershipCont from "../containers/MembershipCont";
import OperatingModel from "../containers/OperatingModel";
import PartnershipEcosystem from "../containers/PartnershipEcosystem";
import PartnershipEcosystemCont from "../containers/PartnershipEcosystemCTA";
import WhatIsXecPlug from "../containers/WhatIsXecPlug";

export default function Home() {
  return (
    <>

      <HeroCont />
      <WhatIsXecPlug />
      <OperatingModel />
      <MembershipCont />

      <section className="flex flex-col gap-7 relative bg-gradient-to-b from-[#151515] to-[#151515]/0
      w-screen px-5 sm:px-10 md:px-18 lg:px-20 ml-[calc(50%-50vw)] pt-15 pb-20 md:py-20">
        <PartnershipEcosystemCont />
        <FoundingCTA />
        <PartnershipEcosystem />
      </section>

      <InvestorOpportunity />
      <FormApplication />
    </>
  );
}
