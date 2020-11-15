import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

import "./App.css";
import Bookshelf from "./pages/Bookshelf";

function App() {
  return (
    <Router>
      <div className="header">
        <Header />
      </div>
      <div className="container app_container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bookshelf" component={Bookshelf} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
