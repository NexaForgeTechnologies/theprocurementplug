import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import EventReviewComp from '@/components/events/EventReviewComp'

function EventReviewCTR() {
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
            comment: "Yesterday was a really special day, celebrating and supporting Annalisha Noel, MCIPS and The Procurement Plug inaugural Elevate Event in Manchester. The energy in the room, and the sharing of knowledge from panellists to participants was really fantastic, and it was a pleasure to deliver a short behavioural negotiation workshop.  ",
            nameicon: "L",
            name: "Laura Scarfe",
            category: "CEO  |  Business Academy Online Ltd",
        },
        {
            id: 3,
            rating: "4.7/5.0",
            comment: "Well that's a wrap!! Congratulations to Annalisha Noel, MCIPS and all at the #theprocurementplug for putting on an incredible inaugural #elevate event. Fleur Summers (MCIPS) and I are so grateful for being invited via A Procurement Podcast #thereformrundown it was great to speak to so many listeners (I'll draw the line at using the word 'fans' 😅) of the podcast, thank you so much for your positive feedback it truly is appreciated",
            nameicon: "C",
            name: "Christopher Robinson",
            category: "Co Host  |  A Procurement Podcast - The Reform Rundown",
        },
        {
            id: 4,
            rating: "4.7/5.0",
            comment: "I am so grateful to be part of the event. The dedication you put into your work is commendable. You are such a thoughtful person. I appreciate the way you go above and beyond to make sure everything is handled well yesterday. Thanks so much for the opportunity. am so grateful to be part of the event. The dedication you put into your work is commendable. You are such a thoughtful person. I appreciate the way you go above and beyond to make sure everything is handled well yesterday. Thanks so much for the opportunity.",
            nameicon: "I",
            name: "Isatou B Cham",
            category: "Category Buyer  |  NHS Shared Business Services",
        },
        {
            id: 5,
            rating: "4.7/5.0",
            comment: "Yesterday was a really special day, celebrating and supporting Annalisha Noel, MCIPS and The Procurement Plug inaugural Elevate Event in Manchester. The energy in the room, and the sharing of knowledge from panellists to participants was really fantastic, and it was a pleasure to deliver a short behavioural negotiation workshop.  ",
            nameicon: "L",
            name: "Laura Scarfe",
            category: "CEO  |  Business Academy Online Ltd",
        },
        {
            id: 6,
            rating: "4.7/5.0",
            comment: "Well that's a wrap!! Congratulations to Annalisha Noel, MCIPS and all at the #theprocurementplug for putting on an incredible inaugural #elevate event. Fleur Summers (MCIPS) and I are so grateful for being invited via A Procurement Podcast #thereformrundown it was great to speak to so many listeners (I'll draw the line at using the word 'fans' 😅) of the podcast, thank you so much for your positive feedback it truly is appreciated",
            nameicon: "C",
            name: "Christopher Robinson",
            category: "Co Host  |  A Procurement Podcast - The Reform Rundown",
        },
         {
            id: 7,
            rating: "4.7/5.0",
            comment: "I am so grateful to be part of the event. The dedication you put into your work is commendable. You are such a thoughtful person. I appreciate the way you go above and beyond to make sure everything is handled well yesterday. Thanks so much for the opportunity. am so grateful to be part of the event. The dedication you put into your work is commendable. You are such a thoughtful person. I appreciate the way you go above and beyond to make sure everything is handled well yesterday. Thanks so much for the opportunity.",
            nameicon: "I",
            name: "Isatou B Cham",
            category: "Category Buyer  |  NHS Shared Business Services",
        },
        {
            id: 8,
            rating: "4.7/5.0",
            comment: "Yesterday was a really special day, celebrating and supporting Annalisha Noel, MCIPS and The Procurement Plug inaugural Elevate Event in Manchester. The energy in the room, and the sharing of knowledge from panellists to participants was really fantastic, and it was a pleasure to deliver a short behavioural negotiation workshop.  ",
            nameicon: "L",
            name: "Laura Scarfe",
            category: "CEO  |  Business Academy Online Ltd",
        },
        {
            id: 9,
            rating: "4.7/5.0",
            comment: "Well that's a wrap!! Congratulations to Annalisha Noel, MCIPS and all at the #theprocurementplug for putting on an incredible inaugural #elevate event. Fleur Summers (MCIPS) and I are so grateful for being invited via A Procurement Podcast #thereformrundown it was great to speak to so many listeners (I'll draw the line at using the word 'fans' 😅) of the podcast, thank you so much for your positive feedback it truly is appreciated",
            nameicon: "C",
            name: "Christopher Robinson",
            category: "Co Host  |  A Procurement Podcast - The Reform Rundown",
        },
    ]

    return (
        <div className="flex flex-col gap-6 md:gap-8">
            <div className='max-w-[780px] m-auto text-center'>
                <h3 className='font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]'>What Our Customers Say</h3>
                <p className='text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed'>Discover why professionals trust us to deliver quality, every time.</p>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {Reviews.map((rev) => (
                    <EventReviewComp
                        key={rev.id}
                        rating={rev.rating}
                        comment={rev.comment}
                        nameicon={rev.nameicon}
                        name={rev.name}
                        category={rev.category}
                    />
                ))}
            </div> */}
        </div>
    )
}

export default EventReviewCTR