import MembershipComp from "../components/MembershipComp";

export default function MembershipCont() {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <MembershipComp
                    title="The Xec Digital Membership"
                    subtitle="For globally based executives who prefer flexible, high-impact access to virtual experiences"
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
                    title="The Xec Digital Membership"
                    subtitle="For globally based executives who prefer flexible, high-impact access to virtual experiences"
                    includes={[
                        "Access to virtual masterclasses and exclusive digital courses",
                        "Use of proprietary leadership tools",
                        "Entry into the private member network and leadership community",
                        "Access to exclusive research, whitepapers, benchmarking reports",
                        "Full access to the Xec Plug Concierge for discreet task support, report writing, bookings, and strategic preparation",
                    ]}
                    buttonText="Join the Founding Waitlist"
                />

            </section>
        </>
    );
}