import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import registerServiceWorker from './utils/registerServiceWorker';

import configureStore from './store'

import Page from './containers/Page/';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>, document.getElementById('root'));

registerServiceWorker();
