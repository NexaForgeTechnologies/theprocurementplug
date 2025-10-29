"use client"
import Breadcrumb from "@/components/BreadCrumbs";
import HeroCTR from "@/components/business-hub/BussinessHeroSection";
import InfoTile from "@/containers/personal-development-hub/welcome-to-the-mentors-coaches-directory/mentors-coaches-directory/category/mentor/InfoTitle";
import MentorDetails from "@/containers/personal-development-hub/welcome-to-the-mentors-coaches-directory/mentors-coaches-directory/category/mentor/MentorDetails";
import PartnerWithUsCont from "@/containers/personal-development-hub/welcome-to-the-mentors-coaches-directory/mentors-coaches-directory/category/mentor/PartnerWithUsCont";
import { useParams } from "next/navigation";

export default function MentorDetail() {
    const params = useParams();
    const { category } = params;
    const { mentor } = params;

    // Convert slug to readable title
    const formatTitle = (str) =>
        str
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

    const title = formatTitle(category);
    const id = mentor;
    return (
        <>
            <section>
                <HeroCTR
                    img="/images/personaldevelopmenthub/welcome-mentors-directory/mentors-coaches-directory/category/herosection.png"
                    heading={title}
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
                <MentorDetails />
                <PartnerWithUsCont />
            </section>
        </>
    )
}