import React from "react";
// react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// layout components
import Nav from "./components/layout/Nav";
// layout components
import Main from "./components/layout/Main";
// features components
import SearchInput from "./feature/SearchInput";
// screens
import Home from "./screens/Home";
import Search from "./screens/Search";
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
            {/* <Route path="/jobs/:uuid">
              <Jobs />
            </Route> */}
          </Main>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
