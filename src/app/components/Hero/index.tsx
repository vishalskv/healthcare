"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-blue-50 h-[80vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800">
          Your Health, Our Priority
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore certified healthcare essentials
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
          Shop Now
        </button>
      </motion.div>
    </section>
  );
}
