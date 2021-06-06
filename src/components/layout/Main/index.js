import React from "react";
// styles
import styles from "./Main.module.scss";

const Main = ({ children }) => {
  return (
    <main style={styles.main}>
      <div className={styles.cards}>
        {/* <Card children={<Tags />} /> */}
        {children}
      </div>
      <aside className={styles.sidebar}>
        <h1>app-sidebar</h1>
      </aside>
    </main>
  );
};

export default Main;
