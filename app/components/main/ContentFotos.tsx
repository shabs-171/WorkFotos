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
      <div className="container-87 flex flex-col items-center">
        {/* Top-centered Title */}
        <div className="text-center ">
         <h2 className="font-inter font-black text-gray-900 leading-[100%] 
                 whitespace-nowrap 
                 text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[36px]">
             How WorkFotos <span className="text-blue-500">Works</span>
       </h2>
            <p className="font-inter font-normal text-gray-600 text-[14px] xs:text-[15px] sm:text-[16px] leading-[100%] mt-6">
               Simplify your workflow in just three steps
              </p>
           </div>


        {/* Two-column layout with equal height */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between lg:gap-16 w-full">
          {/* 📱 Phone Mockups (Left Side) */}
          <div className="w-full lg:w-[41%] flex items-center justify-center lg:justify-start min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
            <div className="relative flex justify-center scale-90 sm:scale-95 md:scale-100">
              {/* Left Phone */}
              <div
                className={`relative w-[180px] h-[370px] xs:w-[200px] xs:h-[412px] sm:w-[220px] sm:h-[453px] md:w-[200px] md:h-[412px] lg:w-[220px] lg:h-[453px] xl:w-[239px] xl:h-[492px] transition-all duration-500 cursor-pointer z-[1] ${
                  arePhonesStraight
                    ? "rotate-0 -mr-8 sm:-mr-10 md:-mr-12"
                    : "rotate-[-9deg]"
                }`}
                onClick={handlePhoneClick}
              >
                <Image
                  src="/iphone2.png"
                  alt="WorkFotos App 1"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 text-white text-xs px-2 py-1 rounded">
                    Click to {arePhonesStraight ? "tilt" : "straighten"}
                  </div>
                </div>
              </div>

              {/* Right Phone */}
              <div
                className={`relative w-[180px] h-[370px] xs:w-[200px] xs:h-[412px] sm:w-[220px] sm:h-[453px] md:w-[200px] md:h-[412px] lg:w-[220px] lg:h-[453px] xl:w-[239px] xl:h-[492px] transition-all duration-500 cursor-pointer ${
                  arePhonesStraight
                    ? "rotate-0 -ml-8 sm:-ml-10 md:-ml-12"
                    : "rotate-[9deg] -ml-4 xs:-ml-6 sm:-ml-8 md:-ml-6 lg:-ml-8 xl:-ml-12"
                } z-0`}
                onClick={handlePhoneClick}
              >
                <Image
                  src="/iphone2.png"
                  alt="WorkFotos App 2"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 text-white text-xs px-2 py-1 rounded">
                    Click to {arePhonesStraight ? "tilt" : "straighten"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps Content (Right Side) - Positioned exactly below mockups */}
          <div className="w-full lg:w-[50%] flex items-start lg:mt-27">
            <div className="w-full text-left">
              <div className="space-y-6 xs:space-y-8 sm:space-y-10">
                {/* Step 1 */}
                <div className="flex items-start gap-6 xs:gap-4 justify-start">
                  <div className="bg-green-100 p-2 xs:p-3 rounded-lg">
                    <Image
                      src="/fi1.png"
                      alt="Create Icon"
                      width={24}
                      height={24}
                      className="xs:w-[30px] xs:h-[30px]"
                    />
                  </div>
                  <div className="flex-1 max-w-[86%] xs:max-w-none">
                    <h4 className="font-inter font-black text-black-900 text-[20px] leading-[100%]">
                      Create Projects
                    </h4>
                    <p className="font-inter font-normal text-black-600 text-[14px] sm:text-[15px] md:text-[18px] leading-[120%] mt-5">
                      Start by adding a job using the address or client name simple
                       and organized from the start.
                      </p>

                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-6 xs:gap-4 justify-start">
                  <div className="bg-yellow-100 p-2 xs:p-3 rounded-lg">
                    <Image
                      src="/fi3.png"
                      alt="Upload Icon"
                      width={24}
                      height={24}
                      className="xs:w-[30px] xs:h-[30px]"
                    />
                  </div>
                  <div className="flex-1 max-w-[86%] xs:max-w-none">
                    <h4 className="font-inter font-black text-black-900 text-[20px] leading-[100%]">
                      Upload & Track
                    </h4>
                     <p className="font-inter font-normal text-black-600 text-[14px] sm:text-[15px] md:text-[18px] leading-[120%] mt-5">
                      Add jobsite photos, write notes, and keep progress visible all
                      in one place.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-6 xs:gap-4 justify-start">
                  <div className="bg-blue-100 p-2 xs:p-3 rounded-lg">
                    <Image
                      src="/fi2.png"
                      alt="Share Icon"
                      width={24}
                      height={24}
                      className="xs:w-[30px] xs:h-[30px]"
                    />
                  </div>
                  <div className="flex-1 max-w-[86%] xs:max-w-none">
                    <h4 className="font-inter font-black text-black-900 text-[20px] leading-[100%]">
                      Share or Showcase
                    </h4>
                    <p className="font-inter font-normal text-black-600 text-[14px] sm:text-[15px] md:text-[18px] leading-[120%] mt-5">
                      Add jobsite photos, write notes, and keep progress visible all
                      in one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}