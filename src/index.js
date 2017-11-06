import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';

import registerServiceWorker from './registerServiceWorker';

import store from './store';
import {updateCurrentAction} from "./reducers/todo";

import App from './App';
import './index.css';

const actions = bindActionCreators({updateCurrentAction}, store.dispatch);

const render = () => {
  const state = store.getState();
  ReactDOM.render(
    <App todos={state.todos}
         currentTodo={state.currentTodo}
         changeCurrent={actions.updateCurrentAction}
    />,
    document.getElementById('root')
  );
};

render();

store.subscribe(render);


registerServiceWorker();
