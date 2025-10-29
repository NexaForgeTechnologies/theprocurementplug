import MentorsCard from "@/components/personal-development-hub/welcome-to-the-mentors-coaches-directory/mentors-coaches-directory/category/MentorsCard";

export default function FeaturedExperts({ title }) {
    const FeaturedExperts = [
        {
            id: 1,
            src: "/images/personaldevelopmenthub/welcome-mentors-directory/mentors-coaches-directory/category/anna.png",
            title: "Anna Stevens"
        },
        {
            id: 2,
            src: "/images/personaldevelopmenthub/welcome-mentors-directory/mentors-coaches-directory/category/anna.png",
            title: "Anna Stevens"
        },
    ]
    return (
        <>
            <section>
                <div className="flex flex-col gap-y-2 mb-10">
                    <h3 className="font-semibold text-lg md:text-xl text-[#1B1B1B]">
                        {title} Mentors
                    </h3>
                    <p className="max-w-[954px] md:text-lg text-[#1B1B1B]">
                        Connect with mentors and coaches experienced in {title} metholos.
                    </p>
                </div>
                <section aria-label="Featured Experts">
                    <h3 className="font-semibold text-lg md:text-xl text-[#1B1B1B] mb-5">
                        Featured Experts
                    </h3>
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                        {FeaturedExperts.map((experts) => (
                            <div key={experts.id}>
                                <MentorsCard
                                    src={experts.src}
                                    title={experts.title} />
                            </div>
                        ))}
                    </section>
                </section>
            </section>
        </>
    );
}