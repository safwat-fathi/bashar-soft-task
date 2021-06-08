import React from "react";
// styles
import styles from "./Panel.module.scss";

const Panel = ({ title, description, type, importance, level }) => {
  return (
    <div className={styles.panel}>
      <div>
        <h4>{title}</h4>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <ul className={styles.list}>
        <li>
          <strong>Type:</strong> {type}
        </li>
        <li>
          <strong>Importance:</strong> {importance}
        </li>
        <li>
          <strong>Level:</strong> {level}
        </li>
      </ul>
    </div>
  );
};

export default Panel;
