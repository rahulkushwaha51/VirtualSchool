import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import img from "../../assets/home_image/logo.jpeg";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [activeSubmenu, setActiveSubmenu] = useState(null); // Track active submenu

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
      id: 5,
      link: "Counseling",
      subLinks: [
        { id: 1, link: "School Admission Counseling", path: "admission" },
        {
          id: 2,
          link: "College Admission Counseling",
          path: "collegecounseling",
        },
        { id: 3, link: "Career Counseling", path: "careercounseling" },
        { id: 4, link: "IIT/JOSAA/NEET/CLAT Counseling", path: "entrance" },
      ],
    },

    {
      id: 6,
      link: "Services",
      subLinks: [
        { id: 1, link: "Workshop & Seminar Support", path: "workshop" },
        { id: 2, link: "Virtual App Support", path: "virtual" },
        { id: 4, link: "Academic Support", path: "academic" },
        {
          id: 5,
          link: "School Intern Program & Channel Partner",
          path: "program",
        },
      ],
    },
    {
      id: 3,
      link: "Gallery",
      path: "gallery",
    },

    {
      id: 4,
      link: "Get Our App",
      path: "getapp",
    },
    {
      id: 7,
      link: "Contact Us",
      path: "contact",
    },
  ];

  const toggleMenu = () => {
    setActive(!active);
    if (activeSubmenu) setActiveSubmenu(null);
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
    toggleMenu();
    setActiveSubmenu(null); // Close submenu when a main link is clicked
  };

  const toggleSubmenu = (id) => {
    if (activeSubmenu === id) {
      setActiveSubmenu(null); // Close submenu if it's open
    } else {
      setActiveSubmenu(id); // Open the corresponding submenu
    }
  };

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <img src={img} alt="Virtual School" />
          </Link>
        </div>
        <div
          className={`togglemenu ${active ? "active" : ""}`}
          onClick={toggleMenu}
        ></div>
        <nav className={`navbar ${active ? "active" : ""}`}>
          <menu className={`menu ${active ? "active" : ""}`}>
            {links.map(({ id, link, path, subLinks }) => (
              <li key={id} className={`link `}>
                <Link
                  to={path}
                  onClick={() =>
                    subLinks ? toggleSubmenu(id) : handleSetActive(path)
                  }
                >
                  {link} {subLinks && <b>⟩</b>}
                </Link>

                {subLinks && (
                  <menu
                    className={`submenu ${
                      activeSubmenu === id ? "active" : ""
                    }`}
                  >
                    {subLinks.map(
                      ({ id: subId, link: subLink, path: subPath }) => (
                        <li key={subId} className="sublink">
                          <Link to={subPath} onClick={toggleMenu}>
                            {subLink}
                          </Link>
                        </li>
                      )
                    )}
                  </menu>
                )}
              </li>
            ))}
          </menu>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
