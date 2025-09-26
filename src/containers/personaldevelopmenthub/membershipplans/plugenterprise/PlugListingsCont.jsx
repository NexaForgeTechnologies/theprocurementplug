export default function PlugListingsCont() {
    const data = [
        {
            title: [`Why Plug Enterprise?`],
            description1: `Plug Enterprise is the corporate learning tier of the Personal Development Hub — built to help companies:`,
            description2: `Whether you're growing a new team or transforming a mature one — Plug Enterprise provides career development at scale.`,
            list: [
                `Upskill their procurement professionals`,
                `Retain and inspire top talent`,
                `Track learning ROI across your department`,
            ]
        },
        {
            title: [`What Your Organization Gets:`],
            list: [
                `All Plug Ascend Benefits for Each Team Member`,
                `Monthly Masterclasses from procurement leaders`,
                `Track learning ROI across your department`,
                `Real-world challenges & 30-day development sprints`,
                `Salary benchmarking & CV branding tools`,
                `Goody bags, expert Q&As, and interactive career planners`,
                `Personal milestone tracking and badge-based engagement`,
            ]
        },
        {
            title: [`Your Manager/HR Dashboard`],
            list: [
                `Admin access to add/remove team members`,
                `View engagement, badge progression, and planner usage`,
                `Download team progress reports`,
                `Custom insights: what your team’s learning, where they’re growing, and what they need next`,
            ]
        },
        {
            title: [`Private Team Perks`],
            list: [
                `Optional private masterclasses tailored to your sector or challenges`,
                `Quarterly impact reports showing team growth & feedback`,
                `20%+ off Elevate Bloom tickets for all your team members`,
                `Early access to new features, tools, and content`,
                `Invite-only corporate networking opportunities`,
            ]
        }
    ];

    return (
        <>
            <section className="flex flex-col gap-10">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col items-start justify-start gap-y-4 text-white">
                        <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent text-center">
                            {item.title}
                        </h1>
                        {item.description1 && <p>{item.description1}</p>}
                        <ul>
                            {item.list.map((listItem, idx) => (
                                <li key={idx} className="flex gap-x-2 items-start mb-2">
                                    <span className="w-3 h-3 inline-block mr-2 bg-[#B08D57] rounded-full relative top-1 shrink-0 text-sm md:text-base" />
                                    <p>{listItem}</p>
                                </li>
                            ))}
                        </ul>
                        {item.description2 && <p>{item.description2}</p>}
                    </div>
                ))}
            </section>
        </>
    );
}
