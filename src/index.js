import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './App';
import './index.css';

const state = {
  todos: [
    {id: 1, name: 'Render static UI', isComplete: true},
    {id: 2, name: 'Create initial state', isComplete: true},
    {id: 3, name: 'Render based on state', isComplete: true}
  ]
};
ReactDOM.render(
  <App todos={state.todos} />,
  document.getElementById('root')
);


registerServiceWorker();
