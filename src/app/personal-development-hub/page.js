import HeroSection from "@/containers/personal-development-hub/HeroSection";
import IndexBanner from "@/containers/personal-development-hub/IndexBanner";
import InsideTheHub from "@/containers/personal-development-hub/InsideTheHub";
import PartnerWithUsCont from "@/containers/personal-development-hub/PartnerWithUsCont";

export default function PersonalDevelopmentHub() {
    return (
        <>
            <section className="bg-[url('/images/personaldevelopmenthub/index/index-bg.png')] bg-cover bg-center
            w-screen ml-[calc(50%-50vw)] px-6 sm:px-10 md:px-14 lg:px-30">
                <HeroSection />
                <InsideTheHub />
                <IndexBanner />
                <PartnerWithUsCont />
            </section>
        </>
    );
}