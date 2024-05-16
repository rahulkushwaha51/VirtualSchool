import React, { useEffect } from "react";
import "./Home.css";
import Reveal from "../../utility/Reveal";
import Pagetr from "../../utility/Pagetr";
// import img from "../assets/Rahul.jpg";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Hero from "./Hero";
const Home = () => {
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
        textAlign: "center",
        padding: "6rem 2rem",
        position: "relative",
      }}
    >
      <div className="bg-change" style={{}}>
        <Canvas className="full">
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>

      <Hero/>
    </motion.section>

    // <>

    // </>
  );
};

export default Home;
