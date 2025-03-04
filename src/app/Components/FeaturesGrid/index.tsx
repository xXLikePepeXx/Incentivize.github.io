"use client";

import { motion } from "framer-motion";
import { FaCogs, FaSmile, FaChartBar, FaCode, FaBox } from "react-icons/fa";

const cardData = [
  {
    icon: <FaCogs size={40} className="text-blue-500 mx-auto" />,
    title: "Reward processing at scale",
    description: "Manage, process, and standardize in-bound events at scale.",
  },
  {
    icon: <FaBox size={40} className="text-blue-500 mx-auto" />,
    title: "White label and API-first solutions",
    description: "Own the experience with white label and API-first solutions.",
  },
  {
    icon: <FaCode size={40} className="text-blue-500 mx-auto" />,
    title: "Low-code deployments",
    description:
      "Configure and instantly deploy rules for benefits and engagement.",
  },
  {
    icon: <FaSmile size={40} className="text-blue-500 mx-auto" />,
    title: "Meaningful rewards",
    description:
      "Surprise and delight with wellness rewards that members want.",
  },
  {
    icon: <FaChartBar size={40} className="text-blue-500 mx-auto" />,
    title: "Observable and measurable",
    description:
      "Smart growth with reporting for business cases, outcomes, and operations.",
  },
];

const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid gap-8">
        {/* Título con animación */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-4xl font-bold text-center"
        >
          Focus on business and health outcomes; <br /> we'll do the rest
        </motion.h1>

        {/* Primera fila con 3 cartas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardData.slice(0, 3).map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white shadow-lg flex flex-col justify-between rounded-xl p-6 text-center border min-h-64 border-gray-200 max-w-sm"
            >
              {card.icon}
              <h3 className="text-xl font-bold mt-4">{card.title}</h3>
              <p className="text-gray-600 mt-2">{card.description}</p>
              <a href="#" className="text-orange-500 font-semibold mt-4 block">
                Learn More
              </a>
            </motion.div>
          ))}
        </div>

        {/* Segunda fila con 2 cartas centradas */}
        <div className="grid-cols-1 md:grid-cols-2 gap-8 flex flex-col sm:flex-row justify-center items-center">
          {cardData.slice(3, 5).map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: (index + 3) * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white shadow-lg flex flex-col justify-between rounded-xl p-6 text-center border border-gray-200 w-full min-h-64 max-w-sm"
            >
              {card.icon}
              <h3 className="text-xl font-bold mt-4">{card.title}</h3>
              <p className="text-gray-600 mt-2">{card.description}</p>
              <a href="#" className="text-orange-500 font-semibold mt-4 block">
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
