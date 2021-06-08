import React from "react";
import { Link } from "react-router-dom";
// styles
import styles from "./Sidebar.module.scss";

const Sidebar = ({ title, items }) => {
  return (
    <aside className={styles.sidebar} role="sidebar">
      <h4>{title}:</h4>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.uuid}>
              <Link to={`/jobs/${item.uuid}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
