import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import "./Header.css";

// Header Component
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <a href="http://localhost:1234">
          <img src={LOGO_URL} alt="logo" />
        </a>
        <h2>FOODIE</h2>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
            className="login-btn"
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
