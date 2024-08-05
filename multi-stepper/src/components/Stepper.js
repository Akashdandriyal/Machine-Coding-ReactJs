import { useState } from "react";

import "./Stepper.css";

const Stepper = ({ list }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepCount = list.length;
  const handleNext = () => {
    if (currentStep < stepCount - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div className="stepper">
      <div className="steps-container">
        <div className="steps-wrapper">
          {[...Array(stepCount).keys()].map((step) => (
            <div
              className={`steps ${currentStep >= step ? "active" : ""}`}
              key={step}
              onClick={() => setCurrentStep(step)}
            >
              {step + 1}
            </div>
          ))}
        </div>
        <div
          className="progress-line"
          style={{ width: `${(100 / (stepCount - 1)) * currentStep}%` }}
        ></div>
      </div>
      <div className="content">{list[currentStep]}</div>
      <div className="action-buttons">
        <button
          onClick={handlePrev}
          className={`${currentStep === 0 ? "disabled" : ""}`}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className={`${currentStep === stepCount - 1 ? "disabled" : ""}`}
          disabled={currentStep === stepCount - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
