import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './components/Root';
import configureStore from './store/configureStore';
import './styles/core.scss';

const store = configureStore(),
    history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Root store={store} history={history} />,
    document.getElementById('app-root')
);