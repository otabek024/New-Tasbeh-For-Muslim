import React, { Component } from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Counter from "./components/Counter";
import List from "./components/List";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/list" component={List} />

      </Switch>
    </>
  );
}

export default App;
