import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { ProductContext } from "../../Context/ProductContext";

const ProductDetails = () => {
  //get product id from url
  const { id } = useParams();
  console.log(id);
  const { products } = useContext(ProductContext);
  const { increaseAmount, decreaseAmount, itemAmount, addToCart } =
    useContext(CartContext);

  // get single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  //if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center">Loading...</section>
    );
  }
  //destructure product
  const { title, price, description, image, category } = product;

  return (
    <section className="pt-32 pb-12 lg:py32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center  mb-8 lg:mb-0">
            {/* img */}{" "}
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left mr-20">
            <h1 className="text-[26px] text-left font-medium mb-2 max-w-[450px]">
              {title}
            </h1>
            <p className="text-left">{category}</p>
            <div className="text-left text-xl text-orange font-medium mb-6">
              R$ {price}
            </div>
            <p className="text-left text-justify mb-8">{description}</p>
            {/*QUANTIDADE*/}
            <div className="flex gap-x-1 h-[36px] mt-[50px] mr-[15px] w-full">
              {/*MENOS ICON*/}
              <div
                onClick={() => decreaseAmount(product.id)}
                className="flex-1 flex justify-center items-center cursor-pointer px-1 border rounded-md bg-ddgrey text-white"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </div>
              <div className="h-full flex justify-center items-center px-80 border rounded-md font-medium bg-white">
                {itemAmount}
              </div>
              {/*MAIS ICON*/}
              <div
                onClick={() => increaseAmount(product.id)}
                className="flex-1 flex justify-center items-center cursor-pointer px-1 border rounded-md bg-ddgrey text-white"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
            <div>
              <button
                onClick={() => addToCart(product, product.id)}
                className=" bg-dgreen text-white rounded-md py-3 w-full text-sm mt-3 "
              >
                Add To Cart{" "}
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
