import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Component/home1";
import Users from "./Component/Users";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" component={Users} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
