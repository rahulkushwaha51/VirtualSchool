import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./component/contact/Contact";
import { AnimatePresence } from "framer-motion";
import About from "./component/about/About";
import Background from "./utility/Background";
import Services from "./component/service/Service";
function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <Background>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Background>
      </AnimatePresence>
    </>
  );
}

export default App;
