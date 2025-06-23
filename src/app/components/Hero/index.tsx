"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Trigger when 30% of section is visible
  });

  return (
    <section
      ref={ref}
      className="bg-blue-50 min-h-screen flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800">
          Your Health, Our Priority
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore certified healthcare essentials
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
          Shop Now
        </button>
      </motion.div>
    </section>
  );
}
