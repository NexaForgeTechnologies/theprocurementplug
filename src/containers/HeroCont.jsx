"use client"
import BtnOne from "../components/BtnOne";
import useFormStore from "../store/useFormStore";

export default function HeroCont() {

    const { isOpen, setIsOpen } = useFormStore();

    return (
        <>
            <section className="flex flex-col justify-center items-center gap-y-5 md:gap-y-8 pt-5 pb-10 md:pb-30 bg-gradient-to-b from-[#151515] to-[#151515]/0 w-screen ml-[calc(50%-50vw)] relative">

                <div className="flex flex-col justify-center items-center gap-y-3 md:gap-y-5
                px-5 sm:px-10 md:px-18 lg:px-20 ">
                    <span className="text-xs border border-[#444444] px-4 py-2 rounded-full bg-[#ffffff15] text-white">Powered by The Procurement Plug</span>

                    <h1 className="text-2xl md:text-3xl lg:text-4xl max-w-180 text-[white] text-center border border-[#444444] bg-gradient-to-r from-[#151515] to-[#B08D57] px-3 py-5 rounded-xl font-normal">
                        Preparing Procurement Leaders for
                        Enterprise and Boardroom Leadership
                    </h1>

                    <p className="text-[#B08D57] text-sm md:text-base max-w-270 text-center">
                        At Xec Plug, we are building a global next-generation leadership development platform designed to prepare procurement leaders for enterprise leadership,
                        C-suite readiness, and boardroom influence. As procurement continues to evolve as a strategic function, we see the urgent need to develop leaders
                        who can operate across the full enterprise spectrum, shaping organizational strategy and delivering board-level value.
                    </p>
                </div>


                <div className="z-10">
                    <img src="/hero-img.png" alt="Img-list" />
                </div>

                <img src="/ellipse-lg.png" alt="Oval-glow" className="absolute bottom-[20%] md:bottom-[40%] right-0 w-30 sm:w-40 md:w-50 lg:w-60" />

                <img src="/ellipse-left.png" alt="Oval-glow" className="absolute bottom-[10%] md:bottom-[20%] left-0 w-30 sm:w-40 md:w-50 lg:w-60" />

                <div className="mt-5" onClick={() => setIsOpen(!isOpen)}>
                    <BtnOne name={"Join the Waitlist"}/>
                </div>
            </section>
        </>
    );
}