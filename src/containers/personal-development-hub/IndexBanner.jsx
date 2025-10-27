import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";
import Link from "next/link";

export default function IndexBanner() {
    return (
        <>
            <section className="text-white bg-gradient-to-b from-[#85009D] via-[#85009D] to-[] 
            border border-[#F3B3FF]/50 border-b-transparent my-10 rounded min-h-35 mb-10">
                <div className="bg-[url(/images/personaldevelopmenthub/index/banner-bg.png)] bg-center bg-contain md:bg-cover bg-no-repeat flex flex-col sm:flex-row gap-3 items-center justify-evenly px-6 py-10">
                    <h1 className="text-base md:text-lg lg:text-xl max-w-xl">
                        Unlock <span className="font-semibold">Elevate Bloom VIP</span> Experiences
                        &
                        <span className="font-semibold ml-2">
                            Personal Growth Rewards
                        </span>
                    </h1>

                    <Link href="/personal-development-hub/membership-plans">
                        <ArrowButtonCom
                            text="Subscribe Now"
                            bgColor="bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] min-w-40"
                            textColor="text-black font-bold"
                            arrowColor="border-black"
                        />
                    </Link>
                </div>
            </section>

            <section className="text-white flex flex-col gap-5 items-center justify-center pb-20">
                <h1 className="text-base md:text-xl lg:text-2xl font-bold ">Join the growth movement</h1>
                <div className="flex flex-col md:flex-row gap-3">
                    <Link href="/personal-development-hub/membership-plans">
                        <ArrowButtonCom
                            text="Become a Plug Prestige Member"
                            bgColor="bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687]"
                            textColor="text-black font-bold"
                            arrowColor="border-black"
                        />
                    </Link>
                    <Link href="/personal-development-hub/membership-plans">
                        <ArrowButtonCom
                            text="Become a Plug Chapter Lead"
                            bgColor="bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687]"
                            textColor="text-black font-bold"
                            arrowColor="border-black"
                        />
                    </Link>
                </div>
                <p className="text-xs">Already a member? Log In</p>
                <p className="text-sm">Secure checkout  |  Cancel anytime</p>
            </section>
        </>
    );
}