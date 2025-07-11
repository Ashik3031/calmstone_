'use client'; 

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Target, Eye, Award, Users, Zap, Plus } from 'lucide-react';

const accordionData = [
  {
    title: 'Mission',
    content:
      'To redefine excellence in EPC by delivering smart, agile, and trusted solutions that drive progress in the evolving energy sector. We are powered by innovation, guided by precision, and driven by a commitment to speed, safety, and lasting value—for every client, every time.',
    icon: Target
  },
  {
    title: 'Vision',
    content:
      'To emerge as a new-generation EPC leader, building sustainable energy infrastructure that drives progress and inspires confidence worldwide.',
    icon: Eye
  },
];

const features = [
  {
    icon: Building2,
    title: 'Why We Are',
    content: 'We blend the agility of a modern company with deep industry expertise. Our team works with speed, precision, and unwavering commitment to safety and quality. Through innovation, collaboration, and integrity, we ensure lasting value in every project.'
  },
  {
    icon: Award,
    title: 'Quality and Commitment',
    content: 'Quality is at the core of everything we do. With world-class engineering and timely execution, every project meets or exceeds global standards—backed by a multidisciplinary team and a customer-first mindset.'
  },
  {
    icon: Zap,
    title: 'Legacy of Innovation and Excellence',
    content: 'Calm Stone has built its reputation on results, trust, and innovation. We evolve with every challenge, shaping a future defined by quality, credibility, and solutions that stand the test of time.'
  }
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
              className="inline-block mb-6"
            >
              <div className="w-20 h-1 bg-[#facc15] mx-auto mb-6"></div>
              <h1 className="text-6xl lg:text-7xl font-bold">
                <span className="text-black">About</span>{' '}
                <span className="text-[#facc15]">Calm Stone</span>
              </h1>
              <div className="w-20 h-1 bg-[#facc15] mx-auto mt-6"></div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative overflow-hidden rounded-2xl mb-20 shadow-2xl"
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
                Established in 2022, <span className="text-[#facc15] font-semibold">Calm Stone</span> brings a modern, agile approach to the oil and gas industry, combining deep industry expertise with a dynamic team of seasoned professionals.
              </motion.p>
              
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl leading-relaxed text-gray-700"
              >
                We offer comprehensive EPC services—earthworks, civil, mechanical/piping installation, electrical and instrumentation works.
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
                <h3 className="text-2xl font-bold text-[#facc15] mb-4">Our Foundation</h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  With strong emphasis on quality, safety, and HSE compliance, we have rapidly earned a reputation for reliability and performance. Backed by a skilled workforce and advanced equipment, Calm Stone delivers end-to-end project solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision Accordion */}
      <section className="py-20 px-6 lg:px-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-black">Our</span> <span className="text-[#facc15]">Foundation</span>
            </h2>
            <div className="w-16 h-1 bg-[#facc15] mx-auto"></div>
          </div>

          <div className="space-y-4">
            {accordionData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-[#facc15]/20 rounded-xl overflow-hidden bg-[#fefce8] shadow-sm"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-[#facc15]/10 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#facc15]/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-[#facc15]" />
                      </div>
                      <span className="text-2xl font-semibold text-black">{item.title}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 border-2 border-[#facc15] rounded-full flex items-center justify-center"
                    >
                      <span className="text-[#facc15] text-xl font-bold">
                        <Plus w-6 h-6/>
                      </span>
                    </motion.div>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="ml-16 text-lg leading-relaxed text-gray-700">
                        {item.content}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 lg:px-24 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-black">What Makes Us</span> <span className="text-[#facc15]">Different</span>
            </h2>
            <div className="w-16 h-1 bg-[#facc15] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our ambition: To be the region's most trusted service provider.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white p-8 rounded-2xl border border-[#facc15]/20 hover:border-[#facc15]/40 transition-all duration-300 h-full shadow-md hover:shadow-lg">
                    {/* <div className="w-16 h-16 bg-[#facc15]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#facc15]/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-[#facc15]" />
                    </div> */}
                    <h3 className="text-2xl font-bold text-[#facc15] mb-4">{feature.title}</h3>
                    <p className="text-gray-700 leading-relaxed ">{feature.content}</p>
                  </div>
                </motion.div>
              );
            })}
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