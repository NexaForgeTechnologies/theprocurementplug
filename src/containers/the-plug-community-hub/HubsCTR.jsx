import CommunityCardsComp from "@/components/the-plug-community-hub/CommunityCardsComp";

export default function HubsCTR() {
    return (
        <>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-15">
                <CommunityCardsComp 
                src={"/images/community-hub/index/wall.png"}
                title={`Forums`}
                para={`Collaborate with a small group of peers
                on shared goals like negotiation, tech, or
                early-career growth.`}
                btnName={"Browse"}/>

                <CommunityCardsComp 
                src={"/images/community-hub/index/news.png"}
                title={`Community News`}
                para={`Collaborate with a small group of peers
                on shared goals like negotiation, tech, or
                early-career growth.`}
                btnName={"Browse"}/>
                
                <CommunityCardsComp 
                src={"/images/community-hub/index/wall.png"}
                title={`Community Gratitude wall`}
                para={`Collaborate with a small group of peers
                on shared goals like negotiation, tech, or
                early-career growth.`}
                btnName={"Browse"}/>
                
                <CommunityCardsComp 
                src={"/images/community-hub/index/askExpert.png"}
                title={`Ask the expert`}
                para={`Collaborate with a small group of peers
                on shared goals like negotiation, tech, or
                early-career growth.`}
                btnName={"Browse"}/>
                
                <CommunityCardsComp 
                src={"/images/community-hub/index/gratitude.png"}
                title={`Community Gratitude`}
                para={`Collaborate with a small group of peers
                on shared goals like negotiation, tech, or
                early-career growth.`}
                btnName={"Browse"}/>
                
                <CommunityCardsComp 
                src={"/images/community-hub/index/expert.png"}
                title={`Procurement Motivation`}
                para={`Collaborate with a small group of peers
                on shared goals like negotiation, tech, or
                early-career growth.`}
                btnName={"Browse"}/>
                
                <CommunityCardsComp 
                src={"/images/community-hub/index/circle.png"}
                title={`Join a Peer Circle`}
                para={`Collaborate with a small group of peers
                on shared goals like negotiation, tech, or
                early-career growth.`}
                btnName={"Browse"}/>
            </section>
        </>
    )
}