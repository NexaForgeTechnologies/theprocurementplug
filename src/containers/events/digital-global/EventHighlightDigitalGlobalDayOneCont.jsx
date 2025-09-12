import EventDaysDigitalGlobalComp from "@/components/events/EventDaysDigitalGlobalComp";
import EventHighlightDigitalGlobalComp from "@/components/events/EventHighlightDigitalGlobalComp";

export default function EventHighlightDigitalGlobalDayOneCont() {
    return (
        <>
        <section className="flex flex-col gap-y-15">
            <EventDaysDigitalGlobalComp
                dayTitle="Day 1 – Future-Proofing Procurement Careers for Junior to Mid-Senior"
                theme="Skills & Growth for a Global Procurement Future"
                keynoteTitle="Opening Keynote (20 mins)"
                keynoteTopic="Global Shifts in Talent: What the Next Decade Means for Procurement Careers"
                content={[
                    { topic: "Speaker Type:", para: "Global HR futurist, Chief People Officer, or procurement thought leader with a global remit." },
                    { topic: "Definition:", para: "A forward-looking overview of how technology, geopolitics, and globalization are reshaping procurement roles. Sets the tone by showing attendees the bigger picture of career evolution" },
                ]}
            />

            <section className={`grid grid-cols-1 lg:grid-cols-2 gap-5`}>
                <EventHighlightDigitalGlobalComp
                    panelTitle="Panel 1"
                    topic="Beyond Procurement – Building Multi-Disciplinary Skills for Global Relevance"
                    speakerType="Speaker Type: Mix of senior managers from procurement, IT, sustainability, and finance."
                    definition="Definition: A forward-looking overview of how technology, geopolitics, and globalization are reshaping procurement roles. Sets the tone by showing attendees the bigger picture of career evolution." />

                <EventHighlightDigitalGlobalComp
                    panelTitle="Mini Masterclass 1"
                    topic="AI, Analytics & Automation – Practical Tools Every Professional Must Master"
                    speakerType="Speaker Type: Procurement technology vendor, data scientist, or digital transformation trainer."
                    definition="Definition: A practical deep dive into tools (e.g., Power BI, ChatGPT, SAP Ariba AI) with step-by-step examples of how to use them in everyday procurement work." />

                <EventHighlightDigitalGlobalComp
                    panelTitle="Panel 2"
                    topic="Cross-Industry Insights: What Procurement Can Learn from Startups, Tech & Non-Procurement Functions"
                    speakerType="Speaker Type: Startup founder, tech exec, healthcare supply chain lead, and procurement manager from FMCG/retail."
                    definition="Definition: Cross-industry sharing — highlighting what procurement can borrow from other sectors (e.g., speed from startups, resilience from healthcare, customer focus from retail)." />

                <EventHighlightDigitalGlobalComp
                    panelTitle="Mini Masterclass 2"
                    topic="Career Accelerator Framework – Building Influence, Visibility & Global Credentials"
                    speakerType="Speaker Type: Executive coach, LinkedIn career strategist, or senior procurement leader who’s made the leap to global roles."
                    definition="Definition: Step-by-step system to help mid-level professionals grow influence, showcase their impact, and position themselves for promotions or international opportunities." />

                <EventHighlightDigitalGlobalComp
                    panelTitle="Closing Insights"
                    topic="Your 12-Month Global Growth Action Plan"
                    speakerType="Speaker Type: Event host/facilitator summarising top takeaways."
                    definition="Definition: A motivational wrap-up with concrete actions participants can implement right away."
                    colSpan={"lg:col-span-2"} />
            </section>
            </section>
        </>
    );
}