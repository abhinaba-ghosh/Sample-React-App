import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SamplePage from '../sample-page/sample-page-page';

export default (
    <Switch>
        <Route
            exact
            path="/"
            component = {SamplePage}
        />
    </Switch>
);
