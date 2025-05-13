import React from 'react'

import IconFeature from '@/components/features/IconFeatureComponent'
import Feature from "@/components/features/FeatureComponent"

function CoFeatureCTR() {
    // Community Content
    const communityContent = [
        {
            id: 1,
            heading: "Forum & Chat Rooms",
            text: "professionals can engage with each other in community discussions or niche topics like procurement in tech, sustainable sourcing, or strategic supplier management."
        },
        {
            id: 2,
            heading: "Crowdsourced Best Practices",
            text: "professionals can share their experiences, tips, and strategies in tackling complex procurement scenarios. Content will be crowd-generated and reviewed for quality."
        },
        {
            id: 3,
            heading: "Peer Feedback on Challenges",
            text: "professionals can present procurement problems or challenges they are facing and receive input from fellow professionals, providing practical advice on how to solve these real-world issues."
        }
    ]

    // Learning Path Content
    const learningPath = [
        {
            id: 1,
            heading: "Ai-Powered Recommendations",
            text: "Using AI to analyse your current knowledge and career trajectory, the platform would recommend personalised learning paths, tailored content, and resources to support your growth."
        },
        {
            id: 2,
            heading: "Progress Tracking",
            text: "Users can track their learning journey and see progress over time, such as completion rates for modules or certifications."
        }
    ]
    return (
        <div className='flex flex-col gap-6 md:gap-8'>
            <div className='max-w-[780px] m-auto text-center'>
                <h3 className='font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]'>Some of our core features</h3>
                <p className='text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed'>Unlock the full potential of your business with our innovative platform, designed to streamline operations, enhance productivity, and drive growth. Explore a suite of advanced features crafted to simplify your processes, integrate seamlessly with your existing tools, and deliver actionable insights—all from one intuitive interface.</p>
            </div>
            <div className='grid grid-col md:grid-row gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <IconFeature heading="Procurement Freelancer Listings" text="If you are a freelancer, this is the perfect place to showcase yourself our recruitment partners." />
                <IconFeature heading="Advanced Educational Material" text="TPP will provide niche content such as C-suite procurement leadership and advanced risk management strategies." />
                <IconFeature heading="Webinars & Workshops" text="Regular live sessions from industry experts, thought leaders and veteran procurement professionals on emerging trends and procurement strategies." />
            </div>
            <Feature heading="Community-Driven Content & Peer Learning" text={communityContent} />
            <div className='flex flex-col md:flex-row gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <IconFeature heading="Procurement Templates & Tools" text="Ready-to-use procurement templates such as RFQ templates, contract clauses, supplier scorecards and KPI frameworks." />
                <IconFeature heading="Certification Assistance" text="Prep materials for certifications like MCIPS, PMP, or Six Sigma etc." />
            </div>
            <div className='grid grid-col md:grid-row gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <IconFeature heading="Job Boards" text="Procurement-related job listings and project opportunities, with filters tailored to user profiles (experience, location, industry)." />
                <IconFeature heading="Resources" text="A detailed repository of procurement best practices, frameworks and guides covering sourcing, negotiation, contract management, and sustainability etc." />
                <IconFeature heading="Mentorships" text="TPP will give you access to a directory of mentors to support your career growth and take you to the next level. This will not only be procurement professionals but specialists in the fields of finance, risk, project management, leadership, career coaches, and much more." />
            </div>
            <Feature heading="Personalized Learning Paths" text={learningPath} />
        </div>
    )
}

export default CoFeatureCTR