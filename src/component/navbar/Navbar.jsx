import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Pagetr from "../../utility/Pagetr";

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
    <Pagetr>
      {" "}
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <Link to="/" className="logo">
          Virtual School
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
        </ul>
      </nav>
    </Pagetr>
  );
};

export default Navbar;
