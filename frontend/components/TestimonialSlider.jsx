"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { testimonials } from "../src/lib/testimonials";

export default function TestimonialSlider() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-stone-100 py-24 px-4 overflow-hidden">
      {/* Refined Background Radials */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(252,211,77,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(245,158,11,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.6),transparent_70%)]" />

      {/* Elegant Floating Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-yellow-300/60 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-2 h-2 bg-amber-200/80 rounded-full animate-bounce" />
      <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-yellow-200/70 rounded-full animate-pulse" />
      <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-amber-300/60 rounded-full animate-bounce" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 
                         bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600
                         bg-clip-text text-transparent">
            Our Commitment
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover our most innovative and impactful projects that shape the future
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation, EffectCoverflow, Autoplay]}
            navigation={{ nextEl: ".swiper-button-next-custom", prevEl: ".swiper-button-prev-custom" }}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={1.1}
            spaceBetween={30}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            coverflowEffect={{ rotate: 15, stretch: 0, depth: 200, modifier: 2, slideShadows: true }}
            breakpoints={{
              640: { slidesPerView: 1.3, spaceBetween: 40 },
              768: { slidesPerView: 1.8, spaceBetween: 50 },
              1024: { slidesPerView: 2.2, spaceBetween: 60 },
              1280: { slidesPerView: 2.5, spaceBetween: 70 },
            }}
            className="swiper-project pb-12"
          >
            {testimonials.map((project, idx) => (
              <SwiperSlide key={idx} className="group">
                <div className="relative bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl 
                                border border-yellow-200/50 hover:border-amber-300/70
                                transition-all duration-500 hover:shadow-amber-200/40 hover:-translate-y-2">

                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-700 "
                    />
                    {/* Subtle overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category badge */}
                    {project.category && (
                      <div className="absolute top-4 left-4 bg-amber-400/90 backdrop-blur-sm text-white px-3 py-1 
                                      rounded-full text-sm font-medium shadow-lg">
                        {project.category}
                      </div>
                    )}
                    
                    {/* Hover description */}
                    <div className="absolute inset-0 flex items-center justify-center 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.description && (
                        <div className="text-center text-white px-4">
                          <p className="text-lg font-medium mb-2">{project.description}</p>
                          <div className="w-12 h-0.5 bg-yellow-300 mx-auto rounded-full" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card body with refined colors */}
                  <div className="p-6 bg-gradient-to-br from-slate-700/95 to-slate-800/95 backdrop-blur-sm">
                    <h3 className="font-bold text-xl mb-2 text-white group-hover:text-yellow-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-yellow-200/80 mb-4">
                      <span className="text-sm">{project.location}</span>
                    </div>

                    {/* Refined progress bar */}
                    <div className="relative h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full 
                                      transform -translate-x-full group-hover:translate-x-0 transition-transform
                                      duration-1000 ease-out" />
                    </div>
                  </div>

                  {/* Soft glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-300/15 to-amber-400/15 blur-xl" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Refined Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20
                             group bg-white/80 backdrop-blur-sm hover:bg-amber-400/90 text-slate-700 hover:text-white
                             p-3 rounded-full border border-yellow-200/60 hover:border-amber-400/80 transition-all duration-300 
                             hover:shadow-xl hover:shadow-amber-300/25">
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </button>
          <button className="swiper-button-next-custom absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20
                             group bg-white/80 backdrop-blur-sm hover:bg-amber-400/90 text-slate-700 hover:text-white
                             p-3 rounded-full border border-yellow-200/60 hover:border-amber-400/80 transition-all duration-300 
                             hover:shadow-xl hover:shadow-amber-300/25">
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}