import React from "react";
import { Link } from "react-router-dom";
// styles
import styles from "./Card.module.scss";

const Card = ({ children, title, id }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>
      <div className={styles.tags}>
        <p>Related Skills:</p>
        {children}
      </div>
      <div className={styles.details}>
        <Link to={`/jobs/${id}`}>View Job details</Link>
      </div>
    </div>
  );
};

export default Card;
