const contentHistoryReducer = (state = {}, action) => {
  // Manages what book we want to load into the BookDetails page.
  if (action.type === 'SET_CONTENT_DETAILS') {
    // action.payload will just be WHATEVER BOOK we want to
    // show in the details view.
    return action.payload
  } else if (action.type === 'CLEAR_CONTENT_DETAILS') {
    return {} // clears the state back to an empty object
  }
  return state;
}

export default contentHistoryReducer