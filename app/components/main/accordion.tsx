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
    <>

      {/* DESKTOP VIEW */}
      <div className="hidden md:flex max-w-7xl mx-auto h-full">
        <div className="container-87 flex justify-between items-start gap-5 lg:gap-16">

          {/* LEFT ACCORDION */}
          <div className="w-[45%] flex flex-col h-auto justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
              <span className="text-[#007bff]">Everything</span> you need to know
            </h1>

            <div className="pr-2 space-y-6">
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
                      className="transition-transform duration-200 group-open:rotate-45"
                    />
                  </summary>
                  <div className="px-4 lg:px-6 pb-6 pt-2 text-gray-700 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-[45%] flex items-center">
            <div className="w-full ">
              <Image
                src="/photographer.jpg"
                alt="WorkFotos photographer"
                width={527}
                height={544}
                className="w-full lg:h-[430px] md:h-[470px] rounded-3xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* MOBILE VIEW (ADDED CODE) */}
      <div className="md:hidden flex flex-col items-center">
        
        {/* Title */}
        <h1 className="text-[32px] font-bold leading-tight text-center mb-8 max-w-[343px]">
          WorkFotos Pricing <span className="text-[#007bff]">FAQs</span>
        </h1>

        {/* Fixed Width Container */}
        <div className="max-w-[280px] w-full">

          {/* Image */}
          <div className="mb-8 w-full">
            <Image
              src="/photographer.jpg"
              alt="WorkFotos photographer"
              width={280}
              height={400}
              className="w-full h-[250px] rounded-[20px] "
              priority
            />
          </div>

          {/* Accordion */}
          <div className="space-y-4 w-full">
            {faqs.map((item, index) => (
              <details
                key={index}
                className="group bg-gray-50 rounded-lg overflow-hidden border-t-4 border-transparent open:border-purple-600 transition-all duration-300"
              >
                <summary className="flex justify-between items-center gap-4 px-4 py-4 font-medium cursor-pointer list-none">
                  <span className="text-left leading-snug pr-4">
                    {item.q}
                  </span>
                  <Image
                    src="/plus.png"
                    alt="Expand"
                    width={24}
                    height={24}
                    className="shrink-0 transition-transform duration-200 group-open:rotate-45"
                  />
                </summary>

                <div className="px-4 pb-6 pt-2 text-gray-700 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

        </div>
      </div>

    </>
  );
};

export default AccordionSection;
