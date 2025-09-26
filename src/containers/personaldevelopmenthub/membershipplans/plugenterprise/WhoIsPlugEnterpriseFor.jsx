
export default function WhoIsPlugEnterpriseFor() {
    return (
        <>
            <section className="bg-gradient-to-r from-[#85009D] to-[#85009D00] w-screen ml-[calc(50%-50vw)] px-6 sm:px-10 md:px-14 lg:px-30 py-10 my-15 text-white flex flex-col md:flex-row items-start justify-between gap-y-5">
                <div className="flex flex-col gap-y-4 text-white items-start">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent">
                        Who Is Plug
                        Enterprise For? </h1>
                    <p className="max-w-md">
                        Whether your focus is retention, performance,
                        or internal mobility Plug Enterprise gives your
                        team a modern path to grow and lead.</p>
                </div>
                <div className="flex justify-center items-center">
                    <ul className="flex flex-col gap-y-4">{[
                        "Procurement line managers",
                        "Learning & Development Leads",
                        "HR & People Business Partners"
                    ].map((item, index) => (
                        <li key={index}><span className="text-[#B08D57] mr-2 font-bold text-xl">✔</span> {item}</li>
                    ))}

                    </ul>
                </div>
            </section>
        </>
    )
}