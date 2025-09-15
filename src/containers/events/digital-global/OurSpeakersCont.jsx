
export default function OurSpeakersCont() {
    return (
        <>
            <section className="flex flex-col gap-y-4 mx-auto">
                {/* <div className="text-center self-center">
                    <h3 className="font-extrabold text-2xl md:text-3xl mb-4 md:mb-4 text-[#010101] text-center">
                        Event Speakers
                    </h3>
                    <p className="text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed text-center">
                        Speakers will be announced soon
                    </p>
                </div> */}
                <div className="bg-[#B08D58] text-white rounded flex flex-col gap-y-3 md:gap-y-4 px-10 py-7 md:min-w-sm">
                    <img src="/images/events/digital-global/anna.png" alt="" className="w-20 h-20 md:w-25 md:h-25 m-auto" />
                    <h3 className="font-extrabold text-lg md:text-xl leading-6 text-white text-center">
                        Annalisha Noel
                    </h3>
                    <p className="text-white text-lg md:text-2xl leading-normal md:leading-relaxed text-center">
                        Host
                    </p>
                    <p className="text-white text-sm md:text-lg leading-normal md:leading-relaxed text-center">
                        Founder and CEO <br />
                        The Procurement Plug
                    </p>
                </div>
            </section>
        </>
    );
}