import PropTypes from "prop-types";

const Header = ({ icon, title }) => {
  return (
    <div className="header">
      <i className={icon}></i>
      <h1>{title}</h1>
    </div>
  );
};

Header.propTypes = {
  icon: PropTypes.string.isRequired,
  // to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
