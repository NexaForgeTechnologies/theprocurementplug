// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";

// import Icon from "@/components/icon/Icon";
// import Image from "next/image";

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);

//   useEffect(() => {
//     if (showAlert) {
//       const timer = setTimeout(() => {
//         setShowAlert(false);
//         setMessage("");
//       }, 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [showAlert]);

//   const handleSubscribe = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setMessage("");
//     setShowAlert(false);

//     try {
//       const response = await fetch("/api/subscribe", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessage("Subscription successful! Check your email.");
//         setEmail("");
//         setShowAlert(true);
//       } else {
//         setMessage(data.error || "Failed to subscribe. Please try again.");
//         setShowAlert(true);
//       }
//     } catch (error) {
//       setMessage("An error occurred. Please try again later.");
//       setShowAlert(true);
//     } finally {
//       setIsLoading(false);
//       setIsLoading(false);
//     }
//   };

//   const handleCloseAlert = () => {
//     setShowAlert(false);
//     setMessage("");
//   };

//   return (
//     <footer
//       style={{
//         boxShadow: "0 0 0 100vmax #212121",
//         clipPath: "inset(0 -100vmax)",
//       }}
//       className="bg-[#212121] text-white py-20"
//     >
//       <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-[80px] pb-[20px]">
//         <div className="w-full lg:w-1/2 flex flex-col self-start justify-start items-start gap-[25px]">
//           <Link href="/" className="block mb-4 w-[260px] h-[71px]">
//             <Image
//               width={200}
//               height={200}
//               src="/images/footer/Horizontal-V1-copy.png"
//               alt="The Procurement Plug Logo"
//               className="w-full"
//             />
//           </Link>
//           <div className="max-w-[695px]">
//             <p className="text-[17px] mb-[-10px] w-full">
//               Join our newsletter to stay up to date on features and releases.
//             </p>
//           </div>
//           <form
//             onSubmit={handleSubscribe}
//             className="w-full flex flex-col gap-6"
//           >
//             <input
//               type="email"
//               placeholder="Your Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full mb-[-18px] p-3 rounded-md text-black bg-white"
//             />
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-[#85009D] hover:bg-purple-800 text-white py-3 rounded-md cursor-pointer disabled:opacity-50"
//             >
//               {isLoading ? "Subscribing..." : "Subscribe"}
//             </button>
//           </form>
//           {/* {message && (
//                         <p
//                             className={`mt-2 text-sm ${message.includes("successful")
//                                     ? "text-green-400"
//                                     : message.includes("already subscribed")
//                                         ? "text-yellow-400"
//                                         : "text-red-400"
//                                 }`}
//                         >
//                             {message}
//                         </p>
//                     )} */}
//           {showAlert && (
//             <div
//               className={`mt-2 w-full p-3 rounded-md flex justify-between items-center ${
//                 message.includes("successful")
//                   ? "bg-green-900/50 text-green-400"
//                   : message.includes("already subscribed")
//                   ? "bg-yellow-900/50 text-yellow-400"
//                   : "bg-red-900/50 text-red-400"
//               }`}
//             >
//               <span>{message}</span>
//               <button
//                 onClick={handleCloseAlert}
//                 className="text-white hover:text-gray-300 focus:outline-none"
//               >
//                 ✕
//               </button>
//             </div>
//           )}
//           <div className="flex items-center gap-4 mt-3">
//             <Link
//               href="https://www.linkedin.com/company/the-procurement-plug/"
//               target="_blank"
//               className="flex gap-1 items-center"
//             >
//               <Icon name="linkedin" size={24} color="#ffff" />
//               <span>Linkedin</span>
//             </Link>
//             <Link
//               href="https://www.tiktok.com/@the.procurement.p"
//               target="_blank"
//               className="flex gap-1 items-center"
//             >
//               <Icon name="tiktok" size={24} color="#ffff" />
//               <span>TikTok</span>
//             </Link>
//           </div>
//         </div>

//         {/* Links Section */}
//         <div className="w-full lg:w-[76%] self-start justify-start grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-5">
//           {/* Useful Links */}
//           <div className="flex flex-col gap-[20px] w-full p-8 bg-[#121212] rounded-[10px] h-full">
//             <h3 className="text-xl font-bold text-[#b58c4a]">Useful Links</h3>
//             <ul>
//               <li className="mb-2">
//                 <Link
//                   href="/partnerships"
//                   className="hover:text-[#85009D] cursor-pointer"
//                 >
//                   Partnerships
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/ico-registered"
//                   className="hover:text-[#85009D] cursor-pointer"
//                 >
//                   ICO Registration
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Policies */}
//           <div className="flex flex-col gap-5 w-full p-8 bg-[#121212] rounded-[10px] h-full">
//             <h3 className="text-xl font-bold text-[#b58c4a]">Policies</h3>
//             <ul>
//               <li className="mb-2">
//                 <Link
//                   href="/general-terms-conditions/terms-conditions-mentee"
//                   className="hover:text-[#85009D] cursor-pointer"
//                 >
//                   Terms & Conditions - Mentees
//                 </Link>
//               </li>
//               <li className="mb-2">
//                 <Link
//                   href="/general-terms-conditions/terms-conditions-mentors-coaches"
//                   className="hover:text-[#85009D] cursor-pointer"
//                 >
//                   Terms & Conditions - Mentors & Coaches
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/general-terms-conditions"
//                   className="hover:text-[#85009D] cursor-pointer"
//                 >
//                   General Terms & Conditions
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className=" bg-[#121212] p-[20px] flex flex-col lg:flex-row justify-between items-center rounded-md">
//         <span>© 2025 The Procurement Plug. All rights reserved.</span>
//         <span className="mt-2 lg:mt-0">
//           Website Created By:{" "}
//           <Link
//             href="https://nexaforgetech.com/"
//             target="_blank"
//             className="font-semibold text-white"
//           >
//             NexaForge Technologies
//           </Link>
//         </span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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
        setMessage("Subscription successful! Check your email.");
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
      setIsLoading(false);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setMessage("");
  };

  return (
    <footer
      style={{
        boxShadow: "0 0 0 100vmax #212121",
        clipPath: "inset(0 -100vmax)",
      }}
      className="bg-[#212121] text-white py-20"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-[80px] pb-[20px]">
        <div className="w-full lg:w-1/2 flex flex-col self-start justify-start items-start gap-[25px]">
          <Link href="/" className="block mb-4 w-[260px] h-[71px]">
            <Image
              width={200}
              height={200}
              src="/images/footer/Horizontal-V1-copy.png"
              alt="The Procurement Plug Logo"
              className="w-full"
            />
          </Link>
          <div className="max-w-[695px]">
            <p className="text-[17px] mb-[-10px] w-full">
              Join our newsletter to stay up to date on features and releases.
            </p>
          </div>
          <form
            onSubmit={handleSubscribe}
            className="w-full flex flex-col gap-6"
          >
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mb-[-18px] p-3 rounded-md text-black bg-white"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#85009D] hover:bg-purple-800 text-white py-3 rounded-md cursor-pointer disabled:opacity-50"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          {/* {message && (
                        <p
                            className={`mt-2 text-sm ${message.includes("successful")
                                    ? "text-green-400"
                                    : message.includes("already subscribed")
                                        ? "text-yellow-400"
                                        : "text-red-400"
                                }`}
                        >
                            {message}
                        </p>
                    )} */}
          {showAlert && (
            <div
              className={`mt-2 w-full p-3 rounded-md flex justify-between items-center ${
                message.includes("successful")
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
          <div className="flex items-center gap-4 mt-3">
            <Link
              href="https://www.linkedin.com/company/the-procurement-plug/"
              target="_blank"
              className="flex gap-1 items-center"
            >
              <Icon name="linkedin" size={24} color="#ffff" />
              <span>Linkedin</span>
            </Link>
            <Link
              href="https://www.tiktok.com/@the.procurement.p"
              target="_blank"
              className="flex gap-1 items-center"
            >
              <Icon name="tiktok" size={24} color="#ffff" />
              <span>TikTok</span>
            </Link>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full lg:w-[76%] self-start justify-start grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-5">
          {/* Useful Links */}
          <div className="flex flex-col gap-[20px] w-full p-8 bg-[#121212] rounded-[10px] h-full">
            <h3 className="text-xl font-bold text-[#b58c4a]">Useful Links</h3>
            <ul>
              <li className="mb-2">
                <Link
                  href="/partnerships"
                  className="hover:text-[#85009D] cursor-pointer"
                >
                  Partnerships
                </Link>
              </li>
              <li>
                <Link
                  href="/ico-registered"
                  className="hover:text-[#85009D] cursor-pointer"
                >
                  ICO Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="flex flex-col gap-5 w-full p-8 bg-[#121212] rounded-[10px] h-full">
            <h3 className="text-xl font-bold text-[#b58c4a]">Policies</h3>
            <ul>
              <li className="mb-2">
                <Link
                  href="/general-terms-conditions/terms-conditions-mentee"
                  className="hover:text-[#85009D] cursor-pointer"
                >
                  Terms & Conditions - Mentees
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/general-terms-conditions/terms-conditions-mentors-coaches"
                  className="hover:text-[#85009D] cursor-pointer"
                >
                  Terms & Conditions - Mentors & Coaches
                </Link>
              </li>
              <li>
                <Link
                  href="/general-terms-conditions"
                  className="hover:text-[#85009D] cursor-pointer"
                >
                  General Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" bg-[#121212] p-[20px] flex flex-col lg:flex-row justify-between items-center rounded-md">
        <span>© 2025 The Procurement Plug. All rights reserved.</span>
        <span className="mt-2 lg:mt-0">
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
    </footer>
  );
};

export default Footer;
