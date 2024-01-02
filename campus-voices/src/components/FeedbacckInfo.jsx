import React from "react";

const FeedbacckInfo = ({ icon, text }) => {
  return (
    <div className="comment">
      <div className="data-icon">{icon}</div>
      <div className="data-text">{text}</div>
    </div>
  );
};

export default FeedbacckInfo;
