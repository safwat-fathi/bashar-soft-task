import React from "react";
// styles
import styles from "./Sidebar.module.scss";

const Sidebar = ({ title, items }) => {
  return (
    <aside className={styles.sidebar} role="sidebar">
      <h4>{title}:</h4>
      <ul>
        {items.map((item) => {
          return <li key={item.uuid}>{item.title}</li>;
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
