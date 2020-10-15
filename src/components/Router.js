import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Info from "../routes/Info";
import Portfolio from "../routes/Portfolio";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <main>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </main>
      </Switch>
    </Router>
  );
};

export default AppRouter;
          
        
        
