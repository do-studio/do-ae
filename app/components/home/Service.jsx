'use client'
import Image from "next/image";
import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import AnimatedButton from "../ui/animatedButton";
import { FaArrowRightLong } from "react-icons/fa6";

const Allservices = [
  {
    id: 1,
    title: "branding",
    image: `https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg`,
    desc: `CreatiFlow designed a smooth and intuitive grocery shopping experience for
          Groceria — including real-time cart syncing, smart search, and one-tap reorder.
          The clean UI and frictionless checkout flow led to significant user growth and
          increased daily sessions.`,
  },
  {
    id: 2,
    title: "digital marketing",
    image: `https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg`,
    desc: `CreatiFlow designed a smooth and intuitive grocery shopping experience for
          Groceria — including real-time cart syncing, smart search, and one-tap reorder.
          The clean UI and frictionless checkout flow led to significant user growth and
          increased daily sessions.`,
  },
  {
    id: 3,
    title: "website development",
    image: `https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg`,
    desc: `CreatiFlow designed a smooth and intuitive grocery shopping experience for
          Groceria — including real-time cart syncing, smart search, and one-tap reorder.
          The clean UI and frictionless checkout flow led to significant user growth and
          increased daily sessions.`,
  },
  {
    id: 4,
    title: "production",
    image: `https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg`,
    desc: `CreatiFlow designed a smooth and intuitive grocery shopping experience for
          Groceria — including real-time cart syncing, smart search, and one-tap reorder.
          The clean UI and frictionless checkout flow led to significant user growth and
          increased daily sessions.`,
  },
];

const Service = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="bg-white text-black py-10 xl:py-20">
      <div className="w-11/12 mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <span className="block h-3 w-3 rounded-full primary-bg"></span>
          <span className="text-black font-medium text-sm tracking-widest">
            SERVICES
          </span>
        </div>
        <p className="text-2xl sm:text-4xl xl:text-5xl font-medium leading-tight">
          Everything you need to stand out, scale up, and succeed
        </p>

        <div className="mt-5">
          {Allservices.map((ser) => (
            <div 
              key={ser.id} 
              className={` p-5 border-b last:border-none border-gray-200 ${hoveredItem === ser.id && 'bg-gray-50 border-white'} overflow-hidden transition-all duration-500 ease-in-out`}
              onMouseEnter={() => setHoveredItem(ser.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Collapsed Header */}
              <div className={` flex items-center justify-between  cursor-pointer transition-all duration-300 ${hoveredItem === ser.id ? 'pb-5' : 'py-5'}`}>
                <div className="flex items-center gap-10">
                  <p className="text-gray-500 font-sans">0{ser.id}</p>
                  <h1 className="font-medium capitalize  xl:text-2xl">{ser.title}</h1>
                </div>
                <BsArrowUpRight className="text-sm xl:text-3xl" />
              </div>
              
              {/* Expanded Content */}
              <div 
                className={`grid grid-cols-1 xl:grid-cols-3 gap-10 transition-all duration-500 ease-in-out overflow-hidden ${hoveredItem === ser.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                
                <div className="md:col-span-2 flex flex-col gap-2 justify-center h-full px-2 xl:px-10 relative">
                  <p className=" xl:w-[80%] text-xs xl:text-base">{ser.desc}</p>
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