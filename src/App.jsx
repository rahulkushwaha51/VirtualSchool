import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from './component/contact/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
