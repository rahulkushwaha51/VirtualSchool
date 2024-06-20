import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ link, to, title }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <span>
        <Link to={`/${to}`}>{link}</Link>
      </span>
      <span>/</span>
      <span>{title}</span>
    </div>
  );
};

Header.propTypes = {
  link: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
