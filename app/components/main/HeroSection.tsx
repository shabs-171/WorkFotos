"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video1.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent z-[1]" />

      {/* Content */}
      <div className="container-87 relative z-[2] text-white">
        <div className="max-w-[600px]">
          <h1 className="font-bold leading-[1.2] text-[28px] md:text-[36px] lg:text-[48px]">
            Turn <span className="text-blue-500">Work Photos</span> Into
            <br />
            More Business
          </h1>

          <p className="mt-4 text-white/90 font-normal leading-[1.5] text-[14px] md:text-[16px] lg:text-[20px]">
            Organize, showcase, and grow with the visual platform built for
            service pros who want to win more work.
          </p>

          {/* Blue Button + hover straight arrow */}
         <button
  className="
    group mt-8 flex items-center justify-center gap-2
    w-auto h-auto
    px-6 py-3        /* gives approx 190×53 but stays Hug */
    border-2 border-blue-600
    rounded-[16px]
    text-white font-semibold text-[16px]
    bg-blue-600
    hover:bg-blue-700
    transition-all duration-300
  "
>
  Join WorkFotos

  {/* Arrow image rotates straight on hover */}
  <Image
    src="/whitearrow.png"
    alt="Arrow Icon"
    width={20}
    height={18}
    className="
      transition-all duration-300
      rotate-0 group-hover:rotate-45
    "
  />
</button>

        </div>
      </div>
    </section>
  );
}
