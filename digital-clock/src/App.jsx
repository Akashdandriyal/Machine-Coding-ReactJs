import { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState("00:00:00");
  const requestRef = useRef();
  const updateTime = () => {
    const date = new Date();
    let hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    setTime(`${hours}:${minutes}:${seconds} ${ampm}`);
    requestRef.current = requestAnimationFrame(updateTime);
  };

  useEffect(() => {
    updateTime();
    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);
  return (
    <div className="wrapper">
      <h1 className="clock">{time}</h1>
    </div>
  );
};

export default App;
