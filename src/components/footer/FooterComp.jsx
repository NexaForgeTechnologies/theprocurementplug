"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Icon from "@/components/icon/Icon";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
        setMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setShowAlert(false);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Subscription successful! Check your email for confirmation.");
        setEmail("");
        setShowAlert(true);
      } else {
        setMessage(data.error || "Failed to subscribe. Please try again.");
        setShowAlert(true);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
      setShowAlert(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setMessage("");
  };

  return (
    //   <footer
    //     style={{
    //       boxShadow: "0 0 0 100vmax #212121",
    //       clipPath: "inset(0 -100vmax)",
    //     }}
    //     className="bg-[#212121] text-white py-20 text-sm"
    //   >
    //     <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-[80px] pb-[20px]">
    //       {/* Left Section */}
    //       <div className="w-full lg:w-1/2 flex flex-col self-start justify-start items-start gap-[25px]">
    //         <Link href="/" className="block mb-4 w-[260px] h-[71px]">
    //           <Image
    //             width={200}
    //             height={200}
    //             src="/images/footer/Horizontal-V1-copy.png"
    //             alt="The Procurement Plug Logo"
    //             className="w-full"
    //           />
    //         </Link>
    //         <div className="max-w-[695px]">
    //           <p className="text-[15px] mb-[-10px] w-full">
    //             Join our newsletter to stay up to date on features and releases.
    //           </p>
    //         </div>
    //         <form onSubmit={handleSubscribe} className="w-full flex flex-col gap-6">
    //           <input
    //             type="email"
    //             placeholder="Your Email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             required
    //             className="w-full mb-[-18px] p-3 rounded-md text-sm text-black bg-white"
    //           />
    //           <button
    //             type="submit"
    //             disabled={isLoading}
    //             className="w-full bg-[#85009D] hover:bg-purple-800 text-white py-3 rounded-md cursor-pointer disabled:opacity-50 text-sm"
    //           >
    //             {isLoading ? "Subscribing..." : "Subscribe"}
    //           </button>
    //         </form>

    //         {showAlert && (
    //           <div
    //             className={`mt-2 w-full p-3 rounded-md flex justify-between items-center text-sm ${message.includes("successful")
    //                 ? "bg-green-900/50 text-green-400"
    //                 : message.includes("already subscribed")
    //                   ? "bg-yellow-900/50 text-yellow-400"
    //                   : "bg-red-900/50 text-red-400"
    //               }`}
    //           >
    //             <span>{message}</span>
    //             <button
    //               onClick={handleCloseAlert}
    //               className="text-white hover:text-gray-300 focus:outline-none"
    //             >
    //               ✕
    //             </button>
    //           </div>
    //         )}

    //         <div className="flex items-center gap-4 mt-3 text-sm">
    //           <Link
    //             href="https://www.linkedin.com/company/the-procurement-plug/"
    //             target="_blank"
    //             className="flex gap-1 items-center"
    //           >
    //             <Icon name="linkedin" size={20} color="#ffff" />
    //             <span>LinkedIn</span>
    //           </Link>
    //           <Link
    //             href="https://www.tiktok.com/@the.procurement.p"
    //             target="_blank"
    //             className="flex gap-1 items-center"
    //           >
    //             <Icon name="tiktok" size={20} color="#ffff" />
    //             <span>TikTok</span>
    //           </Link>
    //         </div>
    //       </div>

    //       {/* Right Section */}
    //       <div className="w-full lg:w-[76%] self-start justify-start grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-5">
    //         {/* Useful Links */}
    //         <div className="flex flex-col gap-[20px] w-full p-8 bg-[#121212] rounded-[10px] h-full text-sm">
    //           <h3 className="text-base font-bold text-[#b58c4a]">Useful Links</h3>
    //           <ul className="text-sm">
    //             <li className="mb-2">
    //               <Link href="/partnerships" className="hover:text-[#85009D] cursor-pointer">
    //                 Partnerships
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href="/ico-registered" className="hover:text-[#85009D] cursor-pointer">
    //                 ICO Registration
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>

    //         {/* Policies */}
    //         <div className="flex flex-col gap-5 w-full p-8 bg-[#121212] rounded-[10px] h-full text-sm">
    //           <h3 className="text-base font-bold text-[#b58c4a]">Policies</h3>
    //           <ul className="text-sm">
    //             <li className="mb-2">
    //               <Link
    //                 href="/general-terms-conditions/terms-conditions-mentee"
    //                 className="hover:text-[#85009D] cursor-pointer"
    //               >
    //                 Terms & Conditions - Mentees
    //               </Link>
    //             </li>
    //             <li className="mb-2">
    //               <Link
    //                 href="/general-terms-conditions/terms-conditions-mentors-coaches"
    //                 className="hover:text-[#85009D] cursor-pointer"
    //               >
    //                 Terms & Conditions - Mentors & Coaches
    //               </Link>
    //             </li>
    //             <li>
    //               <Link
    //                 href="/general-terms-conditions"
    //                 className="hover:text-[#85009D] cursor-pointer"
    //               >
    //                 General Terms & Conditions
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Bottom Bar */}
    //     <div className=" bg-[#121212] p-[20px] flex flex-col lg:flex-row justify-between items-center rounded-md">
    //       <span>© 2025 The Procurement Plug. All rights reserved.</span>

    //       <span className="mt-2 lg:mt-0">
    //         <Link
    //           href="https://achiever-grp.com/"
    //           target="_blank"
    //           className="font-semibold text-white hover:text-[#b08d57]"
    //         >
    //           An Achiever Group Company
    //         </Link>
    //       </span>

    //       <span className="mt-2 lg:mt-0">
    //         Powered By{" "}
    //         <Link
    //           href="https://nexaforgetech.com/"
    //           target="_blank"
    //           className="font-semibold text-white hover:text-[#b08d57]"
    //         >
    //           NexaForge Technologies
    //         </Link>
    //       </span>
    //     </div>
    //   </footer>
    <footer className="bg-[#212121] w-screen ml-[calc(50%-50vw)] px-6 sm:px-10 md:px-14 lg:px-20 relative pt-15 md:pt-20">
      {/* Top section */}
      <div className="grid col-span-1 lg:grid-cols-2 gap-y-10 gap-x-20 border-b border-[#B08D57]/50 pb-10 relative">
        <h2 className="font-semibold text-2xl md:text-3xl text-white max-w-2xl z-10">
          Join our <span className="text-[#B08D57]"> Newsletter </span> to stay up to date
          on features and releases.</h2>
        <img src="/images/footer/msg.png" alt="msg" className="absolute top-[12%] right-0 lg:left-1/3 w-50 md:w-50 lg:w-fit" />
        <div className="flex flex-col gap-10 items-end ">
          <form onSubmit={handleSubscribe} className="flex flex-col gap-6 w-full lg:w-sm z-10">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-[-18px] p-3 rounded-md text-sm text-black bg-white"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#85009D] hover:bg-purple-800 text-white py-3 rounded-md cursor-pointer disabled:opacity-50 text-sm"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {showAlert && (
            <div
              className={`mt-2 w-full p-3 rounded-md flex justify-between items-center text-sm ${message.includes("successful")
                ? "bg-green-900/50 text-green-400"
                : message.includes("already subscribed")
                  ? "bg-yellow-900/50 text-yellow-400"
                  : "bg-red-900/50 text-red-400"
                }`}
            >
              <span>{message}</span>
              <button
                onClick={handleCloseAlert}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Middle Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10 py-10 md:py-15 text-white">
        <section className="flex flex-col gap-y-8">
          <Link href="/" className="block w-[260px] h-[71px]">
            <Image
              width={200}
              height={200}
              src="/images/footer/Horizontal-V1-copy.png"
              alt="The Procurement Plug Logo"
              className="w-[80%]"
            />
          </Link>
          {/* <div className="max-w-[695px]">
            <p className="text-md mb-[-10px] w-full">
              <Link
                href="https://achiever-grp.com/"
                target="_blank"
              >
                An Achiever Group Company
              </Link>
            </p>
          </div> */}

          <div className="text-sm">
            <h3 className="text-center w-fit px-5 py-2 rounded-lg text-xl font-semibold text-[#B08D57] bg-[#121212]">Our Socials</h3>
            <div className="flex items-center flex-wrap gap-4 mt-5">
              <Link
                href="https://www.tiktok.com/@the.procurement.p"
                target="_blank"
                className="flex gap-1 items-center"
              >
                <Icon name="tiktok" size={18} color="#ffff" />
                <span>TikTok</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/the-procurement-plug/"
                target="_blank"
                className="flex gap-1 items-center"
              >
                <Icon name="linkedin" size={18} color="#ffff" />
                <span>LinkedIn</span>
              </Link>
              <Link
                href="https://www.youtube.com/@TheProcurementPlug"
                target="_blank"
                className="flex gap-1 items-center justify-center"
              >
                {/* <Icon name="linkedin" size={20} color="#ffff" /> */}
                <img src="/images/footer/youtube.png" alt="" className="w-5 h-5 relative top-1" />
                <span className="material-symbols-outlined">Youtube</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Dynamic Columns */}
        {[
          // {
          //   title: "Quick Links",
          //   links: [
          //     { name: "Personal Development Hub", href: '/personaldevelopmenthub' },
          //     { name: "Business Hub", href: "/business-hub" },
          //     { name: "The Procurement Concierge", href: "/concierge" },
          //     { name: "Community Hub", href: null },
          //     { name: "VIP Business Lounge", href: "/business-hub/vip-lounge" },
          //   ],
          // },
          {
            title: "Quick Links",
            links: [
              { name: "The Plug Career and Personal Growth Hub", href: '/personaldevelopmenthub' },
              { name: "The Plug Business Hub", href: "/business-hub" },
              { name: "The Procurement Concierge", href: "/concierge" },
              { name: "The Plug Community Hub", href: null },
              { name: "The Plug Resources Hub", href: null },
              { name: "The Plug Social Value Hub", href: null },
              { name: "The Plug Academy ", href: null },
              { name: "The Plug VIP Lounge", href: "/business-hub/vip-lounge" },
            ],
          },
          {
            title: "Useful Links",
            links: [
              { name: "Partnerships", href: "/partnerships" },
              { name: "ICO Registration", href: "/ico-registered" },
            ],
          },
          {
            title: "Policies",
            links: [
              { name: "Terms & Conditions - Mentees", href: "/general-terms-conditions/terms-conditions-mentee" },
              { name: "Terms & Conditions - Mentors & Coaches", href: "/general-terms-conditions/terms-conditions-mentors-coaches" },
              { name: "General Terms & Conditions", href: "/general-terms-conditions" },
            ],
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col gap-y-4 lg:pl-5">
            <h3 className="text-center w-fit px-3 py-2 rounded-lg text-xl font-semibold text-[#B08D57] bg-[#121212]">
              {item.title}
            </h3>
            <ul className="flex flex-col gap-y-2 text-sm">
              {item.links.map((link, i) => (
                <li key={i}>
                  {link.href ? (
                    <Link href={link.href} className="hover:underline">
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => alert("Available soon")}
                      className="text-left hover:underline"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </section>


      {/* Bottom Bar */}
      <div className="border-t border-[#B08D57]/50 p-[20px] flex flex-col lg:flex-row justify-between items-center  text-white">
        <span className="text-center">© 2025 The Procurement Plug. All rights reserved.</span>

        <span className="mt-2 lg:mt-0">
          <Link
            href="https://achiever-grp.com/"
            target="_blank"
            className="font-semibold text-white hover:text-[#b08d57]"
          >
            An Achiever Group Company
          </Link>
        </span>

        <span className="mt-2 lg:mt-0 flex flex-col items-center gap-x-2 sm:flex-row">
          Powered By{" "}
          <Link
            href="https://nexaforgetech.com/"
            target="_blank"
            className="font-semibold text-white hover:text-[#b08d57]"
          >
            NexaForge Technologies
          </Link>
        </span>
      </div>
    </footer >
  );
};

export default Footer;
