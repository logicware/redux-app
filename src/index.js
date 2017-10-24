import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import store from './store';

import App from './App';
import './index.css';

const state = store.getState();

ReactDOM.render(
  <App {...state} />,
  document.getElementById('root')
);


registerServiceWorker();
