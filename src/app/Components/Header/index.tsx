"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface MenuItem {
  text: string;
  href: string;
  subItems?: MenuItem[];
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMarketsOpen, setIsMarketsOpen] = useState(false); // Estado para el submenú "Markets"
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuItems: MenuItem[] = [
    { text: "Solutions", href: "/" },
    {
      text: "Markets",
      href: "",
      subItems: [
        { text: "Commercial", href: "/commercial" },
        { text: "Medicaid", href: "/medicaid" },
        { text: "Medicare", href: "/medicare" },
        { text: "Providers", href: "/providers" },
        { text: "Partners", href: "/partners" },
      ],
    },
    { text: "Company", href: "/company" },
    { text: "Careers", href: "/careers" },
  ];

  const handleMouseEnter = (itemText: string) => {
    setOpenDropdown(itemText);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-screen z-30 bg-white shadow-md px-8"
    >
      <div className="flex justify-between items-center py-4 w-full">
        <Link href="/">
          <img src="/logo.png" alt="Incentivize Health" className="h-14" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => item.subItems && handleMouseEnter(item.text)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={item.href} className="text-gray-700 hover:underline">
                {item.text}
              </Link>
              <AnimatePresence>
                {item.subItems && openDropdown === item.text && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 bg-white shadow-md p-4 flex flex-col space-y-2 z-50"
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="text-gray-700 hover:underline whitespace-nowrap"
                      >
                        {subItem.text}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link
            href="/contactus"
            className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-orange-600 transition"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`absolute w-6 h-0.5 bg-black duration-150 transition-transform ${
              isOpen ? "rotate-[135deg] translate-y-0" : "-translate-y-2"
            }`}
          ></div>
          <div
            className={`absolute w-6 h-0.5 bg-black duration-150 transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`absolute w-6 h-0.5 bg-black duration-150 transition-transform ${
              isOpen ? "-rotate-[135deg] translate-y-0" : "translate-y-2"
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col items-center space-y-4 md:hidden z-50"
          >
            {menuItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center w-full">
                {item.subItems ? (
                  <>
                    {/* Botón desplegable solo en móvil */}
                    <button
                      onClick={() => setIsMarketsOpen(!isMarketsOpen)}
                      className="w-full text-gray-700 text-center flex justify-center gap-2 items-center"
                    >
                      {item.text}
                    </button>
                    <AnimatePresence>
                      {isMarketsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col items-center mt-2 space-y-2 w-full"
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="text-gray-700 hover:underline w-full text-center"
                            >
                              {subItem.text}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:underline"
                  >
                    {item.text}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
