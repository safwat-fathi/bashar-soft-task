import React from "react";
// react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// layout components
import Nav from "./components/layout/Nav";
import Main from "./components/layout/Main";
// features components
import SearchInput from "./components/feature/SearchInput";
// screens
import Home from "./screens/Home";
import Search from "./screens/Search";

// import Card from "./components/UI/Card";
// import Tags from "./components/UI/Tags";
// styles
import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <SearchInput />
        <Switch>
          <Main>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Main>
        </Switch>
        {/* <div className="title">
        <h1>All Jobs (255)</h1>
      </div> */}
      </div>
    </Router>
  );
};

export default App;
