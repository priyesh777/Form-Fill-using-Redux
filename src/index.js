import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import './index.css';
import thunk from 'redux-thunk';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'https://5e9c847e0fd0b50016f74689.mockapi.io'

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

