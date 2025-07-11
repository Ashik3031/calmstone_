import React from "react";
import { Linkedin } from "lucide-react";

const SmallFooter = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Branding */}
        <div>
          <p className="text-sm text-white">
            © {new Date().getFullYear()} Calmstone. All rights reserved.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="space-y-2">
          <h4 className="text-base font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/about" className="text-white hover:text-yellow-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="text-white hover:text-yellow-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/careers" className="text-white hover:text-yellow-500 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-yellow-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Social & Policies */}
        <div className="flex flex-col items-start md:items-end space-y-4">
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/company/107668067/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0A66C2] transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-white hover:text-yellow-500 transition">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:text-yellow-500 transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SmallFooter;