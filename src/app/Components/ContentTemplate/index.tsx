"use client";

import { motion } from "framer-motion";
import ContactUs from "../Contact";
import { ReactNode } from "react";

interface ContentProps {
  title: ReactNode;
  subtitle?: ReactNode;
  body: ReactNode;
}

const ContentTemplate: React.FC<ContentProps> = ({ title, subtitle, body }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white p-0 min-h-screen"
    >
      {/* Divider Image */}
      <div className="w-full">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src="/MarketDivider.png"
          alt="divider"
          className="w-full h-[21vh] object-bottom object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center sm:justify-center">
        <div className="max-w-6xl sm:mx-auto p-8 pb-16">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-5xl sm:text-6xl text-center font-bold mb-8"
          >
            {title}
          </motion.div>

          {/* Subtitle */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-2xl sm:text-3xl font-light italic pb-7"
            >
              {subtitle}
            </motion.div>
          )}

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="body-container"
          >
            <div className="text-gray-700 mt-4">{body}</div>
          </motion.div>
        </div>
      </div>

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

export default ContentTemplate;
