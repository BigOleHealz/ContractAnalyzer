import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TestPage } from './index';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/test" component={TestPage} />
      {/* Add other routes here */}
    </Switch>
  </Router>
);

export default Routes;
