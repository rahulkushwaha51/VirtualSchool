import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";

function Layout() {
  return (
    <>
      <canvas id="canvas"></canvas>

      <div className="home-social-icons">
        <span>
          <a href="tel:+91 7474454654">
            {" "}
            <i className="fa fa-phone" style={{ color: "white" }}></i>
          </a>
        </span>
        <span>
          <a href="https://wa.me/7474454654">
            <i
              className="fa-brands fa-whatsapp "
              style={{ color: "white" }}
            ></i>
          </a>
        </span>
        <span>
          <i className="fa-brands fa-instagram" style={{ color: "white" }}></i>
        </span>
      </div>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
