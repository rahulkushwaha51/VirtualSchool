import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Pagetr from "../../utility/Pagetr";
import Reveal from "../../utility/Reveal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const links = [
    {
      id: 1,
      link: "Home",
      path: "/",
    },
    {
      id: 2,
      link: "About",
      path: "about",
    },
    {
      id: 3,
      link: "Services",
      path: "services",
    },
    {
      id: 6,
      link: "contact",
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
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <Reveal direction={-100}>
        <Link to="/" className="logo">
          Virtual School
        </Link>
      </Reveal>
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <Reveal direction={100}>
        <menu className={`menu ${isOpen ? "open" : ""}`}>
          {links.map(({ id, link, path, offset }) => (
            <li key={id} className="link">
              <Link
                to={path}
                // onSetActive={()=>setActiveLink(to)}
                className={activeLink === path ? "active" : ""}
                onClick={toggleMenu}
              >
                {link}
              </Link>
            </li>
          ))}
        </menu>
      </Reveal>
    </nav>
  );
};

export default Navbar;
