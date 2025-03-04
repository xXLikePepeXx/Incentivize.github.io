"use client";

import { motion } from "framer-motion";
import Hero from "../Components/Hero";
import Discover from "../Components/Discover";
import ContactUs from "../Components/Contact";

const Company = () => {
  return (
    <motion.div
      className="mt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>

      {/* Discover Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <Discover />
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
      >
        <ContactUs />
      </motion.div>
    </motion.div>
  );
};

export default Company;
