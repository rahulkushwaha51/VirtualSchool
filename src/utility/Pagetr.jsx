import React from "react";
import { motion } from "framer-motion";
import { easeIn } from "framer-motion/dom";
const Pagetr = ({ children }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: 0 }}
      transition={{ duration: 1, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
};

export default Pagetr;
