import "./Hero.css";

// import Shufflegrid from "./Sufflegrid";
import { RevealY } from "../../utility/Reveal";

import img from "../../assets/choose-1.webp";
import img2 from "../../assets/choose-2.jpeg";
import img3 from "../../assets/choose-3.jpeg";
import img4 from "../../assets/choose-4.jpeg";
import img5 from "../../assets/choose-1.webp";
import img6 from "../../assets/choose-3.jpeg";
import { motion } from "framer-motion";
import chooselog from "../../assets/choose-logo.jpg";
import Marquee from "react-fast-marquee";
const Hero = () => {
  // const cardsData = [
  //   {
  //     iconClass: "fa-solid fa-globe",
  //     title: "Future of Education",
  //     description:
  //       "A new world order post 2020, dictates a whole new outlook at its education system too.",
  //     direction: "-100%",
  //   },
  //   {
  //     iconClass: "fa-solid fa-leaf",
  //     title: "Healthy Balance between Fun & Learning",
  //     direction: "-100%",
  //     description:
  //       "All work and no play make children dull and dreary. We provide just the right balance between scholastic and co-scholastic areas.",
  //   },
  //   {
  //     iconClass: "fa-solid fa-desktop",
  //     title: "Flexible Learning",
  //     direction: "100%",
  //     description:
  //       "Our online classes are conducted in the morning and evening batches. You can choose the batch that suits you best.",
  //   },
  //   {
  //     iconClass: "fa-solid fa-address-book",
  //     title: "Curated Curriculum",
  //     direction: "100%",
  //     description: "Our curriculum is tailor-made to forge tomorrow’s leaders.",
  //   },
  // ];

  // const cardsData1 = [
  //   {
  //     iconClass: "fa-solid fa-globe",
  //     title: "Integrity",
  //     description: "Integrity is the soul of all virtue.",
  //   },
  //   {
  //     iconClass: "fa-solid fa-leaf",
  //     title: "Compassion",
  //     description: "Compassion is the soul of all humanity.",
  //   },
  //   {
  //     iconClass: "fa-solid fa-desktop",
  //     title: "Excellence",
  //     description: "Excellence at the heart of all human endeavors.",
  //   },
  // // ];
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
  const cardsData3 = [
    {
      img: img,
      title: "One-on-one Counselling Sessions ",
      description:
        "One-on-one Counselling Sessions: Trained professionals will offer personalized guidance to students, helping them identify their interests, strengths, and career goals. ",
    },
    {
      img: img2,
      title: "Career Counselling Assessments ",
      description:
        "Utilizing reputable assessment tools, students will have the opportunity to assess their skills, interests, and values to determine suitable career paths",
    },
    {
      img: img3,
      title: "Academic Counselling ",
      description:
        "This focuses on helping students with educational planning, course selection, study skills, time management, and academic goal setting. ",
    },
    {
      img: img4,
      title: " Personal Development Counselling ",
      description:
        "Supports students in developing life skills, improving relationships, building self-esteem, and managing personal challenges.",
    },
    {
      img: img5,
      title: " Aptitude Tests ",
      description:
        "Evaluate specific skills or abilities related to particular tasks or fields, such as numerical, verbal, or abstract reasoning. ",
    },
    {
      img: img6,
      title: " Psychometric test  ",
      description:
        "Which are assessment design to measure psychological attributes like, Intelligent, personality traits, aptitudes and specific skills. This test aim to provide inside into an individual abilities performances and behavior ",
    },
  ];

  const buttonVarients = {
    hover: {
      x: [10, 0],
      transition: 0.4,
    },
  };

  const brand = [
    img,
    img2,
    img3,
    img4,
    img5,
    img6,
    img,
    img2,
    img3,
    img4,
    img5,
    img6,
    img,
    img2,
    img3,
    img4,
    img5,
    img6,
    img6,
    img6,
    img6,
    img6,
  ];

  return (
    <>
      {/* <div className="home">
        <RevealX direction={"-100%"}>
          <div className="home-intro">
            <h2 className="gradient-text">Welcome To Virtual School</h2>
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
      </div> */}

      {/* <div className="benefit">
        <RevealX direction={"-100%"}>
          <h2 className="gradient-text">Benefits of Virtual School</h2>
        </RevealX>

        <div className="card-grid">
          {cardsData.map(
            ({ iconClass, title, description, direction }, index) => (
              <RevealX direction={direction} key={index}>
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
      </div> */}

      {/* <div className="values">
        <RevealY direction={"-100%"}>
          <h2 className="gradient-text">Our Core Values</h2>
        </RevealY>

        <div className="card-grid">
          {cardsData1.map(
            ({ iconClass, title, description, direction }, index) => (
              <RevealY direction={direction} key={index}>
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
      </div> */}
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
                    className='card'
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

      <div className="service">
        <RevealY direction={"-100%"}>
          <div className="heading">
            <h2>
              Our <span>Counselling</span> Support
            </h2>
            <div className="bottom-line bottom-line-second"></div>
          </div>
        </RevealY>

        <div className="card-grid">
          {cardsData3.map(({ img, title, description, direction }, index) => (
            <RevealY direction={direction} key={index}>
              <motion.div
                className={`card ${index === 1 ? "special-card" : ""}`}
                key={index}
                variants={buttonVarients}
                whileHover="hover"
              >
                <div className="card-img">
                  <img src={img} alt="" />
                </div>
                <div className="card-content">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </motion.div>
            </RevealY>
          ))}
        </div>
      </div>
      <div className="brand-name-container">
        <div className="heading">
          <h2>
            Our <span>Partner</span> Institutions
          </h2>
          <div className="bottom-line bottom-line-second"></div>
        </div>

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
      </div>
    </>
  );
};

export default Hero;
