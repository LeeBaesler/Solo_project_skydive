const videosReducer = (state = [], action) => {
    switch (action.type) {
        case 'FECTH_VIDEOS':
            return action.payload;
        default:
            return state;
    }
}

export default videosReducer;