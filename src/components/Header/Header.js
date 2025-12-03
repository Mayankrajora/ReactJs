import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  console.info("Header rendered",loginBtn);

  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src={LOGO_URL} alt="logo" />
        </a>
        <h2>FOODIE</h2>
      </div>

      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
        <button
          className="login-btn"
          onClick={() => setLoginBtn(loginBtn === "Login" ? "Logout" : "Login")}
        >
          {loginBtn}
        </button>
      </div>
    </div>
  );
};

export default Header;
