export default function OperatingModel() {
    return (
        <section className="pt-10 md:pt-15 bg-black flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-y-4 mb-10">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-[#B08D57]">
                    Operating Model:
                </h1>
                <p className="text-base text-[#C2C2C2] text-center">
                    Xec Plug will operate as both:
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl">
                {/* Membership Model */}
                <div className="flex items-center gap-5 bg-gradient-to-r from-[#151515] to-[#B08D57] border border-[#444444] rounded-md p-6">
                    <img src="model-1.png" alt="Membership Icon" className="w-15 " />
                    <div>
                        <h2 className="text-xl md:text-2xl font-semibold text-white">
                            Membership Model
                        </h2>
                        <p className="text-[#C2C2C2] text-sm md:text-base">
                            Tailored for individual procurement executives seeking leadership progression
                        </p>
                    </div>
                </div>

                {/* Enterprise Solution */}
                <div className="flex items-center gap-5 bg-gradient-to-r from-[#151515] to-[#B08D57] border border-[#444444] rounded-md p-6">
                    <img src="model-2.png" alt="Enterprise Icon" className="w-15 " />
                    <div>
                        <h2 className="text-xl md:text-2xl font-semibold text-white">
                            Enterprise Solution
                        </h2>
                        <p className="text-[#C2C2C2] text-sm md:text-base">
                            Designed for organizations investing in procurement’s enterprise-level capability development
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
