import HeroSection from "@/containers/personaldevelopmenthub/HeroSection";
import IndexBanner from "@/containers/personaldevelopmenthub/IndexBanner";
import InsideTheHub from "@/containers/personaldevelopmenthub/InsideTheHub";
import PartnerWithUsCont from "@/containers/personaldevelopmenthub/PartnerWithUsCont";

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