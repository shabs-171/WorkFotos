"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-20">
      {/* BANNER - Same 87% width as header */}
      <div className="container-87">
        <div
          className="relative w-full rounded-2xl overflow-hidden text-white sm:pl-6 pr-6 pt-6 md:pr-8 pl-8  lg:pl-10 flex flex-col items-center justify-between bg-cover bg-center"
          style={{
            backgroundImage: "url('/image5.png')",
          }}
        >
          <div className="w-full flex flex-col lg:flex-row items-center justify-between">
            {/* Left Text Section */}
            <div className="w-full lg:w-1/2 max-w-[1440px] text-left mb-8 lg:mb-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
                Ready To Organize Your Photos In Smarter Way
              </h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90">
                Start sorting, sorting and sharing with ease, all available in one
                place.
              </p>
              <button className="mt-6 flex items-center justify-center gap-2 bg-white text-black font-semibold px-3 sm:px-5 py-2 rounded-full hover:bg-blue-100 transition w-[150px] sm:w-auto text-xs sm:text-sm whitespace-nowrap group">
                Get Started Free
                <Image
                  src="/Frame1.png"
                  alt="Arrow icon"
                  width={16}
                  height={16}
                  className="inline-block transition-transform duration-300 group-hover:rotate-45"
                />
              </button>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <Image
                src="/iphone.png"
                alt="App preview"
                width={220}
                height={500}
                className="object-cover h-full w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER LINKS - Same 87% width as header */}
         <div className="container-87 mt-12 sm:mt-16">
  <div className="
    flex flex-col lg:flex-row 
    justify-between items-start 
    gap-8 lg:gap-16
  ">
    
    {/* Left – Logo */}
    <div className="w-full lg:w-1/3">
      <Image src="/logo2.png" alt="Logo" width={257} height={40} />
      <p className="mt-4 text-gray-600 text-sm">
        WorkFotos helps visual pros and service teams document,
        organize, and share work effortlessly.
      </p>

      <div className="flex gap-3 mt-4 text-gray-500 text-lg">
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        <i className="fa-brands fa-facebook-f"></i>
      </div>
    </div>

    {/* Center – Resources & Legal */}
    <div className="w-full lg:w-1/3 flex justify-start lg:justify-center gap-12">

      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Resources</h4>
        <ul className="flex flex-col gap-2 text-gray-600 text-sm">
          <li className="cursor-pointer hover:text-blue-600">Features</li>
          <li className="cursor-pointer hover:text-blue-600">Pricing</li>
          <li className="cursor-pointer hover:text-blue-600">How It Works</li>
          <li className="cursor-pointer hover:text-blue-600">Our Story</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Legal</h4>
        <ul className="flex flex-col gap-2 text-gray-600 text-sm">
          <li className="cursor-pointer hover:text-blue-600">Terms of Service</li>
          <li className="cursor-pointer hover:text-blue-600">Privacy Policy</li>
          <li className="cursor-pointer hover:text-blue-600">Cookie Policy</li>
        </ul>
      </div>
    </div>

    {/* Right – Newsletter */}
    <div className="w-full lg:w-1/3 flex justify-end">
      <div className="w-full max-w-sm">
        <h4 className="font-semibold text-gray-900 mb-3">Stay in the loop</h4>
        <p className="text-gray-600 mb-4 text-sm">Tips & updates, straight to your inbox.</p>

        <div className="flex">
          <input
            type="email"
            placeholder="Your email"
            className=" px-4 py-2 border border-gray-300 rounded-l-full text-sm"
          />
          <button className="
            bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC]
            text-white px-4 py-2 rounded-r-full text-sm font-medium
          ">
            Join
          </button>
        </div>
      </div>
    </div>

  </div>
</div>


      {/* COPYRIGHT - Same 87% width as header */}
      <div className="container-87 mt-8 sm:mt-10">
        <div className="text-center text-gray-500 py-6 border-t border-gray-200 text-sm">
          ©2025 WorkFotos | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}