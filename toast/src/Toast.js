import React from "react";

import "./Toast.css";

const Toast = ({ setIsOpen }) => {
  return (
    <div className="toast">
      <div>ℹ️ New Notification!</div>
      <div className="close-btn" onClick={() => setIsOpen(false)}>
        ❌
      </div>
    </div>
  );
};

export default Toast;
