import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Backlog from '../components/ScrumDashboard/Backlog';
import SprintPlanning from '../components/ScrumDashboard/SprintPlanning';
import DailyStandups from '../components/ScrumDashboard/DailyStandups';
import Retrospectives from '../components/ScrumDashboard/Retrospectives';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/backlog" component={Backlog} />
                <Route path="/sprint-planning" component={SprintPlanning} />
                <Route path="/daily-standups" component={DailyStandups} />
                <Route path="/retrospectives" component={Retrospectives} />
            </Switch>
        </Router>
    );
};

export default Routes;