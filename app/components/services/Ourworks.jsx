"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
const gradevid = `https://cdn.sanity.io/files/0hjyj1bs/production/c7d3a61f746905c639c64bf6fda1700c247e18ee.mov`;

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const worksData = [
  {
    title: "BANKAI - LANDING PAGE REVAMP",
    desc: "We redefined Bankai’s online presence with modern, conversion-focused landing pages.",
    result: "+250%",
    resultSubtext: "Conversion Rate",
    time: "+2",
    timeSubtext: "Months",
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
  {
    title: "ACME CORP - ECOMMERCE GROWTH",
    desc: "Drove tangible e-commerce performance with streamlined UX and CRO campaigns.",
    result: "+120%",
    resultSubtext: "Revenue Increase",
    time: "+3",
    timeSubtext: "Months",
    img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
  },
  {
    title: "FUTURE TECH - BRAND AWARENESS",
    desc: "Expanded digital footprint leading to greater brand recognition and engagement.",
    result: "+180%",
    resultSubtext: "User Engagement",
    time: "+4",
    timeSubtext: "Months",
    img: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
  },
];

const Ourworks = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <section className="bg-black rounded-3xl overflow-hidden relative h-full p-5 xl:p-16 text-white">
 <video
    src={gradevid}
    autoPlay
    loop
    muted
    className="absolute inset-0 w-full !h-[100%] object-cover opacity-80 z-0"
  />
        {/* Header */}
        <div className="grid grid-cols-1  gap-y-5 pb-5 xl:pb-14 relative">
          <div className=" flex flex-col gap-5">
            <p className="text-2xl uppercase xl:text-6xl">
              Our Digital Footprints of Success continue to grow
            </p>
            <p className="text-xs xl:text-lg">
              Explore the creative process and how we've transformed ideas into
              impactful campaigns that deliver real results, impacting the
              bottom line and fostering growth for modern businesses.
            </p>
          </div>
         
        </div>
                  <div className="relative bg-gradient-to-r from-transparent via-neutral-500 to-transparent h-[1px] w-full mx-auto" />

        {/* Swiper container */}
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1.5} // default for large screens
          centeredSlides={false}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: false,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 1.2,
              spaceBetween: 25,
              centeredSlides: false,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 30,
              centeredSlides: false,
            },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="mt-6 xl:mt-16 group"
        >
          {worksData.map((work, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#15161cae] border border-gray-700 rounded-xl p-3 pb-8 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="aspect-square relative rounded-xl overflow-hidden">
                  <Image
                    src={work.img}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center gap-10">
                  <div>
                    <h4 className="text-2xl font-medium">{work.title}</h4>
                    <p>{work.desc}</p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div>
                      <p className="text-xs">Result:</p>
                      <div className="flex items-end gap-2">
                        <p className="text-4xl font-medium font-sans">
                          {work.result}
                        </p>
                        <p className="text-xs">{work.resultSubtext}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs">Time Required:</p>
                      <div className="flex items-end gap-2">
                        <p className="text-4xl font-medium font-sans">{work.time}</p>
                        <p className="text-xs">{work.timeSubtext}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation buttons */}
          <div
            ref={prevRef}
            className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-5 z-20 -translate-y-1/2 p-2 bg-white w-10 h-10 grid place-items-center rounded-full cursor-pointer text-black"
          >
            <button aria-label="Previous Slide" type="button">
              <FiArrowLeft size={16} />
            </button>
          </div>
          <div
            ref={nextRef}
            className="opacity-0 group-hover:opacity-100 absolute top-1/2 right-5 z-20 -translate-y-1/2 p-2 bg-white w-10 h-10 grid place-items-center rounded-full cursor-pointer text-black"
          >
            <button aria-label="Next Slide" type="button">
              <FiArrowRight size={16} />
            </button>
          </div>
        </Swiper>

        {/* Pagination container moved BELOW swiper */}
        <div className="swiper-pagination !mt-10 !-mb-10  flex justify-center"></div>
      </section>

      {/* Custom CSS to override default pagination position */}
      <style jsx>{`
        :global(.swiper-pagination) {
          position: relative !important;
          bottom: auto !important;
          margin-top: 1rem !important;
          text-align: center;
          display: flex;
          justify-content: center;
          padding: 0;
        }
        :global(.swiper-pagination-bullet) {
          width: 12px;
          height: 12px;
          background-color: #6b7280;
          opacity: 0.7;
          transition: all 0.3s ease;
          border-radius: 9999px;
          margin: 0 6px !important;
          cursor: pointer;
        }
        :global(.swiper-pagination-bullet-active) {
          background-color: #AEFE00;
          opacity: 1;
          width: 16px;
          height: 16px;
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.5);
        }
      `}</style>
    </>
  );
};

export default Ourworks;
