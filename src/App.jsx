import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./component/contact/Contact";
import { AnimatePresence } from "framer-motion";
import About from "./component/about/About";
// import Background from "./utility/Background";

import ImageGallery from "./component/gallery/ImageGallery";
import Hero from "./component/Home/Hero";
import Admissions from "./component/counseling/Admission";
import IItJeeCounselling from "./component/counseling/IItJeeCounseling";
import MentorEducation from "./component/service/MentorEdu";
import VirtualAppSupport from "./component/service/VirtualApp";
import WorkshopSeminar from "./component/service/Workshop";
import AcademicSupport from "./component/service/Academic";

import Programs from "./component/service/Program";
import CareerCounseling from "./component/counseling/CareerCounselling";
import CollegeCounseling from "./component/counseling/CollegeCounseling";
import MobileApp from "./component/myapp/Myapp";
import Gallery from "./component/general/Slider3d";
import Slider3d from "./component/general/Slider3d";
import Slider from "./component/Slider/Slider";
// import Carousel from "./component/general/Slider3d";
// import TestimonialSlider from "./component/general/Slider3d";
function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/hero" element={<Hero />} />

          <Route path="/admission" element={<Admissions />} />
          <Route path="/entrance" element={<IItJeeCounselling />} />
          <Route path="/careercounseling" element={<CareerCounseling />} />
          <Route path="/collegecounseling" element={<CollegeCounseling />} />

          <Route path="/mentor" element={<MentorEducation />} />
          <Route path="/virtual" element={<VirtualAppSupport />} />
          <Route path="/workshop" element={<WorkshopSeminar />} />
          <Route path="/academic" element={<AcademicSupport />} />
          <Route path="/program" element={<Programs />} />
          <Route path="/getapp" element={<MobileApp />} />
          <Route path="/gallery" element={<ImageGallery />} />
      
          <Route path="/3d" element={<Slider3d />} />


         
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
