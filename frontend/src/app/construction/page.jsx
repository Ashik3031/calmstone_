// app/services/subsea/page.jsx
"use client";

import { Zap, Wind, Recycle, ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SubseaPage() {
  /* animation helpers */
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };
  const staggerChildren = {
    animate: { transition: { staggerChildren: 0.2 } },
  };

  const capabilities = [
    {
      title: "Floating Production Units",
      body: "Design and delivery of FPSOs and semi-submersibles tailored for harsh environments.",
      image: "/images/floating.jpg",
      icon: Zap,
    },
    {
      title: "Subsea Systems",
      body: "Installation and management of complex subsea infrastructure for efficient flow assurance.",
      image: "/images/subsea-system.jpg",
      icon: Wind,
    },
    {
      title: "Decommissioning",
      body: "Safe, cost-effective removal of subsea assets and platforms with environmental compliance.",
      image: "/images/decommission.jpg",
      icon: Recycle,
    },
  ];

  const stats = [
    { icon: Zap, number: "50+", label: "Floating Facilities Deployed" },
    { icon: Wind, number: "200 km+", label: "Subsea Pipelines Installed" },
    { icon: Recycle, number: "#1", label: "Decommissioning Expertise" },
  ];

  return (
    <main className="bg-white text-black overflow-hidden">
      {/* =========================================================
         HERO -------------------------------------------------- */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/construction.jpg"
            alt="Subsea & Floating Facilities"
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
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            variants={fadeInUp}
          >
             Construction <br />
           <span className="text-yellow-400"> Management</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl max-w-2xl mb-8 leading-relaxed"
            variants={fadeInUp}
          >
            We provide expert management and oversight of construction
            activities, coordinating resources, schedules, and stakeholders to
            achieve project goals efficiently. Our proactive approach ensures
            quality control, cost management, and timely progress throughout
            every phase.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={fadeInUp}
          >
            <Link
              href="/contact"
              className="group bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 shadow transition-all"
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
         STATS ------------------------------------------------- */}

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
        {/* subtle pattern */}
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
            <span>Transition</span> Together
          </h2>
          <p className="text-xl mb-12 text-gray-300 leading-relaxed">
            Reach out to learn how we can support your deep-water ambitions with
            innovative, sustainable solutions.
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
            {/* <Link
              href="#"
              className="group border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all"
            >
              <span className="flex items-center gap-2">
                Download Brochure
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link> */}
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
