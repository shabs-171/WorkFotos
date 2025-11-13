import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Shareable Project Albums",
    desc: "Send polished albums to clients.",
    img: "/fi5.png",
  },
  {
    title: "Branded Public Portfolios",
    desc: "Build a professional portfolio.",
    img: "/fi6.png",
  },
  {
    title: "CRM & Client Tracking",
    desc: "Store contact info & track.",
    img: "/fi7.png",
  },
  {
    title: "Smart Notes & Annotations",
    desc: "Notes that add context.",
    img: "/fi8.png",
  },
  {
    title: "All-in-One Visual Platform",
    desc: "Workflow under one visual roof.",
    img: "/Vector2.png",
  },
  {
    title: "Team & Client Collaboration",
    desc: "Assign tasks real-time updates.",
    img: "/Vector3.png",
  },
];

const FeatureDetail = () => {
  return (
    <section
      className="
        relative w-full bg-gradient-to-br from-white via-blue-50 to-white
        font-sans overflow-hidden
        -mt-40 sm:-mt-52 md:-mt-64
      "
    >
      <div
        className="
          container-87 flex flex-col xl:flex-row
          items-center justify-between
          gap-[80px] xl:gap-[146px]
          py-16 xl:py-24
        "
      >
        {/* LEFT: Text Content */}
        <div className="flex flex-col items-center justify-center w-full xl:w-[40%] text-center xl:text-left order-1">
          {/* Smart Features Badge */}
          <button className="bg-blue-900 flex items-center gap-2 rounded-full w-[170px] h-[35px] border border-gray-300 px-3 mx-auto xl:mx-0">
            <Image src="/Vector5.png" alt="Smart Features" width={20} height={20} />
            <span className="font-inter font-normal text-[16px] text-white">
              Smart Features
            </span>
          </button>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-gray-900 leading-snug font-inter mt-4">
            <span className="text-nowrap">WorkFotos Features That</span>
            <span className="block text-blue-600">Simplify & Scale For</span>
            <span className="block">Your Workflow</span>
          </h2>

          {/* Desktop Button (only visible on xl+) */}
          <button className="hidden xl:flex mt-6 bg-blue-600 hover:bg-blue-700 text-white items-center justify-center gap-2 rounded-[16px] w-[190px] h-[53px] text-[16px] font-semibold">
            Join WorkFotos
            <Image
              src="/Frame1.png"
              alt="Arrow Icon"
              width={20}
              height={18}
              className="inline-block"
            />
          </button>
        </div>

        {/* RIGHT: Features Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full xl:w-[55%] order-2 lg:-mt-21">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-[12px] w-full p-5 flex flex-col shadow-sm"
            >
              <div className="flex justify-start mb-[24px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[30px] h-[30px] object-contain"
                />
              </div>

              <h3 className="font-inter font-semibold text-[20px] text-gray-900 leading-snug mb-[16px]">
                {item.title}
              </h3>

              <p className="font-['Quattrocento_Sans'] text-[18px] font-normal text-gray-600 leading-[100%]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Join Button (bottom of layout) */}
        <div className="flex xl:hidden w-full justify-center mt-10 order-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 rounded-[16px] w-[190px] h-[53px] text-[16px] font-semibold">
            Join WorkFotos
            <Image
              src="/Frame1.png"
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
};

export default FeatureDetail;
