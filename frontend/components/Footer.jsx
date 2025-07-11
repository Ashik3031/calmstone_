import React from "react";
import { Linkedin } from "lucide-react";

const SmallFooter = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left: Branding */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-yellow-400">Calmstone</h3>
            <p className="text-gray-400 text-base leading-relaxed">
              Building tomorrow's solutions with today's innovation. From engineering excellence to reliable partnerships — Calmstone leads the future.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="md:flex md:flex-col md:items-center">
            <h4 className="text-base font-semibold text-yellow-400 mb-6 uppercase tracking-wider border-b border-gray-700 pb-2">
              Quick Links
            </h4>
            <nav className="grid gap-3 text-sm">
              <a href="/about" className="text-gray-300 hover:text-yellow-400 transition">
                About Us
              </a>
              <a href="/services" className="text-gray-300 hover:text-yellow-400 transition">
                Services
              </a>
              <a href="/careers" className="text-gray-300 hover:text-yellow-400 transition">
                Careers
              </a>
              <a href="/contact" className="text-gray-300 hover:text-yellow-400 transition">
                Contact
              </a>
            </nav>
          </div>

          {/* Right: Social */}
          <div className="md:flex md:flex-col md:items-end">
            <h4 className="text-base font-semibold text-yellow-400 mb-6 uppercase tracking-wider border-b border-gray-700 pb-2">
              Connect
            </h4>
            <a
              href="https://www.linkedin.com/company/107668067/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-[#0A66C2] transition text-sm"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Calmstone. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-yellow-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-yellow-400 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SmallFooter;
