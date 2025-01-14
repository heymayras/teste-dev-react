import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;
  return (
    <div className=" rounded-md border border-lgrey border- h-[350px] mb-4 relative overflow-hidden group transition ">
      <div className="w-full h-full flex justify-center">
        <div className="w-[200px] mx-auto flex justify-center items-center">
          <div>
            <p className="absolute bottom-14 left-2 truncate  md:text-clip  text-ddgrey">
              {" "}
              {title}
            </p>{" "}
            <p className="absolute bottom-10 left-2 text-sm font-medium text-ddgrey">
              R$ {price}{" "}
            </p>
          </div>
          <Link to={`/product/${id}`}>
            <img
              className="max-h-[160px] group-hover:scale-125 transition duration-300"
              src={image}
              alt=""
            />
          </Link>

          <Link
            to={"/favorites"}
            className="absolute top-4 right-4 hover:scale-125"
          >
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </Link>

          <div className="absolute bottom-2 justify-center">
            <button
              onClick={() => addToCart(product, id)}
              className="mx-auto py-1 px-28 mt-3 text-sm font-medium text-nowrap text-white focus:outline-none bg-ddgrey rounded-lg border-ddgrey hover:bg-dgreen hover:text-white focus:z-10"
            >
              Buy it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
