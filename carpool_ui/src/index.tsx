import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/style.scss'
import './index.css';
import { Router } from 'react-router-dom';
import history from './history';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import { App } from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

