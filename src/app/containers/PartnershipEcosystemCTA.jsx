"use client";
import BtnOne from "../components/BtnOne";
import ListCard from "../components/ListCard";
import useFormStore from "../useFormStore";

export default function PartnershipEcosystemCTA() {
    const {isOpen, setIsOpen} = useFormStore();
    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 rounded gap-5 md:gap-10">

                <div className="relative flex items-center justify-center rounded overflow-hidden mb-5 lg:mb-0">
                    <img src="/partnership.png" alt="what-is-xecplug" className="w-full" />
                </div>


                <div className="lg:row-start-1 flex flex-col gap-y-5">
                    <ListCard
                        heading={"Partnership Ecosystem:"}
                        description={"We are actively building strategic partnerships including:"}
                        description2={"As we move towards a targeted soft launch in 2026, Xec Plug is positioned not simply as another leadership program, but as a strategic leadership accelerator. Our mission is to equip the next generation of procurement executives with the intelligence, networks, and capabilities to influence enterprise value, operate confidently in boardrooms, and shape the future direction of their organizations."}
                        bullet={"Corporate Leadership Teams"}
                        bullet2={"Advisory Boards"}
                        bullet3={"Academic Institutions"}
                        bullet4={"Executive Coaching Firms"}
                        bullet5={"Professional Development Organisations"}
                        hide6={"hidden"}
                        hide7={"hidden"}
                        hide8={"hidden"}
                        hide9={"hidden"}
                        hide10={"hidden"}
                    />

                    <BtnOne 
                    name={"Join the Founding Waitlist"} onClick={() => setIsOpen(!isOpen)}/>
                </div>


            </section>
        </>
    );
}