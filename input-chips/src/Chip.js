import React from "react";

import "./Chip.css";

const Chip = ({ removeChip, id, text }) => {
  return (
    <div className="chip">
      <span>{text}</span>
      <span className="remove-btn" onClick={() => removeChip(id)}>
        ❌
      </span>
    </div>
  );
};

export default Chip;
