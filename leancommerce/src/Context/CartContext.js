import React, { createContext, useState, useEffect } from "react";
import CartItem from "../components/CartComp/CartComp";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //adiciona ao carrinho
  const addToCart = (product, id) => {
    console.log(product);
    console.log(`item ${product.title} added to the cart`);
    const newItem = { ...product, amount: 1 };
    //checa se o produto já está no carrinho de compras
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    //se o item já se encontra no carrinho, adiciona um item ao total
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  console.log(cart);
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
