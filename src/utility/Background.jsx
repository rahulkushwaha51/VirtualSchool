import React, { useEffect } from "react";

import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const Background = ({children}) => {

    const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
    const color = useMotionValue(COLORS_TOP[0]);
  
    // useEffect(() => {
    //   animate(color, COLORS_TOP, {
    //     ease: "easeInOut",
    //     duration: 10,
    //     repeat: Infinity,
    //     repeatType: "mirror",
    //   });
    // }, []);
  
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;


  return (
    <motion.section
      style={{
        backgroundImage,
        backgroundColor: "#020617",
        color: "#FFFFFF",
        
      }}
    >
      <div className="bg-change" style={{}}>
        <Canvas className="full">
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      {children}
    </motion.section>
  );
};

export default Background;
