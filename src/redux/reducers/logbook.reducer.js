const logbookReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LOG':
            return action.payload;
        default:
                return state;
    }
}

export default logbookReducer;