"use client";
import { motion } from "framer-motion";

export default function SectionWrapper({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="py-20"
    >
      {children}
    </motion.section>
  );
}