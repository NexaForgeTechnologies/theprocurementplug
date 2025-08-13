import MembershipComp from "../components/MembershipComp";

export default function MembershipCont() {
    return (
        <>

            <section className="flex flex-col gap-y-5 relative py-10 md:py-25 w-screen ml-[calc(50%-50vw)] px-5 sm:px-10 md:px-18 lg:px-20">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-[#B08D57] text-center">
                    Your Membership Options
                </h1>
                <p className="text-sm text-gray-300 mt-2 text-center">
                    Choose the leadership journey that suits your lifestyle, ambition, and location
                </p>

                

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">

                    <MembershipComp
                        title="The Xec Digital Membership"
                        subtitle="For globally based executives who prefer flexible, high-impact access to virtual experiences"
                        subHead={"Includes:"}
                        includes={[
                            "Access to virtual masterclasses and exclusive digital courses",
                            "Use of proprietary leadership tools",
                            "Entry into the private member network and leadership community",
                            "Access to exclusive research, whitepapers, benchmarking reports",
                            "Full access to the Xec Plug Concierge for discreet task support, report writing, bookings, and strategic preparation",
                        ]}
                        buttonText="Join the Founding Waitlist"
                    />
                    <MembershipComp
                        title="The Xec House Membership"
                        subtitle="For executives who value physical presence, strategic relationships, and immersive learning environments"
                        subHead={"Includes everything in the Digital Membership, plus:"}
                        includes={[
                            "Access to in-person events, private venues, and leadership salons",
                            "Invitations to Xec Plug’s executive retreats and roundtables",
                            "Live coaching intensives and masterclasses",
                            "Priority access to peer exchange and shadowing experiences",
                            "Concierge+ coordination for immersive, high-touch leadership support",
                            "Inclusion in the Founders Circle and legacy leadership archive",
                        ]}
                        buttonText="Join the Founding Waitlist"
                    />
                    
                </section>
                <img src="/Ellipse-sm.png" className="absolute top-[25%] right-0" />
                <img src="/Ellipse-sm-left.png" className="absolute bottom-[25%] left-0" />
            </section>
        </>
    );
}