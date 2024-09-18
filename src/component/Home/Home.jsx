import "./Home.css";
import Hero from "./Hero";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import impactImg from "../../assets/svg/Group.svg";
import Testimonial from "../testimonial/Testimonial";
import left from "../../assets/svg/left.svg";
import right from "../../assets/svg/right.svg";
import video from "../../assets/video.mp4";
import bubble from "../../assets/download.png";
import MovingParticle from "../particles/MovingParticle";
import { RevealX, RevealY } from "../../utility/Reveal";
import { motion } from "framer-motion";



const Home = () => {
  const [open, setOpen] = useState(false);

  const closeHandler = () => {
    setOpen(false);
  };

  useEffect(() => {
    const isSessionFirstVisit = sessionStorage.getItem("isSessionFirstVisit");

    if (!isSessionFirstVisit) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 30000);
      sessionStorage.setItem("isSessionFirstVisit", "true");
      return () => clearTimeout(timer);
    }
  }, []);

  const awards = [
    { text: "Best leadership award 2019 by IESA Chandigarh" },
    { text: "Best Counsellor and Guidence 2020 by Education Icon" },
    { text: "Education leadership award 2021 by Eminet Research" },
    { text: "Best Counsellor and Trainer award 2022" },
    { text: "Education Counsellor award 2023 by American Merit" },
    { text: "Best online education platform of the year 2023" },
  ];

  return (
    <>
      {/* <Background> */}

      <div className="home-container">
        <div className="home-section">
          <MovingParticle />
          <RevealX
            direction={{ use: true, value: "20%" }}
            // scale={{ use: true, value: 1 }}
            opacity={{ use: true, value: 1 }}
            // middle={true}
            duration={2.5}
            stagger={0.2}
          >
            <div className="home-info">
              <h2>
                Make Right Career decision with <b>Virtual School</b> Career
                Counselling Firm
              </h2>

              <p>Discover Your Career Path With Us </p>

              <motion.button  className="btn autoScale" onClick={() => setOpen(true)}>
                Enroll Now
              </motion.button>
            </div>
          </RevealX>
        </div>
        <RevealY direction={{ use: true, value: "10%" }} opacity={{ use: true, value: 1 }} duration={1}>
          <div className="impact">
            <div className="impact-row">
              <img src={impactImg} alt="" />
              <div className="impact-col">
                <h2>50+</h2>
                <p>Partner Schools</p>
              </div>
            </div>
            <div className="impact-row">
              <img src={impactImg} alt="" />
              <div className="impact-col">
                <h2>15k+</h2>
                <p>Students Enrolled</p>
              </div>
            </div>
            <div className="impact-row">
              <img src={impactImg} alt="" />
              <div className="impact-col">
                <h2>100k+ </h2>
                <p>Students Counselled</p>
              </div>
            </div>
            <div className="impact-row">
              <img src={impactImg} alt="" />
              <div className="impact-col">
                <h2>10+ years</h2>
                <p>Experience</p>
              </div>
            </div>
          </div>
        </RevealY>

        <div className="intro-video">
          <RevealY
            direction={{ use: true, value: "10%" }}
            // scale={{ use: true, value: 1 }}
            opacity={{ use: true, value: 1 }}
            // middle={false}
            duration={1}
          >
            {" "}
            <video src={video} controls autoPlay loop muted></video>
          </RevealY>
          <RevealY
            direction={{ use: true, value: "10%" }}
            // scale={{ use: true, value: 1 }}
            opacity={{ use: true, value: 1 }}
            // middle={false}
            duration={1}
          >
            <div className="intro">
              <h2>Who We Are</h2>
              <h3>
                We are here to help you kick start your journey towards
                achieving your Educational goal!
              </h3>
              <p>
                Whether you are choosing a course, selecting a School ,Coaching
                College or University to study in, our team is here to guide you
                get admissions to courses. Our team works hard to support you
                with making an informed academic decision and guiding you at
                every step of the way to sort your Admissions
              </p>
              <button className="btn" onClick={() => setOpen(true)}>
                Enroll Now
              </button>
            </div>
          </RevealY>
        </div>

        <Hero />
        {open && <Modal open={open} close={closeHandler} />}
        <div className="award">
          <div className="heading">
            <h2>
              Our <span>Awards</span>
            </h2>
            <div className="bottom-line bottom-line-second"></div>
          </div>
          <div className="award-row">
            {awards.map((award, index) => (
              <RevealY
                key={index}
                direction={{ use: true, value: "10%" }}
                // scale={{ use: true, value: 1 }}
                opacity={{ use: true, value: 1 }}
                middle={false}
                duration={1}
              >
                <div className="card">
                  <img src={left} alt="" />
                  <p>{award.text}</p>
                  <img src={right} alt="" />
                </div>
              </RevealY>
            ))}
          </div>
        </div>

        <Testimonial />
      </div>
      {/* </Background> */}
    </>
  );
};

export default Home;
