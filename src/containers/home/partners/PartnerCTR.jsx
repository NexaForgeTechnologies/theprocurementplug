import React from 'react'
import Link from 'next/link'

function PartnerCTR() {
    return (
        <div>
            <h3 className='font-extrabold text-3xl md:text-5xl mb-4 text-[#010101] text-center'>Trusted by</h3>
            <div className='flex gap-2 justify-center w-full mt-6 items-center flex-wrap'>
                <Link href="/">
                    <img className='w-[200px] object-fill' src="/images/home/partners/logo-1.png" alt="partner" />
                </Link>
                <Link href='/'>
                    <img className='w-[200px] object-fill' src="/images/home/partners/logo-2.webp" alt="partner" />
                </Link>
                <Link href="/">
                    <img className='w-[200px] object-fill' src="/images/home/partners/logo-3.png" alt="partner" />
                </Link>
            </div>
        </div>
    )
}

export default PartnerCTR