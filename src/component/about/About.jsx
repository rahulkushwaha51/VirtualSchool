/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import "./About.css";
import img from "../../assets/home_image/about-banner.jpg";
import vision from "../../assets/home_image/vision.jpg";
import mission from "../../assets/home_image/Our-Mission.jpg";
import expert1 from "../../assets/expert1.jpeg"; // Add paths to your expert images
import expert2 from "../../assets/expert2.jpeg";
import expert3 from "../../assets/expert1.jpeg";
import Header from "../general/Header";
import { useState } from "react";

const About = () => {
  const [showMore, setSetshowMore] = useState(false);

  const toggleShowMore = () => {
    setSetshowMore(!showMore);
  };

  return (
    <div>
      <Header icon="fas fa-home" title={"About Us"} />
      <div className="about-container">
        <div className="about-section">
          <h2 className="about-heading">
            About <span>Us</span>
          </h2>
          <p>
            "All students need a little help, a little hope, and somebody who
            believes in them to succeed." -Anonymous.
          </p>
          <p>
            Virtual School is a budding venture of the parent organization
            Career Leader Educational Services. Career Leader is a college{" "}
            <b>admission consultancy</b> firm based out of Pune, Maharashtra
            that holds an enhanced experience of 14+ years in the field of
            education counseling, affirmations, and assistance in professional
            opportunities across India.
          </p>
          <p>
            Ever since its commencement as a <b>college admissions counselor</b>
            , Career Leader has been extremely mainstream and effective to
            outline students' future in the field of management, engineering,
            medical- domestic and international, law, architecture, and distance
            learning education. With the advent of the digital world, our{" "}
            <b>admission consultancy service</b> intends to take this
            inheritance forward in a digitized manner- Virtual School
          </p>

          <div className={`about-text ${showMore ? "show-more" : ""}`}>
            <p>
              Often students do not get the right guidance and eventually, they
              end up forfeiting the college of their preferred choice.
              Admissionshala is a free digital portal for all the students that
              will go about as their personal disarray solver in their pockets.
              It resembles a ray of light in the haziness of bewildered aspiring
              candidates and intends to deliver the correct course for outlining
              their professional path. It succors to provide aspiring students
              opportunities and grab the best out of their forthcoming
              endeavors.
            </p>
            <p>
              {" "}
              With the admissionshala portal, we aim to offer the graduating
              batches a student-centric portal that will nurture and fetch
              alluring end-to-end solutions. Every student faces numerous doubts
              while choosing the right college for their higher education. With
              this facility, we wish to be at the top of the
              <b>list of admission consultants in India.</b>
            </p>
            <p>
              Admissionshala portal brings you a crystal-clear analysis of
              different colleges across the nation. Here, one will undergo a
              segregated process of opting out of a bunch of illustrious
              colleges based on the parameters like specialization, the field of
              interests, fees, and location to name a few.
            </p>
            <p>
              Moreover, it will be a one-time process, i.e., a student will
              likewise not need to go through the extensive, dreary cycle of
              filling in their own subtleties again and again for each school
              they apply to. If a student faces inconvenience at any step on the
              admissionshala portal, our experienced
              <b>school admission consultant</b> will be promptly accessible to
              convert it into a cakewalk.
            </p>
          </div>

          <button onClick={toggleShowMore} className="btn">
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
        <div className="image-section">
          <img src={img} alt="About Us" className="about-image" />
        </div>
      </div>
      <div className="about-us-card">
        <div className="card1">
          <h2>3.5 Years</h2>
          <p>Experience</p>
        </div>
        <div className="card1">
          <h2>23+</h2>
          <p>Courses</p>
        </div>
        <div className="card1">
          <h2>800+</h2>
          <p>Reviews</p>
        </div>{" "}
        <div className="card1">
          <h2>1000+</h2>
          <p>Student</p>
        </div>
      </div>
      <div className="vision">
        <img src={vision} alt="vision" />
        <div className="vision-inner">
          <h2>
            Our <span>Vision</span>
          </h2>
          <p>
            To aid a one-stop admission process solution for students to save
            their valuable time, money, and efforts for a good college search.
          </p>
        </div>
      </div>
      <div className="mission">
        <img src={mission} alt="mission" />
        <div className="mission-inner">
          <h2>
            Our <span>Mission</span>
          </h2>
          <p>
            To eradicate all the short-term educational barriers coming in the
            way of higher education aspirants, provide equal opportunities to
            one and all. To work towards fulfilling the basic constitutional
            “right to education” for students irrespective of every geographical
            area, financial background, and category.
          </p>
        </div>
      </div>
      <div className="experts">
        <h2 className="experts-heading">
          Meet Our <span>Experts</span>
        </h2>
        <div className="experts-container">
          <div className="expert-card">
            <img src={expert1} alt="Expert 1" className="expert-image" />
            <h3 className="expert-name">John Doe</h3>
            <p className="expert-title">Senior Consultant</p>
          </div>
          <div className="expert-card">
            <img src={expert2} alt="Expert 2" className="expert-image" />
            <h3 className="expert-name">Jane Smith</h3>
            <p className="expert-title">Education Specialist</p>
          </div>
          <div className="expert-card">
            <img src={expert3} alt="Expert 3" className="expert-image" />
            <h3 className="expert-name">Michael Johnson</h3>
            <p className="expert-title">Career Advisor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
