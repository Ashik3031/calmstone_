import React from "react";
import { Linkedin } from "lucide-react";

const SmallFooter = () => {
  return (
    <footer className="bg-black text-white py-20 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Branding */}
        <div>
          <h3 className="text-xl font-bold mb-2">Calmstone</h3>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Calmstone. All rights reserved.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="space-y-2">
          <h4 className="text-base font-semibold text-yellow-400 mb-4 uppercase tracking-wide">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-yellow-400 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Social & Policies */}
        <div className="flex flex-col items-start md:items-end space-y-6">
          <div>
            <h4 className="text-base font-semibold text-yellow-400 mb-4 uppercase tracking-wide">Connect With Us</h4>
            <a
              href="https://www.linkedin.com/company/107668067/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-[#0A66C2] transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>

          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-yellow-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SmallFooter;
