import React, { useState } from "react";
import "./App.css";

const Accordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="accordion">
      <div className="accordion-header" onClick={() => setShow(!show)}>
        <h3>{question}</h3>
        <p className={show ? "down" : undefined}>&darr;</p>
      </div>
      {show && (
        <div className="accordion-content">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
