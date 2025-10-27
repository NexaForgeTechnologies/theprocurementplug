import HeroCTR from "@/components/business-hub/BussinessHeroSection";
import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";
import CommunityCardsComp from "@/components/the-plug-community-hub/CommunityCardsComp";
import Link from "next/link";

export default function CardsGrid() {
    const data = [
        {
            src: "/images/personaldevelopmenthub/welcome-mentors-directory/professionals.png",
            title: "For Professionals:",
            para: `Unlock tailored guidance, build confidence, and fast- track your career development by learning from those who've walked the path before you. Whether you're preparing for a promotion, changing sectors, or seeking personal growth there's a mentor here for u.`
        },
        {
            src: "/images/personaldevelopmenthub/welcome-mentors-directory/mentors.png",
            title: "For Mentors & Coaches:",
            para: `Your journey can inspire the next generation. Share your wisdom, expand your network, an give back to the profession Support the growth of future procurement leaders while raising your own profile in our thriving ecosystem.`
        },
    ];
    return (
        <>
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
                {data.map((item, index) => (
                    <CommunityCardsComp
                        key={index}
                        src={item.src}
                        title={item.title}
                        para={item.para}
                    />
                ))}
            </section>
            <section className="pb-5 flex flex-col gap-y-3 mb-10">
                <h3 className="font-semibold text-lg md:text-xl text-[#1B1B1B]">
                    Ready to grow or give back?
                </h3>
                <div className="flex flex-wrap gap-3">
                    <Link href={'/personal-development-hub/welcome-to-the-mentors-coaches-directory/mentors-coaches-directory'} className="w-full sm:w-auto">
                        <ArrowButtonCom
                            text={`VIEW ALL MENTORS & COACHES`}
                            bgColor={"bg-[#B08D57]"}
                            textColor={"text-[white]"}
                            hoverBgColor={"hover:bg-transparent"}
                            hoverTextColor={"hover:text-[#B08D57]"}
                            borderColor="hover:border-[#B08D57]"
                        />
                    </Link>
                    <ArrowButtonCom
                        text={`BECOME A MENTOR OR COACH`}
                        bgColor={"bg-transparent"}
                        textColor={"text-[#B08D57]"}
                        hoverBgColor={"hover:bg-[#B08D57]"}
                        hoverTextColor={"hover:text-[white]"}
                        borderColor="hover:border-[#B08D57]"
                    />
                    <ArrowButtonCom
                        text={`View terms and conditions`}
                        bgColor={"bg-transparent"}
                        textColor={"text-[#B08D57]"}
                        hoverBgColor={"hover:bg-[#B08D57]"}
                        hoverTextColor={"hover:text-[white]"}
                        borderColor="hover:border-[#B08D57]"
                    />
                </div>
            </section>
        </>
    );
}