'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (
        currentScrollY > 100 &&
        currentScrollY < window.innerHeight * 0.7 &&
        !isExpanded
      ) {
        setIsExpanded(true);
        setTimeout(() => setShowSecondText(true), 400);
      } else if (currentScrollY <= 100 && isExpanded) {
        setIsExpanded(false); 
        setShowSecondText(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isExpanded]);

  const videoContainerClasses = `
    relative overflow-hidden transition-all duration-700 ease-out
    ${isExpanded ? 'w-full h-screen rounded-none' : 'w-[94%] h-[80vh] rounded-2xl shadow-2xl'}
  `;

  const overlayClasses = `
    absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/40
    transition-opacity duration-500
  `;

  return (
    <div className="relative">
      {/* Hero Container */}
      <div className="h-[150vh] bg-white">
        {/* Fixed Video Section */}
        <div
          className={`fixed inset-0 flex items-center justify-center transition-all duration-700 pt-16 ${
            scrollY >= window.innerHeight * 0.7 ? 'opacity-0 pointer-events-none' : 'opacity-100 z-10'
          }`}
        >
          <div className={videoContainerClasses}>
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://res.cloudinary.com/dsfgakhl4/video/upload/f_auto,q_auto/site/hero/cffp639jdjbvdk4tjsrb.mp4"
                type="video/mp4"
              />
            </video>

            {/* Overlay */}
            <div className={overlayClasses}></div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-8">
              {/* Initial Content */}
              <div
                className={`
                  text-center transition-all duration-500
                  ${isExpanded ? 'w-full h-screen' : 'w-[94%] h-[80vh]'}
                  mx-auto
                  px-4 sm:px-8 md:px-16
                  py-14 lg:py-20
                  mt-16      
                  ${showSecondText ? 'opacity-0 -translate-y-20' : 'opacity-100 translate-y-0'}
                `}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-2">
                    <span className="text-black font-bold text-sm">W</span>
                  </div>
                  <span className="text-lg font-semibold">WebCraft Studio</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Create stunning <span className="text-blue-400">websites</span> in minutes
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold mb-6">— with AI assistance</h2>
                <p className="text-base mb-8 opacity-90">
                  No coding required. Professional templates included.
                </p>
              </div>

              {/* Second Text Layer */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                  showSecondText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              >
                <div className="text-center w-full max-w-4xl pt-18">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Build your dream website in minutes
                  </h2>
                  <p className="text-xl md:text-2xl opacity-90 mb-12">
                    Professional templates, AI assistance, and zero coding required.
                  </p>
                  <button
                    type="button"
                    className="bg-white text-black px-10 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Start Building Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default HeroSection;