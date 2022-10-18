import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import App from './components/App/App';

function* rootSaga(){
  yield takeEvery("ADD_LOG", addLog);
}

function* addLog (action) {
  try {
    yield axios.post('/api/logbook', action.payload);
    yield put ({type: "FETCH_LOG" });
  }catch (error) {
    console.log('Error POSTING log', error)
  }
}

const sagaMiddleware = createSagaMiddleware();

const logbookReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_LOG':
      return action.payload
    default:
      return state;
  }
}

const storeInstance = createStore(
  combineReducers({
    logbookReducer,
  }),
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
