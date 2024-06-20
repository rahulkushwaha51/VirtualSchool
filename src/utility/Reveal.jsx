/* eslint-disable react/prop-types */
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const RevealX = ({ children, direction }) => {
  const ref = useRef();
  const isinView = useInView(ref);
  const mainControls = useAnimation();

  const varientsX = {
    hidden: {
      opacity: 0,
      x: direction,
      transition: {
        duration: 1,
        delay: 0.25,
      },
    },
    visible: { opacity: 1, x: 0, delay: 1.25 },
  };

  useEffect(() => {
    if (isinView) {
      mainControls.start("visible");
    }
  }, [isinView, mainControls]);
  return (
    <div ref={ref} style={{ position: "relative"}}>
      <motion.div
        variants={varientsX}
        initial="hidden"
        animate={mainControls}
        delay={1.25}
      >
        {children}
      </motion.div>

      {/* <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 1, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom:4,
          left: 0,
          right: 0,
          background: "green",
          zIndex: 20,
        }}
      /> */}
    </div>
  );
};

export const RevealY = ({ children, direction }) => {
  const ref = useRef();
  const isinView = useInView(ref);
  const mainControls = useAnimation();

  const varientsY = {
    hidden: {
      opacity: 0,
      y: direction,
      transition: {
        duration: 1.25,
        delay: 0.25,
      },
    },
    visible: { opacity: 1, y: 0 ,duration: 1.25 },
  };

  useEffect(() => {
    if (isinView) {
      mainControls.start("visible");
      // slideControls.start("visible");
    }
  });
  return (
    <div ref={ref} style={{ position: "relative" }}>
      <motion.div
        variants={varientsY}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: .25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
