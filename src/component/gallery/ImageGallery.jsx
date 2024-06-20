import { motion } from "framer-motion";
import "./ImageGallery.css";

import Header from "../general/Header";

import img1 from "../../assets/image1.jpeg";
import img2 from "../../assets/image2.jpeg";
import img3 from "../../assets/image3.jpeg";
import img4 from "../../assets/image4.jpeg";
import img5 from "../../assets/image5.jpeg";
import img6 from "../../assets/image6.jpeg";
import img7 from "../../assets/image7.jpeg";
import img8 from "../../assets/image8.jpeg";
import { useState } from "react";

const ImageGallery = () => {
  const images = [
    `${img1}`,
    `${img2}`,
    `${img3}`,
    `${img4}`,
    `${img5}`,
    `${img6}`,
    `${img7}`,
    `${img8}`,
  ];
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <Header Header link={"Home"} to={""} title={"Gallery"} />
      <div className="gallery-container">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="image-card"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={src} alt={`Gallery item ${index + 1}`} />
            <button className="view-button" onClick={() => openModal(src)}>
              <i className="fa-solid fa-eye" style={{ color: "#689ffd" }}></i>
            </button>
          </motion.div>
        ))}
        {selectedImage && (
          <Modal selectedImage={selectedImage} closeModal={closeModal} />
        )}
      </div>
    </>
  );
};
// eslint-disable-next-line react/prop-types
const Modal = ({ selectedImage, closeModal }) => {
  return (
    <>
      <div className="modal-backdrop" onClick={closeModal}>
        <motion.div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {" "}
          <button className="close-button" onClick={closeModal}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <img src={selectedImage} alt="Selected" />
        </motion.div>
      </div>
    </>
  );
};

export default ImageGallery;
