import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';

export default(
    <Route path="/" component={App}>
        <IndexRedirect to="home" />
        <Route path="home" component={HomePage} />
    </Route>
);