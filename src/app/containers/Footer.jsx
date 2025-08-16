import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-screen ml-[calc(50%-50vw)] flex flex-col justify-between px-5 sm:px-10 md:px-18 lg:px-20 bg-[#111] text-white pb-5">

            {/* Top Section */}
            <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-10 w-full">

                {/* Left: Logo */}
                <div className="flex flex-col justify-center items-center gap-y-3 md:gap-y-5">
                    <img src="logo-lg.png" alt="Xec Plug Logo" className="w-40 lg:w-60" />
                </div>

                {/* Right: Contact List */}
                <div className="mt-8 md:mt-0">
                    <h1 className="text-lg md:text-2xl text-[white] mb-5">Contact Us</h1>
                    <ul className="flex flex-col gap-y-4">

                        {/* LinkedIn */}
                        <Link
                            href="https://www.linkedin.com/company/achiever-group/about/?viewAsMember=true"
                            target="_blank"
                        >
                            <li className="flex items-center gap-x-3 hover:opacity-80 transition-opacity">
                                <img src="linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                                <span>Achiever Group</span>
                            </li>
                        </Link>

                        {/* Email */}
                        <Link href="mailto:grow@achievergrp.com">
                            <li className="flex items-center gap-x-3 hover:opacity-80 transition-opacity">
                                <img src="text.png" alt="Email" className="w-5 h-5" />
                                <u className="break-all">grow@achievergrp.com</u>
                            </li>
                        </Link>

                        {/* Location */}
                        <li className="flex items-center gap-x-3 hover:opacity-80 transition-opacity">
                            <img src="location.png" alt="Location" className="w-5 h-auto" />
                            <span>UK</span>
                        </li>

                        {/* Privacy Policy */}
                        <Link href="https://achiever-group-latest-stg.vercel.app/privacypolicy" target="_blank">
                            <li className="flex items-center gap-x-1.5 hover:opacity-80 transition-opacity -ml-1">
                                <img src="privacy.png" alt="Location" className="w-7 h-auto" />
                                <span className="">Privacy Policy</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </section>

            {/* Bottom Bar */}
            <section className="py-3 md:py-4 rounded-2xl bg-gradient-to-r from-[#111] to-[#B08D57] text-white border border-[#444] flex flex-wrap justify-center items-center gap-x-1 text-sm sm:text-base text-center">
                <Link href={'https://achiever-group-latest-stg.vercel.app/'} target="_blank">
                    <span>©2025 Achiever Group |</span>
                </Link>
                <Link href={'https://nexaforgetech.com/'} target="_blank">
                    <span>Powered by NexaForge Technologies</span>
                </Link>
            </section>

        </footer>
    );
}
