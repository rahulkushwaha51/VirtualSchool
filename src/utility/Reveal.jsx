import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Reveal = ({ children,direction }) => {
  const ref = useRef(null);

  const isinView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    console.log(isinView);
    if (isinView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isinView, mainControls, slideControls]);
  return (
    <div ref={ref} style={{ position: "relative", width: "100%" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: direction },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.25 }}
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

export default Reveal;
