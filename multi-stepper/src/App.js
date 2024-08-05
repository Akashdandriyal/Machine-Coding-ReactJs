import Stepper from "./components/Stepper";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import FourthStep from "./components/FourthStep";

import "./App.css";

const App = () => {
  const list = [<FirstStep />, <SecondStep />, <ThirdStep />, <FourthStep />];
  return (
    <div className="container">
      <Stepper list={list} />
    </div>
  );
};

export default App;
