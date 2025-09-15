import Link from "next/link";

export default function ReadyToWorkBannerComp({ title, description, link1, link2, btnText1, btnText2, Btnlink1, Btnlink2 }) {
    return (
        <>
            <section className="bg-[#85009D] w-screen ml-[calc(50%-50vw)] px-6 sm:px-10 md:px-14 lg:px-20 relative py-20 flex flex-col gap-y-5 justify-center items-center">
                <img src="/images/bussiness-hub/procurement-concierge/plug-l.png" alt="plug-icon-left"
                    className="absolute left-0 top-5" />
                <img src="/images/bussiness-hub/procurement-concierge/plug-r.png" alt="plug-icon-right"
                    className="absolute right-0 top-5" />

                <div className="flex flex-col gap-y-5 justify-center items-center">
                    <h2 className="font-semibold text-2xl md:text-3xl text-white">{title}</h2>
                    <p className="max-w-[976px] md:text-xl text-white">{description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-center max-w-[976px] mx-auto w-full">
                    <div className="w-full bg-[#FFFBF5] text-[#85009D] rounded border border-[#D09B48] p-4 flex items-center gap-x-3">
                        <img src="/images/bussiness-hub/procurement-concierge/globe.png" className="w-7 h-7" alt="globe-icon" />
                        <p className="md:text-xl text-[#85009D] font-medium break-all ">
                            {link1}
                        </p>
                    </div>
                    <div className="w-full bg-[#FFFBF5] text-[#85009D] rounded border border-[#D09B48] p-4 flex items-center gap-x-3">
                        <img src="/images/bussiness-hub/procurement-concierge/mail.png" className="h-5" alt="mail-icon" />
                        <p className="md:text-xl text-[#85009D] font-medium break-all ">
                            {link2}
                        </p>
                    </div>

                    <div className="flex lg:justify-end">
                        {Btnlink1 ? (
                            <a href={Btnlink1} download className="flex items-center justify-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] min-w-70">
                                <span className="text-center">
                                    {btnText1}
                                </span>
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                            </a>
                        ) : null}
                    </div>

                    <div className="flex justify-start">
                        {Btnlink2 ? (
                            <Link href={Btnlink2}>
                                <span className="flex items-center justify-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] min-w-70">
                                    <span className="text-center">
                                        {btnText2}
                                    </span>
                                    <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                                </span>
                            </Link>
                        ) : null}
                    </div>

                </div>

            </section>
        </>
    );
}
