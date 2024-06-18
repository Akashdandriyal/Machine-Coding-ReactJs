import { useState, useRef } from "react";
import "./App.css";

const App = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const otpBoxRef = useRef([]);

  const handleChange = (value, index) => {
    console.log(value);
    if (!isNaN(value)) {
      let arr = [...otp];
      arr[index] = value;
      setOtp(arr);
      if (value && index < 5) {
        otpBoxRef.current[index + 1].focus();
      }
    }
  };

  const handleBackSpaceAndEnter = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxRef.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < 5) {
      otpBoxRef.current[index + 1].focus();
    }
  };

  return (
    <div className="App">
      <h1>One Time Password (OTP)</h1>
      <div className="input-container">
        {otp.map((value, index) => (
          <input
            key={index}
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyUp={(e) => handleBackSpaceAndEnter(e, index)}
            ref={(reference) => (otpBoxRef.current[index] = reference)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
