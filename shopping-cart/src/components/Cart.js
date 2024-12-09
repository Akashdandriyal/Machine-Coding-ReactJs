import React, { useEffect, useState } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart
        .reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0)
        .toFixed(2)
    );
  }, [cart]);

  const changeQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  return (
    <div className="flex flex-col m-2 p-2 w-1/5 bg-slate-300">
      <h2 className="text-center text-xl font-bold">Cart</h2>
      <p className="text-center font-bold">Subtotal $ {total}</p>
      {cart.length > 0 ? (
        cart.map((cartItem) => (
          <div
            className="flex border border-gray-500 p-2 m-2 justify-between"
            key={cartItem.id}
          >
            <div className="flex gap-2">
              <img
                src={cartItem.thumbnail}
                alt={cartItem.title}
                className="bg-cover w-1/4"
              />
              <div className="flex flex-col justify-evenly">
                <span>{cartItem.title}</span>
                <b>$ {cartItem.price}</b>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  changeQuantity(cartItem.id, cartItem.quantity - 1)
                }
              >
                -
              </button>
              <span>{cartItem.quantity}</span>
              <button
                onClick={() =>
                  changeQuantity(cartItem.id, cartItem.quantity + 1)
                }
              >
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <span>Cart is empty!</span>
      )}
    </div>
  );
};

export default Cart;
