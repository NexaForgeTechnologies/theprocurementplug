import ListCard from "../components/ListCard";
export default function WhatIsXecPlug() {
    return (
        <>
            <section className="flex flex-col gap-7 relative py-10">

                <div className="text-center flex flex-col items-center justify-center gap-y-3">
                    <div>
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-[#B08D57]">
                            What is
                        </h1>
                        <img src="/logo.png" alt="logo" className="w-30 sm:w-35 md:w-40 h-auto" />
                    </div>
                    
                    <p className="text-base text-[#C2C2C2] max-w-250">A uniquely positioned, fully integrated, first-of-its-kind  global leadership solution combining proprietary
                        executive tools, peer exchange, and enterprise coaching for procurement’s future boardroom leaders. </p>

                    <p className="text-base text-[#C2C2C2] max-w-250">The Xec Plug model blends advanced executive learning, strategic peer exchange, proprietary leadership intelligence tools, and enterprise leadership coaching into one integrated leadership ecosystem. This combination allows us to address the full range of enterprise leadership capability needed for procurement executives to succeed at the highest level.</p>
                </div>

                <section className="grid grid-cols-1 lg:grid-cols-2 bg-[#151515] border border-[#444444] p-5 md:p-10 rounded gap-5 md:gap-10">

                    <div className="relative flex items-center justify-center rounded overflow-hidden
                     ">
                        <img src="/leading.png" alt="what-is-xecplug" className="w-full" />
                    </div>

                    <div className="lg:row-start-1">
                        <ListCard
                            heading={"Proprietary Leadership Tools:"}
                            description={"At the core of Xec Plug is our proprietary leadership intelligence suite, designed specifically for procurement leaders targeting enterprise and boardroom roles. These tools will deliver:"}
                            description2={"The tool suite is being designed to directly strengthen board-level contribution, accelerate leadership agility, and support the holistic development of procurement executives as enterprise leaders."}
                            bullet={"Data-driven leadership insights"}
                            bullet2={"Personal skills and leadership benchmarking"}
                            bullet3={"Peer-to-peer learning and mentorship with CEOs, COOs, and senior enterprise leaders"}
                            bullet4={"Innovation and transformation analytics"}
                            bullet5={"Mental health and wellbeing management"}
                            bullet6={"Emotional intelligence development"}
                            bullet7={"Boardroom readiness index"}
                            hide8={"hidden"}
                            hide9={"hidden"}
                            hide10={"hidden"}
                        />
                    </div>

                    <div className="relative flex items-center justify-center rounded overflow-hidden
                     mb-5 lg:mb-0 ">
                        <img src="/network.png" alt="what-is-xecplug" className="w-full " />
                    </div>

                    <div className="">
                        <ListCard
                            heading={"Expert Network Integration:"}
                            description={"To ensure depth, relevance, and applied learning, Xec Plug incorporates a curated faculty of subject matter experts, some of which includes: "}

                            bullet={"Behavioural Scientists"}
                            bullet2={"Economists"}
                            bullet3={"ESG Specialists"}
                            bullet4={"Actuaries"}
                            bullet5={"Leadership and Executive Coaches"}
                            bullet6={"Personal Branding Advisors"}
                            bullet7={"M&A Advisors"}
                            bullet8={"Public Speaking & Media Trainers"}
                            bullet9={"Policy Specialists"}
                            bullet10={"Executive Recruiters"}
                        />
                    </div>

                </section>
            </section>
        </>
    );
}
