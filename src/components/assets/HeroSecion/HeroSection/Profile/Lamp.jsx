import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../../../ui/LampEffect"; // Adjust the import path based on your project structure
import Intro from "./Intro";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        
      <Intro/>
      </motion.h1>
    </LampContainer>
  );
}



