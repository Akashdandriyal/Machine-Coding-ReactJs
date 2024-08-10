import { useState } from "react";
import "./App.css";
import Toast from "./Toast";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openToast = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }
  };
  return (
    <>
      <h1 className="heading">Toast Example</h1>
      <div className="container">
        <button className="btn" onClick={openToast}>
          Open Toast
        </button>
        {isOpen && <Toast setIsOpen={setIsOpen} />}
      </div>
    </>
  );
};

export default App;
