import ResourceLibraryCTR from '@/containers/resource/ResourceLibraryCTR'
import React from 'react'

function page() {
    return (
        <>
            <div className='mt-10'>
                <h2 className='font-semibold text-xl md:text-2xl text-[#010101] mb-2'>Our Resource Library</h2>
                <p className='text-sm md:text-lg text-[#363636] leading-normal md:leading-relaxed'>We have put together our library in a way that will showcase some of our FREE resources. Narrow the resources down using the filters we have set up below. If you wish to unlock and gain access to some of our better and more useful resources, consider <b>signing</b> up to unlock all our resources.</p>
            </div>
            <ResourceLibraryCTR />
        </>
    )
}

export default page