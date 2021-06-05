import React from "react";
// react router
import { Link } from "react-router-dom";
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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
