
import React from "react";
import "./Hint.css";

const Hint = ({ hint }) => {
  return (
    <div className="hint">
      <p className="hint-text">Hint:</p>
      <p className="hint-value">{hint}</p>
    </div>
  );
};

export default Hint;