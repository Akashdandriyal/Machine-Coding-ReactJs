import { useState } from "react";
import "./App.css";

import Chip from "./Chip";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [chipsData, setChipsData] = useState([]);

  const addChip = (e) => {
    if (e.key === "Enter" && inputText) {
      setChipsData([...chipsData, { id: Date.now(), text: inputText }]);
      setInputText("");
    }
  };

  const removeChip = (id) => {
    let arr = chipsData.filter((chip) => chip.id !== id);
    setChipsData(arr);
  };

  return (
    <div className="container">
      <h1>Input Chips</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={addChip}
        />
        <div className="chips-container">
          {chipsData.map((chip) => (
            <Chip key={chip.id} removeChip={removeChip} {...chip} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
