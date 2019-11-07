import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

/* var DummyState = {
  videos: exampleVideoData,
  currentVideo: exampleVideoData[0]
}

configureStore(DummyState) {} */

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const configureStore = function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
};

const store = configureStore({
  videoList: exampleVideoData,
  currentVideo: exampleVideoData[0]
});

export default store;