import "./Home.css";
import Hero from "./Hero";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import heroImg from "../../assets/home_image/hero.jpeg";
import impactImg from "../../assets/svg/Group.svg";
import Testimonial from "../testimonial/Testimonial";

import left from "../../assets/svg/left.svg";
import right from "../../assets/svg/right.svg";

// import Services from "../service/Service";

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

  return (
    <div className="home-container">
      <div className="home-info">
        <h1>Discover Your Perfect Career</h1>
        <p>
          Make smart decisions with our revolutionary AI enabled career guidance
          tools and expert career counsellors
        </p>
        <button className="btn" onClick={() => setOpen(true)}>
          Get Started
        </button>

        <p>
          Career Assesment | Personalised Guidence | Profile Building | Virtual
          Internships |
          <br />
          College Roadmap Planning | College Applications | Scholorship Hunt
        </p>
      </div>

      <div className="img">
        <img src={heroImg} alt="" />
      </div>

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

      <div className="award">
        <div className="heading">
          <h2>
            Our <span>Awards</span>
          </h2>
          <div className="bottom-line bottom-line-second"></div>
        </div>
        <div className="award-row">
          <div className="card">
            <img src={left} alt="" />
            <p>Educational leadership award</p>
            <img src={right} alt="" />
          </div>
          <div className="card">
            <img src={left} alt="" />
            <p>Best service provider of Mp award</p>
            <img src={right} alt="" />
          </div>
          <div className="card">
            <img src={left} alt="" />
            <p>American Merit Council award </p>
            <img src={right} alt="" />
          </div>
          <div className="card">
            <img src={left} alt="" />
            <p>Best online education award</p>
            <img src={right} alt="" />
          </div>
        </div>
      </div>

      <Hero />
      {open && <Modal open={open} close={closeHandler} />}

      <Testimonial />
    </div>
  );
};

export default Home;
