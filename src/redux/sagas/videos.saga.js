import { put, take, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllVideos(){
    try {
        const videos=yield axios.get('/api/videos');
        console.log('GET content', videos.data);
        yield put ({ type: 'FETCH_VIDEOS',
                        payload: videos.data})
    }catch{
        console.log("GET VIDEOS saga error")
    }
}

function* addVideos(action) {
    try{
        yield axios.post('/api/videos', action.payload);
        yield put ({ type: 'SET_VIDEOS'});
    } catch (error) {
        console.log('Error POSTING VIDEO saga')
    }
}

function* editVideos(action){
    try{
        yield axios.put(`/api/videos/${action.payload.videosid}`, action.payload);
        yield put ({type: 'GET_VIDEOS', payload: action.payload.videosid})
    }catch(error){
        console.log("Error in PUT EDIT VIDEO saga", error);
    }
}

function* deleteVideos(action){
    try{
        yield axios.delete(`/api/videos/${action.payload.videosid}`, action.payload);
        yield put ({type: 'GET_VIDEOS', payload: action.payload.videosid});
    }catch(error){
        console.log("error in DELETE VIDEOS saga", error)
    }
}

function* videosSaga(){
    yield takeEvery('GET_VIDEOS', fetchAllVideos);
    yield takeEvery('ADD_VIDEOS', addVideos);
    yield takeEvery('EDIT_VIDEOS',editVideos);
    yield takeEvery('DELETE_VIDEOS', deleteVideos);
}

export default videosSaga;