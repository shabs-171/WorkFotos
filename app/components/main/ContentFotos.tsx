"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function ContentFotos() {
  const [arePhonesStraight, setArePhonesStraight] = useState(false);

  const handlePhoneClick = () => {
    setArePhonesStraight(!arePhonesStraight);
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-[#F8FAFC] to-[#FFFFFF] py-16 md:py-20">
      <div className="container-87">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 xl:gap-16">
          {/* 📱 Phone Mockups */}
          <div className="w-full lg:w-[41%] flex justify-center">
            <div className="relative flex justify-center scale-90 sm:scale-95 md:scale-100">
              {/* Left Phone */}
              <div 
                className={`relative w-[180px] h-[370px] xs:w-[200px] xs:h-[412px] sm:w-[220px] sm:h-[453px] md:w-[200px] md:h-[412px] lg:w-[220px] lg:h-[453px] xl:w-[239px] xl:h-[492px] transition-all duration-500 cursor-pointer z-[1] ${
                  arePhonesStraight ? "rotate-0 -mr-8 sm:-mr-10 md:-mr-12" : "rotate-[-9deg]"
                }`}
                onClick={handlePhoneClick}
              >
                <Image
                  src="/iphone2.png"
                  alt="WorkFotos App 1"
                  fill
                  className="object-contain"
                />
                {/* Click hint overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 text-white text-xs px-2 py-1 rounded">
                    Click to {arePhonesStraight ? "tilt" : "straighten"}
                  </div>
                </div>
              </div>

              {/* Right Phone */}
              <div 
                className={`relative w-[180px] h-[370px] xs:w-[200px] xs:h-[412px] sm:w-[220px] sm:h-[453px] md:w-[200px] md:h-[412px] lg:w-[220px] lg:h-[453px] xl:w-[239px] xl:h-[492px] transition-all duration-500 cursor-pointer ${
                  arePhonesStraight ? "rotate-0 -ml-8 sm:-ml-10 md:-ml-12" : "rotate-[9deg] -ml-4 xs:-ml-6 sm:-ml-8 md:-ml-6 lg:-ml-8 xl:-ml-12"
                } z-0`}
                onClick={handlePhoneClick}
              >
                <Image
                  src="/iphone2.png"
                  alt="WorkFotos App 2"
                  fill
                  className="object-contain"
                />
                {/* Click hint overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 text-white text-xs px-2 py-1 rounded">
                    Click to {arePhonesStraight ? "tilt" : "straighten"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  Text Content */}
          <div className="w-full lg:w-[41%] text-left">
            {/* Heading */}
            <h2 className="font-bold text-gray-900 text-[24px] xs:text-[26px] sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[40px]">
              How <span className="text-blue-500">WorkFotos</span> Works
            </h2>
            
            {/* Subtitle */}
            <p className="text-gray-600 mt-6 xs:mt-8 sm:mt-10 md:mt-11 font-normal text-[14px] xs:text-[15px] sm:text-[16px]">
              Simplify your workflow in just three steps
            </p>

            {/* Steps container */}
            <div className="mt-6 xs:mt-8 sm:mt-8 space-y-4 xs:space-y-5 sm:space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-3 xs:gap-4 justify-start">
                <div className="bg-green-100 p-2 xs:p-3 rounded-lg ">
                  <Image
                    src="/fi1.png"
                    alt="Create Icon"
                    width={24}
                    height={24}
                    className="xs:w-[30px] xs:h-[30px]"
                  />
                </div>
                <div className="flex-1 max-w-[86%] xs:max-w-none">
                  <h4 className="font-semibold text-gray-900 text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px]">
                    Create Projects
                  </h4>
                  <p className="text-gray-600 font-normal text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5] mt-1">
                    Start by adding a job using the address or client name simple
                    and organized from the start.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3 xs:gap-4 justify-start">
                <div className="bg-yellow-100 p-2 xs:p-3 rounded-lg ">
                  <Image
                    src="/fi3.png"
                    alt="Upload Icon"
                    width={24}
                    height={24}
                    className="xs:w-[30px] xs:h-[30px]"
                  />
                </div>
                <div className="flex-1 max-w-[86%] xs:max-w-none">
                  <h4 className="font-semibold text-gray-900 text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px]">
                    Upload & Track
                  </h4>
                  <p className="text-gray-600 font-normal text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5] mt-1">
                    Add jobsite photos, write notes, and keep progress visible all
                    in one place.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3 xs:gap-4 justify-start">
                <div className="bg-blue-100 p-2 xs:p-3 rounded-lg ">
                  <Image
                    src="/fi2.png"
                    alt="Share Icon"
                    width={24}
                    height={24}
                    className="xs:w-[30px] xs:h-[30px]"
                  />
                </div>
                <div className="flex-1 max-w-[86%] xs:max-w-none">
                  <h4 className="font-semibold text-gray-900 text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px]">
                    Share or Showcase
                  </h4>
                  <p className="text-gray-600 font-normal text-[13px] xs:text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5] mt-1">
                    Add jobsite photos, write notes, and keep progress visible all
                    in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}