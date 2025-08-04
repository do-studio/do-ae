import React from "react";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import Image from "next/image";

const ServiceData = [
  {
    id: 1,
    title: `Search Engine Optimization (SEO)`,
    desc: `Enhance your website's visibility on search engines to attract more organic traffic.`,
    icon: SiAmazonsimpleemailservice, 
    img: `https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg`,
  },
  {
    id: 2,
    title: `Content Marketing`,
    desc: `Create and distribute valuable, relevant content to attract and engage your audience.`,
    icon: SiAmazonsimpleemailservice,
    img: `https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg`,
  },
  {
    id: 3,
    title: `Social Media Management`,
    desc: `Manage your brand's presence across all major social platforms for better engagement.`,
    icon: SiAmazonsimpleemailservice,
    img: `https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg`,
  },
  {
    id: 4,
    title: `Pay-Per-Click Advertising`,
    desc: `Run targeted paid ads to quickly generate high-quality leads for your business.`,
    icon: SiAmazonsimpleemailservice,
    img: `https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg`,
  },
];

const Services = () => {
  return (
    <>
      <section className="bg-gray-100 text-black p-5 xl:p-10 xl:py-16 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 pb-5 xl:pb-16 border-b border-gray-300">
          <div className="flex justify-start">
            <p className="ext-xl xl:text-2xl">// Our Services</p>
          </div>
          <div className="md:col-span-2 flex flex-col gap-5">
            <p className="text-2xl xl:text-6xl uppercase">
              Our Featured Services to Accelerate Your Business Digital Growth
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-16">
          {ServiceData?.map((dt, i) => {
            const Icon = dt.icon;
            return (
              <div
                className="grid grid-cols-1 md:grid-cols-5 gap-5 border border-gray-400 p-5"
                key={dt.id} // Use unique id!
              >
                <div className="md:col-span-2 relative rounded-2xl overflow-hidden aspect-video w-full md:aspect-square">
                  <Image className="" fill src={dt.img} alt="" />
                </div>
                <div className="md:col-span-3 flex flex-col gap-5 justify-between h-full">
                  <div className="bg-black text-white p-2 rounded-2xl w-fit">
                    <Icon className="text-4xl"/>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-medium">{dt.title}</h1>
                    <p>{dt.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
