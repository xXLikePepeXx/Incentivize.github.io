"use client";

import { motion } from "framer-motion";

const Banner: React.FC = () => {
  return (
    <section className="mt-16 w-full relative text-white text-center h-screen py-20 overflow-hidden flex flex-col justify-center items-center">
      {/* Fondo de olas */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          src="/waves.png"
          alt="Decorative Waves"
          className="w-full h-full object-bottom object-cover -z-10"
        />
      </div>

      <div className="mx-auto px-4 z-10 w-full h-full flex flex-col justify-start items-center space-y-8 text-center">
        {/* Título con animación al hacer scroll */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-4xl md:text-5xl lg:text-[5.5rem] leading-tight md:leading-[5.5rem]"
        >
          Better outcomes and rewards <br /> for everyone
        </motion.h1>

        {/* Subtítulo con animación al hacer scroll */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-xl md:text-2xl lg:text-4xl mt-4"
        >
          Full-stack rewards solutions for health plans and partners
        </motion.p>
      </div>
    </section>
  );
};

export default Banner;
