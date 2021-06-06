import React from "react";
import { Link } from "react-router-dom";
// styles
import "./style.scss";

const Card = ({ children, title, id }) => {
  return (
    <div className="card">
      <div className="card__title">
        <h1>{title}</h1>
      </div>
      <div className="card__tags">
        <p>Related Skills:</p>
        {children}
      </div>
      <div className="card__details">
        <Link to={`/jobs/${id}`}>View Job details</Link>
      </div>
    </div>
  );
};

export default Card;
