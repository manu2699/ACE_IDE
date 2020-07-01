import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Ide from "./components/ide";
import Design from "./components/design";

const App = () => (

  <Router>
    <Switch>
      <Route exact path="/" component={Ide} />
      <Route exact path="/design" component={Design} />
    </Switch>
  </Router>

);
export default App;
