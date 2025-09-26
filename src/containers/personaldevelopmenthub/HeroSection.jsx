import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";
import Link from "next/link";

export default function HeroSection() {
    return (
        <>
            <div className="flex flex-col gap-y-4 text-white py-10 items-start">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent">The Plug Career and Personal Growth Hub </h1>
                <p className="max-w-2xl">The Personal Development Hub is your go-to space for career growth,
                    offering expert masterclasses, practical tools, and mentorship to help
                    you lead, grow, and thrive in your profession.</p>
                <img src="/images/personaldevelopmenthub/index/hero.png" />

                <h1 className="text-base md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent">The Plug Career and Personal Growth Hub </h1>
                <p className="max-w-2xl">Your gateway to accelerating your procurement career.</p>
                <p className="max-w-2xl">Precision tools, insights, and real-world support to help you grow, lead, and thrive</p>
                <p className="max-w-2xl">Access to the hub supports career growth, skills development and knowledge for individuals,
                    groups and corporate teams.</p>

                <Link href="/personaldevelopmenthub/membershipplans">
                    <ArrowButtonCom
                        text="Subscribe Now"
                        bgColor="bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687]"
                        textColor="text-black font-bold"
                        arrowColor="border-black"
                    />
                </Link>
            </div>
        </>
    );
}