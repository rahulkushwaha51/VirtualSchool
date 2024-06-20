
import "./Footer.css";
import { RevealX } from "../../utility/Reveal";
import { Link } from "react-router-dom";
import Social from "../Social/Social";
import img from '../../assets/logo.jpeg'
const Footer = () => {
  return (
    <RevealX direction={"-100%"}>
      <footer>
        <div className="footer">
          <div className="logo">
            <img
              src={img}
            />
            <h2>Follow us on Social media!</h2>
            <Social/>
          </div>

          <div className="footer-links">
            <h2>Quick Links</h2>
            <div>
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
          </div>
          <div className="footer-contact">
            <h2>Contact Us</h2>
            <div className="contact-details">
              <span>
                {" "}
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <div className="contact-info-sub">
                <p>
                  15B, Ratlam Kothi, Geeta Bhawan Square,
                  <br /> Indore (M.P.), 452018
                </p>
              </div>
            </div>
            <div className="contact-details">
              <span>
                {" "}
                <i className="fa fa-phone"></i>
              </span>
              <div className="contact-info-sub">
                <p>
                  +91 7474454654 <br />
                  +91 7474454654
                </p>
              </div>
            </div>
            <div className="contact-details">
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <div className="contact-info-sub">
                <p>
                  info@vijaymantra.in <br />
                  info@vijaymantra.in
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* <p className="copyright">copyright@Gs Academy</p> */}
      </footer>
    </RevealX>
  );
};

export default Footer;
