
export default function RegionalCoverageCont() {
    const regions = [
        {
            name: "US West Coast:",
            time: "6am–10am"
        },
        {
            name: "US East Coast:",
            time: "9am–1pm"
        },
        {
            name: "Caribbean:",
            time: "10am–2pm"
        },
        {
            name: "UK / Europe:",
            time: "2pm–6/7pm"
        },
        {
            name: "Middle East:",
            time: "5pm–9pm / 6pm–10pm"
        },
        {
            name: "India:",
            time: "7:30pm–11:30pm"
        },
        {
            name: "Singapore / Hong Kong:",
            time: "10pm–2am"
        },
        {
            name: "Sydney:",
            time: "1am–5am"
        },
    ];

    return (
        <>
            <section className="bg-gradient-to-r from-[#FBE3FF] to-[#FFFBF5] text-[#85009D] w-screen ml-[calc(50%-50vw)] py-10 px-6 sm:px-10 md:px-14 lg:px-20 grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col justify-center items-center mb-7">
                    <h1 className="font-medium text-2xl md:text-4xl">Regional Coverage</h1>
                    <h1 className="font-bold text-2xl md:text-4xl">(2pm–6pm UK)</h1>
                </div>

                <div className="mx-auto">
                    {regions.map((region, idx) =>(
                        <div key={idx} className="">
                            <p className="text-sm md:text-lg mb-3 flex gap-x-2 text-[#1B1B1B]">
                                <span className="w-3 h-3 inline-block rounded-full bg-[#B08D57] mt-1 shrink-0"></span>
                                <strong>
                                    {region.name}
                                </strong>
                                {region.time}
                            </p>
                        </div>))}
                </div>
            </section>
        </>
    );
}