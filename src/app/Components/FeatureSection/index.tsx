"use client";

import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  items: string[];
  buttonText: string;
  imageUrl: string;
  reverse?: boolean;
}

const features: Feature[] = [
  {
    title: "Standardize all in-bound data for rewards and engagement",
    description:
      "Our libraries make your incentive program data usable on day one.",
    items: [
      "Multiple data sources at scale",
      "24/7 monitoring and automated alerts",
      "Standardized for benefits and engagement rules",
      "Controls for all your security needs",
      "Support for Web services, APIs, or batch integrations",
    ],
    buttonText: "Request a Demo",
    imageUrl: "/InBoundProcessing.png",
  },
  {
    title: "Own your brand while offering best-in-class rewards and engagement",
    description:
      "API-First and white-label solutions to create unique experiences for your members.",
    items: [
      "Build unique member experiences with API-first and white label solutions",
      "Configurable rewards and fulfillment to delight your members",
      "Operations reporting and monitoring to stay ahead of issues",
      "First call resolutions with 360-degree member views and admin control",
    ],
    buttonText: "Request a Demo",
    imageUrl: "/WhiteLabel.png",
    reverse: true,
  },
  {
    title: "Build and run rules to power incentive benefits and engagement",
    description:
      "Our no-code rules engine reduces complexity and speed-to-market for incentive benefits​.",
    items: [
      "Make member data and events the foundation for engagement and rewards​",
      "Write and run business rules to reward, engage, and delight your members",
      "Built-in operational excellence with monitoring and real-time system health alerts",
    ],
    buttonText: "Request a Demo",
    imageUrl: "/ConfigureRules.png",
  },
  {
    title: "Stay compliant, well-managed, and continuously improve​",
    description:
      "Our automated alerts and on-demand reporting keep you ahead of issues, compliant, and in-the-know on your value-added benefit program performance​.",
    items: [
      "Outcomes reporting + efficacy analysis for engagement, retention, and gap closure",
      "Trends and patterns to help you improve and optimize​",
      "Group level and book-of-business reporting​",
      "Auditable sources of record for enrollment, earned benefits, redemption, and fulfillment​",
    ],
    buttonText: "Request a Demo",
    imageUrl: "/Screen.png",
    reverse: true,
  },
  {
    title: "Configurable rewards to delight and motivate your members​",
    description:
      "Keep your incentives relevant with configurable rewards for employers, groups, and plan options.​​",
    items: [
      "Gift Card Catalog​",
      "Premium Reductions and Deductible Credits​",
      "CDHP Deposits (FSA, HSA, HRA)",
      "Retail partnerships​",
      "Memberships and subscriptions",
      "Health and wellness products​​",
      "Custom rewards and disbursements​",
    ],
    buttonText: "Request a Demo",
    imageUrl: "/ConfigRewards.png",
  },
];

const FeatureSection: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className={`py-16 px-6 flex overflow-hidden flex-col md:flex-row ${
        feature.reverse ? "md:flex-row-reverse" : ""
      } items-center max-w-6xl mx-auto gap-12`}
    >
      {/* Columna de Texto */}
      <motion.div
        initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="md:w-1/2 text-left"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          {feature.title}
        </h1>
        <p className="text-gray-600 mt-4">{feature.description}</p>
        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
          {feature.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition">
          {feature.buttonText}
        </button>
      </motion.div>

      {/* Columna de Imagen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="md:w-1/2 flex justify-center items-center"
      >
        <img
          src={feature.imageUrl}
          alt="Feature Visual"
          className="max-w-full h-auto mx-auto"
        />
      </motion.div>
    </motion.section>
  );
};

const FeaturesContainer: React.FC = () => {
  return (
    <div>
      {features.map((feature, index) => (
        <FeatureSection key={index} feature={feature} />
      ))}
    </div>
  );
};

export default FeaturesContainer;
