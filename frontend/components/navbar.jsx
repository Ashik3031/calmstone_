"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const megaMenus = {
  Company: {
    columns: {
      Company: [
        "About Us",
        "News & Insights",
        "Our Team",
        "Our History",
        "Our Commitments",
        "Governance",
      ],
    },
    all: "Learn more about us",
  },

  Solutions: {
    columns: {
      Solutions: ["Integrated Approach", "The McDermott Difference"],
    },
    all: "Explore our solutions",
  },

  Sustainability: {
    columns: {
      Sustainability: [
        "Priorities & Reporting",
        "Sustainability Performance",
        "People",
      ],
    },
    all: "Our sustainability journey",
  },
};

const Header = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = Object.keys(megaMenus);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || hoveredMenu || isMobileOpen
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        {/* <a href="#" className="text-black text-2xl font-bold tracking-tight">
          calmstone
        </a> */}
        <Image
          src="/logo.png"
          alt="calmstone"
          width={250}
          height={250}
          className="object-contain"
        />

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map((name) => (
            <div key={name} className="relative" onMouseEnter={() => setHoveredMenu(name)}>
              <button className="text-gray-900 font-medium hover:text-black transition-colors duration-200 py-2 text-base tracking-wide">
                {name}
              </button>

              {hoveredMenu === name && (
                <div
                  onMouseLeave={() => setHoveredMenu(null)}
                  className="fixed left-0 top-full w-full bg-white/95 backdrop-blur-md text-gray-900
                             shadow-2xl border-t border-gray-200 z-40 h-[400px] overflow-y-auto"
                >
                  <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 h-full flex flex-col">
                    <div className="flex-1">
                      {/* Columns Menu */}
                      {megaMenus[name].columns && (
                        <div className="grid grid-cols-4 gap-8 h-full">
                          {Object.entries(megaMenus[name].columns).map(([cat, items]) => (
                            <div key={cat}>
                              <h4 className="uppercase text-xs font-semibold text-gray-500 mb-4 tracking-wider">{cat}</h4>
                              <ul className="space-y-3">
                                {items.map((item) => (
                                  <li key={item}>
                                    <a href="#" className="hover:text-black transition-colors duration-200 text-sm font-medium block py-1">
                                      {item}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Highlights */}
                      {megaMenus[name].highlights && (
                        <div className="h-full flex flex-col">
                          <div className="grid grid-cols-2 gap-8 mb-6">
                            {megaMenus[name].highlights.map(({ title, desc }) => (
                              <div key={title} className="bg-gray-100 p-6 rounded-lg">
                                <h5 className="text-gray-900 font-semibold text-sm mb-2 uppercase">{title}</h5>
                                <p className="text-gray-600 text-sm">{desc}</p>
                              </div>
                            ))}
                          </div>
                          {megaMenus[name].list && (
                            <div className="flex flex-wrap gap-3 flex-1">
                              {megaMenus[name].list.map((item) => (
                                <span key={item} className="bg-gray-50 px-4 py-2 rounded-full text-sm text-gray-900 hover:bg-gray-100 cursor-pointer h-fit">
                                  {item}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Posts */}
                      {megaMenus[name].posts && (
                        <div className="grid grid-cols-2 gap-8 h-full">
                          <div>
                            <h4 className="uppercase text-xs font-semibold text-gray-500 mb-4 tracking-wider">Latest Posts</h4>
                            {megaMenus[name].posts.map(({ img, title }) => (
                              <div key={title} className="mb-4 hover:opacity-80 transition-opacity duration-200 cursor-pointer">
                                <div className="bg-gray-100 w-full h-16 rounded-lg mb-2" />
                                <h5 className="text-sm font-medium text-gray-900">{title}</h5>
                              </div>
                            ))}
                          </div>
                          <div>
                            <h4 className="uppercase text-xs font-semibold text-gray-500 mb-4 tracking-wider">Newsletters</h4>
                            <div className="space-y-3">
                              {megaMenus[name].newsletters.map((n) => (
                                <a key={n} href="#" className="block text-sm font-medium hover:text-black transition-colors duration-200">
                                  {n}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer link */}
                    <div className="pt-6 border-t border-gray-200 flex justify-end mt-auto">
                      <a href="#" className="text-sm font-semibold text-gray-900 hover:text-black transition-colors duration-200 flex items-center gap-2">
                        {megaMenus[name].all} <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="/contact"
            className="border border-black text-black bg-transparent px-6 py-3 rounded-lg font-semibold flex items-center gap-2
                       hover:bg-black hover:text-white transition-all duration-200 hover:shadow-lg hover:shadow-black/20"
          >
            Let's connect <ArrowRight size={16} />
          </a>
        </div>

        {/* Burger Menu */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden text-black hover:text-gray-700 transition-colors duration-200"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-6 py-6">
            {links.map((name) => (
              <div key={name} className="mb-4">
                <button
                  onClick={() => toggleMobileSubmenu(name)}
                  className="w-full flex items-center justify-between text-gray-900 font-medium py-3 hover:text-black transition-colors duration-200 text-left"
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
                    {megaMenus[name].columns && (
                      <div className="space-y-4">
                        {Object.entries(megaMenus[name].columns).map(([cat, items]) => (
                          <div key={cat}>
                            <h4 className="text-gray-500 font-semibold text-sm mb-2 uppercase">{cat}</h4>
                            <ul className="space-y-2">
                              {items.map((item) => (
                                <li key={item}>
                                  <a
                                    href="#"
                                    className="text-gray-700 hover:text-black transition-colors duration-200 text-sm block py-1"
                                    onClick={() => setIsMobileOpen(false)}
                                  >
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {megaMenus[name].highlights && (
                      <div className="space-y-4">
                        {megaMenus[name].highlights.map(({ title, desc }) => (
                          <div key={title} className="bg-gray-100 p-3 rounded-lg">
                            <h5 className="text-gray-900 font-semibold text-sm mb-1">{title}</h5>
                            <p className="text-gray-600 text-sm">{desc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {megaMenus[name].posts && (
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-gray-500 font-semibold text-sm mb-3 uppercase">Latest Posts</h4>
                          {megaMenus[name].posts.map(({ title }) => (
                            <div key={title} className="mb-3">
                              <div className="bg-gray-100 w-full h-12 rounded-lg mb-2" />
                              <h5 className="text-sm font-medium text-gray-900">{title}</h5>
                            </div>
                          ))}
                        </div>
                        <div>
                          <h4 className="text-gray-500 font-semibold text-sm mb-3 uppercase">Newsletters</h4>
                          {megaMenus[name].newsletters.map((n) => (
                            <a
                              key={n}
                              href="#"
                              className="block text-sm text-gray-700 hover:text-black transition-colors duration-200 py-1"
                              onClick={() => setIsMobileOpen(false)}
                            >
                              {n}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {megaMenus[name].list && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {megaMenus[name].list.map((item) => (
                          <span key={item} className="bg-gray-50 px-3 py-1 rounded-full text-xs text-gray-900">
                            {item}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-4 pt-3 border-t border-gray-300">
                      <a
                        href="#"
                        className="text-sm font-semibold text-gray-900 hover:text-black transition-colors duration-200 flex items-center gap-2"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {megaMenus[name].all} <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <a
              href="/contact"
              className="block border border-black text-black bg-transparent px-4 py-3 rounded-lg font-semibold text-center mt-6
                         hover:bg-black hover:text-white transition-colors duration-200"
              onClick={() => setIsMobileOpen(false)}
            >
              Let's Build Together
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
