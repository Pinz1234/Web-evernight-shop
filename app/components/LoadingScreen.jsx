"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => setDone(true), 2500);
  }, []);

  if (done) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <h1 className="text-2xl tracking-widest text-neonPurple">
        EVERNIGHT SHOP
      </h1>
    </motion.div>
  );
}
