import Breadcrumb from "@/components/BreadCrumbs";
import HeroCTR from "@/components/business-hub/BussinessHeroSection";
import MentorsCoachesCTR from "@/containers/personal-development-hub/welcome-to-the-mentors-coaches-directory/mentors-coaches-directory/MentorsCoachesCTR";
import PartnerWithUsCont from "@/containers/personal-development-hub/welcome-to-the-mentors-coaches-directory/mentors-coaches-directory/PartnerWithUsCont";

export default function MentorsCoachesDirectory() {
    return (
        <>
            <section>
                <HeroCTR
                    img="/images/personaldevelopmenthub/welcome-mentors-directory/herosection.png"
                    heading="Mentors Coaches Directory "
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
                <MentorsCoachesCTR />
                <PartnerWithUsCont />
            </section>
        </>
    );
}