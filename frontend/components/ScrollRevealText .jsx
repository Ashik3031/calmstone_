'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Share_Tech_Mono } from 'next/font/google';

// Import Share Tech Mono font locally
const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const ScrollRevealText = ({ text = '' }) => {
  const containerRef = useRef(null);
  const [revealedCount, setRevealedCount] = useState(0);
  const [inView, setInView] = useState(false);
  const words = text.split(' ');
  const totalLength = words.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => containerRef.current && observer.unobserve(containerRef.current);
  }, []);

  useEffect(() => {
    let interval;

    if (inView) {
      interval = setInterval(() => {
        setRevealedCount((prev) => (prev < totalLength ? prev + 1 : totalLength));
      }, 120);
    } else {
      interval = setInterval(() => {
        setRevealedCount((prev) => (prev > 0 ? prev - 1 : 0));
      }, 50);
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
        <p
  className={`${shareTechMono.className} text-[40px] font-normal text-black transition-opacity duration-700`}
>
  {words.map((word, idx) => (
    <span
      key={idx}
      className={`inline-block transition-opacity duration-300 ${
        idx < revealedCount ? 'opacity-100' : 'opacity-10'
      }`}
    >
      {word}&nbsp;
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
