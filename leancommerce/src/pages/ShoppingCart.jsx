import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartComp from "../components/CartComp/CartComp";

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
      <h1 className="text-3xl font-bold text-dgrey text-center">
        Shopping Cart
      </h1>
      {cart.map((item) => {
        return <CartComp item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ShoppingCart;
