import { useState } from "react";
import "./App.css";
import Switch from "./Switch";

const App = () => {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <h1>Switch</h1>
      <Switch
        isOn={isOn}
        onToggle={handleToggle}
        label="Enable Happiness"
        name="happiness"
      />
    </div>
  );
};

export default App;
