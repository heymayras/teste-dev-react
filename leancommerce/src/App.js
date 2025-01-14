import React from "react";
import Main from "./layouts/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Product from "./pages/ProductPage";
import CartItem from "./components/CartComp/CartComp";
import ShoppingCart from "./pages/ShoppingCart";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productId" element={<Product />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
