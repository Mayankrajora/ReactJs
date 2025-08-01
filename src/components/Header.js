import { LOGO_URL } from "../utils/constants";

// Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="http://localhost:1234">
          <img src={LOGO_URL} alt="logo" />
        </a>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
