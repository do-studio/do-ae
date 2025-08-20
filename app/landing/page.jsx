import React from "react";
import {
  Banner,
  About,
  Clients,
  Service,
  Ourworks,

} from "../components/services";
import { GetinTouch,Testimonials} from "../components";

const page = () => {
  return (
    <div className="bg-white">
      <div className="w-11/12 mx-auto py-10 space-y-5">
        <Banner />
        {/*  */}
        <About />
        {/*  */}
        <Clients />
        {/*  */}
        <Service />
        {/*  */}
        <Ourworks />
        {/*  */}
        <Testimonials />
      </div>
        {/*  */}
        <div className="bg-black rounded-[2rem] overflow-hidden">
          <GetinTouch />
        </div>
    </div>
  );
};

export default page;
