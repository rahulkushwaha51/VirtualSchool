/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import "./Modal.css";

const Modal = ({ open, close }) => {
  return (
    <>
      {open &&
        createPortal(
          <div className="modal">
            <div className="modal-content">
              {/* <div className="modal-image">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Modal Graphic"
                  className="modal-img"
                />
              </div> */}
              <form action="submit" className="modal-form">
                <h2>Enter Your Details</h2>
                <input type="text" placeholder="Enter Your Name" required />
                <input type="email" placeholder="Enter Your Email" required />
                <input type="tel" placeholder="Enter Your Number" required />
                <textarea placeholder="Enter Your Message" rows="4" required></textarea>
                <button type="submit" className="btn">
                  Submit
                </button>
                <button type="button" onClick={close} className="close">
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </form>
            </div>
          </div>,
          document.getElementById("modal-root")
        )}
    </>
  );
};

export default Modal;
