import React from "react";
import "./Home.css";
import Reveal from "../../utility/Reveal";
import Pagetr from "../../utility/Pagetr";
// import img from "../assets/Rahul.jpg";
const Home = () => {
  return (
      <section>
        <Reveal direction={100}>
          <h1>hello this is rahul</h1>
        </Reveal>
        <Reveal direction={-100}>
          <div>
            <p>
              I am a passionate and dedicated front-end developer with
              experience in building responsive websites, web applications, and
              mobile applications using HTML5, CSS3, JavaScript frameworks such
              as ReactJS, AngularJS, VueJS. I have also worked on server
            </p>
          </div>
        </Reveal>
      </section>
  );
};

export default Home;
