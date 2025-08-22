"use client"
import useFormStore from "../store/useFormStore";
import BtnOne from "../components/BtnOne";

export default function FoundingCTA() {
    const { isOpen, setIsOpen } = useFormStore();
    return (
        <>
            <section className="flex flex-col justify-center items-center gap-y-5 py-10 my-10 md:my-20 lg:my-30 bg-gradient-to-r from-[#B08D57]/65 via-[#151515] to-[#B08D57]/65
             text-white p-6 rounded-lg shadow-lg border border-[#f2b85933] ">

                <h2 className="text-xl md:text-3xl lg:text-4xl font-normal text-[#B08D57]">Founding Membership is limited to 50 procurement leaders globally.</h2>

                <p className="text-sm md:text-base text-[#C2C2C2] mt-2">Gain early access to the tools, programes, and retreats shaping procurement’s future.</p>

                <BtnOne name={"Apply to Join the Founding Waitlist"} onClick={() => setIsOpen(!isOpen)}/>
            </section>
        </>
    );
}