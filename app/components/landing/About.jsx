import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMailUnreadOutline } from "react-icons/io5";

const chartData = [
  {
    label: "BUDGET GROWTH",
    value: 56,
    max: 100,
    fillbg:'#AEFE00',
    description: "Information Chart",
    footnote: "More Affordable",
  },
  {
    label: "SERVICES DEMAND",
    value: 85,
    max: 100,
      fillbg:'#AEFE00',
    description: "Information Chart",
    footnote: "More Affordable",
  },
  {
    label: "AGENCY GROWTH",
    value: 70,
    max: 100,
      fillbg:'#AEFE00',
    description: "Information Chart",
    footnote: "More Affordable",
  },
  {
    label: "ROI",
    value: 80,
    max: 100,
      fillbg:'#AEFE00',
    description: "Information Chart",
    footnote: "More Affordable",
  },
];

const About = () => {
  return (
    <>
      <section className="bg-black rounded-3xl overflow-hidden relative p-5 xl:p-16 text-white ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 pb-5 xl:pb-16 border-b border-gray-600">
          <div className="md:col-span-2 flex flex-col gap-5">
            <p className="text-2xl xl:text-6xl">
              BRING IN TARGET VISITORS AND INCREASE PROFIT
            </p>
            <p className="text-xs xl:text-lg">
              Our agency has a team of agile digital strategists with unique
              expertise. This blend allows us to approach projects with a
              360-degree view, ensuring creative solutions align with your
              business goals and effective strategies yield success.
            </p>
          </div>
          <div className="flex justify-end">
            <p className="text-xl xl:text-2xl">About Us //</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pt-5 xl:pt-16">
          {chartData?.map((dt, i) => (
            <div key={i} className="border border-gray-500 p-4 rounded-xl rounded-tr-3xl rounded-bl-3xl flex flex-col">
              <p className="xl:text-xl font-medium uppercase">{dt.label}</p>
              <div className="flex flex-col gap-2 py-10">
                <p className="text-xs">{dt.description}</p>
                <div className="bg-white rounded-sm overflow-hidden">
                  <div className="h-3" style={{ width: `${dt.value}%`, background:`${dt.fillbg}` }}></div>
                </div>
                <p className="text-xs flex justify-end">{dt.footnote}</p>
              </div>
              <div>
                <span className="flex justify-end gap-0 items-end">
                  <p className="text-2xl font-semibold font-sans">{dt.value}%</p>
                  <p className="text-gray-500 text-sm">/{dt.max}%</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
