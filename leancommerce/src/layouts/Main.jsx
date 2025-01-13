import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Products />
      </div>
      <Footer />
    </>
  );
};

export default Main;
