import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })

      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-auto max-w-fit px-4 py-16">
      <div className=" mx-auto grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data.map((product) => (
          <a
            key={product.id}
            href={product.href}
            className="group object-center outline outline-1 outline-offset-8 rounded-sm"
          >
            <img
              src={product.image}
              alt="#"
              className="mx-auto my-4 aspect-square size-40 rounded-lg  bg-gray-200 object-contain group-hover:opacity-75 xs:aspect-[7/8]"
            />
            <p className="mt-1 mx-auto truncate text-ddgrey ">
              {" "}
              {product.title}
            </p>{" "}
            <p className="mt-1 mx-auto text-sm font-medium texast-ddgrey">
              R$ {product.price}
            </p>
            <button
              type="button"
              class="flex mx-auto py-1 px-20 mt-3 text-sm font-medium text-nowrap text-white focus:outline-none bg-ddgrey rounded-lg border-ddgrey hover:bg-dgreen hover:text-white focus:z-10 focus:ring-4 focus:ring-lgreen"
            >
              Buy it
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Products;
