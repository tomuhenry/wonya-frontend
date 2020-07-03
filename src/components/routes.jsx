import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopBar from "./navbar/TopBar";
import Footer from "./navbar/Footer";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/home" component={TopBar} />
          <Route exact path="/signup" component={Footer} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
