
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./component/contact/Contact";
import { AnimatePresence } from "framer-motion";
import About from "./component/about/About";
// import Background from "./utility/Background";
import Services from "./component/service/Service";
import ImageGallery from "./component/gallery/ImageGallery";
import Hero from "./component/Home/Hero";
function App() {
  return (
    <>
      <AnimatePresence mode="wait">
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/hero" element={<Hero />} />

            <Route path="/service" element={<Services />} />
            <Route path="/gallery" element={<ImageGallery />} />
          </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
