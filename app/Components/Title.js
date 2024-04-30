"use client";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.div
      className="flex justify-center m-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-5xl font-semibold text-primary"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Todo List
      </motion.h1>
    </motion.div>
  );
};

export default Title;
