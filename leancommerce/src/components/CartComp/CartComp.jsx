import React from "react";
import { Link } from "react-router-dom";

const CartComp = ({ item }) => {
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4 ">
        {/*IMAGEM*/}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>

        <div className="w-full flex flex-col">
          {/*TÍTULO E REMOÇÃO*/}
          <div className="flex justify-between mb-2">
            {/*TÍTULO*/}
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/*ICON REMOÇÃO*/}
            <div className="text-xl cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 hover:text-red transition"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div>{/*QUANTIDADE*/}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComp;
