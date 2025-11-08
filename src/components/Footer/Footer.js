import "./Footer.css";

// Footer Component
const Footer = () => {
  return (
    <div className="footer">
      <p>© 2025 YourCompanyName. All rights reserved.</p>
      <div className="social-links-footer">
        <ul>
          <li>
            <a href="https://www.google.com" target="_blank">
              Google
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank">
              Twitter (X)
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank">
              FaceBook
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
