'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

/**
 * @param {boolean} withOffset  –  add 64 px navbar offset when collapsed?
 *                                default = true (use false for any
 *                                additional hero instances further down
 *                                the page).
 */
const HeroSection = ({ withOffset = true }) => {
  const [isExpanded, setIsExpanded]   = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const videoRef = useRef(null);

  /* ───────────────── scroll logic ───────────────── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (y > 100 && y < window.innerHeight * 0.7 && !isExpanded) {
        setIsExpanded(true);
        setTimeout(() => setShowSecondText(true), 400);
      } else if (y <= 100 && isExpanded) {
        setIsExpanded(false);
        setShowSecondText(false);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isExpanded]);

  /* ───────────────── helper classes ─────────────── */
  // While collapsed we optionally shift everything down by 64 px (Tailwind 16)
  const offsetClass   = !isExpanded && withOffset ? 'translate-y-15' : '';
  const videoClasses  =
    `relative overflow-hidden transition-all duration-700 ease-out
     ${isExpanded ? 'w-full h-full rounded-none'
                  : 'w-[94%] h-[80vh] rounded-2xl shadow-2xl'} `;

  /* ─────────────────────────── render ───────────── */
  return (
    <section className="relative bg-white isolate min-h-[180vh]">
      {/* top-0 so the expanded state covers the full viewport.
          offsetClass moves ONLY the collapsed card. */}
      <div className={`sticky top-0 h-screen flex items-center justify-center ${offsetClass}`}>
        <div className={videoClasses}>
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay muted loop playsInline
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/40" />

          {/* ───────── text layer ───────── */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-8">

            {/* ---------- Collapsed (card) text ---------- */}
            <div
              className={`
                text-center transition-all duration-500
                ${isExpanded ? 'w-full h-full' : 'w-[94%] h-[80vh]'}
                mx-auto px-4 sm:px-8 md:px-16 py-14 lg:py-20
                ${showSecondText ? 'opacity-0 -translate-y-20' : 'opacity-100 translate-y-0'}
              `}
            >
              <div className="flex items-center justify-center mb-6">
                <Image src="/logo.png" alt="Logo" width={200} height={200} />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Create stunning <span className="text-yellow-400">websites</span> in minutes
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-6">— with AI assistance</h2>
              <p className="text-base mb-8 opacity-90">
                No coding required. Professional templates included.
              </p>
            </div>

            {/* ---------- Expanded (full) text ---------- */}
            <div
              className={`
                absolute inset-0 flex items-center justify-center
                transition-all duration-700
                ${showSecondText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
              `}
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
    </section>
  );
};

export default HeroSection;
