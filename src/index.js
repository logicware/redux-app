import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import store from './store';

import App from './App';
import './index.css';

const render = () => {
  const state = store.getState();
  ReactDOM.render(
    <App {...state} />,
    document.getElementById('root')
  );
};

render();

store.subscribe(render);

setTimeout(()=> {
  console.info('Dispatching Event');
  store.dispatch({ type: 'TODO_ADD', payload: { id: 4, name: 'New Todo via Dispatch', isComplete: false } });
}, 2000);


registerServiceWorker();
