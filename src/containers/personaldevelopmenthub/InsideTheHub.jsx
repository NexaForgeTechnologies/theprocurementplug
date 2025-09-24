import InsideTheHubComp from "@/components/personaldevelopmenthub/InsideTheHubComp";

export default function InsideTheHub() {
    return (
        <>
            <section className="flex flex-col gap-y-4">
                <h1 className="text-base md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent">What’s Inside the Hub </h1>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                    <InsideTheHubComp
                        src={"/images/personaldevelopmenthub/index/scholar.png"}
                        title="Monthly Masterclasses"
                        description={`Learn negotiation, leadership, supplier strategy, ESG & more
                    from industry experts.`}
                    />
                    <InsideTheHubComp
                        src={"/images/personaldevelopmenthub/index/gift.png"}
                        title="Exclusive Goody Bags"
                        description={`Download ready-to-use templates, checklists, and strategy
guides each month.`}
                    />
                    <InsideTheHubComp
                        src={"/images/personaldevelopmenthub/index/growth.png"}
                        title="Productivity and Well-Being"
                        description={`Ensure you're on track with your goals while keeping your
well-being at the forefront of your growth.`}
                    />
                    <InsideTheHubComp
                        src={"/images/personaldevelopmenthub/index/dollar.png"}
                        title="Salary Benchmarking & Career Checklists"
                        description={`Instantly see how your earnings compare across roles &
industries. Plan your next  step.`}
                    />
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <InsideTheHubComp
                        src={"/images/personaldevelopmenthub/index/handshake.png"}
                        title="Mentorship & Coaching
Directory"
                        description={`Connect with seasoned procurement
leaders, CIPS coaches, well-being
specialists & more.`}
                    />
                    <InsideTheHubComp
                        src={"/images/personaldevelopmenthub/index/settings.png"}
                        title="Real-World Challenges & 30-Day Sprints"
                        description={`Sharpen your category, stakeholder, and commercial decision-making.`}
                    />
                    <InsideTheHubComp
                        src={"/images/personaldevelopmenthub/index/tag.png"}
                        title="Branding, LinkedIn &
Certification Prep"
                        description={`Build a powerful procurement portfolio,
optimize your LinkedIn, and prep for
certifications like CIPS, PMP, Six Sigma.`}
                    />
                    <InsideTheHubComp
                        src={"/images/personaldevelopmenthub/index/compass.png"}
                        title="Career SWOTs, Inspiration
Boards & Networking Plans"
                        description={`Visual tools to map your goals, strengthen
connections, and reflect on your growth.`}
                    />
                    <InsideTheHubComp
                        src={"/images/personaldevelopmenthub/index/flower.png"}
                        title="My Elevate Bloom Journal
+ VIP Discounts"
                        description={`Document breakthroughs & secure
exclusive member discounts to Elevate
Bloom events.`}
                    /><InsideTheHubComp
                        src={"/images/personaldevelopmenthub/index/trophy.png"}
                        title="Earn Plug Badges"
                        description={`Celebrate your milestones and showcase
your journey.`}
                    />
                </section>
            </section>
        </>
    );
}