import React from "react";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  return (
    <div className="flex flex-wrap justify-evenly w-4/5">
      {products.map((product) => (
        <div
          className="flex flex-col p-3 w-[30%] mt-3 gap-3 border border-gray-300"
          key={product.id}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="bg-cover"
          />
          <div className="flex justify-between">
            <span>{product.title}</span>
            <b>$ {product.price}</b>
          </div>
          {cart.some((item) => item.id === product.id) ? (
            <button
              className="p-1 border-0 bg-red-600 text-white"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: {
                    id: product.id,
                  },
                })
              }
            >
              Remove from cart
            </button>
          ) : (
            <button
              className="p-1 border-0 bg-green-600 text-white"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail,
                    quantity: 1,
                  },
                })
              }
            >
              Add to cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
