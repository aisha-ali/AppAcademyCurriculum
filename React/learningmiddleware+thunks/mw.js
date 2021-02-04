// store/store.js

import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import logger from 'redux-logger';

let configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(logger)
  )
);

export default configureStore;

// function signature

const middleware = store => next => action => {
  // side effects, if any
  return next(action);
};

const middleware = store => next => action => {
  const result = next(action);
  // side effect using `result`
  return result;
};

// logger example

const logger = store => next => action => {

  console.log('Action received:', action);
  console.log('State pre-dispatch:', store.getState());

  let result = next(action);

  console.log('State post-dispatch:', store.getState());

  return result;
};


// store/store.js

import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

let configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
