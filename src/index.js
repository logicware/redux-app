import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import store from './store';

import App from './App';
import './index.css';

const todoChangeHandler = (val) => {
  store.dispatch({ type: 'CURRENT_UPDATE', payload: val });
};

const render = () => {
  const state = store.getState();
  ReactDOM.render(
    <App todos={state.todos}
         currentTodo={state.currentTodo}
         changeCurrent={todoChangeHandler}
    />,
    document.getElementById('root')
  );
};

render();

store.subscribe(render);


registerServiceWorker();
