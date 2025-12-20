import React from "react";

function HeroCTR({ img, heading, para }) {
    return (
        <div className="relative">
            <div
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    boxShadow: '#00000036 0px 0px 0px 100vmax',
                    clipPath: 'inset(0 -100vmax)',
                }}
                className="w-screen ml-[calc(50%-50vw)] h-full absolute">
            </div>
            <div className="relative z-10 py-20 md:py-28 flex flex-col gap-4">
                <h2 className="text-[#ffff] text-[30px] md:text-[52px] font-medium md:font-medium">
                    {heading}
                </h2>
                <p className="line-clamp-6 text-[#ffff] text-[18px] md:text-[20px] md:leading-relaxed max-w-[540px]">
                    {para}
                </p>
            </div>
        </div>
    );
}

export default HeroCTR;
