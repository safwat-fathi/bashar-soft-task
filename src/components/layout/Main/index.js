import React from "react";
// styles
import "./style.scss";

const Main = ({ children }) => {
  return (
    <main>
      {children}
      {/* <div className="cards">
        <Card children={<Tag />} />
        <Card children={<Tag />} />
        <Card children={<Tag />} />
      </div>
      <aside className="app-sidebar">
        <h1>app-sidebar</h1>
      </aside> */}
    </main>
  );
};

export default Main;
