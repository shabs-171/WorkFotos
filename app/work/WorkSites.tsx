// components/WorksiteRoles.tsx
"use client"
import Image from 'next/image'; // Remove this line if you're not using Next.js

const WorksiteRoles = () => {
  return (
    <>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for Every <span className="text-blue-600">Worksite</span> Role
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            From contractors to office staff WorkFotos helps everyone stay organized, informed, and on track.
          </p>

          {/* Cards Grid */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="relative group">
              <div className="w-60 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-3">
                <Image
                  src="/inter.jpg"
                  alt="Interior Designer"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <span className="bg-white px-6 py-3 rounded-full shadow-lg text-gray-800 font-semibold text-sm whitespace-nowrap">
                  Interior Designer
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group">
              <div className="w-60 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-3">
                <Image
                  src="/const1.jpg"
                  alt="General Contractors"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <span className="bg-white px-6 py-3 rounded-full shadow-lg text-gray-800 font-semibold text-sm whitespace-nowrap">
                  General Contractors
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group">
              <div className="w-60 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-3">
                <Image
                  src="/estate.jpg"
                  alt="Real Estate Agency"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <span className="bg-white px-6 py-3 rounded-full shadow-lg text-gray-800 font-semibold text-sm whitespace-nowrap">
                  Real Estate Agency
                </span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative group">
              <div className="w-60 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-3">
                <Image
                  src="/tour.png"
                  alt="Tourism & Travel Agency"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <span className="bg-white px-6 py-3 rounded-full shadow-lg text-gray-800 font-semibold text-sm whitespace-nowrap">
                  Tourism & Travel Agency
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 640px) {
          div > div > div {
            width: 280px !important;
            height: 320px !important;
          }
        }
      `}</style>
    </>
  );
};

export default WorksiteRoles;