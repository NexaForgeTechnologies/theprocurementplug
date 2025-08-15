"use client";
import { useState, useEffect } from 'react';
import BtnOne from '../components/BtnOne';

export default function FormApplication() {
  const [isOpen, setIsOpen] = useState(true);


  useEffect(() => {
    isOpen ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "unset"
  }, [isOpen])

  // useEffect(() => {
  //   const SwitchHandler = (OpenCondition) => {
  //     setIsOpen(OpenCondition);
  //   }
  // }, [isOpen])

  return (
    <>
      {isOpen && (
        <section className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/80 py-8 md:py-10 overflow-y-auto">
          <form className="flex justify-center items-center" >

            <section className='bg-[#151515] p-6 rounded-lg shadow-lg border border-[#444444] flex flex-col gap-7
               w-full max-w-3xl relative mx-5'>
              <span className='absolute top-3 right-7 text-2xl text-[#B08D57] cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}
              >x</span>


              {/* Heading */}
              <section className='flex flex-col items-center gap-y-3 py-5'>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold md:font-normal text-[#B08D57] text-center">
                  Founding
                  <span className='font-bold md:font-semibold ml-1'>
                    Waitlist Application
                  </span>
                </h1>
                <p className='text-sm md:text-base text-[#C2C2C2] text-center'>
                  Join a curated cohort of the world’s most forward-thinking procurement leaders.
                </p>
              </section>


              {/* Step 1: Membership Type */}
              <section className='flex flex-col gap-y-2'>
                <h1 className='text-lg lg:text-2xl text-[#B08D57] font-semibold'>Step 1:
                  <span className='font-normal ml-1'>Membership Type</span></h1>
                <p className="font-normal text-white text-base md:text-2xl">Are you joining as:</p>

                <div className="space-y-2 mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="radio"
                        name="membership_type"
                        value="individual"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        An Individual Procurement Executive
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="radio"
                        name="membership_type"
                        value="business"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Representing a Business / Organisation
                      </span>
                    </div>
                  </label>
                </div>
              </section>

              {/* Step 2: About You / Your Organisation */}
              <section className='flex flex-col gap-y-2'>
                <h1 className='text-lg lg:text-2xl text-[#B08D57] font-semibold'>Step 2:
                  <span className='font-normal ml-1'>About You / Your Organisation</span></h1>

                <div className="space-y-2 mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3">
                  <label className="flex flex-col justify-start gap-y-2">
                    <div>
                      <span className='text-[white] text-base md:text-xl'>
                        Name
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="appearance-none w-full bg-[#151515] border border-[#444444] rounded-md px-3 py-2 text-[#C2C2C2] placeholder-[#C2C2C2] focus:outline-none"
                    />
                  </label>

                  <label className="flex flex-col justify-start gap-y-2">
                    <div>
                      <span className='text-[white] text-base md:text-xl'>
                        Job Title
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Job Title"
                      className="appearance-none w-full bg-[#151515] border border-[#444444] rounded-md px-3 py-2 text-[#C2C2C2] placeholder-[#C2C2C2] focus:outline-none"
                    />
                  </label>

                  <label className="flex flex-col justify-start gap-y-2">
                    <div>
                      <span className='text-[white] text-base md:text-xl'>
                        Company Name
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Company Name (if applicable)"
                      className="appearance-none w-full bg-[#151515] border border-[#444444] rounded-md px-3 py-2 text-[#C2C2C2] placeholder-[#C2C2C2] focus:outline-none"
                    />
                  </label>


                  <label className="flex flex-col justify-start gap-y-2">
                    <div>
                      <span className='text-[white] text-base md:text-xl'>
                        Email
                      </span>
                    </div>
                    <input
                      type="Email"
                      placeholder="Email Address"
                      className="appearance-none w-full bg-[#151515] border border-[#444444] rounded-md px-3 py-2 text-[#C2C2C2] placeholder-[#C2C2C2] focus:outline-none"
                    />
                  </label>

                  <label className="flex flex-col justify-start gap-y-2">
                    <div>
                      <span className='text-[white] text-base md:text-xl'>
                        LinkedIn Profile
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="LinkedIn Profile (optional)"
                      className="appearance-none w-full bg-[#151515] border border-[#444444] rounded-md px-3 py-2 text-[#C2C2C2] placeholder-[#C2C2C2] focus:outline-none"
                    />
                  </label>

                  <label className="flex flex-col justify-start gap-y-2">
                    <div>
                      <span className='text-[white] text-base md:text-xl'>
                        Country of Residence
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Country of Residence"
                      className="appearance-none w-full bg-[#151515] border border-[#444444] rounded-md px-3 py-2 text-[#C2C2C2] placeholder-[#C2C2C2] focus:outline-none"
                    />
                  </label>
                </div>
              </section>



              {/* Step 3: Your Interest in Xec Plug */}
              <section className='flex flex-col gap-y-2'>
                <h1 className='text-lg lg:text-2xl text-[#B08D57] font-semibold'>Step 3:
                  <span className='font-normal ml-1'>Your Interest in Xec Plug</span></h1>
                <p className="font-normal text-white text-base md:text-2xl">What attracts you to the Xec Plug platform? (Select all that apply)</p>

                <div className="space-y-2 mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Boardroom Readiness
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Representing a Business / Organisation
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Proprietary Leadership Tools (XecAchieve, XecXchange, etc.)
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Executive Retreats & In-Person Events
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Virtual Masterclasses & On-Demand Learning
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Enterprise Transformation Strategy
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Coaching & Concierge Support
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Other (please specify): <input type="text" placeholder='_____________' className='pl-2 outline-none border-none bg-transparent' />
                      </span>
                    </div>
                  </label>
                </div>
              </section>

              <section>
                <p className="font-normal text-white text-base md:text-2xl">What attracts you to the Xec Plug platform? (Select all that apply)</p>

                <div className="space-y-2 mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Digital Membership (virtual access)
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Xec House Membership (in-person access)
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Not sure yet – I’d like to explore options
                      </span>
                    </div>
                  </label>
                </div>
              </section>


              {/* Step 4: Vision & Fit */}
              <section className='flex flex-col gap-y-2'>
                <h1 className='text-lg lg:text-2xl text-[#B08D57] font-semibold'>Step 4:
                  <span className='font-normal ml-1'>Step 4: Vision & Fit</span></h1>
                <p className="font-normal text-white text-base md:text-2xl">What is your current level of seniority?</p>

                <div className="space-y-2 mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="radio"
                        name="seniorityLevel"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        CPO
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="radio"
                        name="seniorityLevel"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Director / Head of Procurement
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="radio"
                        name="seniorityLevel"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        VP / AVP
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="radio"
                        name="seniorityLevel"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Executive / NED
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="radio"
                        name="seniorityLevel"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Other: <input type="text" placeholder='_____________' className='pl-2 outline-none border-none bg-transparent' />
                      </span>
                    </div>
                  </label>
                </div>

                <div className='flex flex-col gap-y-3 mt-2'>
                  <p className="font-normal text-white text-base md:text-2xl">What are your next leadership goals (e.g., COO, CEO, NED, transformation lead)? </p>
                  <textarea rows="4" placeholder='Write your answer' className="w-full bg-transparent text-[#C2C2C2] border border-[#C2C2C2]/50 min-h-30 outline-none rounded p-2"></textarea>
                </div>

                <div className='flex flex-col gap-y-3 mt-2'>
                  <p className="font-normal text-white text-base md:text-2xl">What would you hope to gain from being part of the founding cohort?</p>
                  <textarea rows="4" placeholder='Write your answer' className="w-full bg-transparent text-[#C2C2C2] border border-[#C2C2C2]/50 min-h-30 outline-none rounded p-2"></textarea>
                </div>

              </section>

              {/* Step 5: Final Confirmation */}
              <section className='flex flex-col gap-y-2'>
                <h1 className='text-lg lg:text-2xl text-[#B08D57] font-semibold'>Step 5:
                  <span className='font-normal ml-1'>Final Confirmation</span></h1>
                <p className="font-normal text-white text-base md:text-2xl">How did you hear about The Procurement Xec Plug?</p>

                <div className="space-y-2 mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        LinkedIn
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Referral
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Procurement Plug Ecosystem
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Event or Webinar
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Other: <input type="text" placeholder='_____________' className='pl-2 outline-none border-none bg-transparent' />
                      </span>
                    </div>
                  </label>
                </div>
              </section>

              <section>
                <p className="font-normal text-white text-base md:text-2xl">Would you like to be added to our updates and exclusive invite list?</p>

                <div className="space-y-2 mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="radio"
                        name='inviteOption'
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        Yes, keep me informed
                      </span>
                    </div>
                  </label>

                  <label className="flex items-start gap-x-3">
                    <div>
                      <input
                        type="radio"
                        name='inviteOption'
                        className="appearance-none w-4 h-4 rounded border border-gray-400 checked:bg-[white] checked:border-[white] mr-2 cursor-pointer "
                      />
                      <span className='text-[#C2C2C2] text-base md:text-lg'>
                        No, just waitlist me for now
                      </span>
                    </div>
                  </label>
                </div>
              </section>



              <div className='flex justify-center items-center' >
                <BtnOne typeSubmit={"submit"} name={"Submit Application to Waitlist"} />
              </div>
            </section>
          </form>
        </section>)}
    </>
  );
}
