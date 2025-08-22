import ListCard from "../components/ListCard";
export default function PartnershipEcosystem() {
    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 bg-[#151515] border border-[#444444] p-5 md:p-10 rounded gap-5 md:gap-10">

                <div className="relative flex items-center justify-center rounded overflow-hidden mb-5 lg:mb-0">
                    <img src="/ecosystem.png" alt="what-is-xecplug" className="w-full" />
                </div>


                <div className="lg:row-start-1 flex flex-col gap-y-5">
                    <ListCard
                        heading={"Partnership Ecosystem:"}
                        description={"We are actively building strategic partnerships including:"}
                        description2={"If you think your services fit well into our ecosystem, please reach our via our contacts."}
                        bullet={"Corporate Leadership Teams"}
                        bullet2={"Advisory Boards"}
                        bullet3={"Academic Institutions"}
                        bullet4={"Executive Coaching Firms"}
                        bullet5={"Professional Development Organisations"}
                        bullet6={"Subject Matter experts"}
                        hide7={"hidden"}
                        hide8={"hidden"}
                        hide9={"hidden"}
                        hide10={"hidden"}
                    />


                </div>


            </section>

        </>
    );
}