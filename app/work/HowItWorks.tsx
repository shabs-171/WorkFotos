"use client";

import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className="w-full bg-[#f5f8ff] pt-20 md:pt-32 pb-16 md:pb-24">
      {/* Custom container with 87% width and max-width constraints */}
      <div className="w-[87%] max-w-[1252px] mx-auto px-4">
        
        {/* Title */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Start <span className="text-blue-600 font-extrabold">Smarter</span>, Not Harder
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-600 mt-3 sm:mt-4 max-w-[700px] mx-auto text-sm sm:text-base">
          WorkFotos simplifies every step from the first photo to the final invoice.
        </p>

        {/* Desktop Layout: 3 cards in a row */}
        <div className="hidden lg:block">
          {/* Cards Row */}
          <div className="flex justify-center mt-10 gap-7">
            {/* Box 1 */}
            <div className="bg-white shadow-md p-6 flex flex-col items-start rounded-[24px] w-[292px]">
              <div className="flex items-center gap-[10px] w-[234px] h-[28px]">
                <Image src="/fi1.png" alt="Set Up Your Project" width={28} height={28} />
                <h3 className="text-base font-bold text-blue-600 font-inter">Set Up Your Project</h3>
              </div>
              <p className="text-gray-600 font-inter font-normal text-[16px] leading-relaxed mt-[18px] w-[234px]">
                Create a new project in seconds just give it a name and you're ready to go.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white shadow-md p-6 flex flex-col items-start rounded-[24px] w-[292px]">
              <div className="flex items-center gap-[10px] w-[234px] h-[28px]">
                <Image src="/work2.png" alt="Organize Photos" width={28} height={28} />
                <h3 className="text-base font-bold text-blue-600 font-inter">Organize Photos</h3>
              </div>
              <p className="text-gray-600 font-inter font-normal text-[16px] leading-relaxed mt-[18px] w-[234px]">
                Capture site photos, tag them with notes, dates, and locations.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white shadow-md p-6 flex flex-col items-start rounded-[24px] w-[292px]">
              <div className="flex items-center gap-[10px] w-[234px] h-[28px]">
                <Image src="/work4.png" alt="Share Work Reports" width={28} height={28} />
                <h3 className="text-base font-bold text-blue-600 font-inter">Share Work Reports</h3>
              </div>
              <p className="text-gray-600 font-inter font-normal text-[16px] leading-relaxed mt-[18px] w-[234px]">
                Generate polished, ready-to-send reports for clients or managers.
              </p>
            </div>
          </div>

          {/* Video Container - Desktop */}
          <div className="flex justify-center mt-20">
            <div className="border-[10px] border-white rounded-[24px] overflow-hidden shadow-lg w-full max-w-[1078px] h-[503px]">
              <video 
                src="/work3.mp4" 
                className="w-full h-full object-cover" 
                autoPlay 
                loop 
                muted 
                playsInline 
              />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout: Alternating card-video pattern */}
        <div className="lg:hidden flex flex-col items-center mt-8 md:mt-10 gap-4 sm:gap-6">

          {/* Box 1 */}
          <div className="bg-white shadow-md p-4 sm:p-6 flex flex-col items-start rounded-2xl w-full max-w-[342px]">
            <div className="flex items-center gap-2 sm:gap-[10px] w-full">
              <Image 
                src="/fi1.png" 
                alt="Set Up Your Project" 
                width={28} 
                height={28} 
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <h3 className="text-sm sm:text-base font-bold text-blue-600 font-inter">
                Set Up Your Project
              </h3>
            </div>
            <p className="text-gray-600 font-inter font-normal text-sm sm:text-[16px] leading-relaxed mt-3 sm:mt-[18px] w-full">
              Create a new project in seconds just give it a name and you're ready to go.
            </p>
          </div>

          {/* Video 1 */}
          <div className="w-full max-w-[342px]">
            <div className="border-[0.31px] border-white rounded-lg overflow-hidden shadow-lg w-full h-[162px]">
              <video 
                src="/work3.mp4" 
                className="w-full h-full object-cover" 
                autoPlay 
                loop 
                muted 
                playsInline 
              />
            </div>
          </div>

          {/* Box 2 */}
          <div className="bg-white shadow-md p-4 sm:p-6 flex flex-col items-start rounded-2xl w-full max-w-[342px]">
            <div className="flex items-center gap-2 sm:gap-[10px] w-full">
              <Image 
                src="/work2.png" 
                alt="Organize Photos" 
                width={28} 
                height={28} 
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <h3 className="text-sm sm:text-base font-bold text-blue-600 font-inter">
                Organize Photos
              </h3>
            </div>
            <p className="text-gray-600 font-inter font-normal text-sm sm:text-[16px] leading-relaxed mt-3 sm:mt-[18px] w-full">
              Capture site photos, tag them with notes, dates, and locations.
            </p>
          </div>

          {/* Video 2 */}
          <div className="w-full max-w-[342px]">
            <div className="border-[0.31px] border-white rounded-lg overflow-hidden shadow-lg w-full h-[162px]">
              <video 
                src="/work3.mp4" 
                className="w-full h-full object-cover" 
                autoPlay 
                loop 
                muted 
                playsInline 
              />
            </div>
          </div>

          {/* Box 3 */}
          <div className="bg-white shadow-md p-4 sm:p-6 flex flex-col items-start rounded-2xl w-full max-w-[342px]">
            <div className="flex items-center gap-2 sm:gap-[10px] w-full">
              <Image 
                src="/work4.png" 
                alt="Share Work Reports" 
                width={28} 
                height={28} 
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              <h3 className="text-sm sm:text-base font-bold text-blue-600 font-inter">
                Share Work Reports
              </h3>
            </div>
            <p className="text-gray-600 font-inter font-normal text-sm sm:text-[16px] leading-relaxed mt-3 sm:mt-[18px] w-full">
              Generate polished, ready-to-send reports for clients or managers.
            </p>
          </div>

          {/* Video 3 */}
          <div className="w-full max-w-[342px]">
            <div className="border-[0.31px] border-white rounded-lg overflow-hidden shadow-lg w-full h-[162px]">
              <video 
                src="/work3.mp4" 
                className="w-full h-full object-cover" 
                autoPlay 
                loop 
                muted 
                playsInline 
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}