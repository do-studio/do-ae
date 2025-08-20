"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { abstratbg } from "../../../public";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import {serviceData} from '../../components/services/data'

gsap.registerPlugin(ScrollTrigger);



const servicelist = () => {
    const stackRefs = useRef([]);
    
      useEffect(() => {
        stackRefs.current.forEach((el) => {
          if (el) {
            gsap.fromTo(
              el,
              { opacity: 0, y: 60 },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        });
    
        return () => {
          stackRefs.current.forEach((el) => {
            if (el && el.scrollTrigger) el.scrollTrigger.kill();
          });
        };
      }, []);
    
  return (
    <div className="w-11/12 xl:w-10/12 mx-auto py-10 xl:py-20 flex flex-col gap-16 xl:gap-20">
        {serviceData.map((service, idx) => (
          <div key={idx}>
            <div
              
              className={`grid bg-white grid-cols-1 md:grid-cols-2 gap-5 gap-x-10 items-center `}
              ref={(el) => (stackRefs.current[idx] = el)}
            >
              {/* Text first for odd idx (second, fourth, ...) */}
              {idx % 2 === 1 && (
                <div className="h-full flex justify-center flex-col gap-3 xl:gap-5 order-1 md:order-1">
                  <h2 className="text-3xl xl:text-5xl text-black capitalize font-normal">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-sm xl:text-lg">
                    {service.desc}
                  </p>
                  <Link
                  href={`/services/${service.slug}`}
                    className="inline-flex gap-1 mt-2 text-brand text-indigo-600 transition-all hover:underline text-base"
                  >
                    Explore more <IoIosArrowRoundForward className="text-xl"/>
                  </Link>
                </div>
              )}
              {/* Video right for even idx, left for odd idx */}
              <div
                className={`w-full order-2 md:order-${
                  idx % 2 === 1 ? "2" : "1"
                }`}
              >
                <video
                  src={service.thumbvid}
                  autoPlay
                  loop
                  muted
                  className="w-full shadow-lg"
                />
              </div>
              {/* Text for even idx (first, third, ...) */}
              {idx % 2 === 0 && (
                <div className="h-full flex justify-center flex-col gap-3 xl:gap-5 order-1 md:order-2">
                  <h2 className="text-3xl xl:text-5xl text-black font-normal capitalize xl:w-[80%]">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-sm xl:text-lg">
                    {service.desc}
                  </p>
                <Link
                 href={`/services/${service.slug}`}
                    className="inline-flex gap-1 mt-2 text-brand text-indigo-600 transition-all hover:underline text-base"
                  >
                    Explore more <IoIosArrowRoundForward className="text-xl"/>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
  )
}

export default servicelist
