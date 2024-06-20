import "./Service.css";
import { RevealX } from "../../utility/Reveal";
import { motion } from "framer-motion";
// import Modal from "../modal/Modal";
import { useState } from "react";
import Header from "../general/Header";
const Services = () => {
  const [open, setopen] = useState(false);

  // const closeHandler = () => {
  //   setopen(false);
  // };

  const cardsData = [
    {
      title: "Admission support ",
      description:
        "Regular and  Non-Attending(Dummy) in CBSE or MP Board school",
      direction: "-100%",
    },
    {
      title: "Online Education  ",
      description:
        "Like E-books, video, question paper, test series based on MP BOARD or CBSE Boards",
      direction: "-100%",
    },
    {
      title: "Career Counseling  ",
      description:
        "Giving all the guidance to the students",
      direction: "-100%",
    },
    {
      title: "Hostel  ",
      description:
        "(Boys and Girls) in suitable area.",
      direction: "-100%",
    },
  ];

  return (
    <>
      <Header link={"Home"} to={""} title={"Services"} />
      <div className="services-container">
        <h2>Our Services For Student</h2>
        <p>
          <b> *Virtual school*</b> is a online platform to help student to get
          admissions into school / Coaching Institute/ Hostels. By using this
          platform student can get lots of information regarding their choices.
          We create this platform for those students who are from outside the
          Indore or want to settle down in Indore in terms of Education because
          many of you are preparing for competitive exam like IIT-JEE, NEET, CA,
          CS, CPT, UPSC, SSC and many more. We also here for your local
          guardians so that you can share your problem with us.
        </p>

        <p>Under the VIRTUAL SCHOOL we are providing many benefits likes.</p>
       <RevealX direction={"-100%"}>
          <div className="benefit">
            <div className="card-grid">
              {cardsData.map(({ title, description, direction }, index) => (
                <RevealX direction={direction} key={index}>
                  <motion.div
                    className="card"
                    key={index}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.4 },
                    }}
                  >
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </motion.div>
                </RevealX>
              ))}
            </div>
          </div>
        </RevealX>

        {/*  <RevealX direction={"100%"}>
          <div className="service-section service-section-reverse">
            <div>
              <h2>College Admission Assistance</h2>
              <p>
                We provide comprehensive support for the college admission
                process
              </p>
              <h2>Includes</h2>
              <ul>
                <li>Application Guidance</li>
                <li>Essay Writing Help</li>
                <li>Interview Preparation</li>
                <li>Financial Aid and Scholarship Assistance</li>
              </ul>
            </div>
            <img src="src\assets\istockphoto.jpg" alt="" />
          </div>
        </RevealX>

        <RevealX direction={"-100%"}>
          <div className="service-section">
            <img src="src\assets\istockphoto.jpg" alt="" />
            <div>
              <h2>School Admission Assistance</h2>
              <p>
                Our team helps students and parents with the school admission
                process
              </p>
              <h2>By offering</h2>
              <ul>
                <li>School Selection Advice</li>
                <li>Application Process Support</li>
                <li>Entrance Exam Preparation</li>
              </ul>
            </div>
          </div>
        </RevealX>

        <RevealX direction={"100%"}>
          <div className="service-section service-section-reverse">
            <div>
              <h2>Live Classes</h2>
              <p>
                Participate in interactive and engaging live classes for a
                variety of subjects and test preparations:
              </p>
              <ul>
                <li>Subject-Specific Tutoring</li>
                <li>Group Study Sessions</li>
                <li>Exam Preparation Classes</li>
              </ul>
            </div>
            <img src="src\assets\istockphoto.jpg" alt="" />
          </div>
        </RevealX>

        <RevealX direction={"-100%"}>
          <div className="service-section">
            <img src="src\assets\istockphoto.jpg" alt="" />
            <div>
              <h2>Test Preparation</h2>
              <p>
                Get ready for standardized tests with our expert guidance and
                resources:
              </p>
              <ul>
                <li>SAT/ACT Prep</li>
                <li>Graduate Exams (GRE, GMAT, LSAT, MCAT) Prep</li>
                <li>Test-Taking Strategies and Practice Tests</li>
              </ul>
            </div>
          </div>
        </RevealX> */}
      </div>
      {/* <button onClick={() => setopen(!open)}>View More</button> */}
      {/* <Modal open={open} close={closeHandler}/> */}
    </>
  );
};
//
export default Services;
