"use client";
import React from "react";
import Image from "next/image";

const FAQAccordion: React.FC = () => {
  const faqs = [
    {
      q: "What's the difference between monthly and yearly plans?",
      a: (
        <>
          <strong>Monthly</strong> plans are billed every 30 days and give you full flexibility – you can cancel or change anytime.
          <br />
          <strong>Yearly</strong> plans are billed once per year and come with a <strong>17% discount</strong> (equivalent to getting 2 months free). You get the same features; only the billing cadence and price per month differ.
        </>
      ),
    },
    {
      q: "Will I lose my data if I cancel Pro?",
      a: (
        <>
          No. All photos, projects, and metadata stay in your account forever, even after cancellation. You'll simply revert to the free tier limits (e.g., 500 photos, basic editing tools). Upgrade again at any time to regain Pro features instantly.
        </>
      ),
    },
    {
      q: "Can I collaborate with my team?",
      a: (
        <>
          Yes – every paid plan includes <strong>unlimited team seats</strong>. Invite colleagues, assign roles (admin/editor/viewer), and work on shared projects in real time. All changes are version-controlled and instantly synced.
        </>
      ),
    },
    {
      q: "Do I need a credit card to start?",
      a: (
        <>
          No credit card is required for the <strong>free tier</strong>. When you decide to upgrade to Pro, we'll ask for payment details then. You can also start a 14-day Pro trial without entering a card – just click "Start Trial" on the pricing page.
        </>
      ),
    },
  ];

  return (
    <section className="py-12 px-4 font-sans">
      {/* MOBILE & TABLET: Strictly controlled width */}
      <div className="lg:hidden flex flex-col items-center">
        {/* Title */}
        <h1 className="text-[32px] font-bold leading-tight text-center mb-8 max-w-[343px]">
          WorkFotos Pricing <span className="text-[#007bff]">FAQs</span>
        </h1>

        {/* Fixed Width Container: 280px on mobile, 343px on tablet */}
        <div className="w-full max-w-[280px] md:max-w-[343px] md:w-[343px]">
          {/* Image - exactly 343px on tablet */}
          <div className="mb-8 w-full">
            <Image
              src="/accordion1.jpg"
              alt="WorkFotos photographer"
              width={343}
              height={600}
              className="w-full h-auto rounded-[20px] object-cover"
              priority
            />
          </div>

          {/* Accordion - exactly 343px on tablet */}
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

   {/* DESKTOP: Side-by-side with parent height control */}
<div className="hidden lg:flex gap-16 max-w-7xl mx-auto h-full">

  {/* LEFT IMAGE */}
  <div className="w-[527px] h-full">
    <Image
      src="/accordion1.jpg"
      alt="WorkFotos photographer"
      width={527}
      height={544}
      className="w-full h-full object-cover rounded-[24px]"
      priority
    />
  </div>

  {/* RIGHT ACCORDION */}
  <div className="flex-1 h-full flex flex-col">

    <h1 className="text-4xl font-bold leading-tight mb-6">
      WorkFotos Pricing<span className="text-[#007bff]"> FAQs</span>
    </h1>

    {/* Scroll area always matches image height */}
    <div className="flex-1 overflow-y-auto pr-2 space-y-4">
      {faqs.map((item, index) => (
        <details
          key={index}
          className="group bg-gray-50 rounded-lg overflow-hidden border-t-4 border-transparent open:border-purple-600 transition-all duration-300"
        >
          <summary className="flex justify-between items-center gap-6 px-6 py-4 font-medium cursor-pointer list-none">
            <span className="text-left leading-snug pr-6">
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
          <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed">
            {item.a}
          </div>
        </details>
      ))}
    </div>

  </div>
</div>

    </section>
  );
};

export default FAQAccordion;