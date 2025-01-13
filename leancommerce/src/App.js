import React from "react";
import Main from "./layouts/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/DetailedProduct";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Main />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
