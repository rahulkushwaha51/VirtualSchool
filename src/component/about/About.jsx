/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import "./About.css";
// import { Link } from "react-router-dom";
import img from "../../assets/about-banner.jpg";
import vision from "../../assets/vision.jpg";
import mission from "../../assets/Our-Mission.jpg";
import Header from "../general/Header";
import { useState } from "react";
const About = () => {
  const [showMore, setSetshowMore] = useState(false);

  const toggleShowMore = () => {
    setSetshowMore(!showMore);
  };

  return (
    <div>
      <Header link={"Home"} to={""} title={"About Us"} />
      <div className="about-container">
        <div className="about-section">
          <h2 className="about-heading">
            About <span>Us</span>
          </h2>
          <p className="about-description">
            "All students need a little help, a little hope, and somebody who
            believes in them to succeed." -Anonymous.
          </p>
          <p className="about-description">
            Virtual School is a budding venture of the parent organization
            Career Leader Educational Services. Career Leader is a college{" "}
            <b>admission consultancy</b> firm based out of Pune, Maharashtra
            that holds an enhanced experience of 14+ years in the field of
            education counseling, affirmations, and assistance in professional
            opportunities across India.
          </p>
          <p className="about-description">
            Ever since its commencement as a <b>college admissions counselor</b>
            , Career Leader has been extremely mainstream and effective to
            outline students' future in the field of management, engineering,
            medical- domestic and international, law, architecture, and distance
            learning education. With the advent of the digital world, our{" "}
            <b>admission consultancy service</b> intends to take this
            inheritance forward in a digitized manner- Virtual School
          </p>
          {showMore && (
            <>
              <p className="about-description">
                Often students do not get the right guidance and eventually,
                they end up forfeiting the college of their preferred choice.
                Admissionshala is a free digital portal for all the students
                that will go about as their personal disarray solver in their
                pockets. It resembles a ray of light in the haziness of
                bewildered aspiring candidates and intends to deliver the
                correct course for outlining their professional path. It succors
                to provide aspiring students opportunities and grab the best out
                of their forthcoming endeavors.
              </p>
              <p className="about-description">
                {" "}
                With the admissionshala portal, we aim to offer the graduating
                batches a student-centric portal that will nurture and fetch
                alluring end-to-end solutions. Every student faces numerous
                doubts while choosing the right college for their higher
                education. With this facility, we wish to be at the top of the
                <b>list of admission consultants in India.</b>
              </p>
              <p className="about-description">
                Admissionshala portal brings you a crystal-clear analysis of
                different colleges across the nation. Here, one will undergo a
                segregated process of opting out of a bunch of illustrious
                colleges based on the parameters like specialization, the field
                of interests, fees, and location to name a few.
              </p>
              <p className="about-description">
                Moreover, it will be a one-time process, i.e., a student will
                likewise not need to go through the extensive, dreary cycle of
                filling in their own subtleties again and again for each school
                they apply to. If a student faces inconvenience at any step on
                the admissionshala portal, our experienced
                <b>school admission consultant</b> will be promptly accessible
                to convert it into a cakewalk.
              </p>
            </>
          )}
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
            Our <b>Vision</b>
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
            Our <b>Mission</b>
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
    </div>
  );
};

export default About;
