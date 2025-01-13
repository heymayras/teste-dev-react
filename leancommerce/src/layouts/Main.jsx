import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Shop from "../pages/Shop";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Shop />
      </div>
      <Footer />
    </>
  );
};

export default Main;
