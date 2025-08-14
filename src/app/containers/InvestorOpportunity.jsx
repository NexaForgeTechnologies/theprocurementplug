
export default function InvestorOpportunity() {
    return (
        <>
            <section className="flex flex-col justify-center items-center gap-y-5 pt-10 pb-20 md:pt-20 md:pb-30 bg-gradient-to-b from-[#151515] to-[#151515]/0 w-screen ml-[calc(50%-50vw)] px-5 sm:px-10 md:px-18 lg:px-20">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-[#B08D57]">
                    Investor Opportunity
                </h1>
                <p className="text-base text-[#C2C2C2] max-w-250 text-center">
                    Xec Plug sits at the intersection of procurement transformation, executive leadership, and enterprise innovation — a first-of-its-kind platform
                    addressing a multi-billion-pound global leadership development market. As part of the Achiever Group ecosystem, Xec Plug offers scalable
                    revenue streams across membership, enterprise solutions, executive retreats, proprietary SaaS tools, and strategic partnerships. We are
                    currently inviting aligned investors to join us in shaping the future of procurement leadership, with opportunities to support global expansion,
                    platform development, and ecosystem acceleration.
                </p>

                <div className="flex justify-center items-start flex-col lg:flex-row">
                    <p className="text-sm md:text-base text-[#C2C2C2] max-w-250 text-center border border-[#444444]
                    bg-gradient-to-r from-[#151515] to-[#B08D57] px-2 py-3 rounded-xl">
                        Register Investor Interest : xecplug@theprocurementplug.com
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-3 w-full">
                    <p className="text-sm md:text-base text-[#C2C2C2] lg:min-w-[320px] max-w-[400px] text-center border border-[#444444]
    bg-[#151515] px-2 py-3 rounded-xl break-words">
                        xecplug@theprocurementplug.com
                    </p>

                    <p className="text-sm md:text-base text-[#C2C2C2] min-w-[250px] max-w-[500px] text-center border border-[#444444]
    bg-[#151515] px-2 py-3 rounded-xl">
                        Powered by The Procurement Plug | An Achiever Group Venture
                    </p>

                    <p className="text-sm md:text-base text-[#C2C2C2] lg:min-w-[320px] max-w-[400px] text-center border border-[#444444]
    bg-[#151515] px-2 py-3 rounded-xl">
                        Operating from the UK with a global reach
                    </p>
                </div>

            </section >
        </>
    );
}