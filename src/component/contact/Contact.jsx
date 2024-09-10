import { useState } from "react";
import "./Contact.css";
// import emailjs from "@emailjs/browser";
import { RevealX } from "../../utility/Reveal";
import GoogleMap from "./GoogleMap";
import Header from "../general/Header";
// import Social from "../Social/Social";
const Contact = () => {
  const [alert, setAlert] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_tfohcje",
  //       "template_efi9ykh",
  //       form.current,
  //       "T2911MMHUGRXgWeKK"
  //     )
  //     .then(
  //       () => {
  //         setAlert("Email sent successfully");
  //         setTimeout(() => {
  //           setAlert(null);
  //         }, 2000);
  //       },
  //       (error) => {
  //         setAlert(error.text);
  //         setTimeout(() => {
  //           setAlert(null);
  //         }, 2000);
  //       }
  //     );
  // };
  //   const showAlert=(message,type)=>{
  // setAlert({me})
  // }

  const handlechange = (e) => {
    const { name, value } = e.target;
    if (name === "user_name") {
      setName(value);
    } else if (name === "user_email") {
      setEmail(value);
    } else if (name === "user_message") {
      setMessage(value);
    } else if (name === "user_mobile") {
      setMobile(value);
    } else if (name === "user_subject") {
      setSubject(value);
    }
  };

  const config = {
    SecureToken: "11bdacf2-ce21-42d2-b9f8-c0746a71ce86",
    To: "virtualschool@yopmail.com",
    From: email,
    Subject: `This is the subject ${subject}`,
    Body: `Name: ${name} Email: ${email} Message: ${message} Mobile: ${mobile}`,
  };
  const sendEmail = (e) => {
    e.preventDefault();

    if (window.Email) {
      window.Email.send(config).then(
        () => {
          console.log("Email sent successfully");

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
    }
  };

  return (
    <>
      <Header
        icon={"fa fa-phone-volume"}
        title={"Contact Us"}
      />
      <div id="contact" className="contact">
        <RevealX direction={-100}>
          <div className="form">
            <h2 className="heading">
              Message <span>Us!</span>
            </h2>
            <form onSubmit={sendEmail}>
              <div className="input-box">
                <input
                  type="text"
                  name="user_name"
                  value={name}
                  onChange={handlechange}
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  name="user_email"
                  value={email}
                  onChange={handlechange}
                  placeholder="Your Email"
                />
              </div>
              <div className="input-box">
                <input
                  type="number"
                  value={mobile}
                  onChange={handlechange}
                  name="user_mobile"
                  placeholder="Mobile  Number"
                />
                <input
                  type="text"
                  name="user_subject"
                  value={subject}
                  placeholder="Email Subject"
                  onChange={handlechange}
                />
              </div>
              <textarea
                name="user_message"
                placeholder="Your Message"
                value={message}
                onChange={handlechange}
                cols={20}
                rows={5}
              />
              <button type="submit" value="Send" className="btn">
                Send Message
              </button>
            </form>
            <p className={`${alert ? "alert" : ""}`}>{alert}</p>
          </div>
        </RevealX>

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
                  14B, Ratlam Kothi, Geeta Bhawan Square,
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
      <div className="social">{/* <Social /> */}</div>

      <GoogleMap />
    </>
  );
};

export default Contact;
