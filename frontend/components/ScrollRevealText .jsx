'use client';
import React, { useEffect, useRef, useState } from 'react';

const ScrollRevealText = ({ text = '' }) => {
  const containerRef = useRef(null);
  const [revealedCount, setRevealedCount] = useState(0);
  const [inView, setInView] = useState(false);
  const totalLength = text.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    let interval;

    if (inView) {
      interval = setInterval(() => {
        setRevealedCount((prev) =>
          prev < totalLength ? prev + 1 : totalLength
        );
      }, 30);
    } else {
      interval = setInterval(() => {
        setRevealedCount((prev) => (prev > 0 ? prev - 1 : 0));
      }, 15);
    }

    return () => clearInterval(interval);
  }, [inView, totalLength]);

  return (
    <section
      ref={containerRef}
      className="min-h-[80vh] flex items-center justify-center px-6 bg-white"
    >
      <div className="text-center w-full max-w-4xl">
        {/* Top Yellow Line */}
        <div
          className={`relative h-[4px] w-[60%] mx-auto mb-8 transition-opacity duration-500 ${
            revealedCount > 0 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-yellow-400 rounded-full" />
          <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* Animated Text */}
        <p className="text-[28px] md:text-[40px] lg:text-[48px] font-light leading-snug tracking-wide text-black transition-opacity duration-700">
          {text.split('').map((char, idx) => (
            <span
              key={idx}
              className={`inline-block transition-opacity duration-300 ${
                idx < revealedCount ? 'opacity-100' : 'opacity-10'
              }`}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </p>

        {/* Bottom Yellow Line */}
        <div
          className={`relative h-[4px] w-[60%] mx-auto mt-8 transition-opacity duration-500 ${
            revealedCount > 0 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-yellow-400 rounded-full" />
          <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default ScrollRevealText;
