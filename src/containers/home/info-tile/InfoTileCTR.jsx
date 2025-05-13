import React from 'react'

import InfoTile from "@/components/tile/InfoTileComponent"

function InfoTileCTR() {
    return (
        <div className='flex flex-col gap-6 md:gap-8'>
            <InfoTile img="/images/home/tiles/tile-1.png" heading="Career Growth & Support at The Procurement Plug" text="At The Procurement Plug, we’re not just about connecting opportunities—we’re about fostering growth. We provide tailored support to help you advance your career, whether through access to expert resources, mentorship opportunities, or innovative tools like our AI-driven CV review. Your success is our priority, and we’re here to support your journey every step of the way." />
            <InfoTile img="/images/home/tiles/tile-2.png" heading="Accessible Resources for Procurement Success" text="At The Procurement Plug, we offer a comprehensive library of accessible resources to support your procurement journey. From white papers and industry insights to templates and tools, our platform equips you with the knowledge and materials you need to excel. Whether you're tackling complex procurement challenges or looking to stay updated on best practices, our resources are just a click away." />
            <InfoTile img="/images/home/tiles/tile-3.png" heading="A Thriving Community for Procurement Professionals" text="Join a vibrant community at The Procurement Plug, where collaboration and knowledge-sharing drive success. Engage in category-specific and industry-focused discussions, connect with peers, and gain valuable insights from seasoned professionals. Whether you’re seeking advice, sharing expertise, or exploring trends, our supportive network ensures you’re never navigating procurement challenges alone." />
        </div>
    )
}

export default InfoTileCTR