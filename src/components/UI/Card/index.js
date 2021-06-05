import React from "react";
// styles
import "./style.scss";

const Card = ({ children }) => {
  return (
    <div className="card">
      <div className="card__title">
        <h1>Card title</h1>
      </div>
      <div className="card__tags">
        <p>Related Skills:</p>
        {children}
      </div>
      <div className="card__details">
        <a href="#">View Job details</a>
      </div>
    </div>
  );
};

export default Card;
