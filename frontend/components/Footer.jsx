import React from "react";

const SmallFooter = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Calmstone. All rights reserved.</p>
        <div className="mt-2 sm:mt-0 flex space-x-4">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SmallFooter;
