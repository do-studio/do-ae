import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Banner, About, Clients, Service, Ourworks, Testimonials, Contact } from "../components/landing";

const page = () => {
  return (
    <div className="bg-white">
      <div className="w-11/12 mx-auto py-10 space-y-5">
        <Banner />
        {/*  */}
        <About />
        {/*  */}
        <Clients/>
        {/*  */}
        <Service/>
        {/*  */}
        <Ourworks/>
        {/*  */}
        <Testimonials/>
        {/*  */}
        <Contact/>
      </div>
    </div>
  );
};

export default page;
