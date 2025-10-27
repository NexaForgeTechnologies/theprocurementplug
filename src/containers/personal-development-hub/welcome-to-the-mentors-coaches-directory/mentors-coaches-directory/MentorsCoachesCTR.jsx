import CommunityCardsComp from "@/components/the-plug-community-hub/CommunityCardsComp";
import Link from "next/link";

export default function MentorsCoachesCTR() {
    // Helper function to create URL-friendly slugs
    const slugify = (text) =>
        text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

    const Directory = [
        {
            title: "Procurement",
            src: "/images/personaldevelopmenthub/welcome-mentors-directory/mentors-coaches-directory/procurement.png",
            btnName: "View Details",
        },
        {
            title: "Six Sigma",
            src: "/images/personaldevelopmenthub/welcome-mentors-directory/mentors-coaches-directory/six-sigma.png",
            btnName: "View Details",
        },
        {
            title: "Health and Well-being",
            src: "/images/personaldevelopmenthub/welcome-mentors-directory/mentors-coaches-directory/health.png",
            btnName: "View Details",
        },
        {
            title: "CiPS Study Support",
            src: "/images/personaldevelopmenthub/welcome-mentors-directory/mentors-coaches-directory/study.png",
            btnName: "View Details",
        },
        {
            title: "Executive Coaching",
            src: "/images/personaldevelopmenthub/welcome-mentors-directory/mentors-coaches-directory/executive.png",
            btnName: "View Details",
        },
        {
            title: "Sustainability",
            src: "/images/personaldevelopmenthub/welcome-mentors-directory/mentors-coaches-directory/sustainability.png",
            btnName: "View Details",
        },
    ].map((item) => ({
        ...item,
        href: `/personal-development-hub/welcome-to-the-mentors-coaches-directory/mentors-coaches-directory/${slugify(item.title)}`,
    }));

    return (
        <section>
            <div className="flex flex-col gap-y-3 mb-20">
                <h3 className="font-semibold text-lg md:text-xl text-[#1B1B1B]">
                    Mentors Coaches Directory
                </h3>
                <p className="max-w-[954px] md:text-lg text-[#1B1B1B]">
                    Find a mentor or coach to guide you in your Career
                </p>

                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {Directory.map((item, index) => (
                        <Link key={index} href={item.href}>
                            <CommunityCardsComp
                                src={item.src}
                                title={item.title}
                                btnName={item.btnName}
                            />
                        </Link>
                    ))}
                </section>
            </div>
        </section>
    );
}
