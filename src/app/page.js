import MembershipComp from "./components/MembershipComp";
import MembershipCont from "./containers/MembershipCont";
import PartnershipEcosystem from "./containers/PartnershipEcosystem";
import PartnershipEcosystemCont from "./containers/PartnershipEcosystemCTA";
import WhatIsXecPlug from "./containers/WhatIsXecPlug";

export default function Home() {
  return (
    <>
      {/* Home Page */}
      <WhatIsXecPlug />
      <MembershipCont />

      <section className="flex flex-col gap-7 relative bg-gradient-to-b from-[#151515] to-[#151515]/0
      w-screen px-5 sm:px-10 md:px-18 lg:px-20 ml-[calc(50%-50vw)] py-10 md:py-20">
        
        <PartnershipEcosystemCont />
        <PartnershipEcosystem />
        
      </section>
      
    </>
  );
}
