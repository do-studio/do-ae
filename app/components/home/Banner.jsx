'use client'
import { BsArrowUpRight } from "react-icons/bs";
import { TfiMouse } from "react-icons/tfi";

const Banner = () => {
  return (
    <div className="px-20 relative bg-black min-h-screen flex flex-col items-center justify-center py-20 ">
      {/* Main Title and Floating Badges */}
      
      <h1 className="text-6xl md:text-[9vw] font-medium primary relative leading-none flex flex-col md:flex-row items-center">
        <span className="relative">
          Marketing
          {/* Green Aa Badge */}
          <span className="absolute -top-10 xl:-top-8 left-10 md:left-1/2 bg-yellow-400 text-black rounded-full h-10 w-10 md:h-14 md:w-14 grid place-items-center font-semibold text-[10px] md:text-sm -rotate-12 select-none">
            SEO
          </span>
          {/* Full-Stack Badge with Icon */}
          
          <span className="absolute -bottom-24 md:-bottom-7 xl:-bottom-5 left-0 md:left-10 bg-blue-600 px-3 py-1.5 rounded-full text-white text-[8px] md:text-xs font-semibold flex items-center">
            Digital Marketing
            <BsArrowUpRight className="ml-1 text-white text-xs" />
          </span>
    
        </span>
        <span className="text-white pl-2">Agency</span>
        <span className="hidden md:block primary mt-5 -ml-3 text-8xl font-bold">.</span>
        {/* Agencies Badge */}
        <span className="absolute flex items-center -top-5 md:top-0 right-0 md:right-16 bg-orange-400 rounded-full px-3 py-1.5 text-[8px] md:text-xs text-white font-semibold select-none">
          <BsArrowUpRight className="mr-1 text-white text-xs rotate-180" />
          Branding
        </span>
      </h1>

      {/* Top-right Navigation Labels */}
      <div className="w-full text-white pt-16 md:pt-5 2xl:pt-10 xl:pr-20 flex text-nowrap justify-center xl:justify-end space-x-2 uppercase font-medium text-[10px] md:text-xs">
        <span>Web Development</span>
        <span>-</span>
        <span>Production</span>
        <span>-</span>
        <span>Social media</span>
      </div>

      {/* Mouse Scroll Icon (Bottom-right) */}
      {/* <div className="absolute bottom-10 right-16 text-gray-400 animate-bounce">
        <TfiMouse size={30} />
      </div> */}
    </div>
  );
};

export default Banner;
