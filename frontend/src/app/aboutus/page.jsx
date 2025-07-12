"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Target, Eye, Award, Users, Zap, Leaf, Clock, TrendingUp } from "lucide-react";
import Header from "../../../components/navbar";
// import { Target, Eye, , Clock, Users,  } from "lucide-react";


const accordionData = [
  {
    title: "Mission",
    content:
      "To redefine excellence in EPC by delivering smart, agile, and trusted solutions that drive progress in the evolving energy sector. We are powered by innovation, guided by precision, and driven by a commitment to speed, safety, and lasting value—for every client, every time.",
    icon: Target,
  },
  {
    title: "Vision",
    content:
      "To emerge as a new-generation EPC leader, building sustainable energy infrastructure that drives progress and inspires confidence worldwide.",
    icon: Eye,
  },
];

const features = [
  {
    icon: Building2,
    title: "Why We Are",
    content:
      "We blend the agility of a modern company with deep industry expertise. Our team works with speed, precision, and unwavering commitment to safety and quality. Through innovation, collaboration, and integrity, we ensure lasting value in every project.",
  },
  {
    icon: Award,
    title: "Quality and Commitment",
    content:
      "Quality is at the core of everything we do. With world-class engineering and timely execution, every project meets or exceeds global standards—backed by a multidisciplinary team and a customer-first mindset.",
  },
  {
    icon: Zap,
    title: "Legacy of Innovation and Excellence",
    content:
      "Calm Stone has built its reputation on results, trust, and innovation. We evolve with every challenge, shaping a future defined by quality, credibility, and solutions that stand the test of time.",
  },
];

const AboutPage = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-white text-black min-h-screen overflow-hidden">
    
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-24">
        <div className="absolute inset-0 "></div>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-3"
            >
              <div className="relative inline-block text-center">
                <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 pb-5 uppercase">
                  About Us
                </h2>
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative overflow-hidden rounded-2xl  shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
            <div className="absolute inset-0 border-2 border-[#facc15]/20 rounded-2xl z-20"></div>
            <img
              src="/images/about.jpg"
              alt="Calm Stone Industrial Operations"
              className="w-full h-96 lg:h-[600px] object-cover transition-transform duration-700"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-8 left-8 z-30"
            >
              {/* <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-[#facc15]/30">
                <p className="text-[#facc15] text-sm uppercase tracking-wide font-semibold">Established</p>
                <p className="text-2xl font-bold text-black">2022</p>
              </div> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6 lg:px-24 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                {/* <h2 className="text-4xl font-bold mb-4">
                  <span className="text-black">Modern</span> <span className="text-[#facc15]">Approach</span>
                </h2> */}
                {/* <div className="w-16 h-1 bg-[#facc15] mb-6"></div> */}
              </motion.div>

              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl leading-relaxed mb-6 text-gray-700"
              >
                Established in 2022,{" "}
                <span className="text-[#facc15] font-semibold">Calm Stone</span>{" "}
                brings a modern, agile approach to the oil and gas industry,
                combining deep industry expertise with a dynamic team of
                seasoned professionals.
              </motion.p>

              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl leading-relaxed text-gray-700"
              >
                We offer comprehensive EPC services—earthworks, civil,
                mechanical/piping installation, electrical and instrumentation
                works.
              </motion.p>
            </div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-[#facc15]/10 p-8 rounded-2xl border border-[#facc15]/20">
                {/* <Users className="w-12 h-12 text-[#facc15] mb-4" /> */}
                <h3 className="text-2xl font-bold text-[#facc15] mb-4">
                  Our Foundation
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  With strong emphasis on quality, safety, and HSE compliance,
                  we have rapidly earned a reputation for reliability and
                  performance. Backed by a skilled workforce and advanced
                  equipment, Calm Stone delivers end-to-end project solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision Accordion */}
     <section className="py-20 px-6 lg:px-24 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-black">Our</span>{" "}
              <span className="text-[#facc15]">Foundation</span>
            </h2>
            <div className="w-16 h-1 bg-[#facc15] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built on purpose and vision, driving excellence and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[{
              icon: Target,
              title: "Mission",
              desc: "To redefine excellence in EPC by delivering smart, agile, and trusted solutions that drive progress in the evolving energy sector."
            }, {
              icon: Eye,
              title: "Vision",
              desc: "To emerge as a new-generation EPC leader, building sustainable energy infrastructure that drives progress and inspires confidence worldwide."
            }].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-[#facc15]/20 hover:border-[#facc15]/40 transition-all duration-300 shadow-md hover:shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-[#facc15]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-[#facc15]" />
                </div>
                <h3 className="text-2xl font-bold text-[#facc15] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
    <section className="py-20 px-6 lg:px-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              WHY CHOOSE US?
            </h2>
            <div className="w-36 h-1 bg-[#facc15] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the reasons why we stand out from the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {[{
              icon: Leaf,
              title: "WE DELIVER QUALITY",
              desc: "Our commitment to excellence ensures that we deliver nothing short of top-quality results."
            }, {
              icon: Clock,
              title: "ALWAYS ON TIME",
              desc: "We understand the value of your time and strive to meet deadlines consistently."
            }, {
              icon: Users,
              title: "WE ARE PASSIONATE",
              desc: "Our team's passion for what we do drives us to go above and beyond in every project."
            }, {
              icon: TrendingUp,
              title: "PROFESSIONAL SERVICES",
              desc: "With our expertise and professionalism, you can trust us to handle your needs with utmost care and precision."
            }].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#fefce8] rounded-full border-8 border-[#facc15]/30 py-8 px-4 flex flex-col items-center hover:shadow-xl transition duration-300"
              >
                <item.icon className="w-12 h-12 text-[#facc15] mb-6" />
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer CTA */}
      {/* <section className="py-20 px-6 lg:px-24 bg-gradient-to-r from-[#facc15]/10 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-white p-12 rounded-2xl border border-[#facc15]/30 shadow-lg">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-black">Ready to</span> <span className="text-[#facc15]">Build Together?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the Calm Stone difference in your next project
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#facc15] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#f59e0b] transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </section> */}
    </main>
  );
};

export default AboutPage;
