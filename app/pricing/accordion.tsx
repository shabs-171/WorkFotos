"use client";
import React from "react";
import Image from "next/image";

const FAQAccordion: React.FC = () => {
  return (
    <section className="py-12 px-4">
      {/* Container */}
      <div className="container-87 font-sans">
        {/* Responsive flex: column on mobile, row on tablet+ */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-[105px] items-start">
          
          {/* Left Image */}
          <div className="flex-shrink-0 w-full md:w-[527px] flex justify-center md:justify-start">
            <Image
              src="/accordion1.jpg"
              alt="WorkFotos photographer"
              width={527}
              height={600}
              className="
                rounded-[16px] 
                object-cover 
                w-full 
                h-auto 
                md:rounded-[20px] 
                lg:rounded-[24px]
              "
              priority
            />
          </div>

          {/* Right Accordion Section */}
          <div className="flex flex-col justify-start w-full max-w-[600px]">
            
            {/* Title – NO BOTTOM MARGIN */}
            <div className="flex flex-col text-center md:text-left mb-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 m-0 leading-tight">
                WorkFotos Pricing
              </h1>
              <span className="text-3xl sm:text-4xl font-bold text-[#007bff] m-0 leading-tight">
                FAQs
              </span>
            </div>

            {/* Accordion – TIGHT TO TITLE */}
            <div className="mt-0 pt-0 space-y-4">
              {[
                {
                  q: "What’s the difference between monthly and yearly plans?",
                  a: (
                    <>
                      <strong>Monthly</strong> plans are billed every 30 days and give
                      you full flexibility – you can cancel or change anytime.<br />
                      <strong>Yearly</strong> plans are billed once per year and come
                      with a <strong>17% discount</strong> (equivalent to getting 2
                      months free). You get the same features; only the billing cadence
                      and price per month differ.
                    </>
                  ),
                },
                {
                  q: "Will I lose my data if I cancel Pro?",
                  a: (
                    <>
                      No. All photos, projects, and metadata stay in your account
                      forever, even after cancellation. You’ll simply revert to the
                      free tier limits (e.g., 500 photos, basic editing tools). Upgrade
                      again at any time to regain Pro features instantly.
                    </>
                  ),
                },
                {
                  q: "Can I collaborate with my team?",
                  a: (
                    <>
                      Yes – every paid plan includes <strong>unlimited team seats</strong>.
                      Invite colleagues, assign roles (admin/editor/viewer), and work on
                      shared projects in real time. All changes are version-controlled
                      and instantly synced.
                    </>
                  ),
                },
                {
                  q: "Do I need a credit card to start?",
                  a: (
                    <>
                      No credit card is required for the <strong>free tier</strong>.
                      When you decide to upgrade to Pro, we’ll ask for payment details
                      then. You can also start a 14-day Pro trial without entering a
                      card – just click “Start Trial” on the pricing page.
                    </>
                  ),
                },
              ].map((item, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 rounded-lg overflow-hidden border-t-4 border-transparent open:border-purple-600 transition-all duration-300"
                >
                  <summary className="flex justify-between items-center px-6 py-4 font-medium cursor-pointer list-none">
                    <span>{item.q}</span>
                    <span className="text-gray-600 font-bold transition-transform duration-200 group-open:rotate-45">+</span>
                  </summary>
                  <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;