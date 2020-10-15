import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Portfolios from "../routes/Portfolios";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <main>
          <Container>
            <Route path="/portfolios">
              <Portfolios />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Container>
        </main>
      </Switch>
    </Router>
  );
};

export default AppRouter;
          
        
        
