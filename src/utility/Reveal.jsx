/* eslint-disable react/prop-types */

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const RevealX = ({
  children,
  direction = { use: false, value: 0 },
  opacity = { use: true, value: 1 },
  scale = { use: false, value: 1 },
  duration = 1.5,
  middle = false,
}) => {
  const ref = useRef();
  const isinView = useInView(ref || null, { once: true });
  const mainControls = useAnimation();

  const variantsX = {
    hidden: {
      ...(opacity.use && { opacity: 0 }),
      ...(direction.use && { x: direction.value }),
      ...(scale.use && { scale: 0 }),
      transition: {
        duration,
        delay: 0.25,
      },
    },

    middle: middle
      ? {
          ...(opacity.use && { opacity: opacity.value / 2 }),
          ...(scale.use && { scale: scale.value * 1.1 }),
          ...(direction.use && { x: 0 }),
          transition: {
            duration: duration / 2,
            delay: 0.25,
          },
        }
      : {},
    visible: {
      ...(opacity.use && { opacity: opacity.value }),
      ...(direction.use && { x: 0 }),
      ...(scale.use && { scale: scale.value }),
      transition: {
        duration: duration,
        delay: 0.25,
      },
    },
  };

  useEffect(() => {
    if (isinView) {
      if (middle) {
        mainControls.start("middle").then(() => mainControls.start("visible"));
      } else {
        mainControls.start("visible");
      }
    }
  }, [isinView, mainControls, middle]);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <motion.div
        variants={variantsX}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const RevealY = ({
  children,
  direction = { use: false, value: 0 },
  opacity = { use: true, value: 1 },
  scale = { use: false, value: 1 },
  duration = 1.5,
}) => {
  const ref = useRef();
  const isinView = useInView(ref);
  const mainControls = useAnimation();

  const variantsY = {
    hidden: {
      ...(opacity.use && { opacity: 0 }),
      ...(direction.use && { y: direction.value }),
      ...(scale.use && { scale: 0 }),
      transition: {
        duration: duration,
        delay: 0.25,
      },
    },
    middle: {
      ...(opacity.use && { opacity: opacity.value }),
      ...(scale.use && { scale: scale.value * 1.1 }),
      ...(direction.use && { y: 0 }),
      transition: {
        duration: duration,
      },
    },
    visible: {
      ...(opacity.use && { opacity: opacity.value }),
      ...(direction.use && { y: 0 }),
      ...(scale.use && { scale: scale.value }),
      transition: {
        duration: duration,
        delay: 0.25,
      },
    },
  };

  useEffect(() => {
    if (isinView) {
      mainControls.start("middle").then(() => mainControls.start("visible"));
    }
  }, [isinView, mainControls]);

  return (
    <motion.div
      variants={variantsY}
      initial="hidden"
      animate={mainControls}
      transition={{ duration, delay: 0.25 }}
      ref={ref}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
};
