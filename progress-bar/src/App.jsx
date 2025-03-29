import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./ProgressBar";

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        let newProgress = prevProgress + Math.floor(Math.random() * 11);
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="title">Progress Bar</h1>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default App;
