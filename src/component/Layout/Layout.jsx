import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";

function Layout() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
