import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import img from "../../assets/logo.jpeg";
import google from "../../assets/google-play.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const links = [
    {
      id: 1,
      link: "Home",
      path: "/",
    },
    {
      id: 2,
      link: "About Us",
      path: "about",
    },
    {
      id: 3,
      link: "Gallery",
      path: "gallery",
    },
    {
      id: 4,
      link: "Services",
      path: "service",
    },
    // {
    //   id: 5,
    //   link: "Hero",
    //   path: "hero",
    // },

    {
      id: 6,
      link: "Contact Us",
      path: "contact",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };
  return (
    <>
      <div className="nav-top">
        <h2>Download Our App</h2>
        <a
          href="https://play.google.com/store/apps/details?id=com.virtualschool"
          target="_blank"
          rel="noreferrer"
          className="download-btn"
        >
          <img src={google} alt="google-play" />
        </a>
      </div>

      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <Link to="/" className="logo">
          <img src={img} alt="" />
        </Link>
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          {links.map(({ id, link, path }) => (
            <li key={id} className="link">
              <Link
                to={path}
                className={activeLink === path ? "active" : ""}
                onClick={() => {
                  handleSetActive(path);
                  toggleMenu();
                }}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
