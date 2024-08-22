import { useEffect, useState } from "react";
import "./App.css";
import Cell from "./Cell";

const App = () => {
  const [order, setOrder] = useState([]);
  const config = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ];

  useEffect(() => {
    if (order.length === config.flat().filter((val) => val).length) {
      for (let i = 1; i <= order.length; i++) {
        setTimeout(
          () =>
            setOrder((prevOrder) => prevOrder.slice(0, prevOrder.length - 1)),
          i * 1000
        );
      }
    }
  }, [order]);

  return (
    <div className="container">
      <div className="grid">
        {config.flat(1).map((val, index) => (
          <Cell
            key={index}
            activated={order.includes(index)}
            val={val}
            index={index + 1}
            handleClick={() => {
              if (!order.includes(index)) {
                setOrder((prev) => [...prev, index]);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
