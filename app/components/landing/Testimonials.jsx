import React from "react";
import Marquee from "react-fast-marquee";
import { MdOutlineStar } from "react-icons/md";

const testimonials = [
  {
    name: "EMILY R",
    role: "Marketing Lead At SkyVault",
    comment:
      "Pagelabs transformed our marketing funnel, helped us scale like never before. They’re not just agency, they’re real growth partner.",
    rating: 5,
  },
  {
    name: "DANIEL K",
    role: "Co-Founder Of Quantum Wear",
    comment:
      "They didn’t just meet the goals — they exceeded them. The team’s insights and creative approach are next-level.",
    rating: 5,
  },
  {
    name: "DANIEL K",
    role: "Co-Founder Of Quantum Wear",
    comment:
      "They didn’t just meet the goals — they exceeded them. The team’s insights and creative approach are next-level.",
    rating: 5,
  },
  {
    name: "DANIEL K",
    role: "Co-Founder Of Quantum Wear",
    comment:
      "They didn’t just meet the goals — they exceeded them. The team’s insights and creative approach are next-level.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 text-black p-5 xl:p-10 xl:py-16 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 pb-5 xl:pb-16 border-b border-gray-300">
        <div className="flex justify-start">
          <p className="ext-xl xl:text-2xl">// Our Testimonial</p>
        </div>
        <div className="md:col-span-2 flex flex-col gap-5">
          <p className="text-2xl xl:text-6xl uppercase">
            What Our Clients Say About Digital Marketing Partnerships
          </p>
        </div>
      </div>
      {/* Testimonials carousel */}
      <Marquee gradient gradientColor="#F3F4F6" gradientWidth={100} className="mt-5 xl:mt-16">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="w-[340px] md:w-[450px] bg-white rounded-xl mx-4 p-6 flex-shrink-0 border border-gray-200"
          >
            {/* Image Placeholder */}
            <div className="font-medium text-lg">{t.name}</div>
            <div className="text-xs text-gray-500 mb-2">{t.role}</div>
            <p className="text-gray-700 text-xs xl:text-base mb-4">"{t.comment}"</p>
            <div className="flex items-center mt-3">
              {Array(t.rating)
                .fill()
                .map((_, i) => (
                  <MdOutlineStar key={i} className="text-yellow-500 text-lg mr-[2px]" />
                ))}
              <span className="ml-2 text-gray-800 font-medium text-xs font-sans">{t.rating}.0/5</span>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonials;
