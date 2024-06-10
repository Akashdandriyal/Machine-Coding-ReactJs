import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div className="wrapper">
      <h1>Counter is {state.count}</h1>
      <div>
        <button
          className="btn btnGreen"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <button
          className="btn btnRed"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
