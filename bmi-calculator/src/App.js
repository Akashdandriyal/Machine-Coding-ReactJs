import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (height > 0 && weight > 0) {
      let res = weight / (height / 100) ** 2;
      setBmi(res.toFixed(2));
      if (res < 18.5) {
        setCategory("Underweight");
      } else if (res >= 18.5 && res <= 24.9) {
        setCategory("Healthy Weight");
      } else if (res >= 25 && res <= 29.9) {
        setCategory("Overweight");
      } else if (res >= 30) {
        setCategory("Obese");
      }
    }
  };
  return (
    <div className="App">
      <div className="container">
        <h1>BMI Calculator</h1>
        <div>
          <form className="form">
            <div className="form-field">
              <label>Height (in cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Weight (in kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <button onClick={handleClick}>Calculate</button>
          </form>
        </div>
        <div className="details">
          <h2>BMI = {bmi && bmi}</h2>
          {category && <h4>{category}</h4>}
          <div>
            <p>
              <b>BMI weight ranges</b>
            </p>
            <p>Less than 18.5 = Underweight</p>
            <p>Between 18.5 - 24.9 = Healthy Weight</p>
            <p>Between 25 - 29.9 = Overweight</p>
            <p>Over 30 = Obese</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
