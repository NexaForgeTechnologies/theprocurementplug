import EventDaysDigitalGlobalComp from "@/components/events/EventDaysDigitalGlobalComp";
import EventHighlightDigitalGlobalComp from "@/components/events/EventHighlightDigitalGlobalComp";

export default function EventHighlightDigitalGlobalDayTwoCont() {
    return (
        <>
            <section className="flex flex-col gap-y-10 md:gap-y-15">
                <EventDaysDigitalGlobalComp
                    dayTitle="Day 2 – Boardroom, Strategy & Enterprise Value for Senior to Executives"
                    theme="Inside the Modern Boardroom: How Global Strategy Really Gets Shaped"
                    keynoteTitle="Opening Keynote (20 mins)"
                    keynoteTopic="Inside the Modern Boardroom: How Global Strategy Really Gets Shaped"
                    content={[
                        { topic: "Speaker Type:", para: "Current board director, ex-CPO turned NED, or corporate governance expert." },
                        { topic: "Definition:", para: "Explains how decisions are really made at board level and what skills/expertise directors bring to shape enterprise direction." },
                    ]}
                />

                <section className={`grid grid-cols-1 lg:grid-cols-2 gap-5`}>
                    <EventHighlightDigitalGlobalComp
                        panelTitle="Panel 1"
                        topic="M&A and Business Transformation – What Boards
Expect Leaders to Understand"
                        speakerType="Speaker Type: CFO, M&A lawyer, strategy consultant, plus
a CPO who’s been through a merger."
                        definition="Definition: Breaks down how mergers, acquisitions, and
major transformations are evaluated in the boardroom —
and what senior leaders must know about integration,
valuation, and risk." />

                    <EventHighlightDigitalGlobalComp
                        panelTitle="Mini Masterclass 1"
                        topic="Boardroom Finance Mastery – Interpreting Balance
Sheets, Valuations & Enterprise Risk"
                        speakerType="Speaker Type: Finance professor, CFO, or corporate
treasurer who teaches boards/NEDs"
                        definition="Definition: A practical financial literacy bootcamp for
senior leaders. Attendees learn how to read balance
sheets, understand financial ratios, and spot enterprise
risks like a board director." />

                    <EventHighlightDigitalGlobalComp
                        panelTitle="Panel 2"
                        topic="The Global Director’s Playbook – Governance, Ethics
& ESG at Board Level"
                        speakerType="Speaker Type: Governance expert, ESG leader, NED from
multinational, and an institutional investor/ESG advisor."
                        definition="Definition: Examines how boards think about governance,
ethics, and ESG globally. Attendees learn why sustainability
and compliance are central to enterprise reputation and
growth." />

                    <EventHighlightDigitalGlobalComp
                        panelTitle="Mini Masterclass 2"
                        topic="Crisis Room Simulation – Making Enterprise-Level
Decisions Under Pressure"
                        speakerType="Speaker Type: Former CEO, risk strategist, or crisis
management expert."
                        definition="Definition: A live simulation masterclass where attendees
walk through a high-stakes board-level crisis (e.g.,
cyberattack, supply chain collapse, reputational scandal)
and learn how leaders make decisions under extreme
pressure." />

                    <EventHighlightDigitalGlobalComp
                        panelTitle="Closing Insights"
                        topic="Translating Experience into Boardroom Value"
                        speakerType="Speaker Type: Senior NED or event chair."
                        definition="Definition: Shows participants how to take their existing leadership experience and frame it in a way that resonates with boards
and executive recruiters."
                        colSpan={"lg:col-span-2"} />
                </section>
            </section>
        </>
    );
}