import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./components/Header/Header";
import MainBody from "./components/MainBody/MainBody";
import Footer from "./components/Footer/Footer";

// Component are functions ,we make functions to reuse them just like function we use components

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
