import React from "react";
// layout components
import Nav from "./components/layout/Nav";
// components
import Search from "./components/Search";
// styles
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Search />
    </div>
  );
};

export default App;
