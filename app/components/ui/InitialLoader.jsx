"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InitialLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show the loader for at least 1s (adjust as needed)
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen overflow-hidden z-[999999] bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="frame">
              <div className="center">
                <div className="dot-1"></div>
                <div className="dot-2"></div>
                <div className="dot-3"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
