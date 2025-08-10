import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-600 dark:text-slate-400 mb-4 md:mb-0">
            © 2025 Anjal Thapa
          </div>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
