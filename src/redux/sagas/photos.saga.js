import { put, take, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllPhotos(){
    try {
        const photos = yield axios.get('/api/photos');
        console.log('GET photos', photos.data);
        yield put ({ type: 'FETCH_PHOTOS',
                        payload: photos.data})
    }catch{
        console.log("GET PHOTOS saga error")
    }
}

function* addPhotos(action) {
    try{
        yield axios.post('/api/photos', action.payload);
        yield put ({ type: 'SET_PHOTOS'});
    } catch (error) {
        console.log('Error POSTING PHOTOS saga')
    }
}

function* editPhotos(action){
    try{
        yield axios.put(`/api/photos/${action.payload.photosid}`, action.payload);
        yield put ({type: 'GET_PHOTOS', payload: action.payload.photosid})
    }catch(error){
        console.log("Error in PUT EDIT PHOTOS saga", error);
    }
}

function* deletePhotos(action){
    try{
        yield axios.delete(`/api/photos/${action.payload.photosid}`, action.payload);
        yield put ({type: 'GET_PHOTOS', payload: action.payload.photosid});
    }catch(error){
        console.log("error in DELETE PHOTOS saga", error)
    }
}

function* photosSaga(){
    yield takeEvery('GET_PHOTOS', fetchAllPhotos);
    yield takeEvery('ADD_PHOTOS', addPhotos);
    yield takeEvery('EDIT_PHOTOS',editPhotos);
    yield takeEvery('DELETE_PHOTOS', deletePhotos);
}

export default photosSaga;