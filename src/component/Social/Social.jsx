import "./Social.css";

const Social = () => {
  return (
    <div className="social">
      <div className="social-links">
        <a href="https://www.instagram.com/" target="_blank" className="social-link">
          <i className="fa-brands fa-instagram" style={{ color: "#ff4747" }}></i>
          Instagram
        </a>
        <a href="https://www.facebook.com/vijay.mantra.545" target="_blank" className="social-link">
          <i className="fa-brands fa-facebook" ></i>
          Facebook
        </a>
        <a  href="https://wa.me/7474454654" target="_blank" className="social-link">
          <i className="fa-brands fa-whatsapp"style={{ color: "green" }}></i>
          WhatsApp
        </a>
        <a href="https://www.youtube.com" target="_blank" className="social-link">
          <i className="fa-brands fa-youtube"style={{ color: "red" }}></i>
          YouTube
        </a>
      </div>
    </div>
  );
};

export default Social;
