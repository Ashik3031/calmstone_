'use client'
import React, { useState, useEffect, useRef } from 'react';


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
        currentScrollY < window.innerHeight * 0.8 &&
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
    ${isExpanded ? 'w-full h-screen rounded-none' : 'w-[90%] max-w-6xl h-[80vh] rounded-3xl shadow-2xl'}
  `;

  const overlayClasses = `
    absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/40
    transition-opacity duration-500
  `;

  return (
    <div className="relative">
      {/* Hero Container */}
      <div className="h-[200vh] bg-white">
        {/* Fixed Video Section */}
        <div
          className={`fixed inset-0 flex items-center justify-center transition-all duration-700 ${
            scrollY >= window.innerHeight * 0.8 ? 'opacity-0 pointer-events-none' : 'opacity-100 z-10'
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
                src="https://player.cloudinary.com/embed/?cloud_name=dsfgakhl4&public_id=site%2Fhero%2Fcffp639jdjbvdk4tjsrb&profile=cld-default"
                type="video/mp4"
              />
            </video>

            {/* Overlay */}
            <div className={overlayClasses}></div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-8">
              {/* Initial Content */}
              <div
                className={`text-center transition-all duration-500 ${
                  showSecondText ? 'opacity-0 -translate-y-20' : 'opacity-100 translate-y-0'
                }`}
              >
                <div className="flex items-center justify-center mb-8">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-black font-bold text-lg">W</span>
                  </div>
                  <span className="text-2xl font-semibold">WebCraft Studio</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Create stunning <span className="text-blue-400">websites</span> in minutes
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold mb-8">— with AI assistance</h2>
                <p className="text-lg mb-12 opacity-90">
                  No coding required. Professional templates included.
                </p>

                {/* CTA Box */}
                <div className=" backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-blue-600 font-medium mb-2">WEBCRAFT STUDIO</div>
                      <div className="text-2xl font-bold text-gray-900">Website Builder</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">Free Trial</div>
                      <div className="text-sm text-gray-600">No credit card required</div>
                    </div>
                    <button
                      type="button"
                      className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      Start Building
                    </button>
                  </div>
                </div>
              </div>

              {/* Second Text Layer */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                  showSecondText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
              >
                <div className="text-center w-full max-w-4xl">
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
