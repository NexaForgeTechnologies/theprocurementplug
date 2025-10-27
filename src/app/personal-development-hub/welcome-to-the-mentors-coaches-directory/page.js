import Breadcrumb from "@/components/BreadCrumbs";
import HeroCTR from "@/components/business-hub/BussinessHeroSection";
import CardsGrid from "@/containers/personal-development-hub/welcome-to-the-mentors-coaches-directory/CardsGrid";
import PartnerWithUsCont from "@/containers/personal-development-hub/welcome-to-the-mentors-coaches-directory/PartnerWithUsCont";
import WelcomeCTR from "@/containers/personal-development-hub/welcome-to-the-mentors-coaches-directory/WelcomeCTR";

export default function WelcomeMentorsCoachesDirectory() {
    return (
        <>
            <section>
                <HeroCTR
                    img="/images/personaldevelopmenthub/welcome-mentors-directory/herosection.png"
                    heading="Welcome to the Mentors Coaches Directory "
                    para={
                        <>
                            Whether you&apos;re just beginning your procurement journey
                            or striving to reach new professional heights, you&apos;re in the
                            right place.
                            <br /><br /><br />
                        </>
                    }

                />
                <Breadcrumb />
                <WelcomeCTR />
                <CardsGrid />
                <PartnerWithUsCont />
            </section>
        </>
    );
}