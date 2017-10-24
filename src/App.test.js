import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


const state = {
  todos: [
    {id: 1, name: 'Render static UI', isComplete: true},
    {id: 2, name: 'Create initial state', isComplete: true},
    {id: 3, name: 'Render based on state', isComplete: true}
  ]
};

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App todos={state.todos} />, div);
});
