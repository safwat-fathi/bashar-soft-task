import React from "react";
// layout components
import Nav from "./components/layout/Nav";
// components
import Search from "./components/feature/Search";
import Card from "./components/UI/Card";
import Tag from "./components/UI/Tags";
// styles
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Search />
      <main>
        <Card children={<Tag />} />
      </main>
    </div>
  );
};

export default App;
