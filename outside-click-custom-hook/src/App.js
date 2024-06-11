import { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";

import useOutsideClick from "./useOutsideClick";
import "./App.css";

const App = () => {
  const btnRef = useRef(null);
  useOutsideClick(btnRef, () => toast("Clicked outside🚀"));
  return (
    <div className="App">
      <div className="container">
        <Toaster />
        <button className="btn" ref={btnRef}>
          Click outside to show toast
        </button>
      </div>
    </div>
  );
};

export default App;
