import React from 'react'

const TermConditionComp = ({ title }) => {
    return (
        <div style={{
            boxShadow: "0 0 0 100vmax #9C34AD",
            clipPath: "inset(0 -100vmax)",
        }} className="flex justify-start items-center relative h-[155px] bg-cover bg-[url('/images/termandcondition/section.png')] before:absolute before:inset-0 before:bg-[repeating-linear-gradient(90deg,rgba(133,0,157,0.76),rgba(133,0,157,0.76))] before:pointer-events-none before:content-['']">
            <h3 className='font-extrabold text-xl md:text-2xl text-[#ffff] z-10'>{title}</h3>
        </div>
    )
}

export default TermConditionComp
