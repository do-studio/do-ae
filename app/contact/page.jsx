import { abstratbg } from "@/public";
import Image from "next/image";
import React from "react";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlinePermPhoneMsg } from "react-icons/md";

const page = () => {
  return (
    <section className="bg-white text-black w-full h-full">
      <div className="h-40 xl:h-[300px] w-full relative overflow-hidden">
        <Image
          className="object-cover object-bottom"
          fill
          src={abstratbg}
          alt="Abstract Background"
          priority
        />
        {/* <h1 className="absolute text-3xl xl:text-5xl font-normal bottom-5 xl:bottom-20 left-5 xl:left-28 z-10 text-white">
          Contact
        </h1> */}
      </div>
      {/*  */}
      <div className="bg-white py-20 ">
        <div className="-mt-32 xl:-mt-64 relative z-20 bg-white flex flex-col gap-3 p-5 py-10 xl:p-14 xl:py-20 w-[90%] xl:w-[45%] text-center mx-auto  border  overflow-hidden shadow-xl hover:shadow-2xl rounded-[2.5rem] border-gray-100">
          <h1 className="text-3xl xl:text-4xl font-bold ">
            READY TO WORK
            <br /> WITH US?
          </h1>
          <p className="text-xs md:text-base text-gray-600">
            Go beyond typical with Do Studio, the Best advertising agency in
            Calicut. You're not just choosing a campaign, you're selecting a
            partner who understands your brand and has an interest in crafting
            genuine, meaningful and connecting stories.
          </p>
          <form className="w-full flex flex-col gap-2 mt-5">
            <input
              type="text"
              className="border-b border-gray-200 py-4"
              placeholder="Name"
              required
            />
            <input
              type="text"
              className="border-b border-gray-200 py-4"
              placeholder="Phone"
              required
            />
            <input
              type="text"
              className="border-b border-gray-200 py-4"
              placeholder="Message"
              required
            />
            <button className="rounded-full bg-black text-white py-4 !primary-bg mt-5 uppercase tracking-wider !font-medium">
              submit
            </button>
          </form>
        </div>
      </div>

      <div className="w-10/12 mx-auto py-20">
        <h1 className="text-3xl xl:text-4xl font-bold uppercase">
          Reach Out to Our Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 pt-10 gap-10">
          <div className="">
            <h2 className="text-xl font-medium capitalize">
              Office Address
            </h2>
            <p className="mt-4">
              1st Floor, Ramaswami Complex, Cherooty Rd, Behind Basics,
              Kozhikode, Kerala, India - 673001
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full shadow-xl hover:shadow-2xl flex text-xl py-5 px-10 items-center justify-start gap-x-5 gap-2 border border-gray-200">
              <div>
                <IoIosMail className="text-4xl text-gray-600"/>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider">email</p>
                <a className="hover:text-gray-500 duration-200" href="mailto:info@dostudio.co.in" target="_blank">info@dostudio.co.in</a>
              </div>
            </div>
            <div className="w-full shadow-xl hover:shadow-2xl flex text-xl py-5 px-10 items-center justify-start gap-x-5 gap-2 border border-gray-200">
              <div>
                <MdOutlinePhone className="text-4xl text-gray-600"/>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider">Phone</p>
                <a className="hover:text-gray-500 duration-200" href="tel:9995055541" target="_blank">+91 9995055541</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
