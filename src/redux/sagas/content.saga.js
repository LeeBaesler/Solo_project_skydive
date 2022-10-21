import { put, take, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllContent(){
    try {
        const content=yield axios.get('/api/content');
        console.log('GET content', content.data);
        yield put ({ type: 'FETCH_CONTENT',
                        payload: content.data})
    }catch{
        console.log("GET content error")
    }
}

function* addContent(action) {
    try{
        yield axios.post('/api/content', action.payload);
        yield put ({ type: 'SET_CONTENT'});
    } catch (error) {
        console.log('Error POSTING content')
    }
}

function* editContent(action){
    try{
        yield axios.put(`/api/content/${action.payload.contentid}`, action.payload);
        yield put ({type: 'GET_CONTENT', payload: action.payload.contentid})
    }catch(error){
        console.log("Error in PUT EDIT CONTENT", error);
    }
}

function* deleteContent(action){
    try{
        yield axios.delete(`/api/content/${action.payload.contentid}`, action.payload);
        yield put ({type: 'GET_CONTENT', payload: action.payload.contentid});
    }catch(error){
        console.log("error in DELETE content", error)
    }
}

function* contentSaga(){
    yield takeEvery('GET_CONTENT', fetchAllContent);
    yield takeEvery('ADD_CONTENT', addContent);
    yield takeEvery('EDIT_CONTENT',editContent);
    yield takeEvery('DELETE_CONTENT', deleteContent);
}

export default contentSaga;