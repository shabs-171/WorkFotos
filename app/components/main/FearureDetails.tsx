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
          container-87 flex flex-col md:flex-col lg:flex-row
          items-center justify-center
          gap-6 md:gap-8 lg:gap-[15px] xl:gap-[146px]
          py-16 xl:py-24
        "
      >
        {/* LEFT: Text Content */}
        <div className="flex flex-col items-start md:items-center lg:items-start justify-start w-full lg:w-[40%] text-left md:text-center lg:text-left order-1 mb-6 lg:mb-0">
          {/* Badge */}
          <button className="bg-blue-900 flex items-center gap-2 rounded-full w-[170px] h-[35px] border border-gray-300 px-3">
            <Image src="/Vector5.png" alt="Smart Features" width={18} height={18} />
            <span className="font-inter font-normal text-[16px] text-white">
              Smart Features
            </span>
          </button>

          {/* Heading */}
          <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[28px] xl:text-[36px] font-bold text-gray-900 leading-snug font-inter mt-4">
            WorkFotos Features That <span className="text-blue-600">Simplify & Scale For</span> Your Workflow
          </h2>

          {/* Desktop Button */}
          <button className="hidden lg:flex bg-blue-600 hover:bg-blue-700 text-white items-center justify-center gap-2 rounded-[16px] w-[190px] h-[53px] text-[16px] font-semibold mt-6 group">
            Join WorkFotos
            <Image
              src="/Frame1.png"
              alt="Arrow Icon"
              width={20}
              height={18}
              className="inline-block transition-transform duration-300 group-hover:rotate-45"
            />
          </button>
        </div>

        {/* RIGHT: Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-[15px] w-full lg:w-[55%] order-2">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-white border border-gray-100 rounded-[12px] w-full p-5 flex flex-col shadow-sm
                transition-all duration-300
                hover:border-t-purple-400 hover:border-l-purple-400 hover:border-r-purple-400
                hover:border-b-8 hover:border-b-purple-400
              "
            >
              <div className="flex justify-start mb-[24px]">
                <img src={item.img} alt={item.title} className="w-[30px] h-[30px] object-contain" />
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

        {/* Mobile/Tablet Join Button */}
        <div className="flex lg:hidden w-full justify-center mt-6 order-3">
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