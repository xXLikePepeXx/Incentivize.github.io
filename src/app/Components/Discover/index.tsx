"use client";

import { motion } from "framer-motion";
import React from "react";

const Discover = () => {
  return (
    <section className="bg-gradient-to-r from-[#E26F5F] to-[#D65A4A] py-20 px-6 text-center flex items-center justify-center">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Título con animación */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }} // Se activa en cada scroll
        >
          When you choose{" "}
          <span className="text-[#FFD700]">Incentivize Health</span>, you're not
          just accessing a platform...
        </motion.h2>

        {/* Texto con animación */}
        <motion.p
          className="text-lg md:text-xl text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }} // Se reactiva con el scroll
        >
          You're teaming up with a group of passionate experts who are committed
          to your success. Together, we'll transform the way you experience
          healthcare, making it more personal, engaging, and effective. Let's
          build something extraordinary!
        </motion.p>

        {/* Botón con animación */}
        <motion.a
          href="/"
          className="inline-block bg-white text-[#E26F5F] px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: false, amount: 0.5 }} // Reactiva la animación al hacer scroll
        >
          Discover Our Solutions
        </motion.a>
      </div>
    </section>
  );
};

export default Discover;
