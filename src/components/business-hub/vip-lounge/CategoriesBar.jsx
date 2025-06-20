import React from "react";

function CategoriesBar({ categories, maxWidth }) {
  return (
    <div
      style={{
        boxShadow: "0 0 0 100vmax #85009D",
        clipPath: "inset(0 -100vmax)",
      }}
      className="bg-[#85009D] py-5 md:py-10 text-center mb-4 md:mb-8"
    >
      <h3 className="font-semibold text-[24px] md:text-[32px] md:text-5xl mb-4 md:mb-8 text-[#ffff]">
        Categories Bar
      </h3>
      <div
        style={maxWidth ? { maxWidth } : {}}
        className="flex justify-center gap-4 flex-wrap flex-col md:flex-row m-auto"
      >
        {categories.map((category, index) => (
          <p
            key={index}
            className="text-[16px] md:text-[24px] text-[#85009D] border-2 border-[#D09B48] rounded-[6px] bg-[#ffff] py-3 px-4"
          >
            {category}
          </p>
        ))}
      </div>
    </div>
  );
}

export default CategoriesBar;
