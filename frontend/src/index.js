import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';
import App from './App';

//import registerServiceWorker from './registerServiceWorker';
var Foundation = require('foundation-sites/dist/js/foundation');
ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
