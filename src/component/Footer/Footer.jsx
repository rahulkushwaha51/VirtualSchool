import "./Footer.css";
import { RevealX, RevealY } from "../../utility/Reveal";
import { Link } from "react-router-dom";
import Social from "../Social/Social";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
       <RevealY direction={{ use: true, value: "10%" }} opacity={{ use: true, value: 1 }} duration={1}>
       <div className="footer-social">
          <h3>Follow Us</h3>
          <Social />
        </div>
        </RevealY>

        <RevealY direction={{ use: true, value: "10%" }} opacity={{ use: true, value: 1 }} duration={1}>
        <div className="footer-links">
          <h3>Important Links</h3>
          <Link to={"/"} className="footer-link">
            Home
          </Link>
          <Link to={"/contact"} className="footer-link">
            Contact
          </Link>
          <Link to={"/about"} className="footer-link">
            About
          </Link>
          <Link to={"/service"} className="footer-link">
            Services
          </Link>
        </div>
        </RevealY>
        <RevealY
          direction={{ use: true, value: "10%" }}
          opacity={{ use: true, value: 1 }}
          duration={1}
        >
          <div className="footer-contact">
            <h3>Get in Touch </h3>
            <div className="contact-details">
              <span>
                <a href="http://myvirtualschool.in">
                  <i className="fa-solid fa-location-dot"></i>
                </a>
              </span>
              <div className="contact-info-sub">
                <p>
                  14B, Ratlam Kothi, Geeta Bhawan Square, Indore (M.P.), 452018
                </p>
              </div>
            </div>
            <div className="contact-details">
              <span>
                <i className="fa fa-phone"></i>
              </span>
              <div className="contact-info-sub">
                <p>+91 7474454654</p>
              </div>
            </div>
            <div className="contact-details">
              <span>
                <a href="http://myvirtualschool.in">
                  {" "}
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </span>
              <div className="contact-info-sub">
                <p>info@myvirtualschool.in</p>
              </div>
            </div>
          </div>
        </RevealY>
      </div>
      <RevealY
        direction={{ use: true, value: "10%" }}
        opacity={{ use: true, value: 1 }}
        duration={1}
      >
        <div className="copyright">
          <p>Copyright ©Virtual School 2022. All Rights Reserved</p>
          <p>Made by : Rahul Kushwaha</p>
        </div>
      </RevealY>
    </footer>
  );
};

export default Footer;
