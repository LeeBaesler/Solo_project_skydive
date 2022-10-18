import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* fetchAllLogs(){
  try {
    const logbook=yield axios.get('/api/logbook');
    console.log('GET logs', logbook.data);
    yield put ({type: 'SET_LOG',
                payload: logbook.data})
  }catch{
    console.log("GET logs error")
  }
}

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
  yield takeEvery('GET_LOG', fetchAllLogs);
}

export default logSaga;
