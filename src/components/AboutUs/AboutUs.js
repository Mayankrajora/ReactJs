import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          Welcome to <strong>Foodify</strong> — your favorite online food ordering app!  
          We make it easy to discover, order, and enjoy delicious meals from your favorite
          restaurants, delivered right to your doorstep.
        </p>
        <p>
          Our mission is to bring people and food closer together by offering
          fast, reliable, and tasty experiences. Whether you're craving pizza, sushi,
          or something healthy — we’ve got you covered!
        </p>
        <p className="thank-you">Thank you for choosing Foodify 🍕❤️</p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
