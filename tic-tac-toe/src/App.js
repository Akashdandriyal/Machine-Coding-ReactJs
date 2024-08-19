import { useState } from "react";
import "./App.css";
import Cell from "./Cell";

const App = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();
  const [isDraw, setIsDraw] = useState(false);

  const handleClick = (index) => {
    if (winner || cells[index] !== "") {
      return;
    }
    let arr = [...cells];
    if (turn === "X") {
      arr[index] = "X";
      setTurn("O");
    } else {
      arr[index] = "O";
      setTurn("X");
    }
    setCells(arr);
    checkWinner(arr);
    if (!arr.includes("") && !winner) {
      setIsDraw(true);
    }
  };

  const checkWinner = (arr) => {
    let combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    combos.forEach((combo) => {
      if (
        arr[combo[0]] === "" ||
        arr[combo[1]] === "" ||
        arr[combo[2]] === ""
      ) {
      } else if (
        arr[combo[0]] === arr[combo[1]] &&
        arr[combo[1]] === arr[combo[2]]
      ) {
        console.log(arr[combo[0]]);
        setWinner(arr[combo[0]]);
      }
    });
  };

  const resetGame = () => {
    setWinner();
    setIsDraw(false);
    setCells(Array(9).fill(""));
  };

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <div className="winner">
        {winner && <p>Player {winner} wins!</p>}
        {!winner && isDraw && <p>It's a draw!</p>}
      </div>
      <div className="board">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            cellValue={cell}
            pos={index}
            handleClick={handleClick}
          />
        ))}
      </div>
      <button className="reset-btn" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default App;
