"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    text: "WorkFotos has completely simplified how we organize and access our photo archives.",
    name: "Jessica M.",
    role: "Head of Talent Acquisition",
    avatar: "/fi3.png",
  },
  {
    text: "We need a reliable system and WorkFotos keeps everything organized.",
    name: "Daniel P.",
    role: "Project Manager",
    avatar: "/fi3.png",
  },
  {
    text: "Managing client work is easier than ever—super fast, super clean UI. WorkFotos has completely simplified how we organize and access our photo archives. ",
    name: "Sarah L.",
    role: "Creative Lead",
    avatar: "/fi3.png",
  },
  {
    text: "Managing client work is easier than ever—super fast, super clean UI.",
    name: "Sarah L.",
    role: "Creative Lead",
    avatar: "/fi3.png",
  },
];

const Slider = () => {
  return (
    <div className="w-full flex justify-center py-20 bg-white">
      <div className="container-87">

        {/* Header */}
        <div className="text-center mb-12 mx-auto max-w-[704px]">
          <h1 className="md:text-[36px] text-[28px] font-bold text-gray-900 mb-4">
            Real <span className="text-blue-600">Stories</span> from the Field
          </h1>
          <p className="md:text-lg text-sm text-gray-600">
            See how real users streamline jobs, impress clients, and grow faster
            with WorkFotos.
          </p>
        </div>

        {/* Arrows */}
        <div className="flex justify-end items-center gap-1 mb-6">
          <div
            className="swiper-button-prev-custom cursor-pointer select-none"
            role="button"
            aria-label="Previous slide"
          >
            <Image
              src="/Arrowleft1.png"
              width={44}
              height={44}
              alt="Previous"
              className="w-11 h-11"
            />
          </div>
          <div
            className="swiper-button-next-custom cursor-pointer select-none"
            role="button"
            aria-label="Next slide"
          >
            <Image
              src="/Arrowright1.png"
              width={44}
              height={44}
              alt="Next"
              className="w-11 h-11"
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
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
          slidesPerView="auto"
          className="w-full"
        >
          {slides.map((slide, i) => (
            <SwiperSlide
              key={i}
              className="py-8"
              style={{
                width: "760px", // Default width for larger screens
                height: "auto",
              }}
            >
              {({ isActive }) => (
                <div
                  className={`
                    relative w-full bg-cover bg-center p-8 rounded-2xl
                    transition-all duration-300 ease-in-out
                    ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-70"}
                  `}
                  style={{
                    backgroundImage: "url('/slider1.png')",
                    minHeight: "320px", // Default height for larger screens
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Image src="/slider3.png" width={40} height={40} alt="" className="mb-4" />
                  <p className="lg:text-xl text-sm leading-relaxed text-gray-800 flex-1">
                    {slide.text}
                  </p>
                  <div className="flex items-center gap-4 mt-8">
                    <Image
                      src={slide.avatar}
                      width={58}
                      height={58}
                      alt={slide.name}
                      className="rounded-full"
                    />
                    <div>
                      <p className="lg:text-xl font-bold text-gray-900">{slide.name}</p>
                      <p className="lg:text-lg text-sm text-gray-600">{slide.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Styles */}
        <style jsx>{`
          @media (max-width: 768px) {
            .container-87 :global(.swiper-slide) {
              width: 90% !important;
              min-height: 280px !important;
            }
            .container-87 :global(.swiper-slide > div) {
              min-height: 280px !important;
              padding: 1.5rem !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Slider;