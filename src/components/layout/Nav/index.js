import React from "react";
// styles
import "./style.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__title">
        <a href="#">
          <h3>JobsNow</h3>
        </a>
      </div>
      <ul className="nav__links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Search</a>
        </li>
        <li>
          <a href="#">History</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
