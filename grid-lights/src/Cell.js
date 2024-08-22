import "./Cell.css";

const Cell = ({ activated, val, index, handleClick }) => {
  return val ? (
    <div
      className={`cell content-cell ${activated ? "activated" : ""}`}
      onClick={handleClick}
    >
      {index}
    </div>
  ) : (
    <div className="cell"></div>
  );
};

export default Cell;
