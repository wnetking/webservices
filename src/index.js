import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Page from './containers/Page/';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
