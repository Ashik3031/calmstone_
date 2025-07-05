'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const McDermottHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Carousel data
  const slides = [
    {
      image: "/api/placeholder/400/300",
      title: "30,000+",
      subtitle: "Bright Minds",
      description: "Global team of engineers and specialists"
    },
    {
      image: "/api/placeholder/400/300",
      title: "50+",
      subtitle: "Countries",
      description: "Worldwide project delivery"
    },
    {
      image: "/api/placeholder/400/300",
      title: "75+",
      subtitle: "Years",
      description: "Industry leadership and innovation"
    }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Trigger entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
        {/* Background with parallax */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/50 to-blue-600/50"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
          }}
        />
        
        {/* Main content container */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left side - Text content */}
            <div className={`text-white space-y-8 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-light leading-tight">
                  for now<br />
                  <span className="text-blue-200">and what's next</span>
                </h1>
                <p className="text-xl text-blue-100 max-w-lg">
                  An integrated approach to responsibly harness and transform global energy resources
                </p>
              </div>
              
              <button className="group border-2 border-white bg-transparent hover:bg-white hover:text-blue-900 text-white px-8 py-3 font-medium uppercase tracking-wide transition-all duration-300 flex items-center gap-2">
                The McDermott Difference
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right side - Carousel */}
            <div className={`relative transform transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                
                {/* Employee image */}
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={slides[currentSlide].image}
                    alt="McDermott Team Member"
                    className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Stats card */}
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                  <div className="relative z-10">
                    <div className="text-4xl font-bold mb-2">
                      {slides[currentSlide].title}
                    </div>
                    <div className="text-xl font-light mb-1">
                      {slides[currentSlide].subtitle}
                    </div>
                    <div className="text-sm text-purple-100">
                      {slides[currentSlide].description}
                    </div>
                  </div>
                  <ChevronRight className="absolute bottom-4 right-4 w-6 h-6 text-white/60" />
                </div>

                {/* Navigation dots */}
                <div className="flex justify-center mt-6 space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-white scale-125' 
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Additional content sections for scrolling */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Engineering', 'Procurement', 'Construction'].map((service, index) => (
                <div 
                  key={service}
                  className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-700 delay-${index * 200} ${
                    scrollY > 200 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{service}</h3>
                  <p className="text-gray-600">
                    Excellence in {service.toLowerCase()} solutions for energy infrastructure worldwide.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transform transition-all duration-1000 ${
            scrollY > 600 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-white mb-8">Global Impact</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Delivering sustainable energy solutions that power communities and drive economic growth across the globe.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default McDermottHero;