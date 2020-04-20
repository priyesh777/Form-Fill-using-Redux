import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store";
// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import thunk from 'redux-thunk';

// const rootReducer = combineReducers({
//   form: formReducer,
// });

// const composeEnhancers =
//   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

// const middleware = [thunk];

// const enhancer = composeEnhancers(applyMiddleware(...middleware));

// const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
