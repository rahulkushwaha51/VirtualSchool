import "./Hero.css";
// import Course from "./Courses";
import { motion } from "framer-motion";
import { RevealX, RevealY } from "../../utility/Reveal";

// import chooselog from "../../assets/home_image/choose-logo.jpg";

import career from "../../assets/service/career.jpg";
import appsupport from "../../assets/service/app.png";
import admission from "../../assets/service/admission.png";
import olympiad from "../../assets/service/olympiad.webp";
import college from "../../assets/service/college.jpg";
import entrance from "../../assets/service/entrance.jpg";

import chooseus from "../../assets/home_image/choose-logo.jpg";
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";
import Slider3d from "../general/Slider3d";
import AutoPlaySlider from "../AutoplaySlider/AutoPlaySlider";

// import Marquee from "react-fast-marquee";

const Hero = () => {
  const servicesData = [
    {
      id: 1,
      title: "Career Counselling",
      description:
        "Expert guidance to help you navigate the complex admission process and secure your spot in top institutions.",
      img: career,
      link: "/careercounseling",
    },
    {
      id: 2,
      title: "Admission Counselling",
      description:
        "Assistance with the entire school admission process from start to finish.",
      img: admission,
      link: "/admission",
    },
    {
      id: 5,
      title: "College Counselling Admission",
      description:
        " Counselling to help you prepare for entrance exams and other entrance requirements.",
      img: college,
      link: "/collegecounseling",
    },
    {
      id: 3,
      title: "VIRTUAL APP SUPPORT",
      description:
        "Virtual school app support refers to the technical and customer service assistance provided to users of a virtual school platform or app",
      img: appsupport,
      link: "/virtual",
    },

    {
      id: 4,
      title: "Entrance Exams Counselling",
      description:
        "Counselling to help you prepare for entrance exams and other entrance requirements.",
      img: entrance,
      link: "/entrance",
    },

    {
      id: 6,
      title: "Olympiad Exams",
      description:
        " Counselling to help you prepare for entrance exams and other entrance requirements.",
      img: olympiad,
      link: "/olympiad",
    },
  ];

  const cardsData = [
    {
      icon: "fa-solid fa-timeline",
      title: "Flexible Learning Environment",
      description:
        "Students can learn from anywhere, at any time, allowing for a personalized schedule that fits their needs",
    },
    {
      icon: "fa fa-layer-group",
      title: "  Diverse Course Offerings",
      description:
        "Access to a wide range of courses, including advanced placement, elective, and specialized subjects not always available in traditional schools.",
    },
    {
      icon: "fa fa-graduation-cap",
      title: " Experienced Instructors",
      description:
        "Highly qualified teachers who are trained in online education, offering personalized attention and support",
    },
    {
      icon: "fa-solid fa-people-arrows",
      title: "Interactive and Engaging Content",
      description:
        "Utilizes the latest technology and multimedia tools to create engaging, interactive lessons that keep students motivated.",
    },
    {
      icon: "fa-solid fa-hospital",
      title: "Tailored Learning Plans",
      description:
        " Customized learning plans that cater to individual student needs, helping them progress at their own pace.",
    },
  ];

  const cardsData2 = [
    {
      icon: "fa-solid fa-user-shield",
      title: "Safe and Supportive Environment",
      description:
        " A safe online learning space that reduces distractions and allows students to focus on their education.",
    },
    {
      icon: "fa-solid fa-users-gear",
      title: "Strong Community and Collaboration",
      description:
        "Opportunities for students to connect with peers, participate in group projects, and engage in extracurricular activities online.",
    },
    {
      icon: "fa-solid fa-hands-holding-child",
      title: "Parental Involvement",
      description:
        " Tools and resources to keep parents informed and involved in their child’s education journey",
    },
    {
      icon: "fa-solid fa-universal-access",
      title: "Access to Global Resources",
      description:
        "Opportunities to interact with students and educators from around the world, broadening perspectives and learning experiences.",
    },
    {
      icon: "fa-solid fa-gears",
      title: "Focus on Life Skills",
      description:
        "Emphasis on developing critical thinking, time management, and self-discipline, preparing students for future success.",
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
      {/* <Course /> */}

      {/* service */}

      <div className="service">
        <div className="heading">
          <h2>
            Our <span>Services</span>
          </h2>
          <div className="bottom-line bottom-line-second"></div>
        </div>

        <div className="service-grid">
          {servicesData.map((service) => (
            <div key={service.id}>
              <RevealY direction={{ use: true, value: "10%" }} opacity={{ use: true, value: 1 }} duration={1}>
                <Link to={service.link}>
                  <div key={service.id} className="service-card ">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="service-img"
                    />
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                </Link>
              </RevealY>{" "}
            </div>
          ))}
        </div>
      </div>
      {/* choose us */}
      <div className="choose-us">
        <div className="heading">
          <h2>
            Why <span>Choose</span> Us
          </h2>
          <div className="bottom-line bottom-line-second"></div>
        </div>
        <div className="choose-us-section">
          <div className="col">
            {cardsData2.map(
              ({ icon, title, description, direction }, index) => (
                <RevealY
                  direction={{ use: true, value: "10%" }}
                  opacity={{ use: true, value: 1 }}
                  duration={1}
                  key={index}
                >
                  <motion.div
                    className="card"
                    key={index}
                    variants={buttonVarients}
                    whileHover="hover"
                  >
                    <div className="card-icon">
                      <i className={icon}></i>
                    </div>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </motion.div>
                </RevealY>
              )
            )}
          </div>
          <RevealY
            direction={{ use: true, value: "10%" }}
            opacity={{ use: true, value: 1 }}
            duration={1}
          >
            <div className="col">
              <img src={chooseus} />
            </div>
          </RevealY>
          <div className="col">
            {" "}
            {cardsData.map(({ icon, title, description, direction }, index) => (
              <RevealY
                direction={{ use: true, value: "10%" }}
                opacity={{ use: true, value: 1 }}
                duration={1}
                key={index}
              >
                <motion.div
                  className="card"
                  key={index}
                  variants={buttonVarients}
                  whileHover="hover"
                >
                  <div className="card-icon">
                    <i className={icon}></i>
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </motion.div>
              </RevealY>
            ))}
          </div>
        </div>
      </div>
      <div className="our-partner ">
        <div className="heading autoShow">
          <h2>
            Our <span>Partners</span>
          </h2>
          <div className="bottom-line bottom-line-second"></div>
        </div>
       <RevealY direction={{ use: true, value: "10%" }} opacity={{ use: true, value: 1 }}>
       <AutoPlaySlider />
       </RevealY>
      </div>
    </>
  );
};

export default Hero;
