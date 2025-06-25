import HeroCTR from '@/components/business-hub/vip-lounge/VipHeroSection'
import Link from 'next/link'
import React from 'react'

function Breadcrumb() {
    return (
        <nav className="text-sm breadcrumbs my-4">
            <ol className="list-reset flex gap-2 text-gray-600">
                <li>
                    <Link href="/business-hub" className="hover:underline">Business Hub</Link>
                </li>
                <li>/</li>
                <li className="text-gray-900 font-semibold">
                    The Procurement Plug Concierge
                </li>
            </ol>
        </nav>
    )
}

const page = () => {
    return (
        <div>
            <HeroCTR
                img="/images/bussiness-hub/firsttile.png"
                heading={
                    <span className="flex flex-col gap-0 leading-none">
                        <span className="font-extrabold">The Procurement Plug Concierge</span>
                    </span>
                }
                para="Cooming Soon "
            />
            <Breadcrumb />
        </div>
    )
}

export default page
