import React from "react";
import Marquee from "react-fast-marquee";

const TestimonialsData = [
   {
    name:`Haroon Rasheed`,
    design:`Founder of Mywork`,
    link:`https://mywork.company`,
    title:`Creative Marketing Agency In Calicut.`,
    descrption:`Do Studio is hands down the best creative marketing agency in Calicut. Their creativity and strategic approach
    have helped us achieve remarkable results in our marketing campaigns.`
  },
  {
    name:`Neshma Abdurrahman`,
    design:`Founder of Design Dialects`,
    link:`https://designdialects.com`,
    title:`Creative Marketing Agency in Calicut`,
    descrption:`Their out-of-the-box ideas and innovative campaigns have helped us stand out in a crowded market, generating significant brand awareness.Do Studio is a truly creative marketing agency in Calicut.`
  },
  {
    name:`MC Nasar`,
    design:`Chairman and Managing director of MCKKutty`,
    link:`https://mckkutty.com`,
    title:`Do Studio Is Good`,
    descrption:`Do Studio is good. They have consistently delivered exceptional designs and marketing solutions that have exceeded our expectations. We highly recommend their services.`
  },
  {
    name:`Arshad`,
    design:`Founder of Baleni`,
    link:`https://baleni.in`,
    title:`Dedicated Agency for marketing`,
    descrption:`Do Studio is a dedicated agency for marketing. They go above and beyond to understand our goals and objectives, delivering tailored solutions that have yielded fantastic results. Their commitment is truly commendable.`
  },
  {
    name:`Ar. Siraj`,
    design:`Founder and Chief Architect of Sacred Saga`,
    link:`https://sacred-saga.com`,
    title:`Professionals in advertising and Digital marketing`,
    descrption:`We have been working with Do Studio for our advertising and digital marketing needs, and they have consistently exceeded our expectations.`
  },
  {
    name:`Shanab`,
    design:`Founder of Plum stories`,
    link:`https://plumstories.com`,
    title:`Best Marketing Agency in Calicut`,
    descrption:`Do studio is one of Calicut's best marketing agency. Engaging with such positive and skilled people has been a beautiful experience.`
  },
]

const Testimonials = () => {
  return (
    <div className="bg-white text-black w-full py-10 xl:py-16 relative overflow-hidden">
      
      <div className="w-11/12 mx-auto">
        <div className="flex items-center gap-3">
          <span className="block h-3 w-3 rounded-full primary-bg"></span>
          <span className="text-black font-medium text-sm uppercase tracking-widest">
            Testimonials
          </span>
        </div>
        {/* Testimonials */}
        <Marquee speed={50} pauseOnHover gradient gradientColor="#fff" gradientWidth={100}>
          {TestimonialsData?.map((dt,i)=>(
            <div className="mt-5 mx-3 w-[300px] xl:w-[700px] relative" key={i}>
              {/* <span className="primary-bg w-5 h-5 rounded-full absolute -left-2 top-11"></span> */}
              <div className="bg-gray-50 duration-200 flex flex-col gap-4 py-10 px-5 rounded-3xl">
                <p className="xl:text-xl">{dt.descrption}</p>
                <p className="text-[10px] xl:text-sm ">{dt.name} / <a href={dt.link} className="hover:border-b text-[10px] xl:text-xs text-gray-500" target="_blank">{dt.design}</a></p>
              </div>
            </div>
          ))}
        </Marquee>
        {/* Testimonials */}
      </div>
    </div>
  );
};

export default Testimonials;
