"use client";
import Breadcrumb from "@/components/BreadCrumbs";
import HeroCTR from "@/components/business-hub/BussinessHeroSection";
import AllMentorsCTR from "@/containers/personal-development-hub/welcome-to-the-mentors-coaches-directory/mentors-coaches-directory/category/AllMentorsCTR";
import FeaturedExperts from "@/containers/personal-development-hub/welcome-to-the-mentors-coaches-directory/mentors-coaches-directory/category/FeaturedExperts";
import PartnerWithUsCont from "@/containers/personal-development-hub/welcome-to-the-mentors-coaches-directory/mentors-coaches-directory/category/PartnerWithUsCont";
import { useParams } from "next/navigation";

export default function CategoryPage() {
    const params = useParams(); // App Router way to get dynamic route
    const { category } = params;

    // Convert slug to readable title
    const formatTitle = (str) =>
        str
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

    const title = formatTitle(category);

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
                <FeaturedExperts title={title} />
                <AllMentorsCTR title={title} />
                <PartnerWithUsCont />
            </section>
        </>
    );
}
