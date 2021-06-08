import React from "react";
// styles
import styles from "./CardsContainer.module.scss";

const CardsContainer = ({ children }) => {
  return <div className={styles.cards}>{children}</div>;
};

export default CardsContainer;
