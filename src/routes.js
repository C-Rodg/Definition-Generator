import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './components/App';
import FirstPage from './components/FirstPage';

export default(
    <Route path="/" component={App}>
        <IndexRedirect to="firstPage" />
        <Route path="firstPage" component={FirstPage} />
    </Route>
);