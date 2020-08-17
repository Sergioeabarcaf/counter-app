import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#root');

ReactDOM.render(
  <React.StrictMode>
    <CounterApp value={123} />
  </React.StrictMode>,
  divRoot
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
