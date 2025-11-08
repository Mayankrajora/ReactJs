import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./components/Header/Header";
import MainBody from "./components/MainBody/MainBody";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Error404 from "./components/Error404/Error404";

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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error404 />
  },
  {
    path: "/about",
    element: <AboutUs />
  },
  {
    path: "/contact",
    element: <ContactUs />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
