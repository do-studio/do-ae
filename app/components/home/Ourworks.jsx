import React from "react";

const Ourworks = () => {
  return (
    <div className="min-h-screen flex items-center py-10 xl:py-20 justify-center">
      <div className="w-11/12 mx-auto grid gap-2 xl:gap-5 grid-cols-1 md:grid-cols-2">
        {/* Left large card */}
        <div className="bg-gray-200 rounded-3xl p-8  flex flex-col relative aspect-square justify-center">
          <div className="absolute bg-black px-3 py-2 rounded-full left-3 top-3 md:left-5 md:top-5 flex items-center gap-3">
            <span className="block h-3 w-3 rounded-full primary-bg"></span>
            <span className="text-white font-medium text-sm tracking-widest">
              OUR WORKS
            </span>
          </div>
        </div>

        {/* Right cards */}
        <div className="grid grid-cols-2 gap-2 xl:gap-5 ">
          {/* Web design */}
          <div className="aspect-square bg-neutral-800 rounded-3xl p-3 md:p-6 text-white flex flex-col">
            <span className="text-xs xl:text-2xl mb-2 font-light">
              Web design
            </span>
            <span className="text-[8px] xl:text-xs mt-auto">
              We create visually stunning, user-friendly websites that align
              with your brand.
            </span>
          </div>
          {/* Branding */}
          <div className="aspect-square bg-neutral-800 rounded-3xl p-3 md:p-6 text-white flex flex-col">
            <span className="text-xs xl:text-2xl mb-2 font-light">
              Branding
            </span>
            <span className="text-[8px] xl:text-xs mt-auto">
              From logos to full brand guidelines, we craft a strong, memorable
              identity.
            </span>
          </div>
          {/* UI/UX */}
          <div className="aspect-square bg-neutral-800 rounded-3xl p-3 md:p-6 text-white flex flex-col">
            <span className="text-xs xl:text-2xl mb-2 font-light">
              UI/UX Design
            </span>
            <span className="text-[8px] xl:text-xs mt-auto">
              Intuitive and engaging interfaces that enhance user experience and
              drive conversions.
            </span>
          </div>
          {/* Creative Direction */}
          <div className="aspect-square bg-neutral-800 rounded-3xl p-3 md:p-6 text-white flex flex-col">
            <span className="text-xs xl:text-2xl mb-2 font-light">
              Creative Direction
            </span>
            <span className="text-[8px] xl:text-xs mt-auto">
              We develop unique visual concepts that bring your brand’s story to
              life.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourworks;
