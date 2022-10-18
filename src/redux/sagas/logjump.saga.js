import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGOUT" actions
function* addLog(action) {
  try {
    yield axios.post('/api/logbook', action.payload);
    yield put({ type: 'SET_LOG' });
  } catch (error) {
    console.log('Error POSTING log:', error);
  }
}

function* logSaga() {
  yield takeEvery('ADD_LOG', addLog);
}

export default logSaga;
