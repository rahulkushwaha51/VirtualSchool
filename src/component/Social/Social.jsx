
import "./Social.css";

const Social = () => {
  return (
    <div className="social">
      {/* <h1>FOLLOW US ON SOCIAL MEDIA</h1> */}
      <div className="social-links">
        <a href="https://www.instagram.com/" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.whatsapp.com" target="_blank">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default Social;
