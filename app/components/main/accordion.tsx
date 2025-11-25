"use client";
import React, { useState } from "react";
import Image from "next/image";

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const faqs = [
    {
      q: "What's the difference between monthly and yearly plans?",
      a: (
        <>
          <strong>Monthly</strong> plans are billed every 30 days and give you full flexibility – you can cancel or change anytime.
          <br />
          <strong>Yearly</strong> plans are billed once per year and come with a <strong>17% discount</strong> (equivalent to getting 2 months free).
        </>
      ),
    },
    {
      q: "Will I lose my data if I cancel Pro?",
      a: (
        <>
          No. All photos, projects, and metadata stay in your account forever, even after cancellation. You simply revert to the free tier limits.
        </>
      ),
    },
    {
      q: "Can I collaborate with my team?",
      a: (
        <>
          Yes – every paid plan includes <strong>unlimited team seats</strong>. Invite colleagues and work on shared projects in real time.
        </>
      ),
    },
    {
      q: "Do I need a credit card to start?",
      a: (
        <>
          No credit card is required for the <strong>free tier</strong>. Start a 14-day Pro trial without entering a card.
        </>
      ),
    },
  ];

  return (   
<div className="hidden md:flex max-w-7xl mx-auto h-full  ">
        {/* Parent container with justify-between for equal spacing */}
        <div className="  container-87 flex justify-between items-center gap-5 lg:gap-16 ">
          {/* LEFT IMAGE - 45% width */}
          <div className="w-[45%] h-[400px] flex items-start">
            <div className="w-full h-full ">
              <Image
                src="/accordion1.jpg"
                alt="WorkFotos photographer"
                width={527}
                height={544}
                className="w-full h-full  rounded-3xl"
                priority
              />
            </div>
          </div>

          {/* RIGHT ACCORDION - 45% width */}
          <div className="w-[45%] flex flex-col h-auto items-center justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-6 text-nowrap">
              WorkFotos Pricing<span className="text-[#007bff]"> FAQs</span>
            </h1>

            {/* Scroll area with matching height */}
            <div className=" pr-2 space-y-6 ">
              {faqs.map((item, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 rounded-lg overflow-hidden border-t-4 border-transparent open:border-purple-600 transition-all duration-300"
                >
                  <summary className="flex justify-between items-center gap-4 lg:gap-6 px-4 lg:px-6 py-4 font-medium cursor-pointer list-none">
                    <span className="text-left leading-snug pr-4 lg:pr-6">
                      {item.q}
                    </span>
                    <Image
                      src="/plus.png"
                      alt="Expand"
                      width={24}
                      height={24}
                      className=" transition-transform duration-200 group-open:rotate-45"
                    />
                  </summary>
                  <div className="px-4 lg:px-6 pb-6 pt-2 text-gray-700 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      
  );
};

export default AccordionSection;
