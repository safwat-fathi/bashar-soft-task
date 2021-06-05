import React from "react";
// ui components
import Card from "../../components/UI/Card";
import Tags from "../../components/UI/Tags";
// layout components
import Main from "../../components/layout/Main";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div className="cards">
        <Card children={<Tags />} />
        <Card children={<Tags />} />
        <Card children={<Tags />} />
      </div>
      <aside className="app-sidebar">
        <h1>app-sidebar</h1>
      </aside>
    </>
  );
};

export default Home;
