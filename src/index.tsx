import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './_store';
import reportWebVitals from './reportWebVitals';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
