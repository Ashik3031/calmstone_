'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Zap,
  Recycle,
  Droplets,
  ChevronRight,
} from 'lucide-react';

export default function OnshorePage() {
  /* animation helpers */
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };
  const staggerChildren = {
    animate: { transition: { staggerChildren: 0.2 } },
  };

  /* figures */
  const stats = [
    { icon: Zap, number: '200+', label: 'Mega Onshore Projects' },
    { icon: Recycle, number: '30+', label: 'Refinery Installations' },
    { icon: Droplets, number: '#1', label: 'Gas Processing Expertise' },
  ];

  /* capability cards */
  const capabilities = [
    {
      title: 'LNG Facilities',
      body: 'Engineering, procurement, and construction of LNG trains and terminals with global efficiency.',
      image: '/images/lng.jpg',
      icon: Droplets,
    },
    {
      title: 'Gas Processing',
      body: 'Complete solutions from feed-gas handling to sulfur recovery.',
      image: '/images/gas-processing.jpg',
      icon: Zap,
    },
    {
      title: 'Petrochemical Plants',
      body: 'Turnkey EPC delivery for ethylene, ammonia, and methanol production facilities.',
      image: '/images/petrochemical.jpg',
      icon: Recycle,
    },
  ];

  return (
    <main className="bg-white text-black overflow-hidden">
      {/* =========================================================
         HERO -------------------------------------------------- */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/onshore.jpg"
            alt="Onshore"
            fill
            priority
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-10 lg:px-20 text-white"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            variants={fadeInUp}
          >
            Onshore Construction
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl max-w-2xl mb-8 leading-relaxed"
            variants={fadeInUp}
          >
            We specialise in safe, efficient, high-quality onshore construction
            for oil&nbsp;&amp;&nbsp;gas, petrochemical, power, and industrial
            facilities. From civil works and structural erection to mechanical,
            electrical, and instrumentation installation, our teams deliver to
            the highest HSE and QA/QC standards.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={fadeInUp}
          >
            <Link
              href="/contact"
              className="group bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all"
            >
              <span className="flex items-center gap-2">
                Talk to our Experts
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="#capabilities"
              className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all"
            >
              <span className="flex items-center gap-2">
                Explore Solutions
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================================
         STATS BAR --------------------------------------------- */}
      <motion.section
        className="bg-black text-white py-12 px-6 sm:px-10 lg:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map(({ icon: Icon, number, label }, i) => (
            <motion.div
              key={label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Icon className="w-12 h-12 mx-auto mb-4 group-hover:text-yellow-400 transition-colors" />
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">
                {number}
              </h3>
              <p className="text-lg">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* =========================================================
         CAPABILITIES ------------------------------------------ */}
      <section id="capabilities" className="py-20 px-6 sm:px-10 lg:px-20">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {/* header */}
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end delivery for complex onshore energy assets
            </p>
          </motion.div>

          {/* cards */}
          <div className="space-y-32">
            {capabilities.map(({ title, body, image, icon: Icon }, idx) => (
              <motion.div
                key={title}
                className={`flex flex-col lg:flex-row ${
                  idx % 2 ? 'lg:flex-row-reverse' : ''
                } items-center gap-10 lg:gap-16`}
                variants={fadeInUp}
              >
                {/* image */}
                <div className="lg:w-1/2 w-full relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl border">
                    <Image
                      src={image}
                      alt={title}
                      width={1200}
                      height={675}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-4 left-4 p-3 rounded-full bg-yellow-400 text-black shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* copy */}
                <div className="lg:w-1/2 w-full space-y-6 px-1">
                  <h3 className="text-3xl md:text-4xl font-bold">{title}</h3>
                  <p className="text-lg leading-relaxed text-gray-700">{body}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="#"
                      className="group inline-flex items-center gap-2 border-2 border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-all"
                    >
                      View Case Studies
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================================
         CTA FOOTER -------------------------------------------- */}
      <motion.section
        className="relative bg-black py-24 px-6 sm:px-10 lg:px-20 text-center overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* radial pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let&apos;s Power the{' '}
            <span className="text-yellow-400">Transition</span> Together
          </h2>
          <p className="text-xl mb-12 text-gray-300 leading-relaxed">
            Reach out to explore how we can support your journey to a low-carbon
            future with innovative, sustainable solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-yellow-400 text-black px-10 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-all hover:shadow-lg hover:-translate-y-2"
            >
              <span className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="#"
              className="group border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all"
            >
              <span className="flex items-center gap-2">
                Download Brochure
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
