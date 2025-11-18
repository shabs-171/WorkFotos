"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    text: "WorkFotos has completely simplified how we organize and access our photo archives. We need a reliable system and WorkFotos keeps everything organized.",
    name: "Jessica M.",
    role: "Head of Talent Acquisition",
    avatar: "/fi3.png",
  },
  {
    text: "We need a reliable system and WorkFotos keeps everything organized. WorkFotos has completely simplified how we organize and access our photo archives.",
    name: "Daniel P.",
    role: "Project Manager",
    avatar: "/fi3.png",
  },
  {
    text: "Managing client work is easier than ever—super fast, super clean UI. WorkFotos has completely simplified how we organize and access our photo archives.",
    name: "Sarah L.",
    role: "Creative Lead",
    avatar: "/fi3.png",
  },
];

const Slider = () => {
  return (
    <div className="w-full flex justify-center py-12 md:py-20 bg-white">
      {/* Container with .container-87 constraints */}
      <div className="w-[87%] max-w-[1252px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 mx-auto max-w-[704px]">
          <h1 className="text-[24px] md:text-[28px] lg:text-[36px] font-bold text-gray-900 mb-3 md:mb-4">
            Real <span className="text-blue-600">Stories</span> from the Field
          </h1>
          <p className="text-xs md:text-sm lg:text-lg text-gray-600">
            See how real users streamline jobs, impress clients, and grow faster
            with WorkFotos.
          </p>
        </div>

        {/* Arrows */}
        <div className="flex justify-end items-center gap-2 mb-4 md:mb-6">
          <div className="swiper-button-prev-custom cursor-pointer select-none">
            <Image src="/Arrowleft1.png" width={36} height={36} alt="Previous" className="w-8 h-8 md:w-11 md:h-11" />
          </div>
          <div className="swiper-button-next-custom cursor-pointer select-none">
            <Image src="/Arrowright1.png" width={36} height={36} alt="Next" className="w-8 h-8 md:w-11 md:h-11" />
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          loop={true}
          centeredSlides={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            820: {
              slidesPerView: 1,
              spaceBetween: 30,
              centeredSlides: true,
            },
            1440: {
              slidesPerView: 2,
              spaceBetween: 40,
              centeredSlides: false,
            },
          }}
          className="w-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i} className="py-4 md:py-6 flex justify-center">
              {({ isActive }) => (
                <div
                  className={`
                    relative w-full max-w-full sm:max-w-[720px] transition-all duration-300 ease-in-out
                    ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-70"}
                  `}
                  style={{ minHeight: "300px" }}
                >
                  {/* Background */}
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      backgroundImage: "url('/slider1.png')",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      zIndex: 0,
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-6 md:p-8">
                    <Image 
                      src="/slider3.png" 
                      width={32} 
                      height={32} 
                      alt="" 
                      className="mb-2 md:mb-4 w-6 h-6 md:w-10 md:h-10" 
                    />
                    <p className="text-xs md:text-sm lg:text-base leading-relaxed text-gray-800 flex-1 break-words">
                      {slide.text}
                    </p>
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mt-3 md:mt-4 lg:mt-6">
                      <Image
                        src={slide.avatar}
                        width={32}
                        height={32}
                        alt={slide.name}
                        className="rounded-full w-8 h-8 md:w-12 md:h-12 lg:w-[58px] lg:h-[58px]"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm md:text-base lg:text-lg font-bold text-gray-900 break-words">
                          {slide.name}
                        </p>
                        <p className="text-xs md:text-sm text-gray-600 break-words">
                          {slide.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;