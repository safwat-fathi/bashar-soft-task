import React from "react";
// styles
import styles from "./Main.module.scss";

const Main = ({ children }) => {
  return <main style={styles.main}>{children}</main>;
};

export default Main;
