import "./Home.css";
import Hero from "./Hero";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";
// import img from "../../assets/logo.jpeg";
// import img2 from "../../assets/istockphoto.jpg";
import heroImg from "../../assets/desktop.svg";
import impactImg from "../../assets/Group.svg";
import creative from "../../assets/005-creative.svg";
import startup from "../../assets/007-startup.svg";
import career from "../../assets/004-career.svg";
import device from "../../assets/002-devices.svg";
import certificate from "../../assets/003-certificate.svg";
import team from "../../assets/010-team.svg";

import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import Testimonial from "../testimonial/Testimonial";
import Course from "./Courses";
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
      }, 3000);
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
        <button className="btn" onClick={() => setOpen(true)}>Get Started</button>

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
            <h2>2.5 Lakh+</h2>
            <p>Students Impacted</p>
          </div>
        </div>
        <div className="impact-row">
          <img src={impactImg} alt="" />
          <div className="impact-col">
            <h2>2.5 Lakh+</h2>
            <p>Students Impacted</p>
          </div>
        </div>
        <div className="impact-row">
          <img src={impactImg} alt="" />
          <div className="impact-col">
            <h2>2.5 Lakh+</h2>
            <p>Students Impacted</p>
          </div>
        </div>
        <div className="impact-row">
          <img src={impactImg} alt="" />
          <div className="impact-col">
            <h2>2.5 Lakh+</h2>
            <p>Students Impacted</p>
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
      <div className="career-guidance">
        <h2>Shaping the Career Guidance Landscape</h2>
        <p>
          Comprehensive career guidance solutions for students, parents,
          educators and schools
        </p>
        <div className="career-guidance-grid">
          <div className="card">
            <img src={creative} alt="creative" />
            <p>
              Enable students to identify their best-fit career with our
              world-class career assessment and personalised guidance.
            </p>
          </div>
          <div className="card">
            <img src={device} alt="devices" />
            <p>
              Empower students to learn all about the professional world with
              virtual career simulations, exhaustive career library, career
              blogs and vlogs.
            </p>
          </div>
          <div className="card">
            <img src={certificate} alt="certificate" />
            <p>
              Pave student’s way to their dream college with our end-to-end
              college application guidance, scholarship drive and corporate
              internship program.
            </p>
          </div>
        </div>
        <div className="career-guidance-grid">
          <div className="card">
            <img src={career} alt="career" />
            <p>
              Enable schools in creating a career guidance ecosystem in sync
              with the vision of New Education Policy
            </p>
          </div>
          <div className="card">
            <img src={team} alt="team" />
            <p>
              Empower educators to become International Certified Career Coaches
              and build a career in career guidance & counselling
            </p>
          </div>
          <div className="card">
            <img src={startup} alt="startup" />
            <p>
              Revolutionary assessment platform and technology driven career
              guidance solutions for educators to boost their career guidance &
              counselling practice
            </p>
          </div>
        </div>
      </div>

      {/* <Services /> */}

      {/* <div className="home-partner">
        <h2>Our Partner Institutions</h2>

        <div className="home-partner-button">
          <button
            className={`btn-secondry ${active === "School" ? "active" : ""}`}
            onClick={() => setActive("School")}
          >
            250+ Partner Schools{" "}
          </button>
          <button
            className={`btn-secondry ${active === "College" ? "active" : ""}`}
            onClick={() => setActive("College")}
          >
            50+ Partner Colleges{" "}
          </button>
        </div>

        {active === "School" && (
          <div className="partner-school-grid">
            <div className="card">
              <img src={img} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img} alt="" />
              <p>Prestige Universities</p>
            </div>
          </div>
        )}
        {active === "College" && (
          <div className="partner-school-grid">
            <div className="card">
              <img src={img2} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img2} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img2} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img2} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img2} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img2} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img2} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img2} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img2} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img2} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img2} alt="" />
              <p>Prestige Universities</p>
            </div>
            <div className="card">
              <img src={img2} alt="" />
              <p>Prestige Universities</p>
            </div>
          </div>
        )}
      </div> */}

      <Hero />
      {open && <Modal open={open} close={closeHandler} />}

      <Testimonial />

      <Course />
    </div>
  );
};

export default Home;
