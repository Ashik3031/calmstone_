'use client';

import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

/* ----- helper to fetch media (optional) ----- */
async function fetchMedia(section, limit = 1) {
  const res = await fetch(`/api/https://www.youtube.com/watch?v=8QCK_qEp_PI`, {
    cache: 'no-store',
  });
  return res.json();
}

export default function HeroSection() {
  const [hero, setHero] = useState(null);
  const [isVideoLoaded, setLoaded] = useState(false);
  const [shouldShowVideo, setShow] = useState(false);
  const videoRef   = useRef(null);

  /* prefers-reduced-motion? */
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* request 1st hero asset (video or image) */
  useEffect(() => {
    fetchMedia('hero', 1).then((res) => setHero(res[0]));
  }, []);

  /* reveal video only when hero comes into view */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const el = document.querySelector('.hero-container');
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* media logic */
  const videoUrl = hero?.resourceType === 'video' ? hero.secureUrl : null;
  const showVideo = videoUrl && shouldShowVideo && !prefersReducedMotion;

  /* scroll helper */
  const scrollToNext = () =>
    document
      .querySelector('.next-section')
      ?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero-container relative w-full overflow-hidden bg-primary text-white rounded-b-[60px] md:rounded-b-[100px] shadow-md">
      <div className="relative h-screen w-full overflow-hidden">
        {/* video, if any */}
        {showVideo && (
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setLoaded(true)}
            onError={() => setLoaded(false)}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}

        {/* solid colour fallback (image removed) */}
        {!showVideo && <div className="absolute inset-0 bg-primary" />}

        {/* soft dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        {/* headline copy */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 text-center z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-tight mb-6">
            Building <span className="text-accent">Energy’s Future</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90">
            Delivering world-class engineering, procurement, construction and installation
            solutions for more than&nbsp;100&nbsp;years.
          </p>
        </div>

        {/* bounce icon */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white z-20 transition"
          aria-label="Scroll down"
        >
          <ChevronDown size={28} className="animate-bounce" />
        </button>

        {/* loader spinner while video buffers */}
        {showVideo && !isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        )}
      </div>
    </section>
  );
}
