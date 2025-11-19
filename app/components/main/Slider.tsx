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
            <Image
              src="/Arrowleft1.png"
              width={36}
              height={36}
              alt="Previous"
              className="w-8 h-8 md:w-11 md:h-11"
            />
          </div>
          <div className="swiper-button-next-custom cursor-pointer select-none">
            <Image
              src="/Arrowright1.png"
              width={36}
              height={36}
              alt="Next"
              className="w-8 h-8 md:w-11 md:h-11"
            />
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
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 15,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 1.2,
              spaceBetween: 30,
              centeredSlides: true,
            },
            1280: {
              slidesPerView: 1.5,
              spaceBetween: 40,
              centeredSlides: true,
            },
            1440: {
              slidesPerView: 1.5,
              spaceBetween: 50,
              centeredSlides: true,
            },
          }}
          className="w-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide
              key={i}
              className="py-4 md:py-6 flex justify-center"
            >
              {({ isActive }) => (
                <div
                  className={`relative transition-all duration-300 ease-in-out 
                    w-full
                    max-w-[342px] h-[245px]          /* mobile default */
                    md:max-w-[706px] md:h-[270px]   /* tablet */
                    lg:max-w-[800px] lg:h-[306px]   /* laptop */
                    ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-60"}`}
                >
                  {/* Background */}
                  <div
                    className="absolute inset-0 rounded-[14px] md:rounded-[16px]"
                    style={{
                      backgroundImage: "url('/slider1.png')",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      zIndex: 0,
                    }}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-between h-full p-3 md:p-6">
                    {/* Quote Icon */}
                    <Image
                      src="/slider3.png"
                      width={32}
                      height={32}
                      alt=""
                      className="w-6 h-6 md:w-8 md:h-8 mb-2"
                    />

                    {/* Text Content */}
                    <p className="text-xs md:text-sm leading-relaxed text-gray-800 flex-1 break-words line-clamp-4 md:line-clamp-5">
                      {slide.text}
                    </p>

                    {/* Avatar Section */}
                    <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 mt-2 md:mt-3 h-[40px] md:h-[50px]">
                      <Image
                        src={slide.avatar}
                        width={50}
                        height={50}
                        alt={slide.name}
                        className="rounded-full w-10 h-10 md:w-12 md:h-12 object-contain flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm md:text-base font-bold text-gray-900 break-words truncate">
                          {slide.name}
                        </p>
                        <p className="text-xs sm:text-xs md:text-sm text-gray-600 break-words truncate">
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
