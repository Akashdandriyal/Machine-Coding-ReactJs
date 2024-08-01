import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Colors,
} from "chart.js";

import "./App.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Colors
);

const App = () => {
  const [values, setValues] = useState([]);
  useEffect(() => {
    randomizeValues();
  }, []);

  const getRandomInt = (min, max) => {
    if (max < min) {
      [min, max] = [max, min];
    }
    const range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
  };

  const randomizeValues = () => {
    const newValues = Array.from({ length: 50 }, () => getRandomInt(50, 200));
    setValues(newValues);
  };

  const data = {
    labels: values,
    datasets: [
      {
        label: "Value",
        data: values,
        backgroundColor: "red",
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        display: false,
      },
    },
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Value Chart</h1>
        <button className="randomize-btn" onClick={randomizeValues}>
          Randomize
        </button>
      </div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default App;
