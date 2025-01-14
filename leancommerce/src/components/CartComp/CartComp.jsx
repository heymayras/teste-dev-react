import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const CartComp = ({ item }) => {
  const { increaseAmount, decreaseAmount } = useContext(CartContext);
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 bg-asilver mt-2">
      <div className="w-full min-h-[150px] flex items-center gap-x-4 bg-bgrey">
        {/*IMAGEM*/}
        <Link to={`/product/${id}`}>
          <img className="max-w-[100px] border rounded-md" src={image} alt="" />
        </Link>

        <div className="w-full flex flex-col">
          {/*TÍTULO E REMOÇÃO*/}
          <div className="flex justify-between mb-2">
            {/*TÍTULO*/}
            <Link
              to={`/product/${id}`}
              className="text-base font-medium text-primary hover:underline mt-[10px]"
            >
              {title}
            </Link>{" "}
            <div>
              {/*QUANTIDADE*/}
              <div className="flex gap-x-1 h-[36px] mt-[50px] mr-[15px] ">
                <div
                  onClick={() => decreaseAmount(id)}
                  className="flex-1 h-full flex justify-center items-center cursor-pointer px-1 border rounded-md bg-ddgrey text-white"
                >
                  {" "}
                  {/*MENOS ICON*/}
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
                <div className="h-full flex justify-center items-center px-4 border rounded-md font-medium bg-white">
                  {amount}
                </div>
                <div
                  onClick={() => increaseAmount(id)}
                  className="flex-1 h-full flex justify-center items-center cursor-pointer  px-1 border rounded-md bg-ddgrey text-white"
                >
                  {" "}
                  {/*MAIS ICON*/}
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
              {/*PREÇO*/}
              <div className="flex-1 flex flex-row justify-start text-xs">
                R$ {price}
              </div>
              {/*PREÇO final*/}
              <div>{`R$ ${parseFloat(price * amount).toFixed(2)}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComp;
