"use client";

import React from 'react';
import { Zap, Target, Shield, Users, ArrowRight, Star, Award, Globe, Heart } from 'lucide-react';

export default function CalmStoneAboutPage() {
  const values = [
    {
      title: "Agility",
      description: "Fast, flexible, and responsive execution across every project stage.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Precision",
      description: "Uncompromising quality and attention to detail in design and delivery.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Integrity",
      description: "Transparent, honest, and ethical practices that build lasting trust.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Collaboration",
      description: "Cross‑functional teamwork that fuses veteran expertise with next‑gen talent.",
      icon: <Users className="w-8 h-8" />
    }
  ];

  const stats = [
    { number: "2022", label: "Year Founded" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "100+", label: "Projects Delivered" },
    { number: "25+", label: "Countries Served" }
  ];

  const team = [
    { name: "—", role: "Leadership Team", description: "Seasoned EPC professionals driving innovation and reliable delivery." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
            <Star className="w-10 h-10 text-black" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            About Calm Stone
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Established in 2022, Calm Stone brings a modern, agile approach to the oil & gas sector. Our seasoned professionals deliver tailored EPC solutions with speed, precision, and unwavering quality.
          </p>

          <button className="group bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl">
            Learn More
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Calm Stone operates with a startup mindset backed by real‑world expertise. We fuse veteran insight with bold, next‑generation thinking to create intelligent, future‑ready energy infrastructure.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Adaptability, responsiveness, and clear communication make us the partner of choice for clients seeking efficient, high‑performance project delivery in today’s evolving energy landscape.
              </p>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">2022</div>
                  <div className="text-sm text-gray-500 font-medium">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">100+</div>
                  <div className="text-sm text-gray-500 font-medium">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">25+</div>
                  <div className="text-sm text-gray-500 font-medium">Countries</div>
                </div>
              </div>
            </div>

            {/* Icon Grid */}
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-center">
                    <Award className="w-8 h-8 text-yellow-500" />
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-center">
                    <Globe className="w-8 h-8 text-yellow-500" />
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-center">
                    <Heart className="w-8 h-8 text-yellow-500" />
                  </div>
                  <div className="bg-yellow-400 rounded-xl p-6 shadow-sm flex items-center justify-center">
                    <Star className="w-8 h-8 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
            Mission & Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto text-left">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide smart, agile, and reliable EPC services that meet the evolving needs of the energy industry — powered by innovation, speed, and precision.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To emerge as a new‑generation EPC leader, building sustainable energy infrastructure that drives progress and inspires confidence worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Calm Stone Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Calm Stone
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We blend fresh energy with deep industry insight to deliver agile, reliable, and future‑ready solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 text-black group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Key Figures
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that showcase our impact and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl font-bold text-yellow-500 mb-4">
                  {stat.number}
                </div>
                <p className="text-lg text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Meet Our Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Seasoned professionals who turn bold ideas into outstanding results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {member.name}
                </h3>
                <p className="text-yellow-500 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Let’s discuss how Calm Stone can accelerate your next energy project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 inline-flex items-center justify-center">
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
