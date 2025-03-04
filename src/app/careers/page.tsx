"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactUs from "../Components/Contact";

const Careers = () => {
  return (
    <div className="container mx-auto py-12 mt-24">
      <div className="flex flex-col md:flex-row px-6 items-start justify-between gap-12 sm:p-32 py-2">
        {/* Right Content (Imagen con efecto decorativo) */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="relative group">
            {/* Efecto decorativo detrás de la imagen */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-orange-400 rounded-lg opacity-50 group-hover:opacity-80 transition-all duration-300 z-0"></div>
            <div className="h-full w-full overflow-hidden rounded-lg">
              <Image
                src="/incentivize2.webp"
                alt="Team working together"
                width={500}
                height={300}
                className="rounded-lg overflow-hidden shadow-xl object-cover transform group-hover:scale-105 transition-all duration-300 z-30"
              />
            </div>
          </div>
        </motion.div>

        {/* Left Content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Join the Revolution in Healthcare Engagement
          </h1>
          <p className="text-gray-700 mb-6">
            Are you passionate about healthcare? Do you believe in the power of
            technology to make a difference? At Incentivize Health, we're
            pioneering a new approach to healthcare engagement, and we want you
            on our team!
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Why Join Incentivize Health?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Innovative Culture:</strong> Work alongside
              industry-leading experts to develop groundbreaking solutions.
            </li>
            <li>
              <strong>Member-Centric Mission:</strong> Personalizing healthcare
              to create a meaningful impact.
            </li>
            <li>
              <strong>Diverse Opportunities:</strong> A variety of roles that
              suit different skills and passions.
            </li>
            <li>
              <strong>Work-Life Balance:</strong> Flexible hours and remote
              working opportunities.
            </li>
            <li>
              <strong>Career Growth:</strong> Continuous learning, mentorship,
              and growth paths.
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Contact Form con animación */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ContactUs />
      </motion.div>
    </div>
  );
};

export default Careers;
