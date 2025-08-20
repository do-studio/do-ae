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
        <div className="h-full p-5 py-20 xl:p-20 bg-black relative overflow-hidden text-white rounded-3xl mt-10 xl:mt-16">
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
          <div className="flex flex-col gap-6 xl:w-[60%] relative z-10">
            <div className="uppercase text-4xl xl:text-8xl font-medium">
              <h4>{service.title}</h4>
            </div>

            <p className="text-xs xl:text-lg">
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
        <div className="xl:px-20 py-10 flex flex-col items-center gap-5">
          <p className=" xl:text-4xl text-center xl:leading-14">
            Our multi-disciplinary team brings diverse skills to understand your
            projects.{" "}
            <span className="text-gray-500">
              We collaborate to create practical digital marketing solutions
              focused on.
            </span>
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
