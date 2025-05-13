import React from 'react';

function BlogHeading({ img, heading, name, date, comment }) {
    return (
        <div
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                boxShadow: '#00000036 0px 0px 0px 100vmax',
                clipPath: 'inset(0 -100vmax)',
            }}
            className="w-screen ml-[calc(50%-50vw)] h-[30vh] md:h-[40vh] relative"
        >
            <div className="absolute inset-0 bg-black/20 pointer-events-none z-0"></div>
            <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[1024px] m-auto">
                <h3 className="font-extrabold my-6 md:my-14 text-2xl md:text-5xl text-white">
                    {heading}
                </h3>
                <p className="text-sm md:text-lg text-white leading-normal md:leading-relaxed">
                    {name} · {date} · {comment}
                </p>
            </div>
        </div>
    );
}

export default BlogHeading;
