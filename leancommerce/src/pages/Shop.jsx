import React, { useEffect, useState, useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import Product from "../components/Product";

const Shop = () => {
  const { products } = useContext(ProductContext);
  //filtro de produtos de vestuário
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <section className="py-16 px-16">
        <div className="container mx-auto">
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
