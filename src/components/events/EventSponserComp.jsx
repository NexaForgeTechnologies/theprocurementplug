import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


function EventSponserComp({email="request@theprocurementplug.com"}) {
    return (
        <div
            className="relative flex flex-col gap-6 md:gap-8 py-5"
            style={{
                width: "100vw",
                left: "50%",
                right: "50%",
                marginLeft: "-50vw",
                marginRight: "-50vw",
                backgroundColor: "#85009D",
            }}
        >
            <Image
                width={104}
                height={223}
                src="/images/events/plug1.png"
                alt="The Procurement Plug Logo"
                className="absolute top-0  left-0"
            />
            <Image
                width={217}
                height={246}
                src="/images/events/plug2.png"
                alt="The Procurement Plug Logo"
                className="absolute bottom-0 right-0 md:top-1/2 md:-translate-y-1/2"
            />

            <div className="relative z-10 flex flex-col gap-6 md:gap-8 rounded-lg py-5 md:py-10 mx-auto max-w-[1440px] w-full
      px-6 sm:px-10 md:px-14 lg:px-20">
                <div>
                    <div className="max-w-[780px] m-auto text-center">
                        <h2 className='font-extrabold text-3xl md:text-5xl text-white'>Sponsorship Opportunities</h2>
                        <p className='text-white text-sm md:text-lg leading-normal md:leading-relaxed my-4 md:my-8'>Are you a procurement solutions provider looking to showcase your solution to
                            a highly engaged audience? Become a sponsor and get premium exposure.</p>
                        <div className='flex justify-center items-center w-full'>
                            <Link href={`mailto:${email}`}>
                                <button className="flex justify-center items-center cursor-pointer bg-[#b08d57] text-white px-4 py-3 rounded-[6px] w-full lg:w-auto">
                                    Email Us About it
                                    <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventSponserComp