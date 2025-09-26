import Link from "next/link";

export default function LetsTalk() {
    return (
        <>
            <section className="text-white flex flex-col gap-y-10 pb-15 ">
                <div className="flex flex-col gap-y-5 items-start bg-[#85009D66] border border-[#F3B3FF]/50 text-white rounded p-4 ">
                    <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent">
                        Let's Talk</h1>
                    <p>Start with as few as 5 users or roll out to your entire function.</p>
                    <ul>
                        {[
                            `Flexible pricing based on team size`,
                            `Onboarding within 7 days`,
                            `Bulk discounts & quarterly check-ins available`,
                        ].map((listItem, idx) => (
                            <li key={idx} className="flex gap-x-2 items-start mb-2">
                                <span className="w-3 h-3 inline-block mr-2 bg-[#B08D57] rounded-full relative top-1 shrink-0 text-sm md:text-base" />
                                <p>{listItem}</p>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <button className="mt-auto flex items-center justify-center cursor-pointer border  border-transparent text-black bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] px-4 py-2 rounded-[6px] w-full text-sm md:text-base">
                            Contact Us to Build Your Team Plan
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-y-3 items-center justify-center">
                    <p className="max-w-md text-center font-normal">Plug Enterprise is a GDPR-compliant, secure platform trusted
                        by forward-thinking procurement teams across sectors.</p>
                    <p className="text-sm font-light">Cancel anytime  |  No hidden fees  |  Encrypted payments</p>
                </div>
            </section>
        </>
    );
}