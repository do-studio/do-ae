"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const page = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="w-full h-screen overflow-hidden z-[999999] bg-black"
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
    </AnimatePresence>
  );
};

export default page;
