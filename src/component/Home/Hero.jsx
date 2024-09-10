import "./Hero.css";
// import Course from "./Courses";
import { motion } from "framer-motion";
import { RevealY } from "../../utility/Reveal";

import chooselog from "../../assets/home_image/choose-logo.jpg";
import works from "../../assets/home_image/works.png";
import features from "../../assets/home_image/features.png";
import risk from "../../assets/home_image/risk.png";
import whyus from "../../assets/home_image/school.gif";
import trust from "../../assets/home_image/trust.png";

import school1 from "../../assets/school_banner/school1.webp";
import school2 from "../../assets/school_banner/school2.avif";
import school3 from "../../assets/school_banner/school3.jpg";
import school4 from "../../assets/school_banner/school4.jpg";
import school5 from "../../assets/school_banner/school5.jpg";
import school6 from "../../assets/school_banner/school6.jpg";
import school7 from "../../assets/school_banner/school7.jpg";
import school8 from "../../assets/school_banner/school8.png";
import school9 from "../../assets/school_banner/school9.jpg";
import school10 from "../../assets/school_banner/school10.png";
import school11 from "../../assets/school_banner/school11.png";
import school12 from "../../assets/school_banner/school12.png";

import counselingImg from "../../assets/service/counseling.jpeg";
import hostelImg from "../../assets/service/hostel.jpeg";
import schoolAdmissionImg from "../../assets/service/admission.png";
import mentor from "../../assets/service/mentor.jpg";
import Olympiads from "../../assets/service/olympiad.jpg";
import academic from "../../assets/service/academic.jpg";
import workshop from "../../assets/service/workshop.jpg";
import appsupport from "../../assets/app_image/app1.png";

import Marquee from "react-fast-marquee";

