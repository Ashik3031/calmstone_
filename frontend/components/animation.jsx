/* components/HeroScrollSlider.jsx – deck follows scroll continuously */
'use client';
import { useEffect, useRef, useState } from 'react';

/* 1.  slide data */
const slides = [
  { img: 'https://res.cloudinary.com/dsfgakhl4/image/upload/v1751460876/site/services/qbsusqfwie6njm9web0s.png', stat: '30,000+',  label: 'Bright Minds'   },
  { img: 'https://res.cloudinary.com/dsfgakhl4/image/upload/v1750488653/perfume-bottle-nature_2_a7cyha.jpg',       stat: '90+',     label: 'Nationalities' },
  { img: 'https://res.cloudinary.com/dsfgakhl4/image/upload/v1751460876/site/services/qbsusqfwie6njm9web0s.png', stat: '100%',    label: 'Committed'      },
  { img: 'https://res.cloudinary.com/dsfgakhl4/image/upload/v1750488653/perfume-bottle-nature_2_a7cyha.jpg',       stat: '100 yrs', label: 'Heritage'       },
  { img: 'https://res.cloudinary.com/dsfgakhl4/image/upload/v1751460876/site/services/qbsusqfwie6njm9web0s.png', stat: '1 Team',  label: 'One Vision'     }
];

/* 2.  gap size (% of card height) */
const CARD_GAP = 60;          // keep it roomy

export default function HeroScrollSlider() {
  const wrapperRef = useRef(null);

  /* progress = 0 … (slides.length-1) as float */
  const [progress, setProgress] = useState(0);

  /* ---- scroll listener -------------------------------------------------- */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    /* rAF throttling so we don’t set state on every raw scroll event */
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const { top, height } = wrapper.getBoundingClientRect();
        const winH   = window.innerHeight;
        const clampedY = Math.min(Math.max(-top, 0), height - winH);   // 0 → wrapperScrollRange
        setProgress(clampedY / winH);                                  // float
        ticking = false;
      });
    };

    onScroll();                            // initialise
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* derived integer for dot highlighting */
  const activeIndex = Math.round(progress);

  /* ---- helpers ---------------------------------------------------------- */
  const scrollToSlide = (i) => {
    const wrapTop = wrapperRef.current?.offsetTop ?? 0;
    window.scrollTo({ top: wrapTop + i * window.innerHeight, behavior: 'smooth' });
  };

  /* ---- render ----------------------------------------------------------- */
  return (
    <section ref={wrapperRef} style={{ height: `${slides.length * 100}vh` }}>
      <div className="relative sticky top-0 h-screen flex items-center justify-between px-8 md:px-20 bg-white text-neutral-900">

        {/* headline */}
        <div className="max-w-xl">
          <h1 className="text-[2.8rem] md:text-[4.5rem] font-bold leading-tight">
            for now<br />and what’s next
          </h1>
          <button className="mt-8 px-6 py-3 border-2 border-neutral-900 font-medium tracking-wide hover:bg-neutral-900 hover:text-white transition">
            The McDermott Difference
          </button>
        </div>

        {/* slider deck */}
        <div className="relative w-96 h-[28rem] shrink-0 overflow-visible pointer-events-none">
          {slides.map(({ img, stat, label }, i) => {
            const offset = (i - progress) * (100 + CARD_GAP);   // continuous
            return (
              <div
                key={stat}
                className="absolute inset-0 rounded-md shadow-2xl transition-transform duration-0
                           will-change-transform"
                style={{ transform: `translateY(${offset}%)` }}
              >
                <img src={img} alt={label} className="h-full w-full object-cover rounded-md" />
                <div className="absolute bottom-0 inset-x-0 py-6 px-6 bg-neutral-900/70 backdrop-blur-sm rounded-b-md">
                  <p className="text-white text-4xl font-extrabold mb-1">{stat}</p>
                  <p className="text-white/90 tracking-wide">{label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* dots */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 pointer-events-auto">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-3 w-3 rounded-full border transition
                          ${i === activeIndex
                            ? 'bg-neutral-900 border-neutral-900 scale-110'
                            : 'bg-transparent border-neutral-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
