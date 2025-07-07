'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Anchor,
  Building2,
  Waves,
  ChevronRight,
} from 'lucide-react';

export default function OffshorePage() {
  /* animation presets */
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };
  const staggerChildren = {
    animate: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <main className="bg-white text-black overflow-hidden">
      {/* =========================================================
         HERO -------------------------------------------------- */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/offshore.jpg"
            alt="Offshore"
            fill
            priority
            className="object-cover brightness-40 scale-105"
          />
        </div>

        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-10 lg:px-20 text-white"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.div className="mb-6" variants={fadeInUp}>
            <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
              Procurement
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            variants={fadeInUp}
          >
            &amp; Supply Chain Management
            <br />
            {/* <span className="text-yellow-400">Solutions</span> */}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl max-w-2xl mb-8 leading-relaxed"
            variants={fadeInUp}
          >
            Our procurement and supply-chain team ensures timely, cost-effective
            sourcing of materials, equipment, and services worldwide. We
            maintain strong vendor networks, apply rigorous compliance
            standards, and manage logistics efficiently to keep projects on
            track.
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
          {[
            {
              icon: Anchor,
              number: '30+',
              label: 'Offshore Projects Completed',
            },
            { icon: Building2, number: '100K MT', label: 'Heavy-Lift Capacity' },
            { icon: Waves, number: '24/7', label: 'Global Ops Support' },
          ].map(({ icon: Icon, number, label }, i) => (
            <motion.div
              key={label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Icon className="w-12 h-12 mx-auto mb-4 group-hover:text-yellow-400 transition-colors duration-300" />
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
              Offshore Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end offshore solutions for the world’s toughest
              environments.
            </p>
          </motion.div>

          {/* cards */}
          <div className="space-y-32">
            {[
              {
                title: 'Platform Installation & Decommissioning',
                body: 'Safe and efficient installation and removal of fixed and floating platforms worldwide.',
                image: '/images/offshore_decommission.jpg',
                icon: Anchor,
              },
              {
                title: 'Heavy-Lift Engineering',
                body: 'Precision-engineered lift solutions for complex topside and subsea modules.',
                image: '/images/heavy_lift.jpg',
                icon: Building2,
              },
              {
                title: 'Marine Support & Logistics',
                body: 'Integrated marine services that keep offshore operations running smoothly—from tug to tow.',
                image: '/images/marine_logistics.jpg',
                icon: Waves,
              },
            ].map(({ title, body, image, icon: Icon }, idx) => (
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
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
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

        {/* content */}
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
            Reach out to explore how we can support your journey to a
            low-carbon future with innovative, sustainable solutions.
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
