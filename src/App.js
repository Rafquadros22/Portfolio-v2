import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import "./App.css";
import Resume from "./components/Resume";
import { Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/Resume" component={Resume} />
      <Route path="/Portfolio" component={Portfolio} />
    </>
  );
}

export default App;
