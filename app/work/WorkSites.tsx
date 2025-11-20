// components/WorksiteRoles.tsx
"use client"
import Image from 'next/image';
import { useRef } from 'react';

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
            {/* Card 1 - Interior Designer */}
            <VideoCard 
              imageSrc="/inter.jpg"
              videoSrc="/inter.mp4"
              altText="Interior Designer"
              title="Interior Designer"
            />

            {/* Card 2 - General Contractors */}
            <VideoCard 
              imageSrc="/const1.jpg"
              videoSrc="/construction.mp4"
              altText="General Contractors"
              title="General Contractors"
            />

            {/* Card 3 - Real Estate Agency */}
            <VideoCard 
              imageSrc="/estate.jpg"
              videoSrc="/estate.mp4"
              altText="Real Estate Agency"
              title="Real Estate Agency"
            />

            {/* Card 4 - Tourism & Travel Agency */}
            <VideoCard 
              imageSrc="/tour.png"
              videoSrc="/tour.mp4"
              altText="Tourism & Travel Agency"
              title="Tourism & Travel Agency"
            />
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

// Video Card Component
interface VideoCardProps {
  imageSrc: string;
  videoSrc: string;
  altText: string;
  title: string;
}

const VideoCard = ({ imageSrc, videoSrc, altText, title }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-60 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 relative">
        {/* Image - shown by default */}
        <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
          <Image
            src={imageSrc}
            alt={altText}
            width={400}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Video - shown on hover */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <span className="bg-white px-6 py-3 rounded-full shadow-lg text-gray-800 font-semibold text-sm whitespace-nowrap">
          {title}
        </span>
      </div>
    </div>
  );
};

export default WorksiteRoles;