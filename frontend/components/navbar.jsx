"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import useScrollDirection from "../hooks/useScrollDirection"; // adjust path if needed

/* ----------------- Mega-menu data ----------------- */
const megaMenus = {
  Services: {
    columns: {
      Services: [
        {
          label: "Engineering, Procurement & Construction (EPC)",
          href: "/energy_transition",
        },
        { label: "General Contracting", href: "/general-contract" },
        { label: "Construction and Execution", href: "/construction" },
        { label: "Project Consultation and Planning", href: "/consultation" },
        {
          label: "MEP Services (Mechanical, Electrical & Plumbing)",
          href: "/mep-services",
        },
      ],
    },
    // all: { label: "Explore our solutions", href: "/solutions" },
  },

  Commitments: {
    columns: {
      Commitments: [
        {
          label: "Qusahwira production Facilities Upgrade",
          href: "/quswahira-upgrade",
        },
        { label: "Engineering Services", href: "/engineering-service" },
        { label: "Services for SPEL Job", href: "/spel" },
        { label: "Documents for MTO and BOQ for LZ LTDP 1", href: "/mto" },
      ],
    },
    // all: { label: "Explore our Commitments", href: "/commitments  " },
  },
};
/* -------------------------------------------------- */

const Header = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null); // desktop mega-menu
  const [isMobileOpen, setIsMobileOpen] = useState(false); // burger menu
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const isWhiteHeader =
    isHeaderHovered || hoveredMenu || isMobileOpen || isPastHero;

  // adds blur / border after hero

  // NEW: detect scroll direction
  const scrollDir = useScrollDirection(); // "up" | "down"

  const links = Object.keys(megaMenus);

  /* ---------- on-scroll blur / border ---------- */
  useEffect(() => {
    const onScroll = () => setIsPastHero(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- close mobile menu on click outside ---------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileOpen && !e.target.closest("header")) {
        setIsMobileOpen(false);
        setMobileExpandedMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileOpen]);

  const toggleMobileSubmenu = (menu) =>
    setMobileExpandedMenu(mobileExpandedMenu === menu ? null : menu);

  /* ---------- dynamic header classes ---------- */
  const showNav = scrollDir === "up" || hoveredMenu || isMobileOpen; // visible if scrolling up or interacting

  const headerClasses = [
    "fixed inset-x-0 top-0 z-50 transition-transform duration-300 hover:bg-white/95",
    !showNav && "-translate-y-full", // slide away on scroll-down
    (isPastHero || hoveredMenu || isMobileOpen) &&
      "backdrop-blur-md border-b border-gray-200 shadow-sm",
  ]
    .filter(Boolean)
    .join(" ");

  /* ------------------ JSX ------------------ */
  return (
    <header
      className={headerClasses}
      onMouseEnter={() => setIsHeaderHovered(true)}
      onMouseLeave={() => setIsHeaderHovered(false)}
    >
      {" "}
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src={isWhiteHeader ? "/logo.png" : "/logow.png"}
            alt="calm stone"
            width={250}
            height={250}
            className="object-contain transition duration-300"
          />
        </Link>

        {/* ---------- Desktop links ---------- */}
        <div className="hidden lg:flex items-center gap-10">
          {/* Careers link */}
          <Link
            href="/aboutus"
<<<<<<< Updated upstream
            className={`font-medium transition-colors duration-200 py-2 text-lg tracking-wide uppercase ${
              isWhiteHeader
                ? "text-black hover:text-black"
                : "text-white hover:text-black"
            }`}
=======
className={`font-medium transition-colors duration-200 py-2 text-lg tracking-wide uppercase ${
  isWhiteHeader ? "text-black hover:text-black" : "text-white hover:text-white"
}`}

>>>>>>> Stashed changes
          >
            About Us
          </Link>
          {links.map((name) => (
            <div
              key={name}
              className="relative"
              onMouseEnter={() => setHoveredMenu(name)}
            >
              <button
                className={`font-medium transition-colors duration-200 py-2 text-lg tracking-wide uppercase ${
                  isWhiteHeader
                    ? "text-black hover:text-black"
                    : "text-white hover:text-white"
                }`}
              >
                {name}
              </button>

              {/* -------- Mega-menu -------- */}
              {hoveredMenu === name && (
                <div
                  onMouseLeave={() => setHoveredMenu(null)}
                  className="fixed left-0 top-full w-full bg-white/95 backdrop-blur-md text-black
                             shadow-2xl border-t border-gray-200 z-40 h-[400px] overflow-y-auto"
                >
                  <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 h-full flex flex-col">
                    <div className="flex-1">
                      {/* ---- Columns ---- */}
                      {megaMenus[name].columns && (
                        <div className="grid grid-cols-4 gap-8 h-full">
                          {Object.entries(megaMenus[name].columns).map(
                            ([cat, items]) => (
                              <div key={cat}>
                                <h4 className="uppercase text-xs font-semibold text-gray-500 mb-4 tracking-wider">
                                  {cat}
                                </h4>
                                <ul className="space-y-3">
                                  {items.map(({ label, href }) => (
                                    <li key={label}>
                                      <Link
                                        href={href}
                                        className="hover:text-yellow-400 transition-colors duration-200 text-base font-medium block py-1"
                                      >
                                        {label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )
                          )}
                        </div>
                      )}

                      {/* ---- Optional: highlights / posts / list ---- */}
                      {/* (Existing conditional blocks stay intact;
                          they’ll render only if those keys are present
                          in your megaMenus object.) */}
                    </div>

                    {/* ---- Mega-menu footer link ---- */}
                    {/* <div className="pt-6 border-t border-gray-200 flex justify-end mt-auto">
                      <Link
                        href={megaMenus[name].all.href}
                        className="text-sm font-semibold text-white hover:text-white transition-colors duration-200 flex items-center gap-2"
                      >
                        {megaMenus[name].all.label} <ArrowRight size={14} />
                      </Link>
                    </div> */}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Careers link */}
          <Link
            href="/careers"
            className={`font-medium transition-colors duration-200 py-2 text-lg tracking-wide uppercase ${
              isWhiteHeader
                ? "text-black hover:text-black"
                : "text-white hover:text-white"
            }`}
          >
            Careers
          </Link>
        </div>

        {/* ---------- Desktop CTA ---------- */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="text-black bg-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2
                       hover:bg-white/90 hover:text-yellow-400 transition-all duration-200 hover:shadow-lg hover:shadow-white/20"
          >
            Let's connect <ArrowRight size={16} />
          </Link>
        </div>

        {/* ---------- Burger icon ---------- */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden text-white hover:text-gray-700 transition-colors duration-200"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* ---------- Mobile menu ---------- */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-6 py-6">
            {links.map((name) => (
              <div key={name} className="mb-4">
                <button
                  onClick={() => toggleMobileSubmenu(name)}
                  className="w-full flex items-center justify-between text-black font-medium py-3 hover:text-white transition-colors duration-200 text-left"
                >
                  {name}
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform duration-200 ${
                      mobileExpandedMenu === name ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileExpandedMenu === name && (
                  <div className="ml-4 mt-2 pb-4 border-l border-gray-300 pl-4">
                    {/* ---- Columns ---- */}
                    {megaMenus[name].columns && (
                      <div className="space-y-4">
                        {Object.entries(megaMenus[name].columns).map(
                          ([cat, items]) => (
                            <div key={cat}>
                              <h4 className="text-black font-semibold text-sm mb-2 uppercase">
                                {cat}
                              </h4>
                              <ul className="space-y-2">
                                {items.map(({ label, href }) => (
                                  <li key={label}>
                                    <Link
                                      href={href}
                                      className="text-black hover:text-white transition-colors duration-200 text-sm block py-1"
                                      onClick={() => setIsMobileOpen(false)}
                                    >
                                      {label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    )}

                    {/* <div className="mt-4 pt-3 border-t border-gray-300">
                      <Link
                        href={megaMenus[name].all.href}
                        className="text-sm font-semibold text-black hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {megaMenus[name].all.label} <ArrowRight size={12} />
                      </Link>
                    </div> */}
                  </div>
                )}
              </div>
            ))}

            {/* Careers mobile link */}
            <Link
              href="/careers"
              className="block text-black font-medium py-3 hover:text-yellow-400 transition-colors duration-200"
              onClick={() => setIsMobileOpen(false)}
            >
              Careers
            </Link>
            {/* Careers mobile link */}
            <Link
              href="/aboutus"
              className="block text-black font-medium py-3 hover:text-yellow-400 transition-colors duration-200"
              onClick={() => setIsMobileOpen(false)}
            >
              About us
            </Link>

            {/* ---- Mobile CTA ---- */}
            <Link
              href="/contact"
              className="block border border-white text-black bg-transparent px-4 py-3 rounded-lg font-semibold text-center mt-6
                         hover:bg-white hover:text-yellow-400 transition-colors duration-200"
              onClick={() => setIsMobileOpen(false)}
            >
              Let's Build Together
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
