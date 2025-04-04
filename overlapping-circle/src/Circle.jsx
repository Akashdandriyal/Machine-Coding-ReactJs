import "./Circle.css";

const Circle = ({ x, y, color }) => {
  return (
    <div
      className="circle"
      style={{ left: x, top: y, backgroundColor: color }}
    ></div>
  );
};

export default Circle;
