import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TestComponent from '../TestComponent';

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/test" component={TestComponent} />
            </Switch>
        </Router>
    );
};

export default Routes;