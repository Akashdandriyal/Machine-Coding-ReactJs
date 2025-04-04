import { useState } from "react";
import "./App.css";
import Circle from "./Circle";

const App = () => {
  const [circles, setCircles] = useState([]);

  function getRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, "0")}`;
  }

  const handleClick = (e) => {
    console.log(e.clientX, e.clientY);
    const newCircle = {
      x: e.clientX,
      y: e.clientY,
    };

    setCircles((prev) => {
      const oldCircles = [...prev];
      const color = getRandomHexColor();
      oldCircles.forEach((circle) => {
        const x1 = circle.x;
        const y1 = circle.y;
        const x2 = newCircle.x;
        const y2 = newCircle.y;
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const radiusSum = 100;
        if (distance < radiusSum) {
          circle.color = color;
          newCircle.color = color;
        }
      });
      return [...oldCircles, newCircle];
    });
  };

  return (
    <div className="circle-container" onClick={handleClick}>
      {circles.map((circle, index) => (
        <Circle
          key={index}
          x={circle.x}
          y={circle.y}
          color={circle.color ? circle.color : "red"}
        />
      ))}
    </div>
  );
};

export default App;
