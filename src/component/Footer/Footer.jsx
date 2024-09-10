import "./Footer.css";
import { RevealX } from "../../utility/Reveal";
import { Link } from "react-router-dom";
import Social from "../Social/Social";

const Footer = () => {
  return (
    <RevealX direction={"-100%"}>
      <footer>
        <div className="footer">
          <div className="footer-social">
            <Social />
          </div>

          <div className="footer-links">
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

          <div className="footer-contact">
            <div className="contact-details">
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <div className="contact-info-sub">
                <p>
                  15B, Ratlam Kothi, Geeta Bhawan Square, Indore (M.P.), 452018
                </p>
              </div>
            </div>
            <div className="contact-details">
              <span>
                <i className="fa fa-phone"></i>
              </span>
              <div className="contact-info-sub">
                <p>+91 7474454654, +91 7474454654</p>
              </div>
            </div>
            <div className="contact-details">
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <div className="contact-info-sub">
                <p>info@myvirtualschool.in , info@vijaymantra.in</p>
              </div>
            </div>
          </div>
        </div>
      
        <div className="copyright">
          <p>Copyright ©Virtual School 2022. All Rights Reserved</p>
          <p>Made by :    Rahul Kushwaha</p>
        </div>
      </footer>
    </RevealX>
  );
};

export default Footer;
