import InsideTheHubComp from "@/components/personal-development-hub/InsideTheHubComp";

export default function InsideTheHub() {
    const firstSectionData = [
        {
            src: "/images/personaldevelopmenthub/index/scholar.png",
            title: "Monthly Masterclasses",
            description: `Learn negotiation, leadership, supplier strategy, ESG & more from industry experts.`,
        },
        {
            src: "/images/personaldevelopmenthub/index/gift.png",
            title: "Exclusive Goody Bags",
            description: `Download ready-to-use templates, checklists, and strategy guides each month.`,
        },
        {
            src: "/images/personaldevelopmenthub/index/growth.png",
            title: "Productivity and Well-Being",
            description: `Ensure you're on track with your goals while keeping your well-being at the forefront of your growth.`,
        },
        {
            src: "/images/personaldevelopmenthub/index/dollar.png",
            title: "Salary Benchmarking & Career Checklists",
            description: `Instantly see how your earnings compare across roles & industries. Plan your next step.`,
        },
    ];

    const secondSectionData = [
        {
            CardUrl: "/personal-development-hub/welcome-to-the-mentors-coaches-directory",
            src: "/images/personaldevelopmenthub/index/handshake.png",
            title: "Mentorship & Coaching Directory",
            description: `Connect with seasoned procurement leaders, CIPS coaches, well-being specialists & more.`,
        },
        {
            src: "/images/personaldevelopmenthub/index/settings.png",
            title: "Real-World Challenges & 30-Day Sprints",
            description: `Sharpen your category, stakeholder, and commercial decision-making.`,
        },
        {
            src: "/images/personaldevelopmenthub/index/tag.png",
            title: "Branding, LinkedIn & Certification Prep",
            description: `Build a powerful procurement portfolio, optimize your LinkedIn, and prep for certifications like CIPS, PMP, Six Sigma.`,
        },
        {
            src: "/images/personaldevelopmenthub/index/compass.png",
            title: "Career SWOTs, Inspiration Boards & Networking Plans",
            description: `Visual tools to map your goals, strengthen connections, and reflect on your growth.`,
        },
        {
            src: "/images/personaldevelopmenthub/index/flower.png",
            title: "My Elevate Bloom Journal + VIP Discounts",
            description: `Document breakthroughs & secure exclusive member discounts to Elevate Bloom events.`,
        },
        {
            src: "/images/personaldevelopmenthub/index/trophy.png",
            title: "Earn Plug Badges",
            description: `Celebrate your milestones and showcase your journey.`,
        },
    ];

    return (
        <section className="flex flex-col gap-y-4">
            <h1 className="text-base md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent">
                What’s Inside the Hub
            </h1>

            {/* First grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                {firstSectionData.map((item, index) => (
                    <InsideTheHubComp key={index} {...item} />
                ))}
            </section>

            {/* Second grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {secondSectionData.map((item, index) => (
                    <InsideTheHubComp key={index} {...item} />
                ))}
            </section>
        </section>
    );
}
