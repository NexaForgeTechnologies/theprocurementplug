"use client";
import BtnOne from "../components/BtnOne";
import useFormStore from "../store/useFormStore";
export default function Header() {

const { isOpen, setIsOpen } = useFormStore();

    return (
        <>
            <nav className="px-5 sm:px-10 md:px-18 lg:px-20 bg-[#151515] z-50">
                <div className="py-15"></div>
                <nav className="flex justify-between items-center px-5 sm:px-10 md:px-18 lg:px-20 bg-[#151515] py-5 fixed top-0 left-0 w-screen ml-[calc(50%-50vw)] z-50">
                    <img src="/logo.png" className="w-25 sm:w-35 md:w-40 h-auto" alt="logo" />

                    <BtnOne
                        name={"Join the Founding Waitlist"}
                        onClick={() => setIsOpen(!isOpen)} />
                </nav>
            </nav>
        </>
    );
}