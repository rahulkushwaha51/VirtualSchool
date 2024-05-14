import React from "react";
import { motion } from "framer-motion";
const Pagetr = ({ children }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: 0 }}
      transition={{ duration: 1 ,delay:.25}}
    >
      {children}
    </motion.div>
  );
};

export default Pagetr;
