import { BsArrowUpRight } from "react-icons/bs";
import { RevealWrapper } from "next-reveal";
import { Grade } from "../../../public";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="px-20 relative bg-[#0D0E16] w-[100vw] min-h-screen overflow-hidden flex flex-col items-center justify-center py-20 ">
      {/* Main Title and Floating Badges */}
      <Image className="absolute w-full scale-200 xl:scale-none top-0 xl:-top-20 left-0 z-0 object-cover opacity-70" src={Grade} alt="garde" />
      <h1 className="text-6xl md:text-[9vw] font-medium primary relative leading-none flex flex-col md:flex-row items-center">
        <span className="relative">
           <RevealWrapper
            origin="bottom"
            delay={250}
            duration={500}
            distance="100px"
            reset={true}
          >
          Marketing
          </RevealWrapper>
          {/* Green Aa Badge */}
          <RevealWrapper
            rotate={{ x: 12, y: 40, z: 0 }}
            origin="up"
            delay={100}
            duration={500}
            distance="100px"
            reset={true}
            className="absolute -top-16 xl:-top-16 left-14 md:left-1/2 text-center bg-yellow-400 text-black rounded-full h-16 w-16 xl:w-20 xl:h-20 grid place-items-center font-semibold text-[10px] md:text-sm -rotate-12 select-none"
          >
            <span>Branding</span>
          </RevealWrapper>
          {/* Full-Stack Badge with Icon */}
          <RevealWrapper
            rotate={{ x: 12, y: 40, z: 0 }}
            origin="bottom"
            delay={150}
            duration={500}
            distance="100px"
            reset={true}
          >
            <span className="absolute -bottom-24 md:-bottom-7 xl:-bottom-5 left-0 md:left-10 bg-blue-600 px-3 py-1.5 rounded-full text-white text-[8px] md:text-xs font-semibold flex items-center">
              Digital Marketing
              <BsArrowUpRight className="ml-1 text-white text-xs" />
            </span>
          </RevealWrapper>
        </span>
           <RevealWrapper
            origin="bottom"
            delay={350}
            duration={500}
            distance="100px"
            reset={true}
          >
        <span className="text-white pl-2">Agency</span>
        </RevealWrapper>
        <span className="hidden md:block primary mt-5 -ml-3 text-8xl font-bold">
          .
        </span>
        {/* Agencies Badge */}
        <RevealWrapper
    
          origin="left"
          delay={200}
          duration={500}
          distance="100px"
          reset={true}
          className="absolute  -top-5 md:top-0 right-0 md:right-16 bg-orange-400 rounded-full px-3 py-1.5 text-[8px] md:text-xs text-white font-semibold select-none"
        >
          <span className="flex items-center">
            <BsArrowUpRight className="mr-1 text-white text-xs rotate-180" />
            Web Development
          </span>
        </RevealWrapper>
      </h1>

      {/* Top-right Navigation Labels */}
      <div className="w-full text-white pt-16 md:pt-5 2xl:pt-10 xl:pr-20 flex text-nowrap justify-center xl:justify-end space-x-2 uppercase font-medium text-[10px] md:text-xs">
        <span>SEO</span>
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
