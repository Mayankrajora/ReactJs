import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

// Component are functions ,we make functions to reuse them just like function we use components

// Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://www.logodesign.net/logo/smoking-burger-with-lecture-364ld.png"
          alt="logo"
        />
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

// BODY Component
const MainBody = () => {
  return (
    <div className="main-body">
      <div className="search">Search will come here</div>
      <div className="res-container" style={{ background: "#fbdcdcff" }}>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return(
    <div className="footer">
      <p>© 2025 YourCompanyName. All rights reserved.</p>
      <div className="social-links-footer">
        <ul>
          <li><a href="https://www.google.com" target="_blank">Google</a></li>
          <li><a href="https://www.twitter.com" target="_blank">Twitter (X)</a></li>
          <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
          <li><a href="https://www.facebook.com" target="_blank">FaceBook</a></li>
        </ul>
      </div>
    </div>
  )
};

// Card Component to reuse
const RestaurantCard = () => {
  return (
    <div className="res-card-container">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/an6k37rvneoiwpmfmrde"
        alt="res-logo"
      ></img>
      <h2 style={{ textDecoration: "underline" }}>First Hotel</h2>
      <p>Biryani, North Indian, South Indian, Dinner</p>
      <span>
        <strong>*</strong> 4.3 stars{" "}
      </span>
    </div>
  );
};

// Main APP Component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
