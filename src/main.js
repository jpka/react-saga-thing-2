'use strict';
import "babel-polyfill";

import React, { Component } from 'react'
import { render } from 'react-dom';
import Gallery from './components/Gallery'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'

import { loadImages,  watchForLoadImages} from './sagas'

const store = createStore(
  reducer,
  applyMiddleware(createSagaMiddleware(watchForLoadImages))
)

render(
  <Provider store={store}>
    <Gallery />
  </Provider>,
document.getElementById('app-root'));
