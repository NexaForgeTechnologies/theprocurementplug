export default function InfoTile({ src, title, para, address, rate }) {
    return (
        <div className="border border-[#DBBB89] rounded bg-[#FFFBF5] p-4 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-10">
            <img
                src={src}
                alt="img"
                className="w-20 sm:w-40 md:w-45 h-20 sm:h-40 md:h-45 rounded-full object-cover shrink-0"
            />

            <div className="flex flex-col gap-2 sm:gap-3 flex-grow justify-center sm:justify-start sm:mt-2">
                <h3 className="font-semibold text-lg md:text-xl text-[#85009D]">{title}</h3>
                <p className="text-[#1B1B1B] md:text-base">{para}</p>
                <strong className="text-[#1B1B1B]">{address}</strong>
                <div className="inline-flex items-center gap-2 bg-[#B08D57B2] rounded-4xl px-3 py-2 mt-1 w-max">
                    <img
                        src="/images/personaldevelopmenthub/welcome-mentors-directory/mentors-coaches-directory/category/crown.png"
                        alt="img"
                        className="w-5 h-auto rounded-full object-cover shrink-0"
                    />
                    <p className="text-white font-medium">{rate}<strong> $90 </strong>/ hr</p>
                </div>
            </div>
        </div>
    );
}
