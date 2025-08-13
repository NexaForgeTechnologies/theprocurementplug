import BtnOne from "./BtnOne";

export default function MembershipComp({ title, subtitle, includes, buttonText }) {
    return (
        <div className="bg-[#111] text-white  p-6 rounded-lg shadow-lg border border-[#f2b85933]">
            {/* Title */}
            <h2 className="text-lg font-semibold text-[#B08D57]">{title}</h2>

            {/* Subtitle */}
            <p className="text-sm text-gray-300 mt-2">{subtitle}</p>

            {/* Divider */}
            <div className="border-t border-[#B08D57] my-4"></div>

            {/* Includes */}
            <h3 className="font-medium text-sm mb-3">Includes:</h3>
            <ul className="space-y-2 text-sm">
                {includes.map((item, index) => (
                    <li key={index} className="flex gap-2 items-start">
                        <span className="text-[#B08D57] mt-1 flex-shrink-0">✔</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>

            {/* Button */}
            <button className="mt-6 w-full">
                <BtnOne name={buttonText} />
            </button>
        </div>
    );
}
