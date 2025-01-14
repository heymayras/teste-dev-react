import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import Product from "../components/Product";

const ProductPage = ({ product }) => {
  const { id, image, category, title, price } = product;
  return <div></div>;
};

export default ProductPage;
