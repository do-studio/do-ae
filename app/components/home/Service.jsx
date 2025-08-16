'use client'
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import AnimatedButton from "../ui/animatedButton";
import { FaArrowRightLong } from "react-icons/fa6";

const Allservices = [
  {
    id: 1,
    title: "Search Engine Optimization (SEO)",
    image: `https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg`,
    desc: `Be found where it matters on the first page of Google.`,
  },
  {
    id: 2,
    title: "Social Media Marketing",
    image: `https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg`,
    desc: `Connect, engage, and grow your audience with scroll-stopping content.`,
  },
  {
    id: 3,
    title: "Web Design & Development",
    image: `https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg`,
    desc: `Build a stunning website that converts, not just looks good.`,
  },
  {
    id: 4,
    title: "Branding",
    image: `https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg`,
    desc: `Build a memorable brand that customers recognize and trust.`,
  },
];

const Service = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoverDirection, setHoverDirection] = useState("top");
  const [isMobile, setIsMobile] = useState(false);
  const hoverTimeout = useRef(null);

  // Detect mobile / touch device
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768); // treat < md breakpoint as mobile
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = (e, id) => {
    if (isMobile) return; // disable hover on mobile
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const direction = y < rect.height / 2 ? "top" : "bottom";

    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setHoverDirection(direction);
      setHoveredItem(id);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (isMobile) return; // disable hover close on mobile
    clearTimeout(hoverTimeout.current);
    setHoveredItem(null);
  };

  const handleClickMobile = (id) => {
    if (!isMobile) return;
    setHoveredItem((prev) => (prev === id ? null : id)); // toggle on click
    setHoverDirection("top"); // default for mobile
  };

  return (
    <div className="bg-white text-black py-10 xl:py-20">
      <div className="w-11/12 mx-auto">
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-5">
          <span className="block h-3 w-3 rounded-full primary-bg"></span>
          <span className="text-black uppercase font-medium text-sm tracking-widest">
            Our Core Services
          </span>
        </div>
        <p className="text-2xl sm:text-4xl xl:w-[80%] font-medium leading-tight">
          At Do Studio, we provide data-driven digital marketing services designed to grow your brand online.
        </p>

        {/* Services */}
        <div className="mt-5">
          {Allservices.map((ser) => (
            <div
              key={ser.id}
              className={`p-5 border-b last:border-none border-gray-200 
                ${hoveredItem === ser.id && "bg-gray-50 border-white"} 
                overflow-hidden transition-all duration-500 ease-in-out`}
              onMouseEnter={(e) => handleMouseEnter(e, ser.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClickMobile(ser.id)}
            >
              {/* Collapsed Header */}
              <div
                className={`flex items-center justify-between cursor-pointer transition-all duration-300 ${
                  hoveredItem === ser.id ? "pb-5" : "py-5"
                }`}
              >
                <div className="flex items-center gap-10">
                  <p className="text-gray-500 font-sans">0{ser.id}</p>
                  <h1 className="font-medium capitalize xl:text-2xl">{ser.title}</h1>
                </div>
                <BsArrowUpRight className="text-sm xl:text-3xl" />
              </div>

              {/* Expanded Content */}
              <div
                className={`grid grid-cols-1 xl:grid-cols-3 gap-10 transition-all duration-500 ease-in-out overflow-hidden 
                  ${hoveredItem === ser.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                style={{
                  transformOrigin:
                    hoveredItem === ser.id
                      ? hoverDirection === "top"
                        ? "top center"
                        : "bottom center"
                      : undefined,
                }}
              >
                {/* Text Content */}
                <div className="md:col-span-2 flex flex-col gap-2 justify-center h-full px-2 xl:px-10 relative">
                  <p className="xl:w-[80%] text-xs xl:text-base">{ser.desc}</p>
                  <div className="mt-5">
                    <AnimatedButton
                      href="#"
                      label="Learn More"
                      textColor="#000"
                      hoverTextColor="#000"
                      iconColor="#000"
                      hoverIconColor="#000"
                      circleColor="#AEFE00"
                      IconComponent={FaArrowRightLong}
                    />
                  </div>
                </div>

                {/* Image */}
                <div className="flex flex-col gap-3 xl:py-10 xl:pr-10">
                  <div className="-mt-5 relative rounded-xl shadow-2xs overflow-hidden xl:-rotate-6 aspect-video w-full">
                    <Image
                      src={ser.image}
                      alt={ser.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
