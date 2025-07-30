"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import EventReviewComp from '@/components/events/EventReviewComp'

function EventReviewCTR() {
    const [showAll, setShowAll] = useState(false);

    const Reviews = [
        {
            id: 1,
            rating: "4.7/5.0",
            comment: "I am so grateful to be part of the event. The dedication you put into your work is commendable. You are such a thoughtful person. I appreciate the way you go above and beyond to make sure everything is handled well yesterday. Thanks so much for the opportunity. am so grateful to be part of the event. The dedication you put into your work is commendable. You are such a thoughtful person. I appreciate the way you go above and beyond to make sure everything is handled well yesterday. Thanks so much for the opportunity.",
            nameicon: "I",
            name: "Isatou B Cham",
            category: "Category Buyer  |  NHS Shared Business Services",
        },
        {
            id: 2,
            rating: "4.7/5.0",
            comment: "Yesterday was a really special day, celebrating and supporting Annalisha Noel, MCIPS and The Procurement Plug inaugural Elevate Event in Manchester. The energy in the room, and the sharing of knowledge from panellists to participants was really fantastic, and it was a pleasure to deliver a short behavioural negotiation workshop. I loved hearing from Oliver Jones about how AI is coming for our tasks, not us, all of the panellists' wisdom and getting to meet fabulous procurement folks like Luke Tomlinson, Susannah Gooch Jyothi Hartley Marc Kelly Hasan Bilgin, Executive MBA Zerrin Akkus Silvia Putoi Fraser McBeth Adwoa Owusu-Banahene MCIPS MEng PRINCE2 Fleur Summers (MCIPS) Christopher Robinson (MCIPS) Chartered Miranda Gordon Josh Caple Dmitry Yumashev Mick Ramsden MCIPS Dony Jess Mathews and everyone else that I may not be connected with yet on LinkedIn. If you weren't there, frankly you missed out and I look forward to seeing what the Procurement Plug does next, as I am hugely passionate and supportive of the mission to elevate procurement careers. Thank you Annalisha for having both myself and Sarah Phillips and putting together a fantastic group of people - I think you can see from the photos how much I enjoyed myself :-) ",
            nameicon: "L",
            name: "Laura Scarfe",
            category: "CEO  |  Business Academy Online Ltd",
        },
        {
            id: 3,
            rating: "4.7/5.0",
            comment: "🎬 Well that's a wrap!! Congratulations to Annalisha Noel, MCIPS and all at the #theprocurementplug for putting on an incredible inaugural #elevate event. 🎙Fleur Summers (MCIPS) and I are so grateful for being invited via A Procurement Podcast #thereformrundown it was great to speak to so many listeners (I'll draw the line at using the word 'fans' 😅) of the podcast, thank you so much for your positive feedback it truly is appreciated 🙏 🗣 One of the biggest takeaways from the day (aside from the fantastic speakers and workshops!) was the overall energy in the room, so many #procurement colleagues with a real passion for the profession and a desire for continous improvement 🚀 ",
            nameicon: "C",
            name: "Christopher Robinson",
            category: "Co Host  |  A Procurement Podcast - The Reform Rundown",
        },
        {
            id: 4,
            rating: "4.7/5.0",
            comment: "What a great day Christopher Robinson (MCIPS) Chartered and I had yesterday at Elevate 2025 which was the first event hosted by #theprocurementplug and Annalisha Noel, MCIPS 👏🟣 Thank you for inviting ‘A Procurement Podcast - The Reform Rundown’ 🎙️ to join the event where we talked on panels about a range of topics such as innovation, agility, career journeys and learnings! Christopher Robinson (MCIPS) Chartered also facilitated a great workshop along with Blessed S. Agyemang all about Stakeholders! It was such an informative day filled with amazing conversations all about procurement and such energy in the room with everyone really excited to learn! We will be sharing some of our key takeaways from the event over the next few days so make sure to look out for those! 👍 ",
            nameicon: "F",
            name: "Fleur Summers",
            category: "Co Host  |  A Procurement Podcast - The Reform Rundown",
        },
        {
            id: 5,
            rating: "4.7/5.0",
            comment: "Lifting the lid on running successful RFP Process! What a great day at The Procurement Plug event in Manchester!",
            nameicon: "D",
            name: "Dan Craddock",
            category: "Sales and Solutions Director  |  HAYS",
        },
        {
            id: 6,
            rating: "4.7/5.0",
            comment: "Yesterday, I had the opportunity to attend 𝗘𝗹𝗲𝘃𝗮𝘁𝗲 𝟮𝟬𝟮𝟱 – an insightful event organised by The Procurement Plug in partnership with Hays in Manchester. As a recent MSc graduate in procurement, logistics and supply chain management, the event offered a valuable platform to engage with industry leaders, exchange ideas, and gain clarity on the evolving role of procurement in both public and private sectors. Key themes that resonated throughout the day included innovation through AI and digital transformation, the growing importance of sustainability, and the strategic agility needed to navigate today’s dynamic supply chains. What stood out to me: • Strategic insights from both public and private sector leaders • The importance of aligning procurement strategy with organisational goals • How digital transformation, especially AI, is not replacing roles but redefining them • Mastering your emotions and reading the room can often be more valuable than technical expertise. • Behavioural negotiation in action: understanding the neuroscience of decision-making • That soft skills, adaptability, and stakeholder engagement are now just as critical as technical knowledge Sessions on stakeholder influence, contract management, ESG practices, and commercial awareness highlighted the breadth and depth of modern procurement responsibilities. I’m grateful to Annalisha Noel, MCIPS and her crew for creating this opportunity to connect with such a dynamic and inclusive procurement community. I left the event inspired and motivated to further contribute to the profession, bringing curiosity, resilience, and a continuous learning mindset into my career journey. ",
            nameicon: "D",
            name: "Dony Jess Mathews",
            category: "",
        },
        {
            id: 7,
            rating: "4.7/5.0",
            comment: "Great to be part of the first Elevate event with The Procurement Plug & Hays, some great speakers, discussions and insights! Key takeaway - “AI won’t take your job, someone using AI will” Oliver Jones (FCIPS Chartered) Thanks Annalisha Noel, MCIPS for inviting me to share my insights! ",
            nameicon: "F",
            name: "Fraser McBeth",
            category: "Procurement / Supply Chain Director  |  Volta Trucks",
        },
        {
            id: 8,
            rating: "4.7/5.0",
            comment: "What a brilliant day of learning and connecting! I spent the day attending panel discussions and breakout sessions focused on procurement, and it was nothing short of inspiring. The event was packed with insights, real conversations, and opportunities to grow both professionally and personally. Huge appreciation to all the panelists and workshop facilitators for bringing us up to speed on today’s key procurement challenges and opportunities. Your time, energy, and openness made a real impact. First and foremost, hats off to Annalisha Noel, MCIPS for organizing such a well-executed and informative event 👏🏻💐🧿 Big thanks to Jyothi Hartley for moderating the panels with such finesse—constructing the sessions like a true architect, from the foundation all the way to the top floor. This was one of the rare and much-needed procurement events to take place in Manchester. I’m walking away with a notebook full of takeaways—and here are just a few that stood out immediately: 🔹 Contract Management and commercial awareness Miranda Gordon & Adwoa Owusu-Banahene MCIPS MEng PRINCE2 🔹 Financial literacy, Cost Management & Budget Planning Essentials Susannah Gooch 🔹 Precious Recruitment Insights from Josh Caple 🔹 Procuring services from suppliers perspectives Dan Craddock 🔹 Negotiation Skills and the Role of Emotion (The 7 Second Relaxation Rule) Staying ahead of the game by listening to understand, not just to respond.Laura Scarfe FCIPS 🔹Digital transformation champion Oliver Jones (FCIPS Chartered) 🔹 The Power of Stakeholder Influence 🔹 Effective Stakeholder Management 🔹 Public vs Private Sector Procurement Case Studies Blessed S. Agyemang (ESG Game changer) Christopher Robinson (MCIPS) Chartered And so much more... Key Quotes & Takeaways That Hit Home; 🏎️ As an F1 fan, I frequently watch the races, draw lessons from the teams: even with the same engines, what sets their performance apart is their back stage activities such as deep analysis of set backs and weaknesses, strategic gap-bridging, and best-practice implementation.I also implement them my business activities. Miranda Gordon -F1 Analogy 💡 No degree substitutes real-world experience.Christopher Robinson (MCIPS) Chartered 💼 As you move up the career ladder, soft skills matter more—you shift from day-to-day procurement tasks to focusing on how to make the whole organization work better. – Fraser McBeth 🎉 Celebrate even small successes. – Lewis Sinkala 🔥 Get comfortable being uncomfortable. – Fraser McBeth 🌀 Be consistently inconsistent. – Luke Tomlinson emphasis to be reliable in adaptability, be strategic, not robotic. 📈 Learn from your experiences and see them as stepping stones for growth. – Fleur Summers (MCIPS) There were so many golden nuggets shared today—these are just the ones I remembered right away. I’m sure more will surface as I reflect over the coming days. Feeling energized, grateful, and ready to lead with impact. ",
            nameicon: "H",
            name: "Hasan Bilgin",
            category: "Group Procurement Manager  |  Shotton Mill Limited",
        },
        {
            id: 9,
            rating: "4.7/5.0",
            comment: "💥 WOW! What a day yesterday at the inaugural 'Elevate' event by The Procurement Plug run by the amazing Annalisha Noel, MCIPS - a huge congratulations and well done on the success of your first (of many) events. I had the pleasure of meeting so many talented procurement experts and hearing lots of inspiring stories... too many to fit into one post! I really enjoyed having the chance to speak on the 'Procurement Leadership & Career Growth' panel and chatting to people about their own career journeys. But some key takeaways and highlights from me were: 🟣 AI is not going to replace procurement jobs, but those who fail to adopt and embrace AI will fall behind. We are enabled by tech, not replaced by it! Oliver Jones (FCIPS Chartered) 🟣 Sustainability is not a department; it is a procurement leadership mindset. Blessed S. Agyemang 🟣 The importance of an outcome-first, do what is best approach, especially in a public-sector environment. Lewis Sinkala 🟣 I loved Miranda Gordon s F1 analogy on working hard to make marginal improvements which ensure a winning result. 🟣 The importance of soft skills, especially as you climb the procurement ladder Fraser McBeth And above all, it was just great to network and meet new people who share the same passion for procurement. Looking forward to future events! Jyothi Hartley, Adwoa Owusu-Banahene, Susannah Gooch, Luke Tomlinson, Dan Craddock, Christopher Robinson, Laura Scarfe, Hasan, Fleur Summers, Zerrin Akkus, Dony... apologies if I have missed anyone! ",
            nameicon: "J",
            name: "Josh Caple",
            category: "Manager - Procurement, Supply Chain & Logistics  |   HAYS",
        },
        {
            id: 10,
            rating: "4.7/5.0",
            comment: "A jam-packed day at Elevate on Wednesday, and well worth it. Got properly stuck into some key learning areas: 📌Digital transformation 📌The Suppliers perspective 📌Finance in procurement 📌Commercial and contract management 📌Stakeholder mapping 📌Negotiation techniques ...and plenty more besides. Also had the pleasure of viewing a few brilliant panels and participating myself, always a privilege to share space with smart, curious minds. The networking was equally strong, across public, private, direct, indirect - a real cross-section of the profession. A great event, and already looking forward to the next one. Thank you to all the wonderful panellists, speakers and attendees for making it a great day.",
            nameicon: "L",
            name: "Luke Tomlinson",
            category: " Global Category Manager  |  RS Integrated Supply",
        },
        {
            id: 11,
            rating: "4.7/5.0",
            comment: "Really enjoyed the inaugural event of The Procurement Plug in Manchester today. The enthusiasm and engagement from everyone attending was first class. Some great talks on AI, Negotiation and the role of Statement of Work solutions. Thanks to Annalisha Noel, MCIPS for organising.",
            nameicon: "M",
            name: "Marc Kelly",
            category: "Commercial Business Partner  |   Matrix",
        },
        {
            id: 12,
            rating: "4.7/5.0",
            comment: "There’s nothing like being surrounded by passion and energy from people who love what they do with a desire to continuously improve 🚀 Congratulations Annalisha Noel, MCIPS and everyone at The Procurement Plug on the launch of your inaugural hashtag #Elevate2025. I love what you are doing to empower the profession and build an inclusive community, from emerging talent development through to championing greater procurement enterprise. Key take aways - “procurement is rejuvenating itself”, “the profession is intellectually stimulating”, “it’s ethical stewardship” and “from back office to now board room CPO’s”💫 Nice meeting lots of new connections, sharing war stories, hot tips and aspirations for the future of procurement. Thank you for having me on the panel and workshop 🫶🏽 ",
            nameicon: "M",
            name: "Miranda Gordon",
            category: "Associate Director of Clinical Procurement  |   Guy's and St Thomas' NHS Foundation Trust",
        },
        {
            id: 13,
            rating: "4.7/5.0",
            comment: "🌟 Thrilled to have attended hashtag #Elevate2025 yesterday in Manchester organised by Annalisha Noel, MCIPS and The Procurement Plug along with Hays 🌟 🗣️Key takeaways that resonated with me: 👩🏾‍💻 Utilizing AI: Embracing AI tools can enhance efficiency and decision-making processes. 💡 Emotional Intelligence in Negotiations: The ability to understand and manage emotions plays a vital role in negotiations. 🤝 Business Partnering: Collaboration across departments is essential. Fostering strong business partnerships not only boosts procurement success but also paves the way for personal and professional growth. I’m excited to implement these insights and keep pushing for innovation and collaboration in procurement! 🚀🙌🏾 ",
            nameicon: "A",
            name: "Abisola Abimbola",
            category: "Senior Procurement Specialist  |  Edgewell Personal Care",
        },
    ]

    const displayedReviews = showAll ? Reviews : Reviews.slice(0, 3);

    return (
        <div className="flex flex-col gap-6 md:gap-8">
            <div className='max-w-[780px] m-auto text-center'>
                <h3 className='font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]'>Reviews from the Event</h3>
                <p className='text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed'>Discover why professionals trust us to deliver quality, every time.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {displayedReviews.map((rev) => (
                    <EventReviewComp
                        key={rev.id}
                        rating={rev.rating}
                        comment={rev.comment}
                        nameicon={rev.nameicon}
                        name={rev.name}
                        category={rev.category}
                    />
                ))}
            </div>
            {Reviews.length > 3 && !showAll && (
                <div className="text-center">
                    <button
                        onClick={() => setShowAll(true)}
                        className="bg-[#b08d57] px-4 py-2 text-white rounded-[6px] text-sm md:text-lg leading-normal md:leading-relaxed cursor-pointer m-auto w-full md:w-auto block text-center"
                    >
                        Show All
                    </button>
                </div>
            )}
        </div>
    )
}

export default EventReviewCTR
