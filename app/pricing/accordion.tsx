"use client";
import React from "react";
import Image from "next/image";

const FAQAccordion: React.FC = () => {
  return (
    <section className="py-12 px-4">
      {/* Using your custom .container-87 */}
      <div className="container-87 font-sans">
        {/* Responsive Layout: Stack on mobile, side-by-side on tablet+ */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-8 lg:gap-[105px] items-stretch">
          
          {/* Left Image - Responsive Sizes */}
          <div className="w-full md:w-auto flex justify-center md:justify-start">
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
                max-w-[342px] 
                max-h-[300px] 
                md:max-w-[343px] 
                md:max-h-[434px] 
                md:rounded-[20px] 
                lg:max-w-[527px] 
                lg:max-h-[600px] 
                lg:rounded-[24px]
              "
              priority
            />
          </div>

          {/* Right Accordion Section */}
          <div className="flex flex-col justify-between gap-10 md:gap-16 w-full md:w-auto">
            {/* Title Section */}
            <div className="flex flex-col text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 m-0">
                WorkFotos Pricing
              </h1>
              <span className="text-3xl sm:text-4xl font-bold text-[#007bff] pt-2">
                FAQs
              </span>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {/* FAQ 1 */}
              <details className="group bg-gray-50 rounded-lg overflow-hidden border-t-4 border-transparent open:border-purple-600 transition-all duration-300">
                <summary className="px-6 py-4 font-medium cursor-pointer list-none relative after:content-['+'] after:absolute after:right-6 after:font-bold after:text-gray-600 after:transition-transform after:duration-200 group-open:after:rotate-45">
                  What’s the difference between monthly and yearly plans?
                </summary>
                <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed">
                  <strong>Monthly</strong> plans are billed every 30 days and give
                  you full flexibility – you can cancel or change anytime.<br />
                  <strong>Yearly</strong> plans are billed once per year and come
                  with a <strong>17% discount</strong> (equivalent to getting 2
                  months free). You get the same features; only the billing cadence
                  and price per month differ.
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="group bg-gray-50 rounded-lg overflow-hidden border-t-4 border-transparent open:border-purple-600 transition-all duration-300">
                <summary className="px-6 py-4 font-medium cursor-pointer list-none relative after:content-['+'] after:absolute after:right-6 after:font-bold after:text-gray-600 after:transition-transform after:duration-200 group-open:after:rotate-45">
                  Will I lose my data if I cancel Pro?
                </summary>
                <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed">
                  No. All photos, projects, and metadata stay in your account
                  forever, even after cancellation. You’ll simply revert to the
                  free tier limits (e.g., 500 photos, basic editing tools). Upgrade
                  again at any time to regain Pro features instantly.
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="group bg-gray-50 rounded-lg overflow-hidden border-t-4 border-transparent open:border-purple-600 transition-all duration-300">
                <summary className="px-6 py-4 font-medium cursor-pointer list-none relative after:content-['+'] after:absolute after:right-6 after:font-bold after:text-gray-600 after:transition-transform after:duration-200 group-open:after:rotate-45">
                  Can I collaborate with my team?
                </summary>
                <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed">
                  Yes – every paid plan includes <strong>unlimited team seats</strong>.
                  Invite colleagues, assign roles (admin/editor/viewer), and work on
                  shared projects in real time. All changes are version-controlled
                  and instantly synced.
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="group bg-gray-50 rounded-lg overflow-hidden border-t-4 border-transparent open:border-purple-600 transition-all duration-300">
                <summary className="px-6 py-4 font-medium cursor-pointer list-none relative after:content-['+'] after:absolute after:right-6 after:font-bold after:text-gray-600 after:transition-transform after:duration-200 group-open:after:rotate-45">
                  Do I need a credit card to start?
                </summary>
                <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed">
                  No credit card is required for the <strong>free tier</strong>.
                  When you decide to upgrade to Pro, we’ll ask for payment details
                  then. You can also start a 14-day Pro trial without entering a
                  card – just click “Start Trial” on the pricing page.
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;