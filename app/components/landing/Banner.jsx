import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMailUnreadOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <>
      <section className="">
          <div className="h-full xl:h-[85vh] grid grid-cols-1 md:grid-cols-5 gap-y-5 py-20 p-5 xl:px-16 xl:p-10 bg-black overflow-hidden text-white rounded-3xl mt-10 xl:mt-16">
            <div className="md:col-span-3 h-full flex flex-col gap-y-10 justify-around">
              <div>
                <p className="text-4xl font-sans font-medium">95%</p>
                <p className="text-sm uppercase">Client Retention</p>
              </div>
              <div className="uppercase text-4xl xl:text-8xl font-medium">
                <h4>Optimize</h4>
                <h4>Your Brand</h4>
                <h4>Success</h4>
              </div>
            </div>
            <div className="md:col-span-2 flex flex-col gap-5 justify-start">
              <div className="aspect-video xl:h-96 w-full xl:w-[500px] rounded-xl overflow-hidden relative">
                <Image
                  className="object-cover"
                  alt=""
                  fill
                  src={
                    "https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg"
                  }
                />
              </div>
              <p className="text-xs xl:text-lg">
                We help ambitious brands unlock real growth through strategic
                marketing, creative campaigns, and conversion-driven solutions.
              </p>
              <Link
                href={"#"}
                className="shadow-2xl rounded-xl primary-bg w-fit px-8 py-3 capitalize font-medium"
              >
                get started
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="w-full grid place-items-center -mt-8">
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
          <div className="xl:px-20 py-10 flex flex-col items-center gap-5 border-b border-gray-400">
            <p className=" xl:text-4xl text-center xl:leading-14">
              Our multi-disciplinary team brings diverse skills to understand
              your projects.{" "}
              <span className="text-gray-500">
                We collaborate to create practical digital marketing solutions
                focused on.
              </span>
            </p>
            <div className="flex items-center gap-2">
              <div className="h-14 w-14 bg-gray-400 rounded-full"></div>
              <span>
                <p className="xl:text-xl font-medium">JASON RESPONY</p>
                <p className="text-sm">Owner Pagelabs</p>
              </span>
            </div>
          </div>
          <div className="pt-10 flex flex-col md:flex-row gap-10 justify-between items-center w-full">
            <p className="basis-2/5 text-center xl:text-left text-xl xl:text-4xl  font-medium">
              BRING IN TARGET VISITORS AND INCREASE PROFIT
            </p>
            <div className="basis-3/5 grid grid-cols-2 place-items-center md:flex gap-6 justify-end">
              <div className="flex flex-col gap-2">
                <p className="text-3xl xl:text-5xl font-medium font-sans">
                  16<span className="text-gray-500">+</span>
                </p>
                <p className="text-[10px] md:text-base capitalize">Years Experience</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-3xl xl:text-5xl font-medium font-sans">
                  10<span className="text-gray-500">+</span>
                </p>
                <p className="text-[10px] md:text-base capitalize">Total Win Award</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-3xl xl:text-5xl font-medium font-sans">
                  50<span className="text-gray-500">+</span>
                </p>
                <p className="text-[10px] md:text-base capitalize">Professional Team</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-3xl xl:text-5xl font-medium font-sans">
                  4.5<span className="text-gray-500">/</span>5
                </p>
                <p className="text-[10px] md:text-base capitalize">Rating Our Platform</p>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Banner
