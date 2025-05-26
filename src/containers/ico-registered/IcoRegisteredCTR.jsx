import React from "react";
import PartnerCTR from "../home/partners/PartnerCTR";
import Image from "next/image";

function IcoRegistrationCTR() {
  return (
    <>
      <div
        style={{
          boxShadow: "0 0 0 100vmax #E6DDE5",
          clipPath: "inset(0 -100vmax)",
        }}
        className="flex flex-col justify-center py-18 relative bg-cover bg-[url('/images/termandcondition/section.png')] before:absolute before:inset-0 before:bg-[#E6DDE5]/80 before:pointer-events-none before:content-['']"
      >
        <p className="font-extrabold text-xl md:text-2xl text-[#B08D57] mb-4 md:mb-2 z-10">
          The Procurement Plug
        </p>
        <h3 className="font-extrabold text-3xl md:text-5xl text-[#010101] z-10">
          We are ICO Registered
        </h3>
      </div>
      <div className="flex gap-6 md:gap-8 flex-col md:flex-row items-start">
        <div className="flex-1">
          <h2 className="font-extrabold text-xl md:text-2xl text-[#010101]">
            Your data matters. Thats why we go that extra mile with the ICO.
          </h2>
        </div>
        <div className="flex-1">
          <p className="text-sm md:text-lg text-[#363636] leading-normal md:leading-relaxed">
            At The Procurement Plug, safeguarding your privacy and ensuring the
            security of your data are our top priorities. We are officially
            registered with the Information Commissioner’s Office (ICO) under
            registration number <strong>ZB861455</strong>, demonstrating our
            commitment to adhering to the strictest data protection standards.
            This registration reflects our compliance with the UK General Data
            Protection Regulation (GDPR) and the Data Protection Act 2018,
            ensuring your information is handled responsibly and securely.
          </p>
        </div>
      </div>
      <div className="flex gap-6 md:gap-8 flex-col md:flex-row items-start">
        <div className="flex-1">
          <Image
            width={624}
            height={250}
            className="mt-0 md:mt-[-192px] h-[250px] w-full object-cover"
            src="/images/ico/icof.webp"
            alt="ico"
          />
          <Image
            width={624}
            height={400}
            className="mt-5 w-full"
            src="/images/ico/icos.png"
            alt="ico"
          />
        </div>
        <div className="flex-1">
          <div>
            <h2 className="font-extrabold text-xl md:text-2xl text-[#010101]">
              Your data matters. Thats why we go that extra mile with the ICO.
            </h2>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex items-start gap-5">
              <div className='before:content-[""] before:inline-block before:w-4 before:h-4 before:border-t-3 before:border-r-3 before:border-[#363636] before:rotate-45 before:mr-2 before:mt-2'></div>
              <p className="text-sm md:text-lg text-[#363636] leading-normal md:leading-relaxed">
                <strong>Your data is protected:</strong> We implement robust
                security measures to safeguard your information from
                unauthorized access, loss, or misuse.
              </p>
            </div>
            <div className="flex items-start gap-5">
              <div className='before:content-[""] before:inline-block before:w-4 before:h-4 before:border-t-3 before:border-r-3 before:border-[#363636] before:rotate-45 before:mr-2 before:mt-2'></div>
              <p className="text-sm md:text-lg text-[#363636] leading-normal md:leading-relaxed">
                <strong>Transparency is key:</strong> We clearly outline how we
                collect, store, and use your data, ensuring you’re always
                informed.
              </p>
            </div>
            <div className="flex items-start gap-5">
              <div className='before:content-[""] before:inline-block before:w-4 before:h-4 before:border-t-3 before:border-r-3 before:border-[#363636] before:rotate-45 before:mr-2 before:mt-2'></div>
              <p className="text-sm md:text-lg text-[#363636] leading-normal md:leading-relaxed">
                <strong>Confidentiality is a priority:</strong> Your sensitive
                information is handled with the utmost care and shared only when
                necessary for the services we provide, and always with your
                consent.
              </p>
            </div>
            <div className="flex items-start gap-5">
              <div className='before:content-[""] before:inline-block before:w-4 before:h-4 before:border-t-3 before:border-r-3 before:border-[#363636] before:rotate-45 before:mr-2 before:mt-2'></div>
              <p className="text-sm md:text-lg text-[#363636] leading-normal md:leading-relaxed">
                <strong>Compliance is guaranteed:</strong> As an ICO-registered
                organization, we adhere to strict legal requirements for data
                handling and processing.
              </p>
            </div>
          </div>
          <div className="mt-6 cursor-pointer">
            <a
              href=""
              class="bg-[#9C27B0] px-6 py-3 text-white rounded-xl text-sm md:text-lg leading-normal md:leading-relaxed cursor-pointer text-left"
            >
              Visit The ICO Registration Online
            </a>
          </div>
        </div>
      </div>
      <div>
        <PartnerCTR />
      </div>
    </>
  );
}

export default IcoRegistrationCTR;