const Hero = () => {
  const brand = [
    school1,
    school2,
    school3,
    school4,
    school5,
    school6,
    school7,
    school8,
    school9,
    school10,
    school11,
    school12,
  ];

  const servicesData = [
    {
      id: 0,
      title: "School Admission",
      description:
        "Assistance with the entire school admission process from start to finish.",
      img: schoolAdmissionImg,
    },
    {
      id: 1,
      title: "Counseling",
      description:
        "Expert guidance to help you navigate the complex admission process and secure your spot in top institutions.",
      img: counselingImg,
      link: "/counseling",
    },
    {
      id: 2,
      title: "Hostel Assistance",
      description:
        "We help you find the best hostel accommodations that suit your budget and needs, ensuring a comfortable stay.",
      img: hostelImg,
      link: "/hostel",
    },
    {
      id: 3,
      title: "VIRTUAL APP SUPPORT",
      description:
        "Virtual school app support refers to the technical and customer service assistance provided to users of a virtual school platform or app",
      img:appsupport ,
      link: "/virtual",
    },
    {
      id: 4,
      title: "WORKSHOP & SEMINAR FOR SCHOOL",
      description:
        "Workshops and seminars for schools are educational events designed to enhance students' learning, skills, and knowledge in various subjects or areas of interest.",
      img: workshop,
      link: "/scholarship",
    },

    {
      id: 5,
      title: "MENTOR EDUCATION",
      description:
        "Mentor education refers to the guidance provided by an experienced individual (mentor) to a less experienced person (mentee) in their academic or professional journey",
      img: mentor,
      link: "/scholarship",
    },
    {
      id: 6,
      title: "OLYMPAIDS SUPPORT",
      description:
        "Olympiads support helps students prepare for academic competitions by providing study materials, practice tests, specialized coaching, exam strategies, and motivational support",
      img: Olympiads,
      link: "/scholarship",
    },
    {
      id: 7,
      title: "SCHOOL ACADEMIC SUPPORT",
      description:
        "School academic support refers to the various services and resources provided to enhance students' learning experiences and academic performance",
      img: academic,
      link: "/scholarship",
    },
  ];

  const cardsData2 = [
    {
      icon: "fa-regular fa-hand-point-up",
      title: "We Put You First",
      description:
        "Our experienced counsellors and service team will work closely with you to ensure a seamless and a stress-free admission process.",
    },
    {
      icon: "fa-regular fa-chess-queen",
      title: "Passion",
      description:
        "We are passionate in our bid to help students make better academic decisions that could change their lives forever.",
    },
    {
      icon: "fa-regular fa-calendar-days",
      title: "Experience",
      description:
        "With over 12 years of experience, our counsellors can help you figure out your next move",
    },
    {
      icon: "fa-regular fa-handshake",
      title: "Affiliations",
      description:
        "Our affiliations with over 700 universities worldwide ensure that you are not short of choices",
    },
    {
      icon: "fa-solid fa-hospital",
      title: "Our Services",
      description:
        "Our services are designed to support you from the moment of initial counselling till completion of your admissions",
    },
    {
      icon: "fa-solid fa-coins",
      title: "Free of Cost",
      description:
        "No charges were taken from 95% of our students. The remaining 5% paid for special customised services",
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
      <div className="brand-name-container">
        <h2>
          Our Partner <span>School</span>
        </h2>
        <div className="bottom-line bottom-line-second"></div>
        <Marquee pauseOnHover={true} speed={80}>
          {brand.map((item, index) => (
            <div className="brand-name" key={index}>
              <img
                src={item}
                alt={`Image ${index + 1}`}
                key={index}
                className="scroller-image"
              />
            </div>
          ))}
        </Marquee>
        <h2>
          Let’s share the pain of finding the best future for your children
        </h2>
        <p>
          ‘Virtual School’ is the centralize portal for admission in the premier
          education institutes in your town. Handover your admission concerns
          and worries to us. We have designed an excellent tool to help you in
          finding the best school in your town based on different parameters
          such as facilities, faculty expertise, reviews and so on. What you
          need to do is just submit requirements in above boxes and we will
          display the best institutions. Then it’s just the matter of seconds to
          select the school, filling the admission form and paying conveniently
          to reserve your seat.
        </p>
      </div>

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
            <div key={service.id} className="service-card">
              <img
                src={service.img}
                alt={service.title}
                className="service-img"
              />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
             
            </div>
          ))}
        </div>
      </div>
      {/* choose us */}
      <div className="choose-us">
        <div className="choose-us-section1">
          <div className="choose-us-logo">
            <img src={chooselog} alt="chooose" />
            <h2>
              Virtual <span>School</span>
            </h2>
          </div>
        </div>
        <div className="choose-us-section2">
          <div className="heading">
            <h2>
              Why <span>Choose</span> Us
            </h2>
            <div className="bottom-line bottom-line-second"></div>
          </div>
          <div className="card-grid">
            {cardsData2.map(
              ({ icon, title, description, direction }, index) => (
                <RevealY direction={direction} key={index}>
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
        </div>
      </div>
      <div className="works">
        <img src={works} alt="vision" />
        <div className="works-inner">
          <h2>HOW IT WORKS ?</h2>
          <ul>
            <li>
              SkoolAdmission is an official admission partner of premier
              schools.
            </li>
            <li>
              All the information on our page is authentic and provided by
              schools.
            </li>
            <li>
              Your submitted application is thoroughly checked and evaluated
              byschool officials.
            </li>
            <li>
              You will be notified once the decision is made on your registered
              email id and mobile number.
            </li>
          </ul>
        </div>
      </div>

      <div className="features">
        <div className="features-inner">
          <h2> FEATURES</h2>
          <ul>
            <li>Get the valuable insights with reviews.</li>
            <li>Check the overview of all schools at a single stop.</li>
            <li>Peek inside the school and facilities it provide.</li>
            <li>Get benefits from counseling facility.</li>
            <li>Say bye –bye to long queues.</li>
            <li>Forms submitted in one go.</li>
            <li>
              No chaos of paper work. Soft copies of the required documents can
              be easily attached with the form.
            </li>
            <li>
              A form once filled, your database remains with us which can then
              be used for filling another application form. This saves
              duplication of effort.
            </li>
          </ul>
        </div>
        <img src={features} alt="mission" />
      </div>

      <div className="risk">
        <img src={risk} alt="risk" />
        <div className="risk-inner">
          <h2> ELIMINATES RISK</h2>
          <ul>
            <li>
              Online application prevents the risk of losing important
              documents.
            </li>
            <li>
              No third party intervention during the process, schools are
              directly involved.
            </li>
            <li>
              The queues are growing and SkoolAdmission is the ultimate
              solution.
            </li>

            <li>Every information is authentic.</li>
          </ul>
        </div>
      </div>

      <div className="why-us">
        <div className="why-us-inner">
          <h2>WHY Virtual School ?</h2>
          <ul>
            <li>
              The revolutionary concept of online admission to schools has been
              simplified by SkoolAdmission.
            </li>
            <li>
              The hassles of students, teachers and parents are solved at the
              same place.
            </li>
            <li>
              With a holistic interface the portal provides easy admission
              facilities
            </li>
            <li>Virtual School has made faster transfer of data viable.</li>
          </ul>
        </div>
        <img src={whyus} alt="whyus" />
      </div>
      <div className="trust">
        <img src={trust} alt="trust" />
        <div className="trust-inner">
          <h2>A WORD OF TRUST</h2>
          <ul>
            <li>
              A venture of young VNIT innovators who have sensed the need and
              stepped in with a robust and a lasting solution.
            </li>
            <li>We are always there to help you 24*7*365.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
