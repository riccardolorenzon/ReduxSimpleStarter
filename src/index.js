import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserhistory } from 'react-router';

import App from './components/app';
import Resources from './components/resources';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserhistory}>
      <Route path="/" component={App} />
      <Route path="resources" component={Resources} />
    </ Router>
  </Provider>
  , document.querySelector('.container'));
