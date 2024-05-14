import React from "react";
import "./Footer.css";
import Pagetr from "../../utility/Pagetr";
import Reveal from "../../utility/Reveal";

const Footer = () => {
  return (
    <Reveal>
      <footer>
        <div className="footer">
          <Reveal>
            <div className="logo">
              {/* <img src={logo} alt="Gs Academy" /> */}
              <h2>GsAcademy</h2>
              <p>
                We will not only assist you by taking classes but also the exact
                and pinpoint guidelines to make your preparation better and
                closer to your destination.
              </p>
            </div>
          </Reveal>

          <div className="footer-links">
            <h2>Quick Links</h2>
            <div>
              <li className="footer-link">Home</li>
              <li className="footer-link">About</li>
              <li className="footer-link">Course</li>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">copyright@Gs Academy</p>
      </footer>
    </Reveal>
  );
};

export default Footer;
