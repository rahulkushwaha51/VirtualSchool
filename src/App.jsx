import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./component/contact/Contact";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
