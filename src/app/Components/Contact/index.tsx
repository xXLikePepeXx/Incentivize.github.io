"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="bg-white text-gray-900 py-6 sm:py-16 px-6 flex justify-center items-center min-h-screen"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-4">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center lg:text-left flex flex-col justify-between"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Contact Us
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 text-justify">
              At Incentivize Health, we transform healthcare incentives with
              innovation and personalization. Our expert team helps you engage
              members, optimize benefits, and control costs. Contact us to
              revolutionize your healthcare strategy.
            </p>
          </div>
          <div className="space-y-4 w-full flex flex-col items-center lg:items-start">
            {[
              {
                icon: <FaEnvelope className="text-orange-500 text-xl" />,
                text: "Mail me at",
                link: "mailto:framesmillion@gmail.com",
                label: "framesmillion@gmail.com",
              },
              {
                icon: <FaWhatsapp className="text-green-500 text-xl" />,
                text: "Chat on WhatsApp",
                link: "https://wa.me/1234567890",
                label: "+1 234 567 890",
              },
              {
                icon: <FaMapMarkerAlt className="text-red-500 text-xl" />,
                text: "Find me at",
                link: "https://maps.google.com/?q=Your+Location",
                label: "New York, USA",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: false, amount: 0.2 }}
                className="bg-white p-4 rounded-lg flex flex-col sm:flex-row items-center gap-3 shadow-lg border border-gray-200 w-full max-w-md"
              >
                {item.icon}
                <div className="text-center sm:text-left">
                  <span className="block text-gray-600">{item.text}</span>
                  <a
                    href={item.link}
                    className="text-orange-500 font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="border border-orange-500 px-6 py-6 bg-orange-500 text-white font-semibold rounded-lg shadow-lg flex flex-col w-full max-w-lg mx-auto"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Contact Us
          </h3>
          <form className="space-y-6">
            {["Full Name*", "Email Address*", "Subject"].map((label, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <label className="block text-sm text-white mb-2">{label}</label>
                <input
                  type={label.includes("Email") ? "email" : "text"}
                  placeholder={`Enter your ${label
                    .toLowerCase()
                    .replace("*", "")}`}
                  className="w-full p-3 bg-white text-gray-900 rounded-lg border focus:ring-2 focus:ring-orange-400"
                  required={label.includes("*")}
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <label className="block text-sm text-white mb-2">
                Tell us more about your project*
              </label>
              <textarea
                placeholder="Write your message..."
                rows={4}
                className="w-full p-3 bg-white text-gray-900 rounded-lg border focus:ring-2 focus:ring-orange-400"
                required
              ></textarea>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full py-3 bg-white text-orange-500 font-semibold rounded-lg shadow-lg hover:bg-orange-600 hover:text-white transition duration-300"
            >
              Send message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
