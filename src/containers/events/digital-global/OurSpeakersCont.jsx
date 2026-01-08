
export default function OurSpeakersCont() {
    const speakers = [
        {
            id: 1,
            name: "Karthik Rama",
            occupation: "CEO & Consultant @ Procurement Doctors | Diagnosing procurement problems and prescribing effective solutions",
            image: "/images/events/digital-global/speakers/karthik.jpg"
        },
        {
            id: 2,
            name: "Michael Van Keulen",
            occupation: "Global Leader in Procurement Transformation & Strategic Alignment, Green Cabbage",
            image: "/images/events/digital-global/speakers/Michael.jpg"
        },
        {
            id: 3,
            name: "Zeina Arnous",
            occupation: "GRC Transformation Strategist & Founder, ZExcella Advisory",
            image: "/images/events/digital-global/speakers/zeina.jpeg"
        },
        {
            id: 4,
            name: "Eirini Etoimou",
            occupation: "Founder & Managing Director, Sustainable Mindset | Global ESG & Sustainable Supply Chain Advisor",
            image: "/images/events/digital-global/speakers/eirini.jpg",
        },
        {
            id: 5,
            name: "Urszula Woronowicz",
            occupation: "Procurement Strategist & Lawyer | Driving Renewables and ESG in the Energy Sector",
            image: "/images/events/digital-global/speakers/urszula.jpg",
        },
        {
            id: 6,
            name: "Nasima Mohammad",
            occupation: "Procurement & Supply Chain Expert | Engineering, Technical Services & Defense",
            image: "/images/events/digital-global/speakers/nasima.jpg",
        },
        {
            id: 7,
            name: "Rodolfo Correira",
            occupation: "C-level Advisor & Founder, SygmaDux | EMEA Leader in Tech Transformation and Growth",
            image: "/images/events/digital-global/speakers/Rodolfo.JPG",
        },
        {
            id: 8,
            name: "Suresh Kashavan",
            occupation: "Chair, CIPS India | Global Oil & Gas Supply Chain Executive",
            image: "/images/events/digital-global/speakers/Suresh.jpg",
        },
        {
            id: 9,
            name: "Latasha Terry",
            occupation: "Governmental Procurement Leader (CPPO, NIGP-CPP) | Director & SCAGPO President",
            image: "/images/events/digital-global/speakers/latasha.jpg",
        },
        {
            id: 10,
            name: "Celia SGAR",
            occupation: " founder of Vendor Score IT and VendorManagerHub.com",
            image: "/images/events/digital-global/speakers/Celia.png",
        },
        {
            id: 11,
            name: "James Meads",
            occupation: "Founder, Entrepreneurial Procurement | Digital Transformation Specialist",
            image: "/images/events/digital-global/speakers/James-Meads.jpeg",
        },
        {
            id: 12,
            name: "Paul Kurtz",
            occupation: "Senior TPRM Manager, First Century Bank | Third-Party Risk Association Board Member",
            image: "/images/events/digital-global/speakers/paul.jpg",
        },
        {
            id: 13,
            name: "Ronald Martey",
            occupation: "Award-Winning Cybersecurity Leader | AI Governance, Data Protection, and Risk Management Expert",
            image: "/images/events/digital-global/speakers/Ronald.jpg",
        },
        {
            id: 14,
            name: "Jennifer Akongbota",
            occupation: "Chartered Procurement & Supply Chain Expert | Consultant & Trainer | MCIPS, CMILT, MSc.",
            image: "/images/events/digital-global/speakers/Jennifer.JPG",
        },
        {
            id: 15,
            name: "Costanza Campi",
            occupation: "Global Procurement SVP | Digital Procurement Transformation Leader | Strategic Sourcing Expert",
            image: "/images/events/digital-global/speakers/Costanza.jpg",
        },
        {
            id: 16,
            name: "Irene Poku ",
            occupation: "Executive Coach/ Non-Executive Director /Speaker",
            image: "/images/events/digital-global/speakers/Irene-Poku.jpg",
        },
        {
            id: 17,
            name: "Blessed S. Agyemang",
            occupation: "Global Supply Chain Management Expert | Digital Technologies, Sustainability & ESG Specialist",
            image: "/images/events/digital-global/speakers/Blessed.jpg",
        },
        {
            id: 18,
            name: "Cllr. Chris Robinson",
            occupation: "Co-host of ‘A Procurement Podcast - The Reform Rundown’",
            image: "/images/events/digital-global/speakers/Christopher.jpg",
        },
        {
            id: 19,
            name: "Fleur Summers",
            occupation: "Co-host of ‘A Procurement Podcast - The Reform Rundown’",
            image: "/images/events/digital-global/speakers/Fleur.jpg",
        },
        {
            id: 20,
            name: "Chukwudi Uche",
            occupation: "Country Director-Nigeria, CIPS | Chartered Procurement & Health Sector Supply Chain Leader",
            image: "/images/events/digital-global/speakers/Chukwudi.jpg",
        },
        {
            id: 21,
            name: "Georgina Terry-Cowan",
            occupation: "Managing Director, BPD Associates | Leadership & Business Coach",
            image: "/images/events/digital-global/speakers/Georgina.jpg",
        },
        {
            id: 22,
            name: "Ann Dunkin",
            occupation: "Board Director & Corporate Advisor | Digital Transformation Leader | Former CIO, US Department of Energy & EPA",
            image: "/images/events/digital-global/speakers/Ann-Dunkin.jpg",
        },

    ]
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* <div className="text-center self-center">
                    <h3 className="font-extrabold text-2xl md:text-3xl mb-4 md:mb-4 text-[#010101] text-center">
                        Event Speakers
                    </h3>
                    <p className="text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed text-center">
                        Speakers will be announced soon
                    </p>
                </div> */}
                <div className="bg-[#B08D58] text-white rounded flex flex-col gap-y-3 md:gap-y-4 px-10 py-7">
                    <img src="/images/events/digital-global/anna.png" alt="" className="w-20 h-20 md:w-25 md:h-25 m-auto" />
                    <h3 className="font-extrabold text-lg md:text-xl leading-6 text-white text-center">
                        Annalisha Noel
                    </h3>
                    <p className="text-white text-lg md:text-2xl leading-normal md:leading-relaxed text-center">
                        Host
                    </p>
                    <p className="text-white text-sm md:text-lg leading-normal md:leading-relaxed text-center">
                        Founder and CEO <br />
                        The Procurement Plug
                    </p>
                </div>
                {speakers.map((speaker, index) => (
                    <div key={index} className="border border-[#b08d57] bg-[#FAF8F5] text-black rounded flex flex-col gap-y-3 md:gap-y-4 px-10 py-7">
                        <img src={speaker.image} alt="" className="w-20 h-20 md:w-25 md:h-25 m-auto rounded-full" />
                        <h3 className="font-extrabold text-lg md:text-xl leading-6 text-center">
                            {speaker.name}
                        </h3>
                        <p className=" text-lg md:text-2xl leading-normal md:leading-relaxed text-center">
                            {speaker.title}
                        </p>
                        <p className="text-sm md:text-lg leading-normal md:leading-relaxed text-center mb-auto">
                            {speaker.occupation}
                        </p>
                    </div>
                ))}
            </section>
        </>
    );
}