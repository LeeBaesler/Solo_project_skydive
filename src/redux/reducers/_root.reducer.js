import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import logbook from './logbook.reducer';
import jumpHistory from './jumpHistory.reducer';
import videos from './videos.reducer';
import photos from './photos.reducer';
import contentHistory from './contentHistory.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  logbook, //logbook reducer
  jumpHistory, //jumpHistory Details page
  videos, // video reducer
  photos, // photo reducer
  contentHistory, //contentHistory Details page
});

export default rootReducer;
