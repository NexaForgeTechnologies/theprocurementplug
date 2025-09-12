import Link from "next/link";

export default function EventHeroCont() {
    return (
        <>
            <section className="bg-[url('/images/events/digital-global/digital-global-hero.png')] bg-cover bg-center w-screen ml-[calc(50%-50vw)] px-6 sm:px-10 md:px-14 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-y-4  lg:gap-x-15 py-10 md:py-15 lg:py-20">
                <div className="flex flex-col gap-y-4.5">
                    <h1 className="font-bodoni-moda bg-clip-text bg-gradient-to-b from-[#E6BF88] to-[#AE835A] text-transparent text-5xl md:text-6xl lg:text-7xl max-w-90 font-extrabold">ELEVATE 2025</h1>
                    <h2 className="font-extrabold text-2xl md:text-4xl text-white">Digital Global Edition</h2>
                    <h2 className="font-bold text-xl md:text-3xl text-white">Key Focus Areas:</h2>

                    {[
                        "Future-Proofing Careers with multi-disciplinary skills",
                        "Boardroom Strategy and enterprise value",
                        "Crisis Room Simulation for decision-making under pressure",
                        "Global Growth Action Plan to translate experience into value",
                    ].map((focus, index) => (
                        <>
                            <div key={index} className="flex gap-x-2">
                                <span className="w-3 h-3 inline-block shrink-0 bg-white mt-1 rounded-full" />
                                <p className="text-sm md:text-lg text-white">{focus}</p>
                            </div>
                        </>
                    ))}

                    <div className="bg-[#B08D57] text-white p-4 rounded-lg flex flex-col gap-y-2 mt-3">
                        <p className="text-sm md:text-lg text-white">
                            <strong> Date: </strong> November 17th & 18th, 2025 - Online</p>
                        <p className="text-sm md:text-lg text-white">
                            <strong> Global Reach: </strong> Perfectly timed for professionals in the US,
                            Europe, Caribbean and the Middle East to attend live.</p>
                        <Link href={"https://www.trybooking.com/uk/events/landing/92707"}>
                            <button className="bg-[#85009D] text-white py-2 px-4 rounded-md self-start cursor-pointer">Book Now</button>
                        </Link>
                    </div>
                    <Link href={"/event/elevate2025-digital-global/agenda"}>
                        <h2 className="font-medium text-md sm:text-xl lg:text-2xl text-white underline cursor-pointer">
                            Agenda Elevate 2025 - Digital Global</h2>
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {[
                        "/images/events/digital-global/elevate-1.png",
                        "/images/events/digital-global/elevate-2.png",
                        "/images/events/digital-global/elevate-3.png",
                        "/images/events/digital-global/elevate-4.png",
                        "/images/events/digital-global/elevate-5.png",
                        "/images/events/digital-global/elevate-6.png",
                        "/images/events/digital-global/elevate-7.png",
                        "/images/events/digital-global/elevate-8.png",
                    ].map((images, index) => (
                        <div key={index} className="w-full h-full rounded-lg overflow-hidden">
                            <img src={images} alt="" className="w-full h-full object-cover" />
                        </div>))}
                </div>
            </section>
        </>
    );
}
