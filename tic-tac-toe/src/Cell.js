import "./Cell.css";

const Cell = ({ cellValue, pos, handleClick }) => {
  return (
    <div
      className={`cell ${!cellValue ? "pointer" : ""}`}
      onClick={() => handleClick(pos)}
    >
      {cellValue}
    </div>
  );
};

export default Cell;
