This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoMailUnreadOutline } from "react-icons/io5";
import { abstratbg } from "../../../public";
const gradevid = `https://cdn.sanity.io/files/0hjyj1bs/production/045ed0650046126bc9f3682bde7788583d4110e0.mov`;

const Banner = ({service}) => {
  return (
    <>
      <section className="">
        <div className="h-full p-5 py-20 xl:px-16 xl:p-20 bg-black relative overflow-hidden text-white rounded-3xl mt-10 xl:mt-16">
          <div className="z-0 absolute left-0 top-0 h-full w-full  overflow-hidden">
            {/* <Image
              className="object-cover object-bottom"
              fill
              src={abstratbg}
              alt="Abstract Background"
              priority
            /> */}
              <video
          src={gradevid}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 bottom-0 w-full h-full opacity-80 object-cover z-0"
        />
          </div>
          <div className="flex flex-col gap-6 xl:w-[70%] relative z-10">
            <div className="uppercase text-4xl xl:text-6xl font-medium">
              <h4>{service.innertitle}</h4>
            </div>

            <p className="text-xs xl:text-lg xl:text-justify">
              {service.desc}
            </p>
            <div className="group w-fit flex items-center  primary-bg hover:bg-white hover:text-black text-sm px-10 py-4 rounded-full cursor-pointer relative">
              <Link href={"/"} className="z-10">
                Get in Touch
              </Link>
              {/* Arrow absolutely positioned */}
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xl  hover:text-black opacity-0 pointer-events-none transition-all duration-300 ease-in-out translate-x-[-16px] group-hover:translate-x-3 group-hover:opacity-100">
                <HiArrowLongRight />
              </span>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-full grid place-items-center -mt-8 z-20 relative">
          <div className="bg-black border-4 w-fit rounded-full px-10 py-5 flex gap-2 items-center justify-center">
            <IoMailUnreadOutline className="text-2xl" />
            <p className="text-sm xl:text-lg">
              <a href="mailto:info@dostudio.co.in">info@dostudio.co.in</a>
            </p>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="bg-gray-100 text-black -mt-12 p-5 xl:p-14 rounded-3xl">
        <div className="xl:w-[70%] mx-auto py-10 flex flex-col items-center gap-5">
          <p className=" xl:text-xl xl:leading-8 text-center">
            {service.about}
          </p>
        </div>
        <div className=" bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-[80%] mx-auto" />

        <div className="pt-10 flex flex-col md:flex-row gap-10 justify-between items-center w-full">
          <p className="basis-2/5 text-center xl:text-left text-xl xl:text-4xl  font-medium">
            BRING IN TARGET VISITORS AND INCREASE PROFIT
          </p>
          <div className="basis-3/5 grid grid-cols-2 place-items-center md:flex gap-6 justify-end">
            <div className="flex flex-col gap-2">
              <p className="text-3xl xl:text-5xl font-medium font-sans">
                16<span className="text-gray-500">+</span>
              </p>
              <p className="text-[10px] md:text-base capitalize">
                Years Experience
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-3xl xl:text-5xl font-medium font-sans">
                10<span className="text-gray-500">+</span>
              </p>
              <p className="text-[10px] md:text-base capitalize">
                Total Win Award
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-3xl xl:text-5xl font-medium font-sans">
                50<span className="text-gray-500">+</span>
              </p>
              <p className="text-[10px] md:text-base capitalize">
                Professional Team
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-3xl xl:text-5xl font-medium font-sans">
                4.5<span className="text-gray-500">/</span>5
              </p>
              <p className="text-[10px] md:text-base capitalize">
                Rating Our Platform
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;



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



const   servicelist = () => {
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
                  className="w-full h-full object-cover shadow-lg aspect-square"
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


