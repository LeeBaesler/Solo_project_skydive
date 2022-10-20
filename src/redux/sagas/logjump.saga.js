import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* fetchAllLogs(){
  try {
    const logbook=yield axios.get('/api/logbook');
    console.log('GET logs', logbook.data);
    yield put ({type: 'FETCH_LOG',
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

function* editLogbook(action){
  try {
    yield axios.put(`/api/logbook/${action.payload.logbookid}`, action.payload);
    yield put ({type: 'GET_LOG', payload: action.payload.logbookid});
  }catch(error){
    console.log("Error in PUT EDIT LOGBOOK", error);
  }
}

function* deleteLogbook(action){
  try {
    yield axios.delete(`/api/logbook/${action.payload.logbookid}`, action.payload);
    yield put ({type: 'FETCH_LOG', payload: action.payload.logbookid});
  }catch(error){
    console.log("error in DELETE logbook", error)
  }
}


function* logSaga() {
  yield takeEvery('ADD_LOG', addLog);
  yield takeEvery('GET_LOG', fetchAllLogs);
  yield takeEvery('EDIT_LOG', editLogbook);
  yield takeEvery('DELETE_LOG', deleteLogbook);
}

export default logSaga;
