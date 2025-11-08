import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Error404.css";

const Error404 = () => {
  return (
    <>
      <Header />
      <div className="error-container">
        <div className="error-content">
          <h1 className="error-code">404</h1>
          <h2 className="error-message">Page Not Found</h2>
          <p className="error-description">
            The page you’re looking for doesn’t exist or something went wrong.
          </p>
          <a href="/" className="home-button">Go Back Home</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Error404;
