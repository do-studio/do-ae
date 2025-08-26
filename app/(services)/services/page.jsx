import React from "react";
import Image from "next/image";
import { abstratbg } from "../../../public";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ServiceList } from "@/app/components";



const Page = () => {
  
  return (
    <section className="bg-white w-full min-h-screen">
      <div className="h-40 xl:h-[350px] w-full relative overflow-hidden">
        <Image
          className="object-cover object-bottom"
          fill
          src={abstratbg}
          alt="Abstract Background"
          priority
        />
        <h1 className="absolute text-3xl xl:text-5xl font-normal bottom-5 xl:bottom-20 left-5 xl:left-28 z-10 text-white">
          Our Services
        </h1>
      </div>

      <ServiceList/>
    </section>
  );
};

export default Page;
