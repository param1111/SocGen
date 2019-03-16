import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as style from './util/index.css';
import * as serviceWorker from './util/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
