import Link from "next/link";
import React from "react";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { DoLogo } from "@/public";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const socialsLink = [
  {
    icon: FaXTwitter,
    url: `#`,
  },
  {
    icon: FaInstagram,
    url: `#`,
  },
  {
    icon: FaFacebook,
    url: `#`,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white text-black w-full h-full relative overflow-hidden">
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-[90%] mx-auto" />

      <Marquee speed={100} className="xl:-mb-96">
        <p className="-z-0 uppercase font-bold text-[#b9b1b10f] text-[100px] xl:text-[270px] hidden xl:block ">
          dostudio
        </p>
      </Marquee>
      <div className="w-11/12 mx-auto relative">
        <div className="py-10 flex flex-col md:flex-row justify-between gap-10">
          <div className="w-[100%] xl:w-[30%] flex flex-col gap-4">
            <Link href="/" className="w-fit">
              <Image
                className="w-28 xl:w-40 object-contain"
                src={DoLogo}
                alt=""
              />
            </Link>
            <p className="text-sm text-gray-500">
              Let’s collaborate on something bold, strategic, and unforgettable.
              Share your ideas — we’ll turn them into a digital masterpiece.
            </p>
            {/* socail links */}
            <div className="flex gap-4 mt-3">
              {socialsLink.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-gray-500 hover:text-black hover:scale-125 duration-200  text-2xl transition-all"
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="w-[100%] xl:w-[30%] flex flex-col gap-3">
            <p className="font-medium">Office Address</p>
            <p className="text-sm text-gray-500 hover:text-black duration-200">
              1st Floor, Ramaswami Complex Cherooty Rd, Behind Basics,
              Kozhikode, Kerala, India - 673001
            </p>
            <a
              href="tel:9746155541"
              className="text-sm text-gray-500 hover:text-black duration-200"
            >
              Do Support +91 97461 55541
            </a>
          </div>
        </div>
        {/* copyright */}
        <div className="flex justify-between items-center capitalize text-[10px] md:text-xs py-10 w-full">
          <p>all right reserved © Do Studio {currentYear}</p>
          <p>term of service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
