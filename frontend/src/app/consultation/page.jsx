"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Recycle, Droplets, ChevronRight } from "lucide-react";

export default function OnshorePage() {
  /* animation helpers */
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };
  const staggerChildren = {
    animate: { transition: { staggerChildren: 0.2 } },
  };

  /* figures */
  const stats = [
    { icon: Zap, number: "200+", label: "Mega Onshore Projects" },
    { icon: Recycle, number: "30+", label: "Refinery Installations" },
    { icon: Droplets, number: "#1", label: "Gas Processing Expertise" },
  ];

  /* capability cards */
  const capabilities = [
    {
      title: "LNG Facilities",
      body: "Engineering, procurement, and construction of LNG trains and terminals with global efficiency.",
      image: "/images/lng.jpg",
      icon: Droplets,
    },
    {
      title: "Gas Processing",
      body: "Complete solutions from feed-gas handling to sulfur recovery.",
      image: "/images/gas-processing.jpg",
      icon: Zap,
    },
    {
      title: "Petrochemical Plants",
      body: "Turnkey EPC delivery for ethylene, ammonia, and methanol production facilities.",
      image: "/images/petrochemical.jpg",
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
            src="/images/consultation.jpg"
            alt="Onshore"
            fill
            priority
            className="object-cover brightness-80"
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
            Project Consultation <br />& <span className="text-yellow-400">Planning</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl max-w-2xl mb-8 leading-relaxed"
            variants={fadeInUp}
          >
            Our team of planners and consultants works closely with clients
            during the early stages to develop effective strategies, risk
            assessments, and cost projections. This ensures that projects are
            well-planned and positioned for smooth execution.{" "}
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
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================================
         STATS BAR --------------------------------------------- */}

      {/* =========================================================
         CAPABILITIES ------------------------------------------ */}

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
            Let&apos;s Power the{" "}
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
