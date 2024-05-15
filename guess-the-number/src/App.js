import { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [number, setNumber] = useState();
  const [message, setMessage] = useState("");
  const [guesses, setGuesses] = useState([]);
  const numRef = useRef(null);

  const handleStartClick = () => {
    setGuesses([]);
    setMessage("");
    generateRandomNum();
    setGameStarted(true);
  };

  const generateRandomNum = () => {
    let num = Math.floor(Math.random() * 101);
    setNumber(num);
  };

  const handleSubmitClick = () => {
    let guessedNum = numRef.current.value;
    numRef.current.value = "";
    if (guessedNum.length === 0 || guessedNum < 0 || guessedNum > 100) {
      alert("Enter number valid number");
      return;
    } else {
      setGuesses((prev) => [...prev, guessedNum]);
      guessedNum = parseInt(guessedNum);
      if (guessedNum === number) {
        setMessage("Congrats, You got it!!");
        setGameStarted(false);
      } else if (guessedNum - number >= 5) {
        setMessage("Too High!");
      } else if (guessedNum - number < 5 && guessedNum - number >= 1) {
        setMessage("Little High!");
      } else if (guessedNum - number <= -5) {
        setMessage("Too Low!");
      } else if (guessedNum - number > -5 && guessedNum - number <= -1) {
        setMessage("Little Low!");
      }
    }
  };

  return (
    <div className="App">
      <h1 className="title">Guess the number</h1>
      <div className="container">
        <p>Enter a guess between 0 to 100</p>
        <input
          type="number"
          min="0"
          max="100"
          ref={numRef}
          required
          disabled={!gameStarted}
        />
        <div>
          <button
            className={gameStarted ? "submitBtn" : "disabledBtn"}
            disabled={!gameStarted}
            onClick={handleSubmitClick}
          >
            Submit
          </button>
          <button
            className={!gameStarted ? "startBtn" : "disabledBtn"}
            disabled={gameStarted}
            onClick={handleStartClick}
          >
            Start
          </button>
        </div>
        <div className="message-container">
          {guesses.length > 0 && (
            <>
              <p>{message}</p>
              <p>Your guesses: {guesses.join(", ")}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
