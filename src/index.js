import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {Provider} from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import store from './store';
import {updateCurrentAction} from "./reducers/todo";

import App from './App';
import './index.css';

const actions = bindActionCreators({updateCurrentAction}, store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App changeCurrent={actions.updateCurrentAction}/>
  </Provider>,
  document.getElementById('root')
);



registerServiceWorker();
