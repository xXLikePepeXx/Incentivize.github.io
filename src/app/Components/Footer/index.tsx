import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2FA690] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: Links and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-[#96D4C5] pb-8">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/"
              className="text-sm font-medium hover:text-[#E26F5F] transition"
            >
              Home
            </a>
            <a
              href="/privacy"
              className="text-sm font-medium hover:text-[#E26F5F] transition"
            >
              Privacy Policy
            </a>
            <a
              href="/privacy"
              className="text-sm font-medium hover:text-[#E26F5F] transition"
            >
              Terms of Service
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a href="#" className="text-xl hover:text-[#E26F5F] transition">
              <FaFacebook />
            </a>
            <a href="#" className="text-xl hover:text-[#E26F5F] transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl hover:text-[#E26F5F] transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-xl hover:text-[#E26F5F] transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center mt-8">
          <p className="font-black text-sm">
            © 2024{" "}
            <span className="text-white font-thin">Incentivize Health</span>,
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
