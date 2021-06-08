import React from "react";
// styles
import styles from "./PanelsContainer.module.scss";

const PanelsContainer = ({ children }) => {
  return (
    <div className={styles.panels}>
      <h2>Related Skills</h2>
      {children}
    </div>
  );
};

export default PanelsContainer;
