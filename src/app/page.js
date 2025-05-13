import CoFeatureCTR from "@/containers/home/co-feature/CoFeatureCTR";
import ImgTxtCTR from "@/containers/home/img-txt/ImgTxtCTR";
import ImgTxtBgCTR from "@/containers/home/img-txt-with-bg/ImgTxtBgCTR";
import InfoTileCTR from "@/containers/home/info-tile/InfoTileCTR";
import TalkToTeamCTR from "@/containers/home/talk-to-team/TalkToTeamCTR";
import ResourceLibraryCTR from "@/containers/home/resource-library/ResourceLibraryCTR";
import PartnerCTR from "@/containers/home/partners/PartnerCTR";
import HeroCTR from "@/containers/home/hero/HeroCTR";

export default function Home() {

  return (
    <>
      <HeroCTR />
      <InfoTileCTR />
      <CoFeatureCTR />
      <div className="bg-[#212121] p-6 md:p-8 rounded-2xl">
        <h3 className="font-extrabold text-3xl md:text-5xl mb-4 text-[#ffffff]">Charity Support at The Procurement Plug</h3>
        <p className="text-sm md:text-lg leading-normal md:leading-relaxed text-[#ffffff]">At The Procurement Plug, we are passionate about giving back to the community. In addition to offering discounted rates on job postings for charities, we encourage procurement professionals to contribute their expertise by supporting charitable organisations on short-term projects. Whether its offering strategic advice, managing procurement processes, or delivering specialised skills, our community of professionals is dedicated to helping charities achieve their goals and make a meaningful impact. Together, we can create positive change in the world through procurement.</p>
      </div>
      <ImgTxtCTR />
      <ImgTxtBgCTR />
      <ResourceLibraryCTR />
      <TalkToTeamCTR />
      <PartnerCTR />
    </>
  );
}
