"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center">
      {/* Background Video */}
     <img
    src="/work1.png"
    alt="Background"
    className="absolute top-0 left-0 w-full h-full object-cover z-0"    
        />


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

          <p className="mt-4 text-white/90 font-normal leading-normal text-[14px] md:text-[16px] lg:text-[20px]">
            Organize, showcase, and grow with the visual platform built for
            service pros who want to win more work.
          </p>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 rounded-full w-[160px] h-[45px] text-[14px] md:w-[180px] md:h-[50px] md:text-[15px] lg:w-[190px] lg:h-[53px] lg:text-[16px] font-semibold">
            Join WorkFotos
            <Image
              src="/whitearrow.png"
              alt="Arrow Icon"
              width={20}
              height={18}
              className="inline-block"
            />
          </button>
        </div>
      </div>
    </section>
  );
}