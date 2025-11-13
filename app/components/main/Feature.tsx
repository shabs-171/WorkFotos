// src/components/Feature.tsx
import React from 'react';

const Feature = () => {
  return (
    <section className="relative bg-white overflow-hidden font-sans">
      {/* Title */}
      <header className="text-center pt-6 pb-6 px-4 sm:pt-8 sm:pb-8 md:pt-10 md:pb-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Smart Features For Every
          <br className="sm:hidden" />
          <span className="text-blue-600"> Step Of The Job</span>
        </h1>
        <p className="mt-2 text-xs sm:text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
          Job photos, notes, teams, and sharing – WorkFotos brings everything
          together to help you grow
        </p>
      </header>

      {/* Main Flex Container – TIGHT LAYOUT */}
      <div className="w-[87%] max-w-[1252px] mx-auto">
        <div className="flex h-auto min-h-[200px] sm:min-h-[300px] md:min-h-[400px] -space-x-2 sm:-space-x-4 md:-space-x-8 items-center">

          {/* LEFT: 35% → 30% – iPhone + Rectangle */}
          <div className="w-[35%] sm:w-[30%] flex justify-end items-center relative pr-2 sm:pr-4 md:pr-8">

            {/* Rectangle – BEHIND */}
            <div
              className="absolute inset-0 flex justify-end items-center z-10 pointer-events-none"
              style={{
                transform: 'translateX(clamp(2%, 5vw, 3%))',
              }}
            >
              <div
                className="relative"
                style={{
                  width: 'clamp(60px, 16vw, 235px)',
                  height: 'auto',
                  aspectRatio: '149.01 / 297.48',
                }}
              >
                <img
                  src="/rectangle1.png"
                  alt=""
                  className="w-full h-full object-contain drop-shadow-md"
                />
                {/* Logo */}
                <div
                  className="absolute z-30"
                  style={{
                    top: 'clamp(4px, 1.5vw, 18px)',
                    left: 'clamp(4px, 1.5vw, 18px)',
                  }}
                >
                  <img
                    src="/logo3.png"
                    alt="WorkFotos Logo"
                    style={{
                      width: 'clamp(38.27px, 9vw, 120px)',
                      height: 'auto',
                    }}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* iPhone – ON TOP */}
            <div
              className="absolute z-20"
              style={{
                left: 'clamp(20%, 12vw, 30%)',
                top: 'clamp(-80px, -6vw, -20px)',
                transform: 'translateX(clamp(-15%, -10vw, -15%)) translateY(-15px)',
              }}
            >
              <img
                src="/iphone3.png"
                alt="WorkFotos App"
                style={{
                  width: 'clamp(70px, 20vw, 380px)',
                  height: 'auto',
                  aspectRatio: '281 / 580',
                }}
                className="object-cover drop-shadow-2xl"
              />
            </div>
          </div>

          {/* RIGHT: 65% → 70% – Video */}
          <div className="w-[65%] sm:w-[70%] flex justify-start items-center pl-2 sm:pl-4 md:pl-8">
            <div className="relative -ml-2 sm:-ml-4 md:-ml-8">
              <video
                src="/video2.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: 'clamp(277px, 65vw, 967px)',
                  height: 'auto',
                  aspectRatio: '967 / 504',
                }}
                className="w-full h-full object-contain rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;