import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Pagetr from "../../utility/Pagetr";
import  { RevealX } from "../../utility/Reveal";

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
      path: "/about",
    },
    {
      id: 3,
      link: "Services",
      path: "/services",
    },
    {
      id: 4,
      link: "contact",
      path: "/contact",
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
      <RevealX direction={-100}>
        <Link to="/" className="logo">
         <img src="src\assets\WhatsApp Image 2024-05-20 at 1.20.11 PM.jpeg" alt="" />
        </Link>
      </RevealX>
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <RevealX direction={100}>
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
      </RevealX>
    </nav>
  );
};

export default Navbar;
