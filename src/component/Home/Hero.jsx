import React from "react";

import "./Hero.css";

import Shufflegrid from "./Sufflegrid";
import { RevealX, RevealY } from "../../utility/Reveal";


import { motion } from "framer-motion";
const Hero = () => {
  const cardsData = [
    {
      iconClass: "fa-solid fa-globe",
      title: "Future of Education",
      description:
        "A new world order post 2020, dictates a whole new outlook at its education system too.",
      direction: "-100%",
    },
    {
      iconClass: "fa-solid fa-leaf",
      title: "Healthy Balance between Fun & Learning",
      direction: "-100%",
      description:
        "All work and no play make children dull and dreary. We provide just the right balance between scholastic and co-scholastic areas.",
    },
    {
      iconClass: "fa-solid fa-desktop",
      title: "Flexible Learning",
      direction: "100%",
      description:
        "Our online classes are conducted in the morning and evening batches. You can choose the batch that suits you best.",
    },
    {
      iconClass: "fa-solid fa-address-book",
      title: "Curated Curriculum",
      direction: "100%",
      description: "Our curriculum is tailor-made to forge tomorrow’s leaders.",
    },
  ];

  const cardsData1 = [
    {
      iconClass: "fa-solid fa-globe",
      title: "Integrity",
      description: "Integrity is the soul of all virtue.",
    },
    {
      iconClass: "fa-solid fa-globe",
      title: "Compassion",
      description: "Compassion is the soul of all humanity.",
    },
    {
      iconClass: "fa-solid fa-globe",
      title: "Excellence",
      description: "Excellence at the heart of all human endeavors.",
    },
  ];
  const cardsData2 = [
    {
      img:"src/assets/choose-1.webp",
      title: "Intellectual Development",
      description: "A child blossoms when the mind is free and imagination is left unfettered. We believe in according the right balance of liberty and supervision so that every child experiences holistic development."
    },
    {
      img: "src/assets/choose-2.jpeg",
      title: "Holistic Development",
      description: "We believe that a child’s growth is stimulated in equal measure through studies and games and hence we offer equal opportunities to excel at both.",
    },
    {
      img: "src/assets/choose-3.jpeg",
      title: "Optimum utilization of time",
      description: "Children these days, lead ultra-fast paced, busy lives and every moment is crucial. We ensure engagement that takes this into account and provides the best utilization of their most precious resource: time.",
    },
    {
      img: "src/assets/choose-4.jpeg",
      title: "Custom-paced learning",
      description: "Learning here isn’t by rote, so days are not spent cramming subjects. Instead, every child studies subjects that they wish to and at a pace that best suits them.",
    },
  ];

  const buttonVarients = {
    hover: {
      x: [10, 0],
      transition: 0.4,
    },
  };

  return (
    <>
      <div className="home">
        <RevealX direction={"-100%"}>
          <div className="home-intro">
            <h2 className="gradient-text">
              Welcome To Virtual School India’s Best Online School{" "}
            </h2>
            <p>
              A brand-new world order coerces us to think differently and
              re-think our ways of working, living and educating our future
              generations. Welcome to Virtual School, the Virtual school!
            </p>
            <p>
              Virtual School, in Sanskrit, denotes the harbinger of ambition and
              desire. For your child, we present the right balance of a great
              learning environment combined with the right values,
              quintessential life skills and a safe, secure and exciting place
              to blossom.
            </p>
            <p>
              We are a 100% online school offering flexible batch timings,
              choice of subjects, engaging curriculum, competitive fee structure
              and personalised support to our students, which makes us the first
              choice as top online schools in India. At Virtual School, we are
              committed to provide our students everything they would get at a
              traditional school and much beyond….
            </p>
          </div>
        </RevealX>
        <RevealX direction={"100%"}>
          <Shufflegrid />
        </RevealX>
      </div>

      <div className="benefit">
        <RevealX direction={"-100%"}>
          <h2 className="gradient-text">Benefits of Virtual School</h2>
        </RevealX>

        <div className="card-grid">
          {cardsData.map(
            ({ iconClass, title, description, direction }, index) => (
              <RevealX direction={direction}>
                <motion.div
                  className="card"
                  key={index}
                  whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                >
                  <div className="card-icon">
                    <i className={iconClass}></i>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </motion.div>
              </RevealX>
            )
          )}
        </div>
      </div>
      <div className="values">
        <RevealY direction={"-100%"}>
          <h2 className="gradient-text">Our Core Values</h2>
        </RevealY>

        <div className="card-grid">
          {cardsData1.map(
            ({ iconClass, title, description, direction }, index) => (
              <RevealY direction={direction}>
                <motion.div
                  className={`card ${index === 1 ? "special-card" : ""}`}
                  key={index}
                  variants={buttonVarients}
                  whileHover="hover"
                >
                  <div className="card-icon">
                    <i className={iconClass}></i>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </motion.div>
              </RevealY>
            )
          )}
        </div>
      </div>
      <div className="choose-us">
        <RevealY direction={"-100%"}>
          <h2 className="gradient-text">Why Choose Us</h2>
        </RevealY>

        <div className="card-grid">
          {cardsData2.map(({ img, title, description, direction }, index) => (
            <RevealY direction={direction}>
              <motion.div
                className={`card ${index === 1 ? "special-card" : ""}`}
                key={index}
                variants={buttonVarients}
                whileHover="hover"
              >
                <div className="card-img">
                  <img src={img} alt="" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </motion.div>
            </RevealY>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
