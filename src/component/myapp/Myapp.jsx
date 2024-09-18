import Header from "../general/Header";
import "./Myapp.css";

import app1 from "../../assets/app_image/app1.png";
import app2 from "../../assets/app_image/app2_half.png";
import app3 from "../../assets/app_image/app3.png";
import app4 from "../../assets/app_image/app4.png";
import app5 from "../../assets/app_image/app5.png";
import app6 from "../../assets/app_image/app6.png";
import app7 from "../../assets/app_image/app7.png";
import app8 from "../../assets/app_image/app8.png";

const MobileApp = () => {
  return (
    <>
      <Header icon="fa-solid fa-mobile" title="Mobile App" />

      <div className="mobile-app-section">
        <div className="app-info">
          <h1>
            Mobile <span>App</span>
          </h1>
          <p>
            Virtual school app is a digital platform designed to help students
            of IIT/NEET/CA/CAT learn and study more effectively.
          </p>{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.virtualschool"
            target="_blank"
            rel="noreferrer"
            className="download-btn"
          >
            <button className="btn">Explore Now </button>
          </a>
        </div>
        <div className="app-image small">
          <img src={app1} alt="Virtual School App" />
        </div>
      </div>
      <div className="mobile-app-section">
        <div className="app-image">
          <img src={app2} alt="Virtual School App" />
        </div>
        <div className="app-info">
          <h2>Welcome To Our Application</h2>
          <p>
            Virtual school app have amazing online resources from recorded
            lectures to interactive tools. We offer a variety of features such
            as video lectures, interactive quizzes, practice tests, flashcards,
            and more. Virtual school app also provide personalized study plans,
            live tutoring, and community forums where students can discuss
            topics with peers
          </p>
          <h3>About Our Application</h3>
          <p>
            Virtual school app is online study app which provides a wide range
            of features to enhance the learning experience for students.
          </p>
        </div>
      </div>
      <div className="mobile-app-section">
        <div className="app-info">
          <h2>Application Advantages</h2>
          <div className="advantages">
            <div className="card">
              <span className="number">01</span>
              <ul>
                <li>Learn from anywhere & anytime.</li>
                <li>Mock test & practice exam.</li>
              </ul>
            </div>
            <div className="card">
              <span className="number">02</span>
              <ul>
                <li>Board exam preparation.</li>
                <li>Expert faculty session.</li>
              </ul>
            </div>
            <div className="card">
              <span className="number">03</span>
              <ul>
                <li>In depth analysis.</li>
                <li>Easy to access.</li>
              </ul>
            </div>
            <div className="card">
              <span className="number">04</span>
              <ul>
                <li>Supportive in competitive exam.</li>
                <li>Acess your academic in single click.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="app-image">
          <img src={app3} alt="Virtual School App" />
        </div>
      </div>
      <div className="mobile-app-section">
        <div className="app-image">
          <img src={app4} alt="Virtual School App" />
        </div>
        <div className="app-info">
          <h2>Application Features</h2>
          <ul>
            <li> We Provide recorded lectures for MP board and CBSE.</li>
            <li> We provide textbook and their solutions.</li>
            <li> We provide all syllabus for 11th & 12th.</li>
            <li>
              We provide all syllabus for 11th & 12th. We provide practice
              test,questions questions bank & solved papers
            </li>
            <li> We provide a community for group study</li>
            <li> We provide exam analysis for better progress</li>
            <li>We provide a strategy session</li>
          </ul>
        </div>
      </div>

      <div className="mobile-app-section">
        <div className="app-image">
          <img src={app5} alt="Virtual School App" />
        </div>
      </div>
      <div className="mobile-app-section">
        <div className="app-image">
          <img src={app6} alt="Virtual School App" />
        </div>
      </div>
      <div className="mobile-app-section">
        <div className="app-info">
          <h2>Contact Us</h2>
          <p>
            <i className="fa-solid fa-location-dot" style={{ color: "#3366FF" ,marginRight:"15px" }}></i>14B, Ratlam Kothi, Geeta
            Bhawan Square, Indore (M.P.), 452018
          </p>
          <p>
            <i className="fa-solid fa-phone" style={{ color: "#3366FF" ,marginRight:"15px" }}></i>+91 7474454654
          </p>
          <p>
            <i className="fa-solid fa-envelope" style={{ color: "#3366FF" ,marginRight:"15px"}}></i>info@myvirtualschool.in
          </p>
        </div>
        <div className="app-image">
          <img src={app7} alt="Virtual School App" />
        </div>
      </div>
      <div className="mobile-app-section">
        <div className="app-image">
          <img src={app8} alt="Virtual School App" />
        </div>
      </div>
    </>
  );
};

export default MobileApp;
