import  { useState, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { RevealX } from "../../utility/Reveal";
import GoogleMap from "./GoogleMap";
// import Social from "../Social/Social";
const Contact = () => {
  const [alert, setAlert] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_s419xnc",
        "template_yo9fcix",
        form.current,
        "8gAx5c3B9hdKWhTMD"
      )
      .then(
        () => {
          setAlert("Email sent successfully");
          setTimeout(() => {
            setAlert(null);
          }, 2000);
        },
        (error) => {
          setAlert(error.text);
          setTimeout(() => {
            setAlert(null);
          }, 2000);
        }
      );
  };
  //   const showAlert=(message,type)=>{
  // setAlert({me})
  //   }

  return (
    <>
      <div id="contact" className="contact">
        <RevealX direction={-100}>
          <div className="form">
            <h2 className="heading">
              Message <span>Us!</span>
            </h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-box">
                <input type="text" name="user_name" placeholder="Your Name" />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Mobile  Number"
                />
                <input
                  type="text"
                  name="user_email"
                  placeholder="Email Subject"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                cols={20}
                rows={5}
              />
              <button type="submit" value="Send" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </RevealX>
        <p className={`${alert ? "alert" : ""}`}>{alert}</p>
        <RevealX direction={100}>
          <div className="contact-info">
            <h2 className="heading">
              Contact <span>Details!</span>
            </h2>
            <div className="contact-details">
              <span>
                {" "}
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <div className="contact-info-sub">
                <h3>Office</h3>
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
                <h3>Call Us</h3>
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
                <h3>Email Us</h3>
                <p>
                  info@vijaymantra.in <br />
                  info@vijaymantra.in
                </p>
              </div>
            </div>
          </div>
        </RevealX>
      </div>
      <div className="social">
      
        {/* <Social /> */}
      </div>
      
      <GoogleMap />
    </>
  );
};

export default Contact;
