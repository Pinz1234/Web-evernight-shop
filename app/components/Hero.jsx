"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen cyber-bg overflow-hidden">
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover blur-md opacity-60"
      />

      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <h2 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonPink opacity-30">
          CYBER NEXT GEN
        </h2>
      </motion.div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          EVERNIGHT SHOP
        </motion.h1>
      </div>
    </section>
  );
}